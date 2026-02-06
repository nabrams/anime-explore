import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { animate, stagger, splitText } from 'https://esm.sh/animejs';

export default component$(() => {
  const boxRef = useSignal<HTMLDivElement>();
  const buttonRef = useSignal<HTMLAnchorElement>();

  useVisibleTask$(() => {
    if (boxRef.value) {
      animate(boxRef.value, {
        translateX: 0,
        rotate: "1turn",
        backgroundColor: "#7489cd",
        opacity: 0.8,
        duration: 2000,
        loop: false,
        direction: "alternate",
        easing: "easeInOutQuad"
      });
    }

    if (buttonRef.value) {
      const { chars } = splitText(buttonRef.value, { words: false, chars: true });

      animate(chars, {
        // Property keyframes
        y: [
          { to: '-2.75rem', ease: 'outExpo', duration: 600 },
          { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        // Property specific parameters
        rotate: {
          from: '-1turn',
          delay: 0
        },
        delay: stagger(50),
        ease: 'inOutCirc',
        loopDelay: 1000,
        loop: true
      });
    }
  });

  return (
    <div style="background: linear-gradient(to bottom, #7489cd, white); min-height: 100vh; width: 100%; margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3rem;">

<div ref={boxRef} style="width: 400px; height: 400px; display: flex; align-items: center; justify-content: center;">
  <img src="/src/images/hui.png" alt="Hui" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
</div>
<h1 style="color: white; font-size: 2.5rem; font-weight: 700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
  Build with Hui today.
</h1>
<Link 
  href="/home/"
  ref={buttonRef}
  style="
    padding: 1.5rem 3rem;
    font-size: 1.75rem;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    background: linear-gradient(135deg, #667eea 0%,#7489cd 100%);
    color: white;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    transform: scale(1);
    text-decoration: none;
    display: inline-block;
  "
  onMouseEnter$={(e) => {
    (e.target as HTMLElement).style.transform = 'scale(1.1)';
    (e.target as HTMLElement).style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.6)';
  }}
  onMouseLeave$={(e) => {
    (e.target as HTMLElement).style.transform = 'scale(1)';
    (e.target as HTMLElement).style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
  }}
>
  Get Started
</Link>
</div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Build Hui",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
