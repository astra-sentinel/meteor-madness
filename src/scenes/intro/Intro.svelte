<script>
  import { setScene, SCENES, userName, setUserName } from '../../lib/stores.js';
  
  let localName = '';
  let currentSection = 1;
  const totalSections = 7;
  
  // Function to get the background image for current section
  function getBackgroundImage(section) {
    const imageMap = {
      2: 'section2-Image_fx.jpg',
      3: 'section3-Image_fx.jpg', 
      4: 'section4-image_fx.jpg',
      5: 'section5-Image_fx.jpg',
      6: 'section6-Image_fx.jpg'
    };
    
    if (imageMap[section]) {
      return `url('${imageMap[section]}')`;
    }
    return 'none';
  }
  
  // Reactively update the store when the local name changes
  $: if (localName.trim()) {
    setUserName(localName.trim());
  }
  
  // Function to advance to the next section
  function nextSection() {
    // Validate that the name has been entered in the first section
    if (currentSection === 1 && !localName.trim()) {
      alert('Please enter your name before continuing');
      return;
    }
    
    if (currentSection < totalSections) {
      currentSection++;
    }
  }
  
  // Function to go back to the previous section
  function previousSection() {
    if (currentSection > 1) {
      currentSection--;
    }
  }

  function goToSimulator() {
    if (localName.trim()) {
      setUserName(localName.trim());
      setScene(SCENES.SIMULATOR);
    } else {
      alert('Please enter your name before continuing');
    }
  }
</script>

