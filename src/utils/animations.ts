import { Component, onCleanup, onMount } from "solid-js";

export function useAnimateWhenInView() {
  onMount(() => {
    const inViewElements = document.querySelectorAll(
      '[class*="animate-inview"]'
    );
    const observers: IntersectionObserver[] = [];

    for (const el of inViewElements) {
      const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          el.getAnimations().forEach((animation) => {
            animation.play();
          });
          observer.disconnect();
        }
      });
      observers.push(observer);
      observer.observe(el);
    }

    onCleanup(() => {
      observers.forEach((observer) => observer.disconnect());
    });
  });
}

export const UseAnimateWhenInViewAdapter: Component = () => {
  useAnimateWhenInView();

  return null;
};
