import { ui, useTranslations } from "@/i18n/utils";
import { Dayjs } from "dayjs";

export function formatDuration(
  start: Dayjs,
  end: Dayjs,
  lang: keyof typeof ui
) {
  const t = useTranslations(lang);

  const years = end.year() - start.year();
  const months = Math.abs(end.month() - start.month());
  const result = [
    years > 0 ? `${years} ${t("yearAbbrev")}${years > 1 ? "s" : ""}` : "",
    months > 0 ? `${months} ${t("month")}${lang !== "fr" && months > 1 ? "s" : ""}` : "",
  ].join(" ");

  return result;
}
