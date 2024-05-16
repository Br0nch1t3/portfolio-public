import cn from "@/utils/classnames";
import { Component } from "solid-js";

type TagProps = {
  children: string;
  class?: string
};

const Tag: Component<TagProps> = (props) => (
  <div class={cn("border px-2 max-lg:h-min max-lg:text-nowrap items-center inline-flex space-x-2 max-lg:text-sm", props.class)}>
    <span>{props.children}</span>
  </div>
);

export default Tag;
