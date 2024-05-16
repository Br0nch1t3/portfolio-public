import { Component } from "solid-js";
import { DefaultIconProps } from "./types";

const MoreIcon: Component<DefaultIconProps> = (props) => {
  return (
    <svg
      fill="none"
      stroke-width="2"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      style="overflow: visible; color: currentcolor;"
      class={props.class}
    >
      <path d="M12 11A1 1 0 1 0 12 13 1 1 0 1 0 12 11z"></path>
      <path d="M12 4A1 1 0 1 0 12 6 1 1 0 1 0 12 4z"></path>
      <path d="M12 18A1 1 0 1 0 12 20 1 1 0 1 0 12 18z"></path>
    </svg>
  );
};

export default MoreIcon;
