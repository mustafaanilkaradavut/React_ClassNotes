//?     import React from "react";
//*     React importu artık zorunda değildir. Yazmak ve yazmamak bizim tercihimizdir.

//__ Componentler function dec. veya arrow function ile oluşturulabilir.

const Cat = () => {
  return (
    //..        JSX ifadeleri birden fazla ise mutlaka bir parent (div) ile sarmalanmalıdır.
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
        alt="cat-img"
      />
      <p> Color: Grey</p>
      <hr />
    </div>
  );
};

export default Cat;
