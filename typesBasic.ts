// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (anything) [Evitar usar]
let coisa: any;
coisa = [1];

// void (empty)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never (nunca vai retornar)
function errror(): never {
  throw new Error("Error");
}

// object
let cart: object;
cart = {
  key: "fi",
};
