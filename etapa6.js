//Etapa 6

/* María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. 
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. 
Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. 
Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. */

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
      }
    };

    const autos0km = concesionaria.autosNuevos();
    console.log(autos0km);
