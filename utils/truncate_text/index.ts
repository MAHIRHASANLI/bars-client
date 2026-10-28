
/**
 * Mətni göstərilən maksimum uzunluğa qədər qısaldır.
 */
export const truncateText = (
  text: string,
  maxLength: number
): string => {
  if (maxLength < 0) {
    throw new Error("maxLength mənfi ola bilməz.");
  }

  if (text.length <= maxLength) {
    return text;
  }

  if (maxLength <= 3) {
    return ".".repeat(maxLength);
  }

  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
};
// truncateText("Qaz təzyiq tənzimləyicisi", 15);
// "Qaz təzyiq..."