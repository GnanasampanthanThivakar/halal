import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  children?: boolean;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 80%',
      children = false,
      scale,
    } = options;

    const targets = children ? el.children : el;

    const fromVars: gsap.TweenVars = {
      y,
      x,
      opacity,
      ease,
      delay,
    };

    if (scale !== undefined) {
      fromVars.scale = scale;
    }

    const toVars: gsap.TweenVars = {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      stagger: children ? stagger : 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    };

    if (scale !== undefined) {
      toVars.scale = 1;
    }

    gsap.fromTo(targets, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
