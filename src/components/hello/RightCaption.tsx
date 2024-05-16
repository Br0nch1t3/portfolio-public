import { Component, Show, createSignal } from "solid-js";
import SelfTypingText from "../shared/SelfTypingText";

export type RightCaptionProps = {
  subtitle: string
}

const RightCaption: Component<RightCaptionProps> = (props) => {
  const [typingDone, setTypingDone] = createSignal(false);

  return (
    <div id="self-typing-text-container">
      <SelfTypingText onDone={() => setTypingDone(true)} className="font-mono">
        hugo mialhe
      </SelfTypingText>
      <Show when={typingDone()}>
        <div class="relative whitespace-nowrap overflow-x-clip lg:w-full">
          <SelfTypingText
            className="text-2xl text-white normal-case lg:text-5xl lg:absolute"
          >
            {props.subtitle}
          </SelfTypingText>
        </div>
      </Show>
    </div>
  );
};

export default RightCaption;
