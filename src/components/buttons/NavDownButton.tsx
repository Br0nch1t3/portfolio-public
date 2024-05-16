import cn from "@/utils/classnames";
import { Component } from "solid-js";
import ArrowDownIcon from "../shared/icons/ArrowDownIcon";

type NavDownButtonProps = {
  class?: string;
  "aria-label": string
};

const NavDownButton: Component<NavDownButtonProps> = (props) => {
  return (
    <a
      id="nav-down-btn"
      class={cn(
        "fixed bottom-10 right-10 rounded-full border p-5 cursor-pointer bg-background hover:bg-gray-200 group transition-all",
        props.class
      )}
      aria-label={props["aria-label"]}
    >
      <div
        id="_nav-down-btn"
        class="group-hover:hidden group-hover:invert animate-ping fixed bottom-10 right-10 size-[58px] lg:size-[74px] rounded-full border"
      ></div>
      <ArrowDownIcon class="size-4 lg:size-8 group-hover:invert" />
    </a>
  );
};

export default NavDownButton;
