function gestionarEmpleados(empleados) {
  const resultado = {};

  for (let emp of empleados) {
    const { area, nombre, salario } = emp;

    if (!resultado[area]) {
      resultado[area] = {
        empleados: [],
        totalSalario: 0
      };
    }

    resultado[area].empleados.push(nombre);
    resultado[area].totalSalario += salario;
  }

  for (let area in resultado) {
    const datos = resultado[area];
    const promedio = datos.totalSalario / datos.empleados.length;

    resultado[area] = {
      empleados: datos.empleados,
      promedio: (promedio.toFixed(2))
    };
  }

  return resultado;
}

const listaEmpleados = [
  { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
  { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
  { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
  { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

console.log(gestionarEmpleados(listaEmpleados));
