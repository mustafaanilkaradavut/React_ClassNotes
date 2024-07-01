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

function endessLoop(): never {
  while (true) {
    console.log("Using Never Type");
  }
}
//! Bunu çağırdığımızda kodumuz ve browser sonsuz döngüye girer ve bilgisayarımızı kitler.


