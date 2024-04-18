//?     Default exportun importu. İstediğimiz isimle import edebiliriz.
//* import MyCat from "../components/Cat";

import Cat from "./components/Cat";

function App() {
  return (
    <div className="App">
      <Cat
        name="Trinity"
        img="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg"
        color="orange"
        isBlueEyed={false}
      />
      <Cat
        name="Macaron"
        img="https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_1280.jpg"
        color="yellow"
        isBlueEyed //?   Bu şekilde gönderim true olarak kabul edilir.
      />
      <Cat
        name="Tomato"
        img="https://cdn.pixabay.com/photo/2023/07/19/04/56/european-shorthair-8136065_1280.jpg"
        color="blue"
        isBlueEyed={true}
      />
    </div>
  );
}

export default App;
