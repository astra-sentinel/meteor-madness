<script>
  export let selectedAsteroid = null;
  
  // Función para obtener etiquetas legibles de calidad
  function getQualityLabel(quality) {
    const labels = {
      'excellent': 'Excellent',
      'good': 'Good',
      'fair': 'Fair', 
      'poor': 'Limited'
    };
    return labels[quality] || 'Unknown';
  }
</script>

{#if selectedAsteroid}
  <div class="asteroid-details">
    <h4>📋 Asteroid Details</h4>
    <div class="detail-card">
      <h5>{selectedAsteroid.name}</h5>
      
      {#if selectedAsteroid.simulationData?.isHazardous}
        <div class="hazard-alert">
          ⚠️ Potentially Hazardous Object (PHO)
        </div>
      {/if}
      <div class="detail-grid">
        <div class="detail-item">
          <span class="label">Orbital Velocity:</span>
          <span class="value">
            {selectedAsteroid.orbitalVelocity ? 
              `${selectedAsteroid.orbitalVelocity} km/s` : 
              'Calculating...'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Approximate Diameter:</span>
          <span class="value">
            {selectedAsteroid.approximateDiameter ? 
              `${selectedAsteroid.approximateDiameter} km` : 
              'Calculating...'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Approach Date:</span>
          <span class="value">
            {selectedAsteroid.approachDate || 'To be determined'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Composition:</span>
          <span class="value">
            {selectedAsteroid.composition || 'Analyzing...'}
          </span>
        </div>
        <div class="detail-item">
          <span class="label">Data Quality:</span>
          <span class="value quality-{selectedAsteroid.dataQuality}">
            {getQualityLabel(selectedAsteroid.dataQuality)}
            {#if selectedAsteroid.dataQualityDetails}
              <span class="quality-score">({selectedAsteroid.dataQualityDetails.score}/100)</span>
            {/if}
          </span>
        </div>
        
        {#if selectedAsteroid.dataQualityDetails && selectedAsteroid.dataQualityDetails.metrics}
          <div class="detail-section">
            <h6>📊 Data Metrics</h6>
            <div class="metrics-grid">
              <div class="metric-item">
                <span class="metric-label">Observations:</span>
                <span class="metric-value">{selectedAsteroid.dataQualityDetails.metrics.observations}</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Data Arc:</span>
                <span class="metric-value">{Math.round(selectedAsteroid.dataQualityDetails.metrics.dataArcDays / 365 * 10) / 10} years</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Condition Code:</span>
                <span class="metric-value">{selectedAsteroid.dataQualityDetails.metrics.conditionCode}</span>
              </div>
              {#if selectedAsteroid.dataQualityDetails.metrics.radarObservations > 0}
                <div class="metric-item">
                  <span class="metric-label">Radar Obs:</span>
                  <span class="metric-value">{selectedAsteroid.dataQualityDetails.metrics.radarObservations}</span>
                </div>
              {/if}
            </div>
          </div>
        {/if}
        
        {#if selectedAsteroid.orbitalData}
          <div class="detail-section">
            <h6>🛰️ Orbital Parameters</h6>
            <div class="orbital-grid">
              <div class="orbital-item">
                <span class="metric-label">Semi-major Axis:</span>
                <span class="metric-value">
                  {selectedAsteroid.orbitalData.a ? selectedAsteroid.orbitalData.a.toFixed(3) + ' AU' : 'N/A'}
                </span>
              </div>
              <div class="orbital-item">
                <span class="metric-label">Eccentricity:</span>
                <span class="metric-value">
                  {selectedAsteroid.orbitalData.e ? selectedAsteroid.orbitalData.e.toFixed(4) : 'N/A'}
                </span>
              </div>
              <div class="orbital-item">
                <span class="metric-label">Inclination:</span>
                <span class="metric-value">
                  {selectedAsteroid.orbitalData.i ? selectedAsteroid.orbitalData.i.toFixed(2) + '°' : 'N/A'}
                </span>
              </div>
              <div class="orbital-item">
                <span class="metric-label">Orbital Period:</span>
                <span class="metric-value">
                  {selectedAsteroid.orbitalData.per_y ? selectedAsteroid.orbitalData.per_y.toFixed(2) + ' years' : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <div class="no-selection">
    <p>Select an asteroid from the list to view its details</p>
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
    color: #f44336;
  }
  
  .quality-score {
    font-size: 0.8em;
    opacity: 0.8;
    margin-left: 0.5rem;
  }
  
  .detail-section {
    margin-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 1rem;
  }
  
  .detail-section h6 {
    margin: 0 0 0.8rem 0;
    color: #81c784;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .metrics-grid, .orbital-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }
  
  .metric-item, .orbital-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.4rem;
    background: rgba(255,255,255,0.05);
    border-radius: 4px;
  }
  
  .metric-label {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.6);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .metric-value {
    font-size: 0.9rem;
    color: #fff;
    font-weight: 500;
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
  
  @media (max-width: 640px) {
    .metrics-grid, .orbital-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
