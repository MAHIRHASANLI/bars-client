import { getCategoryByHref } from "@/utils/get_category_by_href";

const MAX_CATEGORY_DEPTH = 2;
const MAX_SLUG_LENGTH = MAX_CATEGORY_DEPTH + 1;

export type ResolvedRoute =
  | { type: "category"; pathname: string }
  | { type: "product"; pathname: string; productId: string };

const toPathname = (segments: string[]) => `/category/${segments.join("/")}`;

const isValidDepth = (segments: string[]) =>
  segments.length >= 1 && segments.length <= MAX_CATEGORY_DEPTH;

const safeDecode = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export function resolveCategoryRoute(rawSlug: string[]): ResolvedRoute | null {
  if (rawSlug.length < 1 || rawSlug.length > MAX_SLUG_LENGTH) return null;

  const slug = rawSlug.map(safeDecode);

  if (isValidDepth(slug) && getCategoryByHref(toPathname(slug))) {
    return { type: "category", pathname: toPathname(slug) };
  }

  const categorySlug = slug.slice(0, -1);
  const productId = slug.at(-1);

  if (
    productId &&
    isValidDepth(categorySlug) &&
    getCategoryByHref(toPathname(categorySlug))
  ) {
    return { type: "product", pathname: toPathname(categorySlug), productId };
  }

  return null;
}