import { links } from "@/components/(user)/navbar/links";

//! Verilmiş href-ə uyğun kateqoriyanı tapır.
 
export const getCategoryByHref = (href: string) => {
  const allLinks = links.flatMap((link) => [
    link,
    ...(link.children ?? []),
  ]);

  return allLinks.find((link) => link.href === href);
};