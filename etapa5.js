//Etapa 5

/*La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos 
para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, 
usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer 
los autos que ya fueron vendidos.


Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. 
Tené en cuenta que estamos optimizando nuestro código, por lo cual, 
deberíamos utilizar el método filter.*/ 

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
      }
    };
    
    // Ejemplo de uso de la función autosParaLaVenta:
    const autosDisponibles = concesionaria.autosParaLaVenta();
    console.log(autosDisponibles);