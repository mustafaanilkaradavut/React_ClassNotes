// console.log("Hello World");

// let x = 5;

// //* Hello Typescript

// let y = "Hello";

//? Buradaki hata JS için hata değil string ataması Typescriptte hata olarak karşımıza çıkar. Çünkü number ataması yapmıştık.

//.. Type Annotation
// const z = (a: any, b: any) => a + b;
// let a: number = 5;
// a = "Hello";
// a = false;
// let b: string = "Hello";
// b = 2;
// let c = false;
// c = true;
// c = 5;
// c = "str";
// console.log(c);

//.. Arrays

// let num: number[] = [1, 2, 3];
// let num2: Array<string> = ["a", "b", "c"]; //* Generic Array Definition
// // let num: number[] = [1, 2, 3, "a"];  hata alırız.

// num.push(4);
// // num.push("4");  hata alırız.
// let emptyArray: string[] = []; //* Empty Array Definition

// //.. Tuples

// let myTuple: [number, boolean, string];
// myTuple = [1, true, "admin"];
// myTuple = [3.14, false, "circle"];
// myTuple.push(2); //! No error

// let myTuple2: [number, string];
// myTuple2 = [0, "user"];
// myTuple2.push(999);
// myTuple2.push(false);  //! Error, Boolean doesn't definition

//.. Tuples Arrays

let myTuple3: [number, string][];

myTuple3 = [
  [1, "jhon"],
  [2, "smith"],
];

// myTuple3.push(["jane", 4]); //! It should be our format
// myTuple3.push([3, "Jane"]); //* okey
// myTuple3.push(false); //! error because boolean değer.

//.. Enum

const enum Color {
  Red,
  Green,
  Blue,
}

//__ const kullanmazsak JS aşağıdaki gibi olur.
/*
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Blue;
console.log(selectedColor);
*/

let selectedColor: Color = Color.Blue;
console.log(selectedColor);

const enum Tshirt {
  Small = "S",
  Medium = "M",
  Large = "L",
}

let userSize: Tshirt = Tshirt.Small;
console.log(userSize);

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = Success + 2,
  BadRequest = NotFound - 4,
  ServerError, //__ Eğer burada değer vermezsek. Vermediğimiz andan itibaren önceki değer +1 şeklinde devam eder.
  userDetail = "ANIL",
  // userError, //__ Bu durumda eğer değerimiz string ise otomatik atama yapamaz hata verir.
}

console.log(StatusCodes.ServerError);

//.. Any Type

let d: any = 4;
d = "Merhaba";
d = false;

let anyArray: any[] = [1, "Selam"];
anyArray.push(true);

let e: boolean = d;

//.. Unknown

let notSure: unknown = 4;
notSure = "Hello";
// notSure.length //__ Bu şekilde yazamayız aşağıda sadece 120. satırda tanımlı olacak şekilde string ataması yaparız.
console.log((notSure as string).length); //! alias yöntemi
console.log((<string>notSure).length); //! generic yöntemi

//.. Void (Return içermeyen fonksiyonların dönüş tipi)

let f: number = 100;

function increase(): void {
  console.log(f);
  f++;
}

increase();

//.. Never (Hiç bir zaman geri dönüşü olmayacak)

// function endessLoop(): never {
//   while (true) {
//     console.log("Using Never Type");
//   }
// }
//! Bunu çağırdığımızda kodumuz ve browser sonsuz döngüye girer ve bilgisayarımızı kitler.

//.. Union Type

let g: string | number = 100;
g = "Union Type";
// g = true; //! error     ->      boolean değer tanımlaması yapmadık.

console.log("*********************************");

//? -------------------------------------------------------------------------- */                                                                            */
//? -------------------------------------------------------------------------- */

//.. Type Narrowing

function checkNumber(n: string | number): void {
  if (typeof n == "number") {
    console.log(n ** 2);
  } else {
    console.log(n.length);
  }
}
checkNumber(2);
checkNumber("Type Narrowing");

//.. Type Aliases

type NewType = number | string;
let h: NewType = 3;

h = "Hello, Type Aliases";

// h = false; //! Error

let k: NewType = "Hi There !";

//? Objects

const car: {
  make: string;
  modal: string;
  year: number;
  readonly lastKM: number;
  features: string[];
} = {
  make: "Toyota",
  modal: "Coralla",
  year: 2020,
  lastKM: 15700,
  features: ["Sunroof", "Airbag", "A/C"],
};

car.make = "Auidi";
// car.make = false; //! error    -->      boolean değer ataması yapamayız.

// car.lastKM = 12000; //! error      -->       Yukarıda bu değere readonly ataması yaptığımız için değişiklik yapamayız.

type car2 = {
  make: string;
  modal: string;
  year: number;
  lastKM: number;
};

const newCar: car2 = {
  make: "Toyota",
  modal: "Coralla",
  year: 2020,
  lastKM: 15700,
};

//.. String Literals

type car3 = "Fiat" | "BMW" | 2000;

let car4: car3 = "Fiat";
let car5: car3 = "BMW";
let car6: car3 = 2000;
// let car6: car3 = "Auidi"; //! Error   -->   Auidi ataması yapamayız çünkü yukarıda Fiat veya BMW olarak atama yaptık.

//.. Intersection

type Book = {
  book_id: number;
  book_name: string;
};
type Author = {
  author_id: number;
  author_name: string;
};

type Product = Book & Author;

const book1: Product = {
  book_id: 1234,
  author_name: "Tolkien",
  book_name: "The Lord of The Rings",
  author_id: 1892,
};

//.. Functions

function selamla(mesaj: string, isim: string): string {
  return `${mesaj + " " + isim}`;
}

console.log(selamla("Good morning", "Paye"));

// selamla("Paye");
// selamla("Paye", "Merhaba", "Anil");
// selamla(123,"Anil")
//! error    -->     Bunların hepsi error olur çünkü biz 2 veri tanımladık ve string. 2'den az/çok, string olmayan ifade kullanamayız.

//? Arrow Functions

let multiply = (x: number, y: number): number => {
  return x * y;
};

//? Optional parameters

// function selamla2(mesaj: string, name: string="user"): string {
function selamla2(mesaj: string, name?: string): string {
  if (!name) {
    name = "user";
  }
  return `${mesaj + " " + name}`;
}

console.log(selamla2("Good morning", "Anil"));
console.log(selamla2("Good morning"));

//? Function - Overloading

function greet(name: string): string;
function greet(name: string, age?: number): string;

function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, my name is ${name} and I am ${age} years old`;
  } else {
    return `Hello, my name is ${name}`;
  }
}

console.log(greet("Sevim"));
console.log(greet("Sevim", 40));
// console.log(greet("Sevim", "40")); //! error    -->     Tanımlı olmayan bir string değer ataması.
// console.log(greet("Sevim", 50, 55)); //! error    -->   2 değer tanımlı fakat biz 3 değer atıyoruz.

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//   return a + b;
// }

// add("merhaba", "43");
// add(43, 2);
