let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id:${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`El empleado ${empleado.nombre} no posee un salario`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `El empleado ${empleado.nombre} tiene un salario de ${salario.salario}`;
}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));