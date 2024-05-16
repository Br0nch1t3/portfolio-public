import { Component, JSXElement, onCleanup, onMount } from "solid-js";

type NavBarWrapperProps = {
  children: JSXElement;
};

const NavBarWrapper: Component<NavBarWrapperProps> = (props) => {
  onMount(() => {
    const resolved = document.getElementById("navigation-links")!.children;
    const observers: IntersectionObserver[] = [];

    for (let i = 0; i < resolved.length; i++) {
      const child = resolved.item(i);
      const nextIndex = i + 1 === resolved.length ? 0 : i + 1;
      const nextChild = resolved.item(nextIndex);

      if (child instanceof Element && nextChild instanceof Element) {
        const href = child.getAttribute("href");
        const nextHref = nextChild.getAttribute("href");
        const el = href ? document.querySelector(href) : null;

        if (el) {
          const observer = new IntersectionObserver(
            (e) => {
              if (e[0].isIntersecting) {
                document
                  .querySelector(".selected")
                  ?.classList.remove("selected");
                child.classList.add("selected");
                document
                  .getElementById("nav-down-btn")
                  ?.setAttribute("href", nextHref!);
                if (i !== 0) {
                  document
                    .getElementById("_nav-down-btn")
                    ?.classList.add("hidden");
                } else {
                  document
                    .getElementById("_nav-down-btn")
                    ?.classList.remove("hidden");
                }
                if (nextIndex === 0) {
                  document
                    .getElementById("nav-down-btn")
                    ?.classList.add("rotate-180");
                } else {
                  document
                    .getElementById("nav-down-btn")
                    ?.classList.remove("rotate-180");
                }
              }
            },
            {
              threshold:
                ((window.innerHeight || document.documentElement.clientHeight) /
                  el.clientHeight) *
                0.5,
            }
          );
          observer.observe(el);
          observers.push(observer);
        }
      }
    }

    onCleanup(() => {
      observers.forEach((o) => o.disconnect());
    });
  });

  return props.children;
};

export default NavBarWrapper;
