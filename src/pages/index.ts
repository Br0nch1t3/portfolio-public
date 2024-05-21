import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect, preferredLocale }) => {
  console.log(preferredLocale)

  return redirect(`/${preferredLocale ?? "fr"}`, 302);
}