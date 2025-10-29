function reordenarPalabras(oracion) {
    let palabras = oracion.split(" ");
    palabras = palabras.map(p => p.toUpperCase());
    palabras.sort();

    return palabras
}

console.log(reordenarPalabras("sol luna estrella planeta"));