let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const getIndex = (arr, value) => {
  if (!arr.length) {
    return console.log(-1);
  }

  if (arr.length === 1) {
    return console.log(arr[0] === value ? 0 : -1);
  }

  arr.sort((a, b) => a - b);

  let firstIndex = 0;
  let lastIndex = arr.length;
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    counter += 1;

    if (arr[middleIndex] === value) {
      return console.log(`index: ${middleIndex}, counter: ${counter}`);
    } else {
      if (value < arr[middleIndex]) {
        lastIndex = middleIndex;
      } else {
        firstIndex = middleIndex;
      }
      middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }
  }
};

// let counter = 0;
// const simpleFind = (arr, el) => {
//   for (let index = 0; index < arr.length; index++) {
//     counter += 1;
//     if (arr[index] == el) {
//       return console.log(`index: ${index}, counter: ${counter}`);
//     }
//   }
//   return console.log(`index: -1, counter: ${counter}`);
// };

// simpleFind(array, 8);

getIndex(array, 2);

const validatePhoneNumber = (number) => {
  const template = /^\+375\d{9}$/;
  return template.test(number);
};

console.log(validatePhoneNumber('+375295872321'));
