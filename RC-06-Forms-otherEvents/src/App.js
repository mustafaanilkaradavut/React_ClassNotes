import Forms from "./component/1-forms/Forms";
import FormsObject from "./component/1-forms/FormsObject";
import KeyboardClipboard from "./component/2-keyboardClipboardEvents/KeyboardClipboardEvents";
import MouseEvent from "./component/3-mouseEvents/MouseEvent";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="mt-4">
      {/* <FormsObject /> */}
      {/* <KeyboardClipboard /> */}
      <MouseEvent />
    </Container>
  );
}

export default App;
