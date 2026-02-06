import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { animate, stagger, utils } from 'animejs';

// Route mapping for each service
const serviceRoutes: Record<string, string> = {
  "Interior Design": "/interior-design/",
  "HVAC": "/hvac/",
  "Plumbing": "/plumbing/",
  "Architecture": "/architecture/",
  "Audio/AV": "/audio-av/",
  "Landscaping": "/landscaping/",
};

// Custom SVG icons matching the Hui logo style (thick navy strokes)
const InteriorDesignIcon = () => (
  <svg id="interior-svg" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sofa/couch icon */}
    <rect id="sofa-base" x="8" y="28" width="48" height="20" rx="4" fill="#1e3a5f" />
    <rect id="sofa-back" x="12" y="24" width="40" height="8" rx="2" fill="#1e3a5f" />
    <rect id="sofa-left" x="8" y="28" width="10" height="20" rx="3" fill="#1e3a5f" />
    <rect id="sofa-right" x="46" y="28" width="10" height="20" rx="3" fill="#1e3a5f" />
    <rect class="sofa-leg" x="12" y="48" width="6" height="8" rx="2" fill="#1e3a5f" />
    <rect class="sofa-leg" x="46" y="48" width="6" height="8" rx="2" fill="#1e3a5f" />
  </svg>
);

const HVACIcon = () => (
  <svg id="hvac-svg" width="64" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Snowflake/AC icon */}
    <g id="snowflake-group" style="transform-origin: 32px 32px;">
      <rect class="snowflake-arm" x="28" y="8" width="8" height="48" rx="2" fill="#1e3a5f" />
      <rect class="snowflake-arm" x="8" y="28" width="48" height="8" rx="2" fill="#1e3a5f" />
      <rect class="snowflake-arm" x="28" y="8" width="8" height="48" rx="2" fill="#1e3a5f" style="transform-origin: 32px 32px; transform: rotate(-45deg);" />
      <rect class="snowflake-arm" x="28" y="8" width="8" height="48" rx="2" fill="#1e3a5f" style="transform-origin: 32px 32px; transform: rotate(45deg);" />
    </g>
  </svg>
);

const PlumbingIcon = () => (
  <svg id="plumbing-svg" width="64" height="84" viewBox="0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pipe/wrench icon */}
    <rect id="pipe-h" x="8" y="20" width="24" height="10" rx="2" fill="#1e3a5f" />
    <rect id="pipe-v" x="24" y="20" width="10" height="36" rx="2" fill="#1e3a5f" />
    <rect id="pipe-bottom" x="24" y="46" width="32" height="10" rx="2" fill="#1e3a5f" />
    {/* Water droplets */}
    <circle class="water-drop" cx="52" cy="58" r="2" fill="#4299e1" opacity="0" />
    <circle class="water-drop" cx="48" cy="58" r="2" fill="#4299e1" opacity="0" />
    <circle class="water-drop" cx="44" cy="58" r="2" fill="#4299e1" opacity="0" />
  </svg>
);

const ArchitectureIcon = () => (
  <svg id="architecture-svg" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Building/blueprint icon */}
    <path id="house-outline" d="M32 6L8 22V58H56V22L32 6Z" stroke="#1e3a5f" stroke-width="6" fill="none" stroke-linejoin="round" stroke-dasharray="200" stroke-dashoffset="0" />
    <rect id="door" x="26" y="36" width="12" height="22" rx="1" fill="#1e3a5f" />
    <rect class="window" x="18" y="26" width="8" height="8" rx="1" fill="#1e3a5f" />
    <rect class="window" x="38" y="26" width="8" height="8" rx="1" fill="#1e3a5f" />
  </svg>
);

const AudioAVIcon = () => (
  <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 1rem;">
    <svg id="audio-svg" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: translateY(4px);">
      {/* Speaker icon */}
      <rect id="speaker-body" x="12" y="8" width="24" height="48" rx="4" fill="#1e3a5f" />
      <circle id="speaker-cone" cx="23" cy="38" r="8" fill="white" />
      <circle id="speaker-tweeter" cx="24" cy="20" r="5" fill="white" />
      <path id="sound-wave-1" d="M44 24C48 28 48 36 44 40" stroke="#1e3a5f" stroke-width="5" stroke-linecap="round" opacity="0.3" />
      <path id="sound-wave-2" d="M50 18C58 26 58 38 50 46" stroke="#1e3a5f" stroke-width="5" stroke-linecap="round" opacity="0.3" />
    </svg>
    <button 
      class="audio-play-btn"
      style="
        background: linear-gradient(135deg, #667eea 0%, #7489cd 100%);
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.2s ease;
      "
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
        <path d="M4 2L14 8L4 14V2Z" fill="white" />
      </svg>
    </button>
  </div>
);

const LandscapingIcon = () => (
  <svg id="landscaping-svg" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tree icon */}
    <rect id="tree-trunk" x="28" y="36" width="8" height="22" rx="2" fill="#1e3a5f" />
    <path id="tree-leaves" d="M32 6L14 30H22L12 42H52L42 30H50L32 6Z" fill="#1e3a5f" style="transform-origin: 32px 36px;" />
  </svg>
);

