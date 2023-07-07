//Etapa 3

/*Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba 
por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, 
deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior. 

Te sugerimos utilizar this.autos en lugar de autosImportados.

Recordá que cuando trabajamos con Arrays tenemos varios métodos para iterar sobre ellos, y 
uno de ellos nos sirve para buscar. */


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
  }
};

const autoEncontrado = concesionaria.buscarAuto("APL123");
console.log(autoEncontrado);


