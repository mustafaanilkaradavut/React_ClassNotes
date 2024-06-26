import { useState, useRef } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("MAK");
  const [taxDataState, setTaxDataState] = useState({ taxRate: 0.18, ship: 25 });
  //__ ilk oluşumda referansını tanımlıyor ve o referans sabit kalıyor.

  // const taxData = {
  //   taxRate: 0.18,
  //   ship: 25,
  // };
  //__ Her render bellekteki referansı değiştiriyor.

  //! useRef kullanılırken  useState hook'u kullanılmaz.
  const taxDataRef = useRef({
    taxRate: 0.18,
    ship: 25,
  });
  //__ Hafızadaki referansı sabit ama kendisi değişebilir olan verileri tanımlamak istiyor.

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
      {/* <TaxComp taxData={taxData} />  Non Primitive type olarak gönderimde her render edilişte referans değiştiği için memo değişiklik varmış gibi algılayıp TaxComp yeniden render eder.*/}

      {/* <TaxComp taxData={taxDataState} /> */}
      <TaxComp taxData={taxDataRef} />
    </div>
  );
}

export default App;
