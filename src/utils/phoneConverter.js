export const convertPhoneNumber = (number) => {
  if (number && number.length === 10) {
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)} ${number.slice(6)}`;
  } else return number;
};
