function contarLetras (texto) {
    texto = texto.toLowerCase();
    const contador = {};

    for (let letra of texto) {
        if (letra === " ") continue;

        if (contador[letra]) {
            contador[letra]++;
        } else {
            contador[letra] = 1;
        }
    }

    return contador;
}

console.log(contarLetras("Banana"));