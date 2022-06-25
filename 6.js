function checkArrayType(arr) {
  return arr.every((e, i, a) => e === a[0]);
}

console.log(checkArrayType([3, 3, 3, 3]));
console.log(checkArrayType([1, 3, 2, 3]));