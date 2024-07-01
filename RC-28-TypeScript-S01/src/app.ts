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