const iconComponents: Record<string, () => any> = {
  "Interior Design": InteriorDesignIcon,
  "HVAC": HVACIcon,
  "Plumbing": PlumbingIcon,
  "Architecture": ArchitectureIcon,
  "Audio/AV": AudioAVIcon,
  "Landscaping": LandscapingIcon,
};

export default component$(() => {
  const services = [
    "Interior Design",
    "HVAC",
    "Plumbing",
    "Architecture",
    "Audio/AV",
    "Landscaping",
  ];

  useVisibleTask$(() => {
    // Interior Design - Bouncy cushion effect
    animate('#sofa-back', {
      scaleY: [1, 0.85, 1],
      translateY: [0, 2, 0],
      duration: 2000,
      easing: 'easeInOutQuad',
      loop: true,
    });

    // HVAC - Rotating snowflake
    animate('#snowflake-group', {
      rotate: '1turn',
      duration: 4000,
      easing: 'linear',
      loop: true,
    });

    // HVAC - Pulsing center
    animate('#snowflake-center', {
      scale: [1, 1.3, 1],
      duration: 1500,
      easing: 'easeInOutSine',
      loop: true,
    });


    // Plumbing - Water drops
    animate('.water-drop', {
      opacity: [0, 1, 0],
      translateY: [0, 8, 16],
      duration: 1200,
      delay: stagger(200),
      easing: 'easeOutQuad',
      loop: true,
    });

    // Architecture - Drawing effect
    animate('#house-outline', {
      strokeDashoffset: [200, 0],
      duration: 3000,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate',
    });

    // Architecture - Windows blinking
    animate('.window', {
      opacity: [1, 0.3, 1],
      duration: 2000,
      delay: stagger(300),
      easing: 'easeInOutSine',
      loop: true,
    });

    // Audio/AV - Sound waves pulsing (controlled by button)
    const [$playButton] = utils.$('.audio-play-btn');

    const soundWave1Animation = animate('#sound-wave-1', {
      opacity: [0.3, 1, 0.3],
      scale: [0.9, 1.1, 0.9],
      duration: 800,
      easing: 'easeInOutSine',
      loop: 5,
      autoplay: false,
    });

    const soundWave2Animation = animate('#sound-wave-2', {
      opacity: [0.3, 1, 0.3],
      scale: [0.9, 1.1, 0.9],
      duration: 800,
      delay: 200,
      easing: 'easeInOutSine',
      loop: 5,
      autoplay: false,
    });

    // Audio/AV - Speaker cone vibration
    const speakerVibration = animate('#speaker-cone', {
      scale: [1, 1.08, 1],
      duration: 800,
      easing: 'easeInOutSine',
      loop: 5,
      autoplay: false,
      transformOrigin: 'center center',
    });

    const playAnimation = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      soundWave1Animation.restart();
      soundWave2Animation.restart();
      speakerVibration.restart();
    };

    if ($playButton) {
      $playButton.addEventListener('click', playAnimation);
    }

    // Landscaping - Tree swaying
    animate('#tree-leaves', {
      rotate: [-5, 5, -5],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
    });

  });

  return (
    <div style="background: linear-gradient(to bottom, #7489cd, white); min-height: 100vh; width: 100%; margin: 0; padding: 2rem; box-sizing: border-box;">
      <h1 style="text-align: center; color: white; font-size: 2.5rem; margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
        Your Dream home starts here.

      </h1>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 1200px; margin: 0 auto; padding: 1rem;">
        {services.map((serviceName) => {
          const IconComponent = iconComponents[serviceName];
          const route = serviceRoutes[serviceName];
          return (
            <a
              key={serviceName}
              href={route}
              style="
                text-decoration: none;
                background: white;
                border-radius: 16px;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 180px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                cursor: pointer;
                transition: all 0.3s ease;
              "
              onMouseEnter$={(e) => {
                const target = e.currentTarget as HTMLElement | null;
                if (target) {
                  target.style.transform = 'translateY(-8px)';
                  target.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                }
              }}
              onMouseLeave$={(e) => {
                const target = e.currentTarget as HTMLElement | null;
                if (target) {
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }
              }}
            >
              <div style="margin-bottom: 1rem;">
                <IconComponent />
              </div>
              <h2 style="color: #333; font-size: 1.25rem; font-weight: 600; text-align: center; margin: 0;">
                {serviceName}
              </h2>
            </a>
          );
        })}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Services - Build Hui",
  meta: [
    {
      name: "description",
      content: "Explore our services including Interior Design, HVAC, Plumbing, Architecture, Audio/AV, and Landscaping",
    },
  ],
};
