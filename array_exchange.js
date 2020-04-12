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
  console.log('here is a before: ' + a);
  console.log('here is b before: ' + b);
  let placeHolder;
  let counter = 0;
  while(counter < a.length + 1) {
    let first = a.shift();
    a.push(first);
    counter++;
  }
  counter = 0;
  while(counter < b.length + 1) {
    let first = b.shift();
    b.push(first);
    counter++;
  }
  placeHolder = a;
  a = b;
  b = placeHolder;
  console.log('here is a after: ' + a);
  console.log('here is b ater: ' + b);
}