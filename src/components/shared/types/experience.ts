import { Dayjs } from "dayjs";

export type Experience = {
  company: string;
  jobs: Job[];
  logo?: { src: string; alt: string };
};

export type Job = {
  title: string;
  type?: string;
  start: Dayjs;
  end?: Dayjs;
  location: string;
  attendance?: "onsite" | "hybrid" | "remote";
  country: string;
  tags?: string[];
};
