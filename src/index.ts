/*
    ===== Código de TypeScript =====
*/
class Hero {
  // alterEgo: string;
  // edad: number;
  // nombreReal: number;
  constructor( 
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {}
}

const iroman = new Hero('Ironman', 45, 'Tony');

console.log(iroman)