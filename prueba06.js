function calcularPrecio(map, listaCompras) {
    let total = 0;
    for (let item of listaCompras) {
        if (map.has(item)) {
            total += map.get(item);
        }
    }
    return total;
}

let map = new Map([
    ["Azucar", 10],
    ["Pan", 2],
    ["Pollo", 15],
    ["Tomates", 4]
])
let compras = ["Pan", "Pollo", "Pan", "Tomates"];

console.log("Precio total:", calcularPrecio(map, compras));
