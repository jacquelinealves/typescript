// Funciona somente no TS
// INTERFACE: Conjunto de dados pra descrever a estrutura de um OBJETO

interface Game {
  title: string;
  description: string;
  readonly genre: string; // genre será chamado mas o valor não poderá ser alterado
  platform?: string[]; // ? opcional
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS4", "PS5"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou); // The Last of Us
tlou.getSimilars(tlou.title); // Similar games to The Last of Us: Uncharted, A Plague Tale, Metro

// Ao invés de declarar getSimilars como opcional, o ideal é criar uma condição para ela
if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

// EXTENDS
// Extensão da classe Gaem
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS4", "PS5"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"],
};

// IMPLEMENT
// a classe que é implementada, precisa ter todos os tipos que são descritos na interface
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t,
    this.description = d,
    this.genre = g,
  }
}