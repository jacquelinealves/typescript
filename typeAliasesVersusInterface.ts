/*
 *****
 * ALIASES
 *****
 */

/*
Mais recomendado na maioria das vezes
Mais fácil fazer intersessões/uniões
Trabalhar mais facilmente com tipos primitivos
React - Props: utilizar types
Como não podemos duplicar types, acaba por ser mais seguro
*/

// definição
type GameT = {
  title: string;
};

type DLC = {
  extra: string;
};

// intersection
type GameCollectionT = GameT & DLC;

// implements
class CreateGameT implements GameCollectionT {}

// declarar função
type getSimilarsT = (title: string) => void;

// ============== Diferenças ================ //
// permite declarar tipos primitivos
type IDT = string | number;

// pode declarar tuplas normalmente
type TupleT = [number, number];
[1, 2] as TupleT;

// apenas uma declaração por escopo
type JQuery = { a: string };
type JQuery = { b: string }; // repetição não é permitido

/*
 *****
 * INTERFACE
 *****
 */

/* 
Vantagens:
Quando estiver criando libs, prefira interfaces, porque são mais extensivas

Criando objetos/classes (POO)
*/

// definição
interface Game {
  title: string;
}

interface DLCI {
  extra: string;
}

// intersection / extend
interface GameCollection extends Game, DLCI {}

// implemnets
class CreateGame implements GameCollection {}

// declarar função
interface getSimilars {
  (title: string): void;
}

// ============== Diferenças ================ //
interface ID extends number {}

interface Tuple {
  0: number;
  1: number;
}

[1, 2, 3, 4] as Tuple;

// pode ter múltiplas declarações, o interface agrupa os que possuem o mesmo nome

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo",
};
