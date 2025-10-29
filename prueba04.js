function añadirSet(...nombre) {
    let nombres = new Set();
    for (let n of nombre) {
        nombres.add(n);
    }
    
    return nombres;
}

console.log(añadirSet("Daniel", "Mauro", "Juan", "Daniel", "Juan"));


