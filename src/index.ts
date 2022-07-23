/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Merss',
  detalles: {
    autor: 'Mary K',
    anio: 2003
  }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual de: ', volumen)
console.log('El segundo actual de: ', segundo)
console.log('El cancion actual de: ', cancion)
console.log('El autor es: ', autor)