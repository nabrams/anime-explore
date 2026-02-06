import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useVisibleTask$(() => {
    // Dynamic import to avoid SSR issues
    import('animejs').then(({ createLayout, utils }) => {
      const $button = utils.$('.controls button')[0];
      
      if (!$button) return;

      const layout = createLayout('.layout-container', {
      });

      function animateLayout() {
        layout.update(({ root }) => {
          const items = [...root.querySelectorAll('.item')];
          utils.shuffle(items).forEach($el => root.appendChild($el));
        });
      }

      $button.addEventListener('click', animateLayout);
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
      
      <div style=" margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 1.5rem;">
            <rect x="8" y="20" width="24" height="10" rx="2" fill="#1e3a5f" />
            <rect x="24" y="20" width="10" height="36" rx="2" fill="#1e3a5f" />
            <rect x="24" y="46" width="32" height="10" rx="2" fill="#1e3a5f" />
            <circle cx="16" cy="25" r="4" fill="white" />
          </svg>
          <h1 style="color: white; font-size: 2.5rem; margin: 0 0 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            Plumbing Services
          </h1>
          <p style="color: white; font-size: 1.25rem; opacity: 0.9;">
            Expert plumbing solutions for your home
          </p>
        </div>
        
        <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <h2 style="color: #1e3a5f; font-size: 1.75rem; margin: 0 0 1.5rem 0;">Our Services</h2>
          
          <div class="large layout centered row" style="margin-bottom: 2rem;">
            <div class="layout-container row" style="display: flex; gap: 1rem; justify-content: center;">
              <div class="item col" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚰</div>
                <div style="font-weight: 600;">Faucet Repair</div>
              </div>
              <div class="item col" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚿</div>
                <div style="font-weight: 600;">Shower Install</div>
              </div>
              <div class="item col" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚽</div>
                <div style="font-weight: 600;">Toilet Repair</div>
              </div>
              <div class="item col" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔧</div>
                <div style="font-weight: 600;">Pipe Repair</div>
              </div>
              <div class="item col" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💧</div>
                <div style="font-weight: 600;">Leak Detection</div>
              </div>
              <div class="item col" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔩</div>
                <div style="font-weight: 600;">Drain Cleaning</div>
              </div>

            </div>
          </div>
          
          <div class="medium row" style="text-align: center; margin-bottom: 2rem;">
            <fieldset class="controls" style="border: none; padding: 0;">
              <button class="button" style="background: linear-gradient(135deg, #7489cd, #5a6fb8); color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(116, 137, 205, 0.3); transition: transform 0.2s;">
                Shuffle Services
              </button>
            </fieldset>
          </div>
          
          <p style="color: #333; line-height: 1.8;">
            Our licensed plumbers are available for emergency repairs and scheduled maintenance. 
            We use the latest technology to diagnose issues quickly and provide lasting solutions 
            that protect your home from water damage.
          </p>

        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Plumbing Services - Build Hui",
  meta: [
    {
      name: "description",
      content: "Professional plumbing installation, repair, and maintenance services",
    },
  ],
};
