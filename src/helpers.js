export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
export const truncateStr = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
