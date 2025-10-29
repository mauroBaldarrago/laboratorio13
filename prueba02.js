function filtrarYTransformar(arr) {
  return arr
    .filter(num => num >= 0)    // elimina los negativos
    .map(num => num ** 2)       // eleva al cuadrado
    .reduce((suma, num) => suma + num, 0); // suma todos
}

console.log(filtrarYTransformar([2, -3, 4, -1, 5])); 
// ➜ 45
