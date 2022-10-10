const formatNumberStar = (number: number) => {
  if (number === 1 || number === 2 || number === 3 || number === 4 || number === 5) {
    return `${number}.0`;
  }
  return number;
};
export default formatNumberStar;
