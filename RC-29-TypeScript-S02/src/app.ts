//.. Class Example

class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}

let emp1 = new Employee(1, "Paye");
console.log(emp1);

//.. Interface

interface Point {
  x: number;
}
interface Point {
  y: number;
}

const point1: Point = {
  x: 30,
  y: 50,
};

/* -------------------------------------------------------------------------- */
interface Shape {
  width: any;
  radius: number;
  height: any;
  kind: "circle" | "rectangle";
}

interface Circle extends Shape {
  kind: "circle";
  radius: number;
}

interface Rectangle extends Shape {
  kind: "rectangle";
  width: number;
  height: number;
}

function calculateArea(shape: Circle): number;
function calculateArea(shape: Rectangle): number;
function calculateArea(shape: Shape): number | undefined {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      console.log("Someting went wrong");
  }
}

const myCircle: Circle = {
  kind: "circle",
  radius: 10,
  width: undefined,
  height: undefined,
};
const myRect: Rectangle = {
  kind: "rectangle",
  height: 4,
  width: 5,
  radius: 0,
};
console.log(calculateArea(myCircle));
console.log(calculateArea(myRect));
