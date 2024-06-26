import { Component } from "solid-js";
import { DefaultIconProps } from "./types";

const MailIcon: Component<DefaultIconProps> = (props) => {
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
        d="m1 3.5.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default MailIcon;
