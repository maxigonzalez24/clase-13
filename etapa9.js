//Etapa 9

/* Muy contento el equipo por cómo viene el desarrollo, por la tarde, 
María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. 
Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. 
Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. 
Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro
 un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. */

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
      },
      puedeComprar: function(auto, persona) {
        return persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas;
      }
    };

    const persona = {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
      };
      
      const auto = concesionaria.autos[0]; 
      
      const puedeComprar = concesionaria.puedeComprar(auto, persona);
      console.log(puedeComprar);