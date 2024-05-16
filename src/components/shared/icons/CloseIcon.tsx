import { Component } from "solid-js";
import { DefaultIconProps } from "./types";

const CloseIcon: Component<DefaultIconProps> = (props) => {
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
      <path
        fill-rule="evenodd"
        d="m8 8.707 3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

export default CloseIcon;
