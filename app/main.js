class World {
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

world.print();