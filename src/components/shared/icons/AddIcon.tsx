import { Component } from "solid-js";
import { DefaultIconProps } from "./types";

const AddIcon: Component<DefaultIconProps> = (props) => (
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
    <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"></path>
  </svg>
);

export default AddIcon;
