//Etapa 7

/*El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. 
A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, 
pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

¿Te acuerdas cuál es el método de Array con el que puedes generar un nuevo Array? */

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
      }
    };

    const ventas = concesionaria.listaDeVentas();
    console.log(ventas);