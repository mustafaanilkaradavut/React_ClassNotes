import Card from "./components/card/Card";

import data from "./data";
function App() {
  console.log(data);
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>LANGUAGES</h2>

      {/* //__ Birden fazla statement kullanılacaksa o zama fonksiyonun süslü ve return keyword'ü kullanması gerekir. */}

      {/* //* Each child in a list should have a unique "key" pro. React liste içindeki her bir elemanının unique bir key'e sahip olmasını ister.   Bu unique key eğer varsa id'ler olabilir.*/}

      {/* //!     RRENDERİNG LIST  */}

      {data.map((item, i) => {
        return <Card key={item.id} lang={item.language} img={item.img} />;
      })}
      {/* <Card lang={data[0].language} img={data[0].img} />
      <Card lang={data[1].language} img={data[1].img} />
      <Card lang={data[2].language} img={data[2].img} /> */}
    </div>
  );
}

export default App;
