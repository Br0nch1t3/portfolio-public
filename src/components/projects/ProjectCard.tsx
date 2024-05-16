import { Component, For, JSXElement, createSignal } from "solid-js";
import Tag from "../shared/Tag";
import GitIcon from "../shared/icons/GitIcon";

type ProjectCardProps = {
  date: string;
  title: string;
  subtitle: string;
  tags: string[];
  children: JSXElement;
  languages: string[];
  source: string;
  image: ImageMetadata;
};

const ProjectCard: Component<ProjectCardProps> = (props) => {
  const [open, setOpen] = createSignal(false);

  return (
    <div
      class="flex overflow-hidden p-5 rounded-xl border animate-inview max-2xl:flex-col bg-background-light lg:p-10 border-border"
      onClick={() => {
        setOpen(!open());
      }}
    >
      <img
        src={props.image.src}
        alt={props.title}
        width={props.image.width}
        height={props.image.height}
        class="object-contain rounded-lg xl:max-w-screen-lg"
      />
      <div class="flex flex-col mt-10 xl:ml-20 lg:mt-20 2xl:mt-0">
        <span class="text-3xl font-bold uppercase lg:text-5xl">
          {props.title}
        </span>
        <span class="mb-4 text-xl font-normal uppercase lg:text-3xl">
          {props.subtitle}
        </span>
        <div class="flex flex-wrap gap-2 mb-5 lg:mb-5">
          <For each={props.tags}>{(tag) => <Tag>{tag}</Tag>}</For>
        </div>
        <span class="slate-200">{props.children}</span>
        <a
          href={props.source}
          target="_blank"
          class="flex items-center mx-auto mt-10 mb-1 space-x-2 2xl:mt-auto hover-underline"
        >
          <GitIcon class="size-8" />
          <span class="text-2xl capitalize">source</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
