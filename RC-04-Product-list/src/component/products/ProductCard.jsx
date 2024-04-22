const ProductCard = ({ price, title, image }) => {
  return (
    <div className="card">
      <div className="price">
        <h3>{price} $</h3>
      </div>
      <img src={image} alt={title} />
      <div className="card_over">
        <h2>{title} </h2>
      </div>
    </div>
  );
};

// const ProductCard = ({ product }) => {
//   const { price, title, image, id } = product;
//   return (
//     <div key={id}>
//       <div>
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt={title} />
//       <div>
//         <h2>{title}</h2>
//       </div>
//     </div>
//   );
// };

export default ProductCard;
