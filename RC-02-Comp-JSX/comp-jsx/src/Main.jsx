//?     JSX'de stillendirme farklı şekillerde yapılabilir.
//? 1.) Harici CSS sayfaları ile (index.css, app.css v.b.)
//? 2.) Inline stillendirme ile (style {{color:"red"}})
//? 3.) Local veya global değişkenler ile.

//!                 NOTLAR:

//*     Stillendirme için property-value(object) yapısı kullanılır.
//*     Property isimlerinde camelCase kullanılmalıdır.
//*     Class isimleri için className kullanılır.
//*     Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b. harici kütüphaneler kullanılabilir.

//? CSS dosyalari import "path" seklinde eklenir.

import "./Main.css";
import catImage from "./images/IMG_7915.JPG";

//? Local veya Global Style Değişkeni.

const Main = () => {
  const headerStyle = {
    color: "hotpink",
    backgroundColor: "lightgray",
    fontSize: "1rem",
    fontWeight: "bold",
  };
  return (
    <main>
      {/* Return içi JSX, return dışı ise JS alanıdır. */}
      {/* Inline CSS, (key-value), notasyon olarak camelCase */}
      <h2 style={{ color: "red", backgroundColor: "yellow" }}>MAIN SECTION</h2>
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in totam
        sit nam magnam rem aperiam iure at non pariatur.
      </p>
      <h3 style={headerStyle}>Other Header</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, atque.
      </p>
      <div>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2022/09/02/19/55/crystal-7428278_1280.jpg"
          alt="mashroom"
        />
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2016/10/26/22/02/dog-1772759_1280.jpg"
          alt="dog"
        />
        <img
          id="img-id"
          src="https://cdn.pixabay.com/photo/2020/05/26/14/40/goat-5223378_1280.jpg"
          alt="goat"
        />
        {/* Local ortamımızda bulunan bir resmi doğrudan patch vererek çağaramayız. Bunun yerine import yaparız. */}
        <img className="img" src={catImage} alt="cat" />
      </div>
    </main>
  );
};

export default Main;
