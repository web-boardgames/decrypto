export const getRandomNumbers = (length: number, max: number) => {
  let arr = [];
  while (arr.length < length) {
    let r = Math.floor(Math.random() * max);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};
