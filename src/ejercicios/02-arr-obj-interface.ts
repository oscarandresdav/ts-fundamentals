/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];
habilidades.push('Hashes');

console.log(habilidades);

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  publoNatal?: string;
}

const personaje: Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.publoNatal = 'Pueblo Paleta';

console.table(personaje);