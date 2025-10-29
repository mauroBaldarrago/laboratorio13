function invertirMap (map) {
    const nuevoMap = new Map();

    for (let [clave, valor] of map) {
        nuevoMap.set(valor, clave);
    }

    return nuevoMap;
}
let capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"],
    ["Argetina", "Buenos Aires"],
    ["Colombia", "Bogotá"]
]);

console.log(invertirMap(capitales));