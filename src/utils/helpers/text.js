export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

export const padWithLeadingZeros = (num, totalLength) => {
  return String(num).padStart(totalLength, '0');
}