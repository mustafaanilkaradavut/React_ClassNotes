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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in totam
        sit nam magnam rem aperiam iure at non pariatur.
      </p>
      <h3 style={headerStyle}>Other Header</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, atque.
      </p>
    </main>
  );
};

export default Main;
