export const getDateDifference = (date: string): string => {
  const now = new Date();
  const publishedDate = new Date(date);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const published = new Date(
    publishedDate.getFullYear(),
    publishedDate.getMonth(),
    publishedDate.getDate()
  );

  const difference = Math.floor(
    (today.getTime() - published.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (difference === 0) return "Bu gün";
  if (difference === 1) return "Dünən";

  return `${difference} gün əvvəl`;
};