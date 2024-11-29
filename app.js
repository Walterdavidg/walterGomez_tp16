const bicicletas = require('./datosBici'); 

console.log('Listado de bicicletas:', bicicletas);

const dhBici = {
    bicicletas: bicicletas,

    buscarBici: function (id) {
        const biciEncontrada = this.bicicletas.filter(bici => bici.id === id);
        return biciEncontrada.length > 0 ? biciEncontrada[0] : null;
    },

    venderBici: function (id) {
        const bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = true;
            return bici;
        } else {
            return 'Bicicleta no encontrada';
        }
    },

    biciParaLaVenta: function () {
        return this.bicicletas.filter(bici => !bici.vendida);
    },

    totalDeVentas: function () {
        return this.bicicletas
            .filter(bici => bici.vendida)
            .reduce((acum, bici) => acum + bici.precio, 0);
    },

    aumentoBici: function (porcentaje) {
        return this.bicicletas.map(bici => ({
            ...bici,
            precio: bici.precio + bici.precio * (porcentaje / 100)
        }));
    },

    biciPorRodado: function (rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado);
    },

    listarTodasLasBici: function () {
        this.bicicletas.forEach(bici => {
            console.log(`ID: ${bici.id}, Marca: ${bici.marca}, Modelo: ${bici.modelo}, Rodado: ${bici.rodado}, Precio: $${bici.precio}, Vendida: ${bici.vendida ? 'Sí' : 'No'}`);
        });
    }
};

console.log('Bicicleta con ID 2:', dhBici.buscarBici(2));
console.log('Bicicleta con ID 6 (no existe):', dhBici.buscarBici(6));

console.log('Vender bicicleta con ID 3:', dhBici.venderBici(3));
console.log('Intentar vender bicicleta con ID 6 (no existe):', dhBici.venderBici(6));

console.log('Bicicletas para la venta:', dhBici.biciParaLaVenta());

console.log('Total de ventas realizadas:', dhBici.totalDeVentas());

console.log('--- Función aumentoBici ---');
console.log(dhBici.aumentoBici(10));

console.log('--- Función biciPorRodado ---');
console.log(dhBici.biciPorRodado(29));
console.log(dhBici.biciPorRodado(26));

console.log('--- Función listarTodasLasBici ---');
dhBici.listarTodasLasBici();