import { useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("MAK");

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <hr />
      {/* <HeaderMemo user={user} /> */}
      <div className="">
        <p className="text-center">User : {user}</p>

        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setUser("Mustafa Anil Karadavut")}>
          Change Name
        </button>
      </div>
      <hr />
      {/* <HeaderMemo user={count} /> */}
      {/* Sürekli değişen değerlerimiz olacaksa memo mantıklı değildir.  */}
      <hr />
      <TaxComp />
    </div>
  );
}

export default App;
