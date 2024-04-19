import Header from "./components/Header";

//? SCSS stylesheeti import ettik.

import "./sass/app.scss";
import data from "./data";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      {data.map(({ id, name, job, img, comment }) => (
        <Card key={id} name={name} job={job} img={img} comment={comment} />
      ))}
    </>
  );
}

export default App;
