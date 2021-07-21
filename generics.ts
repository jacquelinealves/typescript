/**
 * GENERICS
 *
 * Permite que dentro de uma línguagem tipada, tenhamos algum tipo de flexibilidade
 */

/**
 * Valores default
 * S => State
 * T => Type
 * V => Value
 * E => Element
 */

// () parenteses = atributos/parâmetros
// <> tipos = genéricos

type numOrStr = number | string;

function useState<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState("foo"); // lê uma string
console.log(newState.getState());

newState.setState(false); // error por não atender aos tipos definidos
console.log(newState.getState());

/**
 * No React usa-se bastante o generic da seguinte forma
 * React.FC<Props, States>
 */