<section class="intro w-full">
  <div class="container" style="background-image: {getBackgroundImage(currentSection)}">
    <!-- Section 1: Welcome and name input -->
    {#if currentSection === 1}
      <img src="logotype.png" alt="Astra Sentinel Logo" class="logo">
      <p class="mb-4 text-center text-2xl">Before we begin, tell us what you'd like our command system to call you:</p>
      <div class="flex justify-center">
        <input 
          type="text" 
          placeholder="Your name" 
          bind:value={localName}
          class="p-3 text-center text-lg mx-auto border-2 border-white/30 rounded-xl bg-white/10 text-white my-4 min-w-[250px] backdrop-blur-md transition-all duration-300 placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg focus:shadow-orange-500/30"
        >
      </div>
    {/if}

    <!-- Section 2: Personal introduction and mission -->
    {#if currentSection === 2}
      <p class="mb-4 max-w-4xl">Welcome <strong class="text-orange-300">{localName}</strong>! You have been assigned to the AstraSentinel Orbital Operations Center, the leading corporation in planetary defense and space resource exploration.</p>
      <p class="mb-4 max-w-4xl">For decades, humanity looked to the sky with wonder. Today, we do so with determination. Our mission is clear: protect Earth from cosmic threats and turn what were once risks into opportunities.</p>
    {/if}

    <!-- Section 3: Space context -->
    {#if currentSection === 3}
      <p class="mb-4 max-w-4xl">Space is no longer a distant territory. It is the new global security front.</p>
      <p class="mb-4 max-w-4xl">Every year, thousands of objects cross the vicinity of our planet. Most are harmless... others could wipe out humanity in a matter of days.</p>
      <p class="mb-4 max-w-4xl">AstraSentinel was born to anticipate these events and respond with surgical precision, combining science, strategy, and cutting-edge orbital technology.</p>
    {/if}

    <!-- Section 4: User role -->
    {#if currentSection === 4}
      <p class="mb-4 max-w-4xl">You have been selected to begin your trial period, due to your analytical capacity and strategic vision.</p>
      <p class="mb-4 max-w-4xl">Starting today, you will be part of the Space Risk Monitoring, Mitigation and Economic Development Division.</p>
      <p class="mb-4 max-w-4xl">Your job: identify objects near Earth, evaluate their trajectory, and determine if they represent a threat... or a mining opportunity.</p>
    {/if}

    <!-- Section 5: Available tools -->
    {#if currentSection === 5}
      <p class="mb-4 max-w-4xl">To accomplish this task, you will have limited access to our orbital defense network:</p>
      <p class="mb-4 max-w-4xl"><strong class="text-orange-300">Sentinel Constellation:</strong> more than 160 surveillance satellites armed with deflection lasers strategically orbiting the planet.</p>
      <p class="mb-4 max-w-4xl"><strong class="text-orange-300">Ground Stations:</strong> high-power projectors capable of modifying trajectories from the surface.</p>
      <p class="mb-4 max-w-4xl"><strong class="text-orange-300">Strategic Intelligence Center:</strong> a multidisciplinary team including analysts, diplomats, engineers, strategists, and planetary scientists.</p>
    {/if}

    <!-- Section 6: Mission preparation -->
    {#if currentSection === 6}
      <p class="mb-4 max-w-4xl">In a few moments you will enter the orbital monitoring room.</p>
      <p class="mb-4 max-w-4xl">There you will have access to the dynamic map of the nearby solar system, where each detected object is a possible threat... or a valuable source of minerals.</p>
      <p class="mb-4 max-w-4xl">Choose your target wisely. Your decision will mark the course of our operation and the fate of our planet.</p>
    {/if}

    <!-- Section 7: Final call to action -->
    {#if currentSection === 7}
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">Ready to Begin?</h2>
      <p class="mb-4 leading-relaxed">The future of Earth is in your hands, <strong class="text-orange-300">{localName}</strong>.</p>
      <p class="mb-4 leading-relaxed">When you're ready… enter the Monitoring Center.</p>
    {/if}
  </div>

  <footer>
    <!-- Conditional navigation -->
    <div class="navigation-container">
      <!-- Back button: only visible if we are not in the first section -->
      <button 
        class="nav-btn back-btn"
        aria-label="Back"
        on:click={previousSection}
        disabled={currentSection === 1 || currentSection === totalSections}
      >
        <span class="mr-2">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
          </svg>
        </span>
        <span class="hidden md:inline">Back</span>
      </button>
  
      <button 
        class="enter-btn"
        on:click={goToSimulator}
        hidden={currentSection !== 7}
      >
        Enter Monitoring Center
      </button>

      <button 
        class="nav-btn continue-btn"
        aria-label="Continue"
        on:click={nextSection}
        disabled={currentSection === totalSections}
      >
        <span class="hidden md:inline">Continue</span>
        <span class="ml-2">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path>
          </svg>
        </span>
      </button>
    </div>
  
    <!-- Progress indicator -->
    <div class="mt-2 md:mt-6 text-center">
      <span class="text-md text-white/70 mb-2 block progress-text">Section {currentSection} of {totalSections}</span>
      <div class="w-full h-1 bg-white/20 rounded-sm overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-sm transition-all duration-500 ease-out" 
          style="width: {(currentSection / totalSections) * 100}%"
        ></div>
      </div>
    </div>
  </footer>
</section>

<style>
  p { 
    font-size: 1.5rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0px 0px 4px rgba(0, 0, 0, 0.7);
  }
  
  h2 {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0px 0px 4px rgba(0, 0, 0, 0.6);
  }
  
  strong {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9), 0px 0px 6px rgba(0, 0, 0, 0.7);
  }
  
  .intro {
    min-height: 100vh;
  }

  /* Logo responsivo */
  .logo {
    display: block;
    margin: 0 auto 2rem auto;
    max-height: 50vh;
  }



  .container {
    padding: 3rem;
    margin: 0 auto;
    min-height: calc(100vh - 120px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    transition: background-image 0.5s ease-in-out;
  }

  /* Overlay for better text readability on background images */
  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
    z-index: 1;
  }

  /* Ensure content is above overlay */
  .container > * {
    position: relative;
    z-index: 2;
  }

  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  /* Navigation */
  .navigation-container {
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  /* Small navigation buttons */
  .nav-btn {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8), 0px 0px 4px rgba(0, 0, 0, 0.6);
  }
  .nav-btn:disabled {
    opacity: 0;
  }
  
  .progress-text {
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8), 0px 0px 4px rgba(0, 0, 0, 0.6);
  }

  .back-btn { grid-area: back; }
  .continue-btn { grid-area: continue; }

  .enter-btn {
    grid-area: monitor-center;
    background: #ff6b35;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
    font-weight: 600;
  }

  /* Media queries for mobile */
  @media (max-width: 640px) {
    p { font-size: 1.125rem; }

    .container {
      padding: 1rem;
      /* Mobile: show only left half of background image */
      background-size: 200% 100% !important;
      background-position: left center !important;
    }

    .logo {
      max-width: 100%;
    }

    .navigation-container {
      padding: 1rem;
    }

    .nav-btn {
      padding: 2rem 0;
    }

    .enter-btn {
      width: 100%;
      margin: 0;
      padding: 0;
      height: 3rem;
    }
  }
</style>
