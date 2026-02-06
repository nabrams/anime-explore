import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { createDraggable, utils } from 'animejs';

export default component$(() => {
  useVisibleTask$(() => {
    const [ $resetButton ] = utils.$('.reset');
    
    // Create draggable blocks - enabled immediately with container constraint
    const block1 = createDraggable('.building-block-1', {
      container: '.build-area',
    });
    const block2 = createDraggable('.building-block-2', {
      container: '.build-area',
    });
    const block3 = createDraggable('.building-block-3', {
      container: '.build-area',
    });
    const block4 = createDraggable('.building-block-4', {
      container: '.build-area',
    });
    const block5 = createDraggable('.building-block-5', {
      container: '.build-area',
    });

    const resetBlock1 = () => block1.reset();
    const resetBlock2 = () => block2.reset();
    const resetBlock3 = () => block3.reset();
    const resetBlock4 = () => block4.reset();
    const resetBlock5 = () => block5.reset();



    if ($resetButton) {
      $resetButton.addEventListener('click', resetBlock1);
      $resetButton.addEventListener('click', resetBlock2);
      $resetButton.addEventListener('click', resetBlock3);
      $resetButton.addEventListener('click', resetBlock4);
      $resetButton.addEventListener('click', resetBlock5);
    }

    return () => {
      if ($resetButton) {
        $resetButton.removeEventListener('click', resetBlock1);
        $resetButton.removeEventListener('click', resetBlock2);
        $resetButton.removeEventListener('click', resetBlock3);
        $resetButton.removeEventListener('click', resetBlock4);
        $resetButton.removeEventListener('click', resetBlock5);
      }
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
      
      <div style="max-width: 900px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h1 style="color: white; font-size: 2.5rem; margin: 0 0 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            Architecture
          </h1>
        </div>
        
        {/* Interactive Building Area */}
        <div style="background: white; border-radius: 24px; padding: 2rem; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
          <div style="text-align: center; margin-bottom: 1.5rem;">
            <h2 style="color: #1e3a5f; font-size: 2rem; margin: 0 0 0.5rem 0; font-weight: 700;">
              Build Your Vision
            </h2>
            <p style="color: #666; font-size: 1rem; margin: 0;">
              Drag and drop the blocks to build your design
            </p>
          </div>
          
          {/* Build Area */}
          <div 
            class="build-area"
            style="
              position: relative;
              width: 100%;
              height: 400px;
              background: linear-gradient(180deg, #f0f4f8 0%, #e2e8f0 100%);
              border-radius: 16px;
              overflow: hidden;
              margin-bottom: 1.5rem;
            "
          >
            {/* Grid lines for visual reference */}
            <svg style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.3; pointer-events: none;">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7489cd" stroke-width="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            
            {/* Ground line */}
            <div style="
              position: absolute;
              bottom: 40px;
              left: 20px;
              right: 20px;
              height: 4px;
              background: #1e3a5f;
              border-radius: 2px;
              pointer-events: none;
            "></div>
            
            {/* Building Blocks - using simple positioning */}
            <div 
              class="building-block-1 block1"
              style="
                position: absolute;
                top: 100px;
                left: 100px;
                width: 80px;
                height: 60px;
                background: linear-gradient(135deg, #667eea 0%, #5a67d8 100%);
                border-radius: 8px;
                box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
              "
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style="pointer-events: none;">
                <path d="M3 21H21M5 21V7L12 3L19 7V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <div 
              class="building-block-2 block2"
              style="
                position: absolute;
                top: 150px;
                left: 200px;
                width: 60px;
                height: 80px;
                background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                border-radius: 8px;
                box-shadow: 0 8px 20px rgba(72, 187, 120, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
              "
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style="pointer-events: none;">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" stroke-width="2"/>
                <line x1="4" y1="12" x2="20" y2="12" stroke="white" stroke-width="2"/>
                <line x1="12" y1="4" x2="12" y2="20" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            
            <div 
              class="building-block-3 block3"
              style="
                position: absolute;
                top: 200px;
                left: 300px;
                width: 100px;
                height: 50px;
                background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
                border-radius: 8px;
                box-shadow: 0 8px 20px rgba(237, 137, 54, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
              "
            >
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" style="pointer-events: none;">
                <rect x="2" y="8" width="36" height="14" rx="2" stroke="white" stroke-width="2" fill="none"/>
                <rect x="8" y="2" width="8" height="6" stroke="white" stroke-width="2" fill="none"/>
              </svg>
            </div>
            
            <div 
              class="building-block-4 block4"
              style="
                position: absolute;
                top: 80px;
                left: 450px;
                width: 70px;
                height: 70px;
                background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
                border-radius: 8px;
                box-shadow: 0 8px 20px rgba(229, 62, 62, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
              "
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style="pointer-events: none;">
                <polygon points="12,2 22,22 2,22" stroke="white" stroke-width="2" fill="none" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <div 
              class="building-block-5 block5"
              style="
                position: absolute;
                top: 120px;
                left: 550px;
                width: 50px;
                height: 90px;
                background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%);
                border-radius: 8px;
                box-shadow: 0 8px 20px rgba(159, 122, 234, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: grab;
              "
            >
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" style="pointer-events: none;">
                <rect x="4" y="4" width="16" height="32" rx="2" stroke="white" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="white" stroke-width="2" fill="none"/>
                <circle cx="12" cy="28" r="4" stroke="white" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </div>
          
          {/* Controls */}
          <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
            <button 
              class="reset reset-btn"
              style="
                padding: 0.75rem 1.5rem;
                background: linear-gradient(135deg, #667eea 0%, #7489cd 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                display: flex;
                align-items: center;
                gap: 0.5rem;
              "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M3 12L6 9M3 12L6 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Reset Blocks
            </button>
          </div>
          
          <p style="color: #333; line-height: 1.8; text-align: center; max-width: 600px; margin: 0 auto 1.5rem auto;">
            Our architects combine creativity with practical expertise to design spaces that are 
            both beautiful and functional. From concept to completion, we work with you to create 
            a home that reflects your lifestyle.
          </p>
          
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Architecture - Build Hui",
  meta: [
    {
      name: "description",
      content: "Professional architectural design services for custom homes and renovations",
    },
  ],
};
