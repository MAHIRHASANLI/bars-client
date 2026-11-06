import { links } from "@/components/(user)/navbar/links";

const linkMap = new Map(
  links.flatMap((link) => [link, ...(link.children ?? [])]).map((l) => [l.slug, l])
);

//! Verilmiş href-ə uyğun kateqoriyanı tapır.
export const getCategoryByHref = (slug: string) => linkMap.get(slug);