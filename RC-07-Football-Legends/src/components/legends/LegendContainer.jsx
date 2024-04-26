import { Col, Container, Row } from "react-bootstrap"; //.. Yazım olarak daha kullanışlı fakat performans olarak üstteki yöntem daha idealdir.
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LegendContainer = () => {
  //   console.log(data);      //?   Data'yı alıp almadığımızı kontrol ederiz.
  return (
    <div>
      <Form.Control type="search" placeholder="Search Legends..." />
      <Container>
        <Row>
          {data.map((legend) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
