console.log("Objetos")

// Ejemplo 1: Crear un objeto
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
  name: "Polo",
  age: 39
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObjetc2)

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Milan",
  age: 8,
  nicknames: [
   "Paolo",
    "Fernandez",
    "Lopez"
  ],
  address: {
    zip_code: "77519",
    street: "Paseos NIkte",
    city: "Cancun"
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Milan",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Sultan",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Sultan")