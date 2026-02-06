import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import { createTimeline, createTimer, utils } from 'animejs';

export default component$(() => {

  useVisibleTask$(() => {
    const [ $timer01, $timer02, $timer03 ] = utils.$('.timer');
    
    if (!$timer01 || !$timer02 || !$timer03) return;
    
    const timer1 = createTimer({
      duration: 1500,
      onUpdate: self => $timer01.innerHTML = Math.round(self.currentTime).toString(),
    });
    
    createTimeline()
      .sync(timer1)
      .add({
        duration: 500,
        onUpdate: self => $timer02.innerHTML = Math.round(self.currentTime).toString(), 
      })
      .add({
        onUpdate: self => $timer03.innerHTML = Math.round(self.currentTime).toString(),
        duration: 1000
      });
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
        <div style="text-align: center; margin-bottom: 3rem;">
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 1.5rem;">
            <rect x="12" y="8" width="24" height="48" rx="4" fill="#1e3a5f" />
            <circle cx="24" cy="40" r="10" fill="white" />
            <circle cx="24" cy="40" r="4" fill="#1e3a5f" />
            <circle cx="24" cy="20" r="5" fill="white" />
            <path d="M44 24C48 28 48 36 44 40" stroke="#1e3a5f" stroke-width="5" stroke-linecap="round" />
            <path d="M50 18C58 26 58 38 50 46" stroke="#1e3a5f" stroke-width="5" stroke-linecap="round" />
          </svg>
          <h1 style="color: white; font-size: 2.5rem; margin: 0 0 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            Audio/AV Services
          </h1>
          <p style="color: white; font-size: 1.25rem; opacity: 0.9;">
            Immersive entertainment experiences for your home
          </p>
        </div>
        
        <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          
          {/* Timeline Display */}
          <div style="margin-bottom: 3rem;">
            <h2 style="color: #1e3a5f; font-size: 1.5rem; margin: 0 0 2rem 0; text-align: center; font-weight: 700;">
              Audio Timeline Sync
            </h2>
            
            {/* Timeline Container */}
            <div style="position: relative; padding: 2rem 0;">
              {/* Main timeline line */}
              <div style="position: absolute; top: 50%; left: 5%; right: 5%; height: 4px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 2px; transform: translateY(-50%);"></div>
              
              {/* Timeline nodes */}
              <div style="display: flex; justify-content: space-between; align-items: center; position: relative;">
                
                {/* Timer 01 */}
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); margin-bottom: 1rem;"></div>
                  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 1.5rem 2rem; box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3); min-width: 140px;">
                    <div style="color: rgba(255,255,255,0.8); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; text-align: center;">Timer 01</div>
                    <div class="timer" style="color: white; font-size: 3rem; font-weight: 700; font-family: 'Courier New', monospace; text-align: center; text-shadow: 0 2px 8px rgba(0,0,0,0.2);">0</div>
                    <div style="color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center; margin-top: 0.25rem;">ms</div>
                  </div>
                </div>
                
                {/* Timer 02 */}
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 12px rgba(240, 147, 251, 0.4); margin-bottom: 1rem;"></div>
                  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; padding: 1.5rem 2rem; box-shadow: 0 8px 24px rgba(240, 147, 251, 0.3); min-width: 140px;">
                    <div style="color: rgba(255,255,255,0.8); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; text-align: center;">Timer 02</div>
                    <div class="timer" style="color: white; font-size: 3rem; font-weight: 700; font-family: 'Courier New', monospace; text-align: center; text-shadow: 0 2px 8px rgba(0,0,0,0.2);">0</div>
                    <div style="color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center; margin-top: 0.25rem;">ms</div>
                  </div>
                </div>
                
                {/* Timer 03 */}
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <div style="width: 24px; height: 24px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 12px rgba(79, 172, 254, 0.4); margin-bottom: 1rem;"></div>
                  <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 12px; padding: 1.5rem 2rem; box-shadow: 0 8px 24px rgba(79, 172, 254, 0.3); min-width: 140px;">
                    <div style="color: rgba(255,255,255,0.8); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem; text-align: center;">Timer 03</div>
                    <div class="timer" style="color: white; font-size: 3rem; font-weight: 700; font-family: 'Courier New', monospace; text-align: center; text-shadow: 0 2px 8px rgba(0,0,0,0.2);">0</div>
                    <div style="color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center; margin-top: 0.25rem;">ms</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <p style="color: #333; line-height: 1.8;">
            Our AV specialists create custom entertainment solutions tailored to your space and preferences. 
            From simple speaker setups to full home theaters, we deliver exceptional sound and video 
            quality with seamless smart home integration.
          </p>

        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Audio/AV Services - Build Hui",
  meta: [
    {
      name: "description",
      content: "Professional home theater and audio/visual installation services",
    },
  ],
};
