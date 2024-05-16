import { Component } from "solid-js";
import { DefaultIconProps } from "./types";

const MenuIcon: Component<DefaultIconProps> = (props) => {
  return (
    <svg
      fill="currentColor"
      stroke-width="0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      style="overflow: visible; color: currentcolor;"
      class={props.class}
    >
      <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
    </svg>
  );
};

export default MenuIcon;
