let x = true;
let type = typeof (x);
switch (type) {
  case 'string':
    console.log('X - строка');
    break;
  case 'boolean':
    console.log('X - логическое');
    break;
  case 'number':
    console.log('X - число');
    break;
  default:
    console.log('Тип x не определён')
}