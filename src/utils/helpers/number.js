export const addCommas = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

export const NumberFormatter = (nominal, currency) => {
  if (!nominal) {
    return 0;
  }
  let rupiah = "";
  const nominalRef = nominal?.toString().split("").reverse().join("");
  for (let i = 0; i < nominalRef.length; i++) {
    if (i % 3 === 0) {
      rupiah += `${nominalRef.substr(i, 3)}.`;
    }
  }

  if (currency) {
    currency = currency.replace(/\s/g, " ");
    return (
      currency +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }
  return rupiah
    .split("", rupiah.length - 1)
    .reverse()
    .join("");
};

export const formatDecimal = (number) => {
  if (number === "" || number === null) {
    return 0;
  }
  if (typeof number === "string") {
    number = number.replaceAll(".", "");
    number = number.replace(/[[\]&]+/g, "");
  }
  return parseFloat(number)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const currencyInt = (number) => {
  if (typeof number === "string") {
    number = number.replaceAll(".", "");
  }
  return parseInt(number, 10);
};

export const addLeadingZeros = (num, totalLength) => {
  return String(num).padStart(totalLength, "0");
};

export const numberRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;