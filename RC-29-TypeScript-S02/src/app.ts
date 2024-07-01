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
