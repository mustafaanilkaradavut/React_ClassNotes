import { useState } from "react";

// const UseStateObject = () => {
//   const [name, setName] = useState("Paye");
//   const [surname, setSurname] = useState("Karadavut");
//   const [job, setJob] = useState("Tester");
//   const [salary, setSalary] = useState(50000);

//   const changeName = () => {
//     setName("Atakişi");
//   };
//   return (
//     <div>
//       <h1>UseStateObject</h1>
//       <h2>NAME:{name}</h2>
//       <h2>SURNAME:{surname}</h2>
//       <h2>JOB:{job}</h2>
//       <h2>SALARY:{salary}</h2>
//       {/* //* Bu kısmı boş bırakabiliriz, isimlerin önemi yoktur. */}

//       <button onClick={changeName}>Change Name</button>
//       <button onClick={() => setSurname("Macaron")}>Change surname</button>
//       <button onClick={() => setJob("Developer")}>Change job</button>
//       <button onClick={() => setSalary(salary + 5000)}>Salary up</button>
//       <button onClick={() => setSalary(salary - 1000)}>Salary down</button>
//     </div>
//   );
// };

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Paye",
    surname: "Atakişi",
    job: "Tester",
    salary: 50000,
  });

  return (
    <>
      <h1>UseState Object Example</h1>

      <h2>Name:{person.name}</h2>
      <h2>Surname:{person.surname}</h2>
      <h2>Job:{person.job}</h2>
      <h2>Salary:{person.salary}</h2>

      <button onClick={() => setPerson({ ...person, name: "Anil" })}>
        Change Name
      </button>
      <button onClick={() => setPerson({ ...person, surname: "Karadavut" })}>
        Change Surname
      </button>
      <button onClick={() => setPerson({ ...person, job: "Developer" })}>
        Change Job
      </button>
      <button
        onClick={() => setPerson({ ...person, salary: person.salary + 5000 })}>
        Salary Up
      </button>
      <button
        onClick={() => setPerson({ ...person, salary: person.salary - 1000 })}>
        Salary Down
      </button>
    </>
  );
};

export default UseStateObject;
