import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const scrollToSection = useCallback((elementId: string, duration: number = 1000) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const headerOffset = 96; // Match HEADER_HEIGHT in Header.tsx
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const offsetPosition = elementPosition + startPosition - headerOffset;
    const distance = offsetPosition - startPosition;
    
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return { scrollToSection };
};
