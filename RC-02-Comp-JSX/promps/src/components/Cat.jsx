//?     import React from "react";
//*     React importu artık zorunda değildir. Yazmak ve yazmamak bizim tercihimizdir.

//?     Named exportun importu, süslü içinde ve aynı isimde import edilmeli.
import { Name } from "./Name";

//__ Componentler function dec. veya arrow function ile oluşturulabilir.

//!         promp ettiğimiz yöntem ;
// const Cat = (props) => {
//   return (
//     //..        JSX ifadeleri birden fazla ise mutlaka bir parent (div) ile sarmalanmalıdır.
//     <div>
//       <Name />
//       <img src={props.img} alt="cat-img" height="400px" />
//       <p style={{ backgroundColor: props.color }}> Color: {props.color}</p>
//       <hr />
//     </div>
//   );
// };

const Cat = ({ name, img, color = "grey", isBlueEyed }) => {
  //!      destraction : const {name, img, color} = props
  return (
    //..        JSX ifadeleri birden fazla ise mutlaka bir parent (div) ile sarmalanmalıdır.
    <div>
      <Name name={name} />
      //__ JSX içinde if/else kullanılamaz. Ternary kullalanmak gerekir.
      <p>Blue eyed? : {isBlueEyed ? "Yes" : "No"} </p>
      <img src={img} alt="cat-img" height="400px" />
      <p style={{ backgroundColor: color }}> Color: {color}</p>
      <hr />
    </div>
  );
};

export default Cat;
