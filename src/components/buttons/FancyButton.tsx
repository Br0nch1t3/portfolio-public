import cn from "@/utils/classnames";
import { Component, JSX } from "solid-js";

type FancyButtonProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

const FancyButton: Component<FancyButtonProps> = (props) => {
  return <a {...props} class={cn("fancy-button", props.class)}>{props.children}</a>;
};

export default FancyButton;
