//Etapa 4

/*Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, 
en caso de encontrar al automóvil, le asigna el estado de vendido.

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
 Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto, la cual ya 
 nos devuelve el objeto literal a modificar.*/ 
 

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
    }
  };
  
  concesionaria.venderAuto("APL123");