 //* Ədədi Azərbaycan manatına uyğun formatlayır.
 export const formatPrice = (price: number): string => {
  return `${new Intl.NumberFormat("az-AZ", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)}`;
};