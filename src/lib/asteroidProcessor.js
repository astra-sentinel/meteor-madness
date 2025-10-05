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
  
  // Extraer elementos orbitales
  const orbitalElements = {
    a: parseFloatSafe(rawData.a),     // Semi-major axis (AU)
    e: parseFloatSafe(rawData.e),     // Eccentricity
    i: parseFloatSafe(rawData.i),     // Inclination (degrees)
    om: parseFloatSafe(rawData.om),   // Longitude of ascending node (degrees)
    w: parseFloatSafe(rawData.w),     // Argument of perihelion (degrees)
    q: parseFloatSafe(rawData.q),     // Perihelion distance (AU)
    ad: parseFloatSafe(rawData.ad),   // Aphelion distance (AU)
    per_y: parseFloatSafe(rawData.per_y), // Orbital period (years)
    H: parseFloatSafe(rawData.H)      // Absolute magnitude
  };

  // Calcular propiedades para Three.js
  const threeJsData = calculateThreeJsProperties(orbitalElements, rawData);

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
    orbitalData: orbitalElements,
    
    // Datos específicos para simulación Three.js
    simulationData: {
      // Parámetros visuales calculados
      orbitalRadius: threeJsData.orbitalRadius,       // Distancia orbital para visualización (AU)
      orbitalSpeed: threeJsData.orbitalSpeed,         // Velocidad angular para animación
      asteroidSize: threeJsData.asteroidSize,         // Tamaño del asteroide para renderizado
      orbitInclination: threeJsData.orbitInclination, // Inclinación orbital (radianes)
      eccentricity: threeJsData.eccentricity,         // Excentricidad para órbita elíptica
      
      // Propiedades de apariencia
      isHazardous: threeJsData.isHazardous,           // Si es potencialmente peligroso
      colorHue: threeJsData.colorHue,                 // Tono de color para el asteroide
      brightness: threeJsData.brightness,             // Brillo basado en magnitud H
      
      // Parámetros de órbita para cálculos precisos
      semiMajorAxis: orbitalElements.a,               // Eje semi-mayor (AU)
      eccentricityValue: orbitalElements.e,           // Excentricidad numérica
      inclination: orbitalElements.i,                 // Inclinación (grados)
      longitudeAscendingNode: orbitalElements.om,     // Longitud nodo ascendente (grados)
      argumentPerihelion: orbitalElements.w,          // Argumento perihelio (grados)
      orbitalPeriod: orbitalElements.per_y,           // Período orbital (años)
      
      // Metadatos de calidad para simulación
      hasValidOrbit: threeJsData.hasValidOrbit,       // Si tiene datos orbitales válidos
      dataReliability: threeJsData.dataReliability    // Nivel de confiabilidad (0-1)
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
 * Calcula propiedades específicas para la simulación Three.js
 * @param {Object} orbitalElements - Elementos orbitales del asteroide
 * @param {Object} rawData - Datos crudos adicionales
 * @returns {Object} Propiedades calculadas para Three.js
 */
function calculateThreeJsProperties(orbitalElements, rawData) {
  // Valores por defecto seguros
  const defaultRadius = 2.5; // AU
  const defaultSpeed = 0.01;
  const defaultSize = 0.05;

  // Calcular radio orbital para visualización
  let orbitalRadius = defaultRadius;
  if (orbitalElements.a !== null && orbitalElements.a > 0) {
    // Usar semi-major axis, limitado para visualización
    orbitalRadius = Math.max(1.0, Math.min(8.0, orbitalElements.a));
  } else if (orbitalElements.q !== null && orbitalElements.q > 0) {
    // Usar perihelion como aproximación
    orbitalRadius = Math.max(1.0, Math.min(8.0, orbitalElements.q * 1.5));
  }

  // Calcular velocidad orbital (simplificada)
  let orbitalSpeed = defaultSpeed;
  if (orbitalElements.per_y !== null && orbitalElements.per_y > 0) {
    // Velocidad inversamente proporcional al período
    orbitalSpeed = Math.max(0.002, Math.min(0.05, 1.0 / orbitalElements.per_y));
  }

  // Calcular tamaño del asteroide basado en magnitud H
  let asteroidSize = defaultSize;
  if (orbitalElements.H !== null) {
    // Fórmula aproximada: diámetro ∝ 10^(-H/5)
    // H menor = asteroide más grande
    const magnitude = Math.max(10, Math.min(30, orbitalElements.H));
    asteroidSize = Math.max(0.02, Math.min(0.3, 0.5 * Math.pow(10, -(magnitude - 15) / 5)));
  }

  // Calcular inclinación orbital en radianes
  let orbitInclination = 0;
  if (orbitalElements.i !== null) {
    orbitInclination = (orbitalElements.i * Math.PI) / 180; // Convertir a radianes
  }

  // Determinar si es potencialmente peligroso
  let isHazardous = false;
  if (orbitalElements.q !== null && orbitalElements.H !== null) {
    // Criterio PHO: q < 1.3 AU y H < 22 (diámetro > ~140m)
    isHazardous = orbitalElements.q < 1.3 && orbitalElements.H < 22;
  }

  // Asignar color basado en peligrosidad y tipo
  let colorHue = 0.1; // Marrón por defecto
  if (isHazardous) {
    colorHue = 0.0; // Rojo para peligrosos
  } else if (orbitalElements.H !== null && orbitalElements.H < 18) {
    colorHue = 0.15; // Naranja para grandes
  }

  // Calcular brillo basado en magnitud H
  let brightness = 0.8;
  if (orbitalElements.H !== null) {
    // H menor = más brillante
    brightness = Math.max(0.3, Math.min(1.0, 1.0 - (orbitalElements.H - 10) / 20));
  }

  // Evaluar validez de la órbita
  const hasValidOrbit = 
    orbitalElements.a !== null && 
    orbitalElements.e !== null && 
    orbitalElements.a > 0 && 
    orbitalElements.e >= 0 && 
    orbitalElements.e < 1;

  // Calcular confiabilidad de datos (0-1)
  let dataReliability = 0.5;
  const conditionCode = parseInt(rawData.condition_code) || 9;
  const observationsUsed = parseInt(rawData.n_obs_used) || 0;
  
  if (conditionCode <= 2 && observationsUsed >= 100) {
    dataReliability = 0.95;
  } else if (conditionCode <= 4 && observationsUsed >= 50) {
    dataReliability = 0.8;
  } else if (conditionCode <= 6 && observationsUsed >= 10) {
    dataReliability = 0.6;
  } else {
    dataReliability = 0.3;
  }

  return {
    orbitalRadius,
    orbitalSpeed,
    asteroidSize,
    orbitInclination,
    eccentricity: orbitalElements.e || 0.1,
    isHazardous,
    colorHue,
    brightness,
    hasValidOrbit,
    dataReliability
  };
}

/**
 * Filtra asteroides por calidad de datos
 * @param {Array} asteroids - Array de asteroides procesados
 * @param {string} minQuality - Calidad mínima requerida
 * @returns {Array} Array filtrado de asteroides
 */
/**
 * Extrae datos de simulación preparados para Three.js desde un asteroide procesado
 * @param {Object} asteroid - Asteroide procesado
 * @returns {Object} Datos listos para usar en Three.js
 */
export function getThreeJsSimulationData(asteroid) {
  if (!asteroid || !asteroid.simulationData) {
    throw new Error('El asteroide debe tener datos de simulación válidos');
  }

  const sim = asteroid.simulationData;
  
  return {
    // Identificación
    id: asteroid.id,
    name: asteroid.name,
    
    // Parámetros de órbita para Three.js
    orbitalRadius: sim.orbitalRadius,
    orbitalSpeed: sim.orbitalSpeed,
    eccentricity: sim.eccentricityValue || 0.1,
    inclination: sim.orbitInclination,
    
    // Parámetros visuales
    size: sim.asteroidSize,
    color: {
      hue: sim.colorHue,
      brightness: sim.brightness,
      isHazardous: sim.isHazardous
    },
    
    // Elementos orbitales completos (para cálculos avanzados)
    orbitalElements: {
      semiMajorAxis: sim.semiMajorAxis,
      eccentricity: sim.eccentricityValue,
      inclination: sim.inclination, // en grados
      longitudeAscendingNode: sim.longitudeAscendingNode,
      argumentPerihelion: sim.argumentPerihelion,
      period: sim.orbitalPeriod
    },
    
    // Metadatos de calidad
    hasValidOrbit: sim.hasValidOrbit,
    dataReliability: sim.dataReliability,
    
    // Referencia al asteroide completo
    fullData: asteroid
  };
}

/**
 * Filtra asteroides por calidad de datos
 * @param {Array} asteroids - Array de asteroides procesados
 * @param {string} minQuality - Calidad mínima requerida
 * @returns {Array} Array filtrado de asteroides
 */
/**
 * Calcula la posición del asteroide en su órbita en un momento dado
 * @param {Object} asteroid - Asteroide procesado con datos de simulación
 * @param {number} time - Tiempo en segundos desde época
 * @returns {Object} Posición {x, y, z} en coordenadas AU
 */
export function calculateAsteroidPosition(asteroid, time = 0) {
  if (!asteroid.simulationData || !asteroid.simulationData.hasValidOrbit) {
    // Órbita circular por defecto
    const radius = asteroid.simulationData?.orbitalRadius || 2.5;
    const speed = asteroid.simulationData?.orbitalSpeed || 0.01;
    const angle = time * speed;
    
    return {
      x: Math.cos(angle) * radius,
      y: 0,
      z: Math.sin(angle) * radius
    };
  }

  const sim = asteroid.simulationData;
  const orb = asteroid.orbitalData;
  
  // Cálculo simplificado de posición orbital
  const meanMotion = 2 * Math.PI / (orb.per_y * 365.25 * 24 * 3600); // radianes por segundo
  const meanAnomaly = meanMotion * time;
  
  // Aproximación para anomalía excéntrica (primera iteración)
  const eccentricAnomaly = meanAnomaly + orb.e * Math.sin(meanAnomaly);
  
  // Coordenadas en el plano orbital
  const cosE = Math.cos(eccentricAnomaly);
  const sinE = Math.sin(eccentricAnomaly);
  const r = orb.a * (1 - orb.e * cosE);
  
  const x_orb = r * cosE - orb.a * orb.e;
  const y_orb = r * sinE * Math.sqrt(1 - orb.e * orb.e);
  
  // Rotaciones por elementos orbitales (simplificadas)
  const cos_i = Math.cos(sim.orbitInclination);
  const sin_i = Math.sin(sim.orbitInclination);
  
  return {
    x: x_orb,
    y: y_orb * cos_i,
    z: y_orb * sin_i
  };
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

