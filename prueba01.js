function imprimirArray(array) {
    function doblarNumeros (array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] * 2;
        }
        return array;
    }
    let arrayDoble = doblarNumeros(array);
    for (let i = 0; i < arrayDoble.length; i++) {
        console.log(arrayDoble[i]);
    }
}

let arrayNumeros = [1, 3, 4, 10, 20, 40];
imprimirArray(arrayNumeros);
