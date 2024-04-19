import Button from "../button/Button";
// import "./Card.css";
import CardStyle from "./Card.module.css";

//* module.css'de derleyici CSS class'larini alarak bunları unique olacak
//* şekilde yeniden adlandırır. (Örnek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

const Card = ({ lang, img }) => {
  return (
    <div>
      {/* <div className="wrapper"> */}
      <div className={CardStyle.wrapper}>
        <h1>{lang}</h1>
      </div>
      <img className={CardStyle.images} src="{img}" alt="{lang}" />
      <Button />
    </div>
  );
};

export default Card;
