import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { createAnimatable, utils } from 'animejs';

export default component$(() => {


  useVisibleTask$(() => {
    const [$thermostat] = utils.$('.thermostat-dial');
    const [$tempDisplay] = utils.$('.temp-display');
    
    if (!$thermostat) return;
    
    let bounds = $thermostat.getBoundingClientRect();
    const refreshBounds = () => bounds = $thermostat.getBoundingClientRect();

    const dial = createAnimatable($thermostat, {
      rotate: { unit: 'rad' },
      duration: 400,
    });

    const { PI } = Math;
    let lastAngle = 0;
    let angle = PI / 2;
    let currentTemp = 72;

    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = bounds;
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      const currentAngle = Math.atan2(y, x);
      const diff = currentAngle - lastAngle;
      angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
      lastAngle = currentAngle;
      dial.rotate(angle);
      
      // Update temperature based on rotation (map angle to 60-85 range)
      const normalizedAngle = ((angle % (2 * PI)) + 2 * PI) % (2 * PI);
      currentTemp = Math.round(60 + (normalizedAngle / (2 * PI)) * 25);
      if ($tempDisplay) {
        $tempDisplay.textContent = `${currentTemp}°F`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', refreshBounds);
    window.addEventListener('scroll', refreshBounds);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', refreshBounds);
      window.removeEventListener('scroll', refreshBounds);
    };
  });

  return (
    <div style="background: linear-gradient(to bottom, #7489cd, white); min-height: 100vh; width: 100%; margin: 0; padding: 2rem; box-sizing: border-box;">
      <Link href="/home/" style="color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Back to Services
      </Link>
      
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h1 style="color: white; font-size: 2.5rem; margin: 0 0 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            HVAC Services
          </h1>
        </div>
        
        {/* Giant Interactive Thermostat */}
        <div style="background: white; border-radius: 24px; padding: 3rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15); text-align: center;">
          <h2 style="color: #1e3a5f; font-size: 2rem; margin: 0 0 0.5rem 0; font-weight: 700;">
            Set Your Perfect Room Temperature
          </h2>
          <p style="color: #666; font-size: 1rem; margin-bottom: 2rem;">
            Move your mouse around the dial to adjust
          </p>
          
          {/* Thermostat Dial */}
          <div style="position: relative; width: 300px; height: 300px; margin: 0 auto 2rem auto;">
            {/* Outer ring with gradient */}
            <div style="
              position: absolute;
              inset: 0;
              border-radius: 50%;
              background: linear-gradient(135deg, #e8ecf3 0%, #d1d9e6 100%);
              box-shadow: 
                0 10px 30px rgba(0,0,0,0.1),
                inset 0 2px 10px rgba(255,255,255,0.8),
                inset 0 -2px 10px rgba(0,0,0,0.1);
            "></div>
            
            {/* Inner dial area */}
            <div style="
              position: absolute;
              inset: 20px;
              border-radius: 50%;
              background: linear-gradient(180deg, #f8f9fc 0%, #e8ecf3 100%);
              box-shadow: inset 0 4px 20px rgba(0,0,0,0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            ">
              {/* Temperature display */}
              <span class="temp-display" style="
                font-size: 4rem;
                font-weight: 700;
                color: #1e3a5f;
                line-height: 1;
              ">72°F</span>
              <span style="font-size: 1rem; color: #7489cd; margin-top: 0.5rem;">Current Setting</span>
            </div>
            
            {/* Rotating dial indicator */}
            <svg 
              class="thermostat-dial"
              width="300" 
              height="300" 
              viewBox="0 0 300 300" 
              style="position: absolute; inset: 0; cursor: grab;"
            >
              {/* Tick marks */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const x1 = 150 + 130 * Math.cos(angle);
                const y1 = 150 + 130 * Math.sin(angle);
                const x2 = 150 + (i % 2 === 0 ? 118 : 123) * Math.cos(angle);
                const y2 = 150 + (i % 2 === 0 ? 118 : 123) * Math.sin(angle);
                return (
                  <line 
                    key={i}
                    x1={x1} 
                    y1={y1} 
                    x2={x2} 
                    y2={y2} 
                    stroke={i % 2 === 0 ? "#1e3a5f" : "#7489cd"} 
                    stroke-width={i % 2 === 0 ? "3" : "2"}
                    stroke-linecap="round"
                  />
                );
              })}
              
              {/* Main dial pointer */}
              <g style="transform-origin: 150px 150px;">
                <line 
                  x1="150" 
                  y1="150" 
                  x2="150" 
                  y2="45" 
                  stroke="url(#dialGradient)" 
                  stroke-width="8" 
                  stroke-linecap="round"
                />
                <circle cx="150" cy="50" r="10" fill="#667eea" />
              </g>
              
              <defs>
                <linearGradient id="dialGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#1e3a5f" />
                  <stop offset="100%" stop-color="#667eea" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Temperature scale labels */}
          <div style="display: flex; justify-content: space-between; max-width: 280px; margin: 0 auto 2rem auto; padding: 0 1rem;">
            <span style="color: #4299e1; font-weight: 600;">60°F Cool</span>
            <span style="color: #ed8936; font-weight: 600;">85°F Warm</span>
          </div>
          
          <p style="color: #333; line-height: 1.8; max-width: 500px; margin: 0 auto 2rem auto;">
            Our certified HVAC technicians provide reliable heating and cooling solutions for your home. 
            We offer energy-efficient systems that reduce your utility bills while keeping your family 
            comfortable in every season.
          </p>
          
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "HVAC Services - Build Hui",
  meta: [
    {
      name: "description",
      content: "Professional HVAC installation, repair, and maintenance services",
    },
  ],
};
