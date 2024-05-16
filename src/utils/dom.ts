export function isMobile() {
  return !window.matchMedia("(min-width: 1024px)").matches;
}