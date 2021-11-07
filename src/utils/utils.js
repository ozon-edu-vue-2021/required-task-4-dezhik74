export const isElementInArray = function (elem, arr) {
  const foundedElem = arr.find((item) => item === elem);
  return !!foundedElem;
};
