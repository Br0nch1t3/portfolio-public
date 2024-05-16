import { Component } from "solid-js";

type ProgressBarProps = {
  value: number;
  label: string;
};

const ProgressBar: Component<ProgressBarProps> = (props) => {
  return (
    <div class="flex flex-wrap gap-y-2 items-center">
      <span class="w-full text-base lg:text-xl lg:w-1/4">{props.label}</span>
      <div
        class="w-full lg:w-3/4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        style={{ "padding-right": `${75 - (3 * props.value) / 4}%` }}
      >
        <div class="bg-secondary h-2.5 rounded-full animate-inview animate-progress" />
      </div>
    </div>
  );
};

export default ProgressBar;
