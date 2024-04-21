import Header from "./component/header/Header";
import ProductList from "./component/products/ProductList";

import { products, categories } from "./helper/data"; //__ Named export olduğu için süslü içinde yazarız.
console.log(products, categories);

function App() {
  return (
    <div className="App">
      <Header categories={categories} text="Product List" />{" "}
      {/*   key = {value}  */}
      <ProductList products={products} />
    </div>
  );
}
export default App;
