/* -------------------------------------------------------------------------- */
//..                                  HOOKS                                   */
/* -------------------------------------------------------------------------- */

//__ Hook'lar fonksiyonel component'ler içerisinde state'leri kullanmamıza olanak sağlayan özel fonksiyonlardır.
//__ React 16.8 versiyonu ile gelmiştir ve geldikten sonra Class-componenetler'in kullanımını çok azaltmıştır.

//? React'ta useState(), useEffect(), useContext() gibi bir çok built-in Hook bulunmaktadır. Ayrıca custom hook tanımlamak mümkündür.

//..    Hook Kullanım Kuralları ;

//* 1.  İlk olarak import edilmelidir. İmport {useState} from "react";
//* 2.  Hook'lar üst seviyede tanımlanmalıdır. Yani Hook'lar bir döngünün, koşul cümleciğinin ve içiçe fonksiyonların içerisinde kullanılmamalıdır.
//* 3.  Hook'lar sadece React fonksiyonel componentleri içerisinde çağrılmalıdır. Normal JavaScript fonksiyonları içerisinde çağrılmamalıdır. (Custom Hook'lar içerisinde bir hook çağrılabilir.)

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.
//*    https://react.dev/reference/react/hooks#state-hooks

/* -------------------------------------------------------------------------- */

import { useState } from "react";

const UseStateCounter = () => {
  //? local variable
  //   let sayac = 0
  //? useState hook'u ile sayaç adında bir state tanımladık.
  const [sayac, setSayac] = useState(0);

  const handleInc = () => {
    // sayac = sayac + 1

    //? sayaç state'nin değerini setSayac metodu ile bir arttırdık.
    setSayac(sayac + 1);
  };

  return (
    <div>
      <h2>UseState Counter</h2>
      <h1>Count:{sayac}</h1>
      <button onClick={handleInc}>INC</button>
      <button onClick={() => setSayac(0)}>CLR</button>

      {/* Eger setSayac metodunu callback ile yazmazsak bu metot ilk açılıştan itibaren doğrudan çağrılmış olur. Bu durumda da sayaç state'ini günceller. State güncellendiğini içinde component re-render olur. Re-render ise yeniden setSayac aracılığı ile state'in güncellenmesine yol açar ve sonsuz döngüye girer. */}
      <button onClick={() => setSayac(sayac - 1)}>DEC</button>
    </div>
  );
};

export default UseStateCounter;
