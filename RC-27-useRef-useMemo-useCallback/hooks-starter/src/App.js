import { useState, useRef, useEffect, memo, useMemo, useCallback } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";
import axios from "axios";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("MAK");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
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

  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    // console.log(data);
    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  //.. Yukarıdaki işlende tüm sayfa render olur ve filtered çalışmaz. O yüzden useMemo kullanırız.

  const filteredMemoData = useMemo(() => {
    console.log("UseMemo working on the process");
    return data.filter((product) =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [data, search]);

  // const calculation = expensiveCalculation(count);
  // const calculationMemo = useMemo(
  //   () => expensiveCalculationMemo(count),
  //   [count]
  // );
  //__ useMemo Referansı sabitlenmiş oluyor ve hesaplamanın sonucunu belleğe alıyor.

  const handleClear = () => {
    setSearch("");
  };

  const handleClearCallback = useCallback(() => {
    setSearch("");
  }, []);

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

      <hr />
      {/* <UseRefComp /> */}
      <hr />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* <Card data={filteredData} /> */}
      {/* <Card data={filteredMemoData} /> */}

      <hr />

      {/* <p>Expensive Calculation : {calculation}</p> */}
      {/* <p>Expensive Calculation : {calculationMemo}</p> */}

      <hr />

      {/* <ClearButton handleClear={handleClear} /> */}
      <ClearButton handleClear={handleClearCallback} />
    </div>
  );
}

export default App;

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 100000000000000; i++) {
//     num += 1;
//   }
//   console.log("Calculating completed !");
//   return num;
// };

const expensiveCalculationMemo = (num) => {
  console.log("Calculating Memo...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  console.log("Calculating completed !");
  return num;
};

//.. React'in useCallback Hook'unu React'in useMemo Hook'u ile karıştırmamak gerekiyor.
//.. useCallback; işlevleri hafızaya almak için kullanılırken,
//.. useMemo; değerleri hafızaya almak için kullanılır.

//? React'ın useCallback Hook'unu React'in memo API'si ile karıştırmayalım.
//? useCallback; işlevleri not almak için kullanırken,
//? React memo; yeniden oluşturmaları önlemek için React bileşenlerini sarmak için kullanılır.

//* React'in useRef Hook'unu React'ın useState hooku ile karıştırmayalım.
//* useRef; component'in tekrar render olmasını tetiklemez,
//* useState; bir değişken değiştinde useState component'in tekrar render olmasını tetikler.
