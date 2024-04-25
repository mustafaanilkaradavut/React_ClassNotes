import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   __     Buradaki veriler RAM belleğinde tutulur.

  const handleUserName = (e) => {
    // console.log(e.target.value); //__ Inputtaki değeri verir. Fakat bunu username State'ine aktarmamız lazım.
    setUsername(e.target.value);
  };

  //    __      State her güncellendikten sora component re-render olur ve değişen kısımlar DOM'a basılır.
  console.log(username);

  return (
    <Form>
      <h1 className="text-danger">FORMS</h1>

      <Form.Group className="mb-3" controlId="username">
        {/* //.. Short circuit veya ternay ile koşullu rendering yapılabilir. */}
        <Form.Label>{username && <span>Hello {username}</span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={handleUserName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
