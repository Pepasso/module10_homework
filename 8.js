let map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");
map.set("test", "string");
map.set(333, "number");
map.set(false, "boolean");
for (let pair of map.entries()) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}