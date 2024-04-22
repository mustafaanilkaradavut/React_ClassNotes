import { products } from "../../helper/data";
import ProductCard from "./ProductCard";
import "./Products.scss";

//..    Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme.

const ProductList = ({ products }) => {
  console.log(products);

  return (
    <div className="products-list">
      {/* Spread operatörü ile objenin özelliklerini props olarak gönderme */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

//..    Best Practice Alt Componente Gönderme.
//?     Buradan açmadan gönderip alt componente karşılayıo içini açma.

// const ProductList = ({ products }) => {
//   console.log(products);
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

//..    Yolda Destructuring yaparak kullanma.

// const ProductList = ({ products }) => {
//   console.log(products);
//   return (
//     <div className="products-list">
//       {products.map(({ price, title, image, id }) => {
//         return (
//           <div key={id}>
//             <div>
//               <h3>{price}</h3>
//             </div>
//             <img src={image} alt={title} />
//             <div>
//               <h2>{title}</h2>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

//..    Map içinde Destructuring yaparak kullanma.

// const ProductList = ({ products }) => {
//   console.log(products);
//   return (
//     <div className="products-list">
//       {products.map((products) => {
//         const { price, title, image, id } = products;
//         return (
//           <div key={id}>
//             <div>
//               <h3>{price}</h3>
//             </div>
//             <img src={image} alt={title} />
//             <div>
//               <h2>{title}</h2>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

//..    Destructuring yapmadan kullanma.

// const ProductList = ({ products }) => {
//   console.log(products);
//   return (
//     <div className="products-list">
//       {products.map((products) => (
//         <div key={products.id}>
//           <div>
//             <h3>{products.price}</h3>
//           </div>
//           <img src={products.image} alt={products.title} />
//           <div>
//             <h2>{products.title}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default ProductList;
