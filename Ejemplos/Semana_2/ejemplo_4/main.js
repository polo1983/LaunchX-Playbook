import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero776 = new Viajero("Polo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero776)
console.log(viajero776.getNameAndUsername()) // Método de la clase padre
console.log(viajero776.getGeneralInfo()) // Método de la clase hija