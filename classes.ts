// Classes não são obrigatórias mas são bastante úteis
// ABSTRACT não posso criar uma classe a partir dela mas pode-se extender a partir dela, ou seja, ela pode ser um modelo para outras classes mas não é possível alterar as informações dela

// Usar o nome da classe com letra maiúscula
abstract class UserAccount {
  // PUBLIC permite qualquer alteração
  public name: string;
  // PROTECTED permite chamar a propriedade dentro da classe, ou das classes extendidas; mas não fora dela
  // protected age: number;
  age: number;

  // método => constructor
  constructor(name: string, age: number) {
    // objeto dessa class => this
    // propriedades => name e age
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

// construção do objeto da classe
const jacque = new UserAccount("Jacqueline", 32);
console.log(jacque); // {name: "Jacqueline", 32}
console.log(jacque.age); // 32
jacque.logDetails; // The player Jacque is 32 years old.

// Extensão de classe

class CharAccount extends UserAccount {
  // PRIVATE não permite que a propriedade a qual ela se destina seja acessada (fora da classe) ou alterada.
  private nickname: string;
  // READONLY pode ser lido mas não editado
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    // SUPER pegará as propriedades da classe superior (acima)
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  // Accessors SET e GET
  // Pegar propriedades dentro da classe
  get getLevel() {
    // Função com mais informações
    console.log("------- GET -------");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }
}

const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
// CharAccount {
//   name: 'John',
//   age: 45,
//   nickname: 'johnmaster',
//   level: 80,
// }

john.logDetails; // The player John is 45 years old.

// Accessors SET e GET
console.log(jacque.getLevel);

jacque.setLevel = 499; // 499
console.log(jacque.setLevel);
