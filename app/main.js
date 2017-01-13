/*Ejercicio 1: Hola mundo*/

/*class World {
  constructor(message, name) {
    this.message = message;
    this.name = name;
  }
 
  print() {
    $('.title').append(`${this.message} ${this.name}`);
  }
}

const name = "Lemontech";
const world = new World("Hola", name);

world.print();*/

/*Ejercicio 2: Buscar hijos. Retornar el primer elemento.*/

class Selector {
  constructor(parent) {
    this.parent = parent;
    this.children =$(this.parent).children()
  }
  print() {
    console.log(this.children);
  }
}
const selector = new Selector("span");
selector.print();


class FancySelector extends Selector{
  print() {
    console.log(this.children.first());
  }
}
const fancySelector = new FancySelector('span');
fancySelector.print();