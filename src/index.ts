/*
    ===== Código de TypeScript =====
*/
class Hero {
  alterEgo: string;
  edad: number;
  nombreReal: number;

  imprimirNombre() {
    return this.alterEgo + ' ' + this.nombreReal;
  }
}

const iroman = new Hero();

console.log(iroman)