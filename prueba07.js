function contarPalabras (texto) {
    const palabras = texto.toUpperCase().split(" ");
    let map = new Map();

    for (let palabra of palabras) {
        if (map.has(palabra)) {
            map.set(palabra, map.get(palabra) + 1);
        } else {
            map.set(palabra, 1);
        }
    }

    return map;
}

console.log(contarPalabras("sol luna sol sol estrella luna"));