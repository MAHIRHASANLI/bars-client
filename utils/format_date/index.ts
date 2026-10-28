    
//! Tarixi Azərbaycan dilində formatlayır.
export const formatDate = (
  date: string | Date
): string => {
  return new Intl.DateTimeFormat("az-AZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};
