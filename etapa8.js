//Etapa 8

/* Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, 
que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. 
Acá el único requerimiento técnico explícito es que utilices la función reduce. */

const autosImportados = require('./etapa1');

 const concesionaria = {
    autos: autosImportados,
    
    buscarAuto: function(patente) {
      for (let i = 0; i < this.autos.length; i++) {
        if (this.autos[i].patente === patente) {
          return this.autos[i];
        }
      }
      return null;
    },
  
    venderAuto: function(patente) {
      const autoEncontrado = this.buscarAuto(patente);
      if (autoEncontrado) {
        autoEncontrado.vendido = true;
        console.log("El auto con patente " + patente + " ha sido vendido.");
      } else {
        console.log("No se encontró ningún auto con la patente " + patente + ".");
      }
    },
    autosParaLaVenta: function() {
        return this.autos.filter(auto => !auto.vendido);
      },
      autosNuevos: function() {
        return this.autosParaLaVenta().filter(auto => auto.km < 100);
      },
      listaDeVentas: function() {
        const autosVendidos = this.autos.filter(auto => auto.vendido);
        return autosVendidos.map(auto => auto.precio);
      },
      totalDeVentas: function() {
        const ventas = this.listaDeVentas();
        if (ventas.length === 0) {
          return 0;
        }
        return ventas.reduce((total, venta) => total + venta);
      }
    };

    const totalVentas = concesionaria.totalDeVentas();
    console.log(totalVentas);