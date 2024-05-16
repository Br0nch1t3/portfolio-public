import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect, currentLocale }) => {
  return redirect(`/${currentLocale ?? "fr"}`, 302);
}