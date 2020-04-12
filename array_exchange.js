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
  let newA = [];
  let newB = [];
  for(let i = a.length - 1; i > -1; i--) {
    newB.push(a[i]);
  }
  for(let h = b.length - 1; h > -1; h--) {
    newA.push(b[h]);
  }
  a = newA;
  b = newB;
}