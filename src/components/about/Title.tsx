import cn from "@/utils/classnames";
import { Component, JSX } from "solid-js";

type TitleProps = {
  children: JSX.Element;
  class?: string;
};

const Title: Component<TitleProps> = (props) => (
  <span
    class={cn(
      "mt-9 first:mt-0 mb-6 underline decoration-secondary underline-offset-8 uppercase peer [&+hr]:hidden text-lg lg:text-2xl",
      props.class
    )}
  >
    {props.children}
  </span>
);

export default Title;
