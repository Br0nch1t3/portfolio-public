import { Component } from "solid-js";
import { DefaultIconProps } from "./types";

const ArrowDownIcon: Component<DefaultIconProps> = (props) => (
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
      d="m3.147 9 5 5h.707l5-5-.707-.707L9 12.439V2H8v10.44L3.854 8.292 3.147 9z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

export default ArrowDownIcon;
