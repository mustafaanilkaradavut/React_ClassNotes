/* -------------------------------------------------------------------------- */
//..                       CLASS COMPONENTS AND STATE                         */
/* -------------------------------------------------------------------------- */

//* React'da Class-Component'ler ES6 class yapısına dayanmaktadır.
//* Çok fazla boilerplate kod içermektedir.
//* Ancak Class-Component'ler React'da state'leri barındıran ilk component yapısıdır.
//* State, aslında bir component hakkında bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman içerisinde değişebilir.
//* State her değiştiğinde React bu componenti yeniden render eder.
//* Bir state'e başlangıç degeri constructor metodu içerisinde this.state ile atanabilir.
//* constructor'in dışında state, setState() metodu ile değiştirilebilir.

//! -------------------------------------------------------------------------- */

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    //!  State'e baslangic degeri verdik.
    this.state = {
      count: 0,
    };

    //? increment metodunun Counter class'ına bağlanması (bind)
    //  this.increment = this.increment.bind(this)
  }

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
  //! Ancak, React built-in fonksiyonlari baglidir.

  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment}>INC</button>
        <button onClick={() => this.setState({ count: 0 })}>CLR</button>
        <button onClick={this.decrement}>DEC</button>
      </div>
    );
  }
}

export default Counter;
