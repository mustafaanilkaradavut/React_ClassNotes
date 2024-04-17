import logo from "./logo.svg";
import "./App.css";

//? Component
//__  JSX bu js içerisindedir. Baş Harfi büyük harfle başlar. Return'ü JSX'tir.
//__  JSX ise HTML ve JS'nin birleşmiş halidir.
//__ index.html içerisinde render edilir.

function App() {
  //? JS KODU : function ve return arasında yazılabilir. JS komutlarıda aşağıda return içinde kullanılabilir.
  const deneme = "REACT";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
