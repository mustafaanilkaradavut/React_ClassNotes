import Forms from "./component/1-forms/Forms";
import KeyboardClipboard from "./component/2-keyboardClipboardEvents/KeyboardClipboardEvents";
import MouseEvent from "./component/3-mouseEvents/MouseEvent";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <container className="mt-4">
      <Forms />
      <KeyboardClipboard />
      <MouseEvent />
    </container>
  );
}

export default App;
