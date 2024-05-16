import cn from "@/utils/classnames";
import {
  Component,
  Show,
  createEffect,
  createSignal,
  onCleanup
} from "solid-js";

type SelfTypingTextProps = {
  children: string;
  onDone?: VoidFunction;
  className?: string;
  caretClassName?: string;
  prefix?: string;
};

const SelfTypingText: Component<SelfTypingTextProps> = ({
  children,
  onDone,
  className,
  prefix,
}) => {
  const [text, setText] = createSignal("");

  createEffect(() => {
    if (text().length !== children.length) {
      const timer = setInterval(() => {
        setText(text() + children.at(text().length));
      }, 50);

      onCleanup(() => clearInterval(timer));
    } else {
      onDone && onDone();
    }
  });

  return (
    <span class={cn("uppercase text-secondary", className)}>
      {prefix && prefix} {text()}
      <Show when={text().length !== children.length}>
        <span class="inline-block text-white bg-white border-none outline-none select-none animate-blink h-min">
          i
        </span>
      </Show>
      <br />
    </span>
  );
};

export default SelfTypingText;
