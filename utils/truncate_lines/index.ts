/**
 * Mətni göstərilən maksimum sətir sayına qədər qısaldır.
 */
export const truncateLines = (
  text: string,
  maxLines: number
): string => {
  if (maxLines < 1) {
    throw new Error("Sətir sayı minimum 1 olmalıdır.");
  }

  const lines = text.split("\n");

  if (lines.length <= maxLines) {
    return text;
  }

  return `${lines.slice(0, maxLines).join("\n").trimEnd()}...`;
};

// truncateLines("Qaz təzyiq tənzimləyicisi\nSənaye qaz avadanlığı\nYüksək keyfiyyət", 2);
// "Qaz təzyiq tənzimləyicisi\nSənaye qaz avadanlığı..."