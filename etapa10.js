//Etapa 10

/* Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Luego debemos retornar los que pueda comprar, 
¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

3) Por cada uno de los autos debe de probar si la persona puede comprarlo, 
¿ya hay alguna funcionalidad que me permita hacer esto?. */

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
      },
      autosQuePuedeComprar: function(persona) {
        const autosParaLaVenta = this.autosParaLaVenta();
    
        return autosParaLaVenta.filter(auto => this.puedeComprar(auto, persona));
      }
    };

    const persona = {
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
      };
      
      const autosDisponibles = concesionaria.autosQuePuedeComprar(persona);
      console.log(autosDisponibles);