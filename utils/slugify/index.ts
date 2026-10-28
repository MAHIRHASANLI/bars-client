// * Mətni URL üçün uyğun slug formasına çevirir.

export const slugify = (text: string): string => {
  const azCharacters: Record<string, string> = {
    ə: "e",
    Ə: "e",
    ı: "i",
    I: "i",
    İ: "i",
    ş: "s",
    Ş: "s",
    ç: "c",
    Ç: "c",
    ö: "o",
    Ö: "o",
    ü: "u",
    Ü: "u",
    ğ: "g",
    Ğ: "g",
  };

  return text
    .trim()
    .replace(/[əƏıIİşŞçÇöÖüÜğĞ]/g, (char) => azCharacters[char])
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
// slugify("Mərmər Yapışdırıcıları");
// "mermer-yapisdiricilari"