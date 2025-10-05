<script>
  export let selectedAsteroid = null;
  
  // Función para obtener etiquetas legibles de calidad
  function getQualityLabel(quality) {
    const labels = {
      'excellent': 'Excelente',
      'good': 'Buena',
      'fair': 'Regular', 
      'poor': 'Limitada'
    };
    return labels[quality] || 'Desconocida';
  }
</script>

{#if selectedAsteroid}
  <div class="asteroid-details">
    <h4>📋 Detalles del Asteroide</h4>
    <div class="detail-card">
      <h5>{selectedAsteroid.name}</h5>
      <div class="detail-grid">
        <div class="detail-item">
          <span class="label">Velocidad Orbital:</span>
          <span class="value">
            {selectedAsteroid.orbitalVelocity ? 
              `${selectedAsteroid.orbitalVelocity} km/s` : 
              'Calculando...'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Diámetro Aproximado:</span>
          <span class="value">
            {selectedAsteroid.approximateDiameter ? 
              `${selectedAsteroid.approximateDiameter} km` : 
              'Calculando...'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Fecha de Aproximación:</span>
          <span class="value">
            {selectedAsteroid.approachDate || 'Por determinar'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Composición:</span>
          <span class="value">
            {selectedAsteroid.composition || 'Analizando...'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Calidad de Datos:</span>
          <span class="value quality-{selectedAsteroid.dataQuality}">
            {getQualityLabel(selectedAsteroid.dataQuality)}
          </span>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="no-selection">
    <p>Selecciona un asteroide de la lista para ver sus detalles</p>
  </div>
{/if}

<style>
  .asteroid-details {
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 1rem;
  }
  
  .asteroid-details h4 {
    margin: 0 0 1rem 0;
    color: #4caf50;
    font-size: 1.2rem;
    text-align: center;
  }
  
  .detail-card {
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 1rem;
  }
  
  .detail-card h5 {
    margin: 0 0 1rem 0;
    color: #fff;
    font-size: 1.1rem;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 0.5rem;
  }
  
  .detail-grid {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }
  
  .detail-item .label {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
  }
  
  .detail-item .value {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: right;
  }
  
  /* Estilos para calidad de datos */
  .value.quality-excellent {
    color: #4caf50;
  }
  
  .value.quality-good {
    color: #8bc34a;
  }
  
  .value.quality-fair {
    color: #ffc107;
  }
  
  .value.quality-poor {
    color: #ff9800;
  }
  
  .hazard-alert {
    background: rgba(244, 67, 54, 0.2);
    color: #f44336;
    padding: 0.8rem;
    border-radius: 5px;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid rgba(244, 67, 54, 0.3);
    margin-top: 0.5rem;
  }
  
  .no-selection {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: rgba(255,255,255,0.6);
    text-align: center;
    font-style: italic;
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 2rem;
  }
</style>
