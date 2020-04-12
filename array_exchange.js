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
  let aCounter = a.length - 1;
  let bCounter = b.length - 1;
  while(aCounter > 0) {
    let first = a.shift();
    a.splice(aCounter, 0, first);
    aCounter--;
  }
  while(bCounter > 0) {
    let first = b.shift();
    b.splice(bCounter, 0, first);
    bCounter--;
  }

  placeHolder = a;
  a = b;
  b = placeHolder;
  console.log('here is a after: ' + a);
  console.log('here is b ater: ' + b);
}