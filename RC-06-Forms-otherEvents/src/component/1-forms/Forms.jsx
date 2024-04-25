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

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault(); //  __  Submit eventi'nin doğal davranışlarını engeller.

    alert(`
    username:${username}
    email:${email}
    password:${password}
    `);

    //  __  Post yapıldıktan sonra State'lerdeki verilerin silinmesi.
    setEmail("");
    setPassword("");
    setUsername("");
  };

  //.. İleride bir submit işleminin neticesinde verilerin nasıl post edilebileceğini göstermek adına eklenmiştir.
  // const res = axios.post("url", {
  //   username: username,
  //   email: email,
  //   password: password,
  // })

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-danger">FORMS</h1>

      <Form.Group className="mb-3" controlId="username">
        {/* //.. Short circuit veya ternay ile koşullu rendering yapılabilir. */}
        <Form.Label>{username && <span>Hello {username}</span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={handleUserName}
          name="username"
          value={username}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          //  __      OnChange event'i input değeri her değiştiğinde tetiklenir. Bizde yazdığımız event handler aracılığı ile State'i güncelleyebiliriz.
          name="email"
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
