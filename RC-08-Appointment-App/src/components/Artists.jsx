import Container from "react-bootstrap/Container";
import { Row, Col, Image } from "react-bootstrap";
import { artistData } from "../helpers/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Artist = () => {
  // console.log(artistData);
  const [showModal, setShow] = useState(false);

  return (
    <Container>
      <h3 className="display-6 mb-3 " style={{ color: "rgb(166,18,189)" }}>
        Our Artist
      </h3>
      <Row>
        {/* {artistData.map((artist) => {
          const { id, img, name, area } = artist;
          return (
            <Col key={id}>
              <Image src={img} alt={name} />
            </Col>
          );
        })} */}
        {artistData.map(({ id, img, area, name }) => (
          <Col xs={6} sm={4} lg={3} key={id}>
            <Image
              className=" align-item-center artist-img w-100"
              src={img}
              alt={name}
              onClick={() => setShow(true)}
            />
            <h5>{name}</h5>
            <p>{area}</p>
          </Col>
        ))}
      </Row>
      <AddModal showModal={showModal} handleClose={() => setShow(false)} />
    </Container>
  );
};

export default Artist;
