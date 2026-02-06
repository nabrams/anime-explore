import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { animate, svg, stagger } from 'animejs';


export default component$(() => {



  useVisibleTask$(() => {
    animate(svg.createDrawable('.line'), {
      draw: ['0 1', '0 1', '0 0'],
      ease: 'in',
      duration: 3000,
      delay: stagger(200),
      loop: false,
      autoplay: true
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
            <rect x="8" y="30" width="48" height="18" rx="4" fill="#1e3a5f" />
            <rect x="12" y="24" width="40" height="10" rx="2" fill="#1e3a5f" />
            <rect x="8" y="30" width="10" height="18" rx="3" fill="#1e3a5f" />
            <rect x="46" y="30" width="10" height="18" rx="3" fill="#1e3a5f" />
            <rect x="14" y="48" width="6" height="6" rx="2" fill="#1e3a5f" />
            <rect x="44" y="48" width="6" height="6" rx="2" fill="#1e3a5f" />
          </svg>
          <h1 style="color: white; font-size: 2.5rem; margin: 0 0 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            Interior Design
          </h1>
          <p style="color: white; font-size: 1.25rem; opacity: 0.9;">
            Transform your space into something extraordinary
          </p>
        </div>
        
        <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <svg viewBox="0 0 400 300" style="width: 100%; max-width: 500px; margin: 0 auto 2rem auto; display: block;">
  <g stroke="currentColor" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    {/* Room outline */}
    <rect class="line" x="20" y="20" width="360" height="260" stroke="#1e3a5f" fill="#f8f9fa"/>
    
    {/* Windows */}
    <rect class="line" x="60" y="25" width="80" height="60" rx="4" stroke="#667eea" fill="#e3f2fd"/>
    <line class="line" x1="100" y1="25" x2="100" y2="85" stroke="#667eea"/>
    <line class="line" x1="60" y1="55" x2="140" y2="55" stroke="#667eea"/>
    
    <rect class="line" x="260" y="25" width="80" height="60" rx="4" stroke="#667eea" fill="#e3f2fd"/>
    <line class="line" x1="300" y1="25" x2="300" y2="85" stroke="#667eea"/>
    <line class="line" x1="260" y1="55" x2="340" y2="55" stroke="#667eea"/>
    
    {/* Bed - centered on right side */}
    <rect class="line" x="250" y="120" width="110" height="80" rx="8" stroke="#1e3a5f" fill="#e8eaf6"/>
    <rect class="line" x="250" y="120" width="110" height="18" rx="4" stroke="#1e3a5f" fill="#c5cae9"/>
    <circle class="line" cx="280" cy="155" r="10" stroke="#1e3a5f" fill="#9fa8da"/>
    <circle class="line" cx="330" cy="155" r="10" stroke="#1e3a5f" fill="#9fa8da"/>
    
    {/* Nightstand next to bed */}
    <rect class="line" x="210" y="140" width="30" height="40" rx="3" stroke="#1e3a5f" fill="#fff3e0"/>
    <rect class="line" x="215" y="150" width="20" height="8" rx="1" stroke="#1e3a5f" fill="#e0e0e0"/>
    <circle class="line" cx="225" cy="154" r="2" fill="#1e3a5f" stroke="#1e3a5f"/>
    
    {/* Desk on left side */}
    <rect class="line" x="40" y="120" width="90" height="45" rx="4" stroke="#1e3a5f" fill="#fff3e0"/>
    <line class="line" x1="50" y1="165" x2="50" y2="195" stroke="#1e3a5f"/>
    <line class="line" x1="120" y1="165" x2="120" y2="195" stroke="#1e3a5f"/>
    {/* Laptop on desk */}
    <rect class="line" x="55" y="105" width="35" height="15" rx="2" stroke="#1e3a5f" fill="#e0e0e0"/>
    
    {/* Rug in center - moved down to not overlap */}
    <ellipse class="line" cx="180" cy="235" rx="70" ry="35" stroke="#ed8936" fill="#ffe0b2"/>
    <ellipse class="line" cx="180" cy="235" rx="60" ry="30" stroke="#ed8936" fill="none"/>
    <ellipse class="line" cx="180" cy="235" rx="50" ry="25" stroke="#ed8936" fill="none"/>
    <ellipse class="line" cx="180" cy="235" rx="40" ry="20" stroke="#ed8936" fill="none"/>
    <ellipse class="line" cx="180" cy="235" rx="30" ry="15" stroke="#ed8936" fill="none"/>
    <ellipse class="line" cx="180" cy="235" rx="20" ry="10" stroke="#ed8936" fill="none"/>
    
    {/* Wardrobe/Closet on left wall */}
    <rect class="line" x="30" y="210" width="60" height="60" rx="4" stroke="#1e3a5f" fill="#eceff1"/>
    <line class="line" x1="60" y1="210" x2="60" y2="270" stroke="#1e3a5f" stroke-width="1"/>
    <circle class="line" cx="50" cy="240" r="3" fill="#1e3a5f" stroke="#1e3a5f"/>
    <circle class="line" cx="70" cy="240" r="3" fill="#1e3a5f" stroke="#1e3a5f"/>
    
    {/* Dresser on bottom right */}
    <rect class="line" x="280" y="215" width="80" height="50" rx="4" stroke="#1e3a5f" fill="#fff3e0"/>
    <rect class="line" x="285" y="225" width="30" height="12" rx="1" stroke="#1e3a5f" fill="#e0e0e0"/>
    <rect class="line" x="325" y="225" width="30" height="12" rx="1" stroke="#1e3a5f" fill="#e0e0e0"/>
    <rect class="line" x="285" y="245" width="30" height="12" rx="1" stroke="#1e3a5f" fill="#e0e0e0"/>
    <rect class="line" x="325" y="245" width="30" height="12" rx="1" stroke="#1e3a5f" fill="#e0e0e0"/>
    <circle class="line" cx="295" cy="231" r="2" fill="#1e3a5f" stroke="#1e3a5f"/>
    <circle class="line" cx="335" cy="231" r="2" fill="#1e3a5f" stroke="#1e3a5f"/>
    <circle class="line" cx="295" cy="251" r="2" fill="#1e3a5f" stroke="#1e3a5f"/>
    <circle class="line" cx="335" cy="251" r="2" fill="#1e3a5f" stroke="#1e3a5f"/>
  </g>
</svg>
          <p style="color: #333; line-height: 1.8;">
            Our team of experienced interior designers works closely with you to understand your vision, 
            lifestyle, and budget. We create spaces that are not only beautiful but functional and 
            tailored to your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Interior Design - Build Hui",
  meta: [
    {
      name: "description",
      content: "Professional interior design services to transform your space",
    },
  ],
};
