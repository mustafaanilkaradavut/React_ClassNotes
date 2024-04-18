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
      />
      <Cat />
      <Cat />
    </div>
  );
}

export default App;
