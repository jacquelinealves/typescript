/**
 * DECORATORS
 *
 * Feature esperimental no TypeScript e no ECMAScript.
 * Declaração/anotação que pode ser anexada numa propriedade, metódo, parametro ou acessor.
 * Para funcionar é necessário configurar o tsconfig.json com a propriedade "experimentalDecorators: true".
 *
 * @Component
 * @Selector
 * @useState
 *
 * Class decorator
 * Property decorator
 * Method decorator
 * Parameter decorator
 * Acessor decorator
 */

/**
 * FACTORY
 *
 * Função que irá retornar a criação do DECORATOR
 */

// Iniciar um decorator
// Função padrão com parametros por default de acordo com o decorator que se está declarando
function Logger(prefixer: string) {
  // target => constructor
  return (target: any) => {
    console.log(`${prefixer} - ${target}`);
  };
}

@Logger("awesome")
class Foo {}

/**
 * PROPERTY DECORATOR
 */

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;
    const setter = (value: string) => {
      if (value.length < length) {
        console.log(
          `ERROR: você não pode criar ${key} com tamanho menor que ${length}`
        );
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  @minLength(5) // validação: se for menor que 5 = error
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("Interstellar");
console.log(Movie); // Movie { title: 'Interstellar' }

/**
 * CLASS DECORATOR
 *
 * Assim que a classe for criada, ela já roda
 */

function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

// decorator: anotar a versão da API
@setAPIVersion("1.0.0")
console.log(setAPIVersion);


/**
 * METHOD DECORATOR
 *
 * Irá rodar toda vez que o método for criado
 */

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g
  }

  // delay para rodar o método (ms)
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const people = new Greeter("Pessoinha!")
people.greet()

console.log(people.greet());