/*
// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']
*/

const exchangeWith = (a, b) => {
  console.log('here is a at first: ' + a);
  console.log('here is b at first: ' + b);
  let placeHolder;
  placeHolder = a.reverse();
  a = b.reverse();
  b = placeHolder;
  console.log('here is a in the end: ' + a);
  console.log('here is b in the end: ' + b);
}