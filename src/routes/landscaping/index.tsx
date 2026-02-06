import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
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
            <rect x="28" y="40" width="8" height="18" rx="2" fill="#1e3a5f" />
            <path d="M32 6L14 28H22L12 42H52L42 28H50L32 6Z" fill="#1e3a5f" />
          </svg>
          <h1 style="color: white; font-size: 2.5rem; margin: 0 0 1rem 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            Landscaping Services
          </h1>
          <p style="color: white; font-size: 1.25rem; opacity: 0.9;">
            Create your perfect outdoor oasis
          </p>
        </div>
        
        <div style="background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">

          <p style="color: #333; line-height: 1.8;">
            Our landscape architects and designers create outdoor spaces that enhance your home's 
            beauty and value. We combine artistry with horticultural expertise to design sustainable, 
            low-maintenance landscapes that thrive in your local climate.
          </p>
          

        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Landscaping Services - Build Hui",
  meta: [
    {
      name: "description",
      content: "Professional landscaping design and installation services",
    },
  ],
};
