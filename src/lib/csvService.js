/**
 * Servicio genérico para procesar archivos CSV
 * Proporciona funciones utilitarias para cargar y parsear archivos CSV
 */

/**
 * Obtiene la URL correcta para un archivo en la carpeta public
 * Maneja automáticamente las diferencias entre desarrollo y producción
 * @param {string} fileName - Nombre del archivo (ej: 'data.csv')
 * @returns {string} URL completa del archivo
 */
export function getPublicFileUrl(fileName) {
  // En desarrollo, Vite sirve desde la raíz
  // En producción (GitHub Pages), necesitamos el base path
  const isDevelopment = import.meta.env.DEV;
  const basePath = isDevelopment ? '' : import.meta.env.BASE_URL || '/meteor-madness/';
  return `${basePath}${fileName}`;
}

/**
 * Parsea texto CSV y retorna un array de objetos
 * Maneja comillas y campos con comas correctamente
 * @param {string} csvText - Texto del archivo CSV
 * @returns {Array<Object>} Array de objetos donde cada objeto representa una fila
 */
export function parseCSVText(csvText) {
  if (!csvText || typeof csvText !== 'string') {
    throw new Error('El texto CSV debe ser una cadena válida');
  }

  const lines = csvText.trim().split('\n');
  
  if (lines.length < 2) {
    throw new Error('El archivo CSV debe tener al menos una fila de encabezados y una fila de datos');
  }

  // Extraer encabezados (primera fila)
  const headers = parseCSVLine(lines[0]);

  // Procesar cada fila de datos
  return lines.slice(1).map((line, index) => {
    try {
      const values = parseCSVLine(line);
      
      // Crear objeto con los datos de la fila
      const rowObject = {};
      headers.forEach((header, headerIndex) => {
        const value = values[headerIndex] || '';
        rowObject[header] = value;
      });
      
      return rowObject;
    } catch (error) {
      console.warn(`Error parseando fila ${index + 2}: ${error.message}`);
      return null;
    }
  }).filter(row => row !== null); // Filtrar filas que no se pudieron parsear
}

/**
 * Parsea una línea CSV individual manejando comillas y escapes
 * @param {string} line - Línea del CSV
 * @returns {Array<string>} Array de valores de la línea
 */
export function parseCSVLine(line) {
  const values = [];
  let currentValue = '';
  let insideQuotes = false;
  let i = 0;

  while (i < line.length) {
    const char = line[i];

    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        // Comillas dobles dentro de un campo = comilla literal
        currentValue += '"';
        i += 2; // Saltar ambas comillas
      } else {
        // Cambiar estado de comillas
        insideQuotes = !insideQuotes;
        i++;
      }
    } else if (char === ',' && !insideQuotes) {
      // Fin de campo
      values.push(currentValue.trim());
      currentValue = '';
      i++;
    } else {
      currentValue += char;
      i++;
    }
  }

  // Agregar el último valor
  values.push(currentValue.trim());

  // Limpiar comillas de los valores si están completamente entrecomillados
  return values.map(value => {
    const trimmed = value.trim();
    if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
      return trimmed.slice(1, -1);
    }
    return trimmed;
  });
}

/**
 * Carga un archivo CSV desde una URL
 * @param {string} url - URL del archivo CSV
 * @returns {Promise<Array<Object>>} Array de objetos parseados del CSV
 */
export async function loadCSVFromUrl(url) {
  try {
    console.log(`Cargando CSV desde: ${url}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - URL: ${url}`);
    }

    const csvText = await response.text();
    return parseCSVText(csvText);

  } catch (error) {
    console.error(`Error cargando CSV desde ${url}:`, error);
    throw error;
  }
}

/**
 * Carga un archivo CSV desde la carpeta public con múltiples intentos
 * @param {string} fileName - Nombre del archivo (ej: 'data.csv')
 * @param {Array<string>} alternativeUrls - URLs alternativas para intentar si la principal falla
 * @returns {Promise<Array<Object>>} Array de objetos parseados del CSV
 */
export async function loadCSVFromPublic(fileName, alternativeUrls = []) {
  // Intentar con la URL principal
  try {
    const mainUrl = getPublicFileUrl(fileName);
    return await loadCSVFromUrl(mainUrl);
  } catch (mainError) {
    console.warn(`Falló carga principal:`, mainError.message);
    
    // Intentar con URLs alternativas
    const defaultAlternatives = [
      `./${fileName}`,
      `../../../public/${fileName}`,
      `/public/${fileName}`
    ];
    
    const urlsToTry = [...alternativeUrls, ...defaultAlternatives];
    
    for (const url of urlsToTry) {
      try {
        console.log(`Probando URL alternativa: ${url}`);
        return await loadCSVFromUrl(url);
      } catch (error) {
        console.log(`Falló URL alternativa ${url}:`, error.message);
      }
    }
    
    // Si todas las URLs fallaron, lanzar el error original
    throw new Error(`No se pudo cargar ${fileName}. Error principal: ${mainError.message}`);
  }
}

/**
 * Función de conveniencia para cargar y procesar un CSV completo
 * @param {string} fileName - Nombre del archivo CSV
 * @param {Object} options - Opciones de carga
 * @param {Array<string>} options.alternativeUrls - URLs alternativas
 * @param {boolean} options.logProgress - Si mostrar progreso en consola
 * @returns {Promise<{data: Array<Object>, headers: Array<string>, count: number}>}
 */
export async function loadCSV(fileName, options = {}) {
  const { alternativeUrls = [], logProgress = true } = options;
  
  try {
    if (logProgress) console.log(`Iniciando carga de ${fileName}...`);
    
    const data = await loadCSVFromPublic(fileName, alternativeUrls);
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    
    if (logProgress) {
      console.log(`✅ CSV cargado exitosamente:`);
      console.log(`   - Archivo: ${fileName}`);
      console.log(`   - Filas: ${data.length}`);
      console.log(`   - Columnas: ${headers.length}`);
      console.log(`   - Headers: ${headers.slice(0, 5).join(', ')}${headers.length > 5 ? '...' : ''}`);
    }
    
    return {
      data,
      headers,
      count: data.length
    };
    
  } catch (error) {
    if (logProgress) {
      console.error(`❌ Error cargando ${fileName}:`, error.message);
    }
    throw error;
  }
}