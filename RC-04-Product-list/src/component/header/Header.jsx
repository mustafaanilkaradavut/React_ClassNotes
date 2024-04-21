import HeaderStyles from "./Header.module.scss";

const Header = ({ categories, text }) => {
  return (
    <div className={HeaderStyles.header}>
      <h1>{text}</h1>
      <div className={HeaderStyles.btns}>
        {categories.map((item) => (
          <button key={item}>{item}</button> //__ Burada key ataması yapmak zorundayız yoksa hata alırız. Aşağıdaki gibi.
          // Warning: Each child in a list should have a unique "key" prop.
        ))}
      </div>
    </div>
  );
};

//! -------------------------------------------------------------------------- */
//! -------------------------------------------------------------------------- */

// const Header = (props) => {

//__ prop = proporties, gönderdiğimiz verileri çektiğimiz bir uygulamadır.
//   console.log(props);

//   const { categories, text } = props;

//   return (
//     <div>
//       <h1>Header</h1>
//     </div>
//   );
// };

export default Header;
