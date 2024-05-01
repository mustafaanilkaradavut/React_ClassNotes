/* -------------------------------------------------------------------------- */
//..                           LIFECYCLE METOTLARI                            */
//__                 https://reactjs.org/docs/react-component.html
/* -------------------------------------------------------------------------- */

//?     Lifecycle metotları componentlerin DOM'da var olduğu süre boyunca üzerinde işlem yapmamızı sağlayacan özel React metotlarıdır.
//?     Örneğin bir component oluşturulduğunda, DOM'a basıldığında, güncellendiğinde veya DOM'dan kaldırıldığında bir şeyler yapmak için Lifecycle metotları kullanılabilir.
//?     En bilindik Lifecycle metodu render() metodudur.

//*     Bir component'in oluşturulması (constructor),
//*     Bir component'in DOM ağacına eklenmesinin hemen sonrası (componentDidMount)
//*     Bir component'in DOM'a basılması (render)
//*     (Optional) Bir component'in güncellenmesinin hemen sonrası (componentDidUpdate)
//*     Bir component'in DOM ağacından kaldırılması sonrası (componentWillUnmount)

import React, { Component } from "react";

class LifeCycleMethods extends React.Component {
  //__          1- Bir component'in oluşturulmasında çağrılır.
  constructor(props) {
    console.log("1- Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  //__          3- Bir component DOM ağacına eklendiğine çalıştırılır.
  //.. (İlk render sonrası).
  //.. Her yaşam döngüsü için bir kere çalışır.
  componentDidMount() {
    //__         Subscription (Fetch, timer kurulumu, initiliaztion islemleri (local storage))
    console.log("3- componetDidMount running");
  }

  //__          4- Bu metot ilk render hariç diğer tüm render'lardan sonra çağrılır.
  componentDidUpdate() {
    //? Bir component'in state'i veya propu değiştikten sonra bir işlemi tetiklemek istersek didUpdate metodu kullanılabilir. Örneğin, API'den çekilen parite bilgisine göre alım veya satım işleminin kontrolünün yapılmasi gibi.
    console.log("4- componetDidUpdate running");
  }

  componentWillUnmount() {
    //? Tüm üyeliklerin (Fetch, timer, silme) iptalinin yapılabileceği method.
    console.log("5- componetWillUnmount running");
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //__          2- Her bir state yada prop değiştiğinde (render) yeniden çağrılır.
  render() {
    console.log("2- Render run");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
