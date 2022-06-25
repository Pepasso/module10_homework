function Even(K) {
  return K % 2 == 0;
}

function Odd(L) {
  return L % 2 == 1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, "as"];
for (var i = 0, k = 0, l = 0; i < arr.length; i++) {
  if (Even(arr[i])) {
    k++;
  } else if (Odd(arr[i])) {
    l++;
  } else if
}

console.log(k + ', ' + l);