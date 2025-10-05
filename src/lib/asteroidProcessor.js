/**
 * Servicio para procesar datos de asteroides
 * Métodos estáticos para convertir datos crudos del CSV a formato de la aplicación
 */

/**
 * Procesa datos crudos de asteroides del CSV y los convierte al formato de la aplicación
 * @param {Array} csvData - Array de objetos con datos crudos del CSV
 * @returns {Array} Array de asteroides procesados para la aplicación
 */
export function processAsteroids(csvData) {
  if (!Array.isArray(csvData)) {
    throw new Error('Los datos deben ser un array');
  }

  return csvData.map((rawAsteroid, index) => {
    try {
      return processAsteroidData(rawAsteroid, index);
    } catch (error) {
      console.warn(`Error procesando asteroide en posición ${index}:`, error.message);
      return null;
    }
  }).filter(asteroid => asteroid !== null);
}

/**
 * Procesa un solo asteroide del CSV
 * @param {Object} rawData - Datos crudos del asteroide del CSV
 * @param {number} index - Índice del asteroide en el array original
 * @returns {Object} Objeto del asteroide procesado
 */
function processAsteroidData(rawData, index = 0) {
  if (!rawData || typeof rawData !== 'object') {
    throw new Error('Los datos del asteroide deben ser un objeto válido');
  }

  // Extraer y limpiar el nombre
  const name = extractCleanName(rawData.full_name);
  
  // Crear el objeto del asteroide con la estructura requerida
  return {
    // Identificación básica
    id: generateAsteroidId(rawData, index),
    name: name,
    
    // Campos que se calcularán después (por ahora null)
    orbitalVelocity: null,      // km/s - Velocidad orbital
    approximateDiameter: null,  // km - Diámetro aproximado
    approachDate: null,         // string - Fecha de aproximación
    composition: null,          // string - Composición del asteroide
    
    // Datos orbitales originales para futuros cálculos
    orbitalData: {
      a: parseFloatSafe(rawData.a),     // Semi-major axis (AU)
      e: parseFloatSafe(rawData.e),     // Eccentricity
      i: parseFloatSafe(rawData.i),     // Inclination (degrees)
      om: parseFloatSafe(rawData.om),   // Longitude of ascending node (degrees)
      w: parseFloatSafe(rawData.w),     // Argument of perihelion (degrees)
      q: parseFloatSafe(rawData.q),     // Perihelion distance (AU)
      ad: parseFloatSafe(rawData.ad),   // Aphelion distance (AU)
      per_y: parseFloatSafe(rawData.per_y), // Orbital period (years)
      H: parseFloatSafe(rawData.H)      // Absolute magnitude
    },
    
    // Metadatos
    dataQuality: assessDataQuality(rawData),
    rawData: rawData // Mantener datos originales por si acaso
  };
}

/**
 * Extrae y limpia el nombre del asteroide
 * @param {string} fullName - Nombre completo del asteroide del CSV
 * @returns {string} Nombre limpio del asteroide
 */
function extractCleanName(fullName) {
  if (!fullName || typeof fullName !== 'string') {
    return 'Asteroide Desconocido';
  }

  // Remover comillas y limpiar espacios
  let cleanName = fullName.replace(/"/g, '').trim();
  
  // Si hay paréntesis, tomar solo la parte antes de ellos
  const parenIndex = cleanName.indexOf('(');
  if (parenIndex > 0) {
    cleanName = cleanName.substring(0, parenIndex).trim();
  }
  
  // Remover números iniciales y espacios extra
  cleanName = cleanName.replace(/^\s*\d+\s+/, '').trim();
  
  return cleanName || 'Asteroide Sin Nombre';
}

/**
 * Genera un ID único para el asteroide
 * @param {Object} rawData - Datos crudos del asteroide
 * @param {number} index - Índice del asteroide
 * @returns {string} ID único
 */
function generateAsteroidId(rawData, index) {
  const name = rawData.full_name || '';
  
  // Crear un hash simple del nombre
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convertir a 32-bit integer
  }
  
  // Combinar hash con índice para garantizar unicidad
  return `ast_${Math.abs(hash).toString(16)}_${index}`;
}

/**
 * Parsea un número de forma segura
 * @param {any} value - Valor a parsear
 * @returns {number|null} Número parseado o null si no es válido
 */
function parseFloatSafe(value) {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Evalúa la calidad de los datos del asteroide
 * @param {Object} rawData - Datos crudos del asteroide
 * @returns {string} Nivel de calidad ('excellent', 'good', 'fair', 'poor')
 */
function assessDataQuality(rawData) {
  const conditionCode = parseInt(rawData.condition_code) || 9;
  const observationsUsed = parseInt(rawData.n_obs_used) || 0;
  const dataArc = parseInt(rawData.data_arc) || 0;
  
  // Criterios de calidad basados en estándares astronómicos
  if (conditionCode <= 2 && observationsUsed >= 100 && dataArc >= 30) {
    return 'excellent';
  } else if (conditionCode <= 4 && observationsUsed >= 50 && dataArc >= 10) {
    return 'good';
  } else if (conditionCode <= 6 && observationsUsed >= 10 && dataArc >= 1) {
    return 'fair';
  } else {
    return 'poor';
  }
}

/**
 * Filtra asteroides por calidad de datos
 * @param {Array} asteroids - Array de asteroides procesados
 * @param {string} minQuality - Calidad mínima requerida
 * @returns {Array} Array filtrado de asteroides
 */
export function filterByQuality(asteroids, minQuality = 'fair') {
  const qualityLevels = ['poor', 'fair', 'good', 'excellent'];
  const minIndex = qualityLevels.indexOf(minQuality);
  
  if (minIndex === -1) {
    console.warn(`Nivel de calidad "${minQuality}" no reconocido. Usando 'fair'.`);
    return asteroids;
  }
  
  return asteroids.filter(asteroid => {
    const asteroidQualityIndex = qualityLevels.indexOf(asteroid.dataQuality);
    return asteroidQualityIndex >= minIndex;
  });
}

/**
 * Obtiene estadísticas de los asteroides procesados
 * @param {Array} asteroids - Array de asteroides procesados
 * @returns {Object} Objeto con estadísticas
 */
export function getAsteroidsStats(asteroids) {
  if (!Array.isArray(asteroids)) {
    return { total: 0, qualityDistribution: {} };
  }
  
  const qualityStats = { excellent: 0, good: 0, fair: 0, poor: 0 };
  let totalWithOrbitalData = 0;
  
  asteroids.forEach(asteroid => {
    // Contar por calidad
    const quality = asteroid.dataQuality || 'poor';
    qualityStats[quality] = (qualityStats[quality] || 0) + 1;
    
    // Contar los que tienen datos orbitales completos
    if (asteroid.orbitalData.a !== null && asteroid.orbitalData.e !== null) {
      totalWithOrbitalData++;
    }
  });
  
  return {
    total: asteroids.length,
    qualityDistribution: qualityStats,
    withCompleteOrbitalData: totalWithOrbitalData,
    completenessPercentage: asteroids.length > 0 ? 
      Math.round((totalWithOrbitalData / asteroids.length) * 100) : 0
  };
}