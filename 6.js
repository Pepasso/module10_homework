function checkArrayType(arr) {
  return arr.every((e, i, a) => e === a[0]);
}

console.log(checkArrayType(["apple", "apple", "apple", "apple"]));
console.log(checkArrayType([1, 3, 2, 3]));