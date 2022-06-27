// как и все prompt работает только в среде Браузера
var example = +prompt('Введите значение', '');
var result = example % 2;
var test = isNaN(example);
if (typeof example === "number") {
  switch (result) {
    case 0:
      console.log('чётное');
      break;
    case 1:
      console.log('нечётное');
      break;
  }
  switch (test) {
    case true:
      console.log('Упс, кажется, вы ошиблись');
      break;
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}

console.log(example);