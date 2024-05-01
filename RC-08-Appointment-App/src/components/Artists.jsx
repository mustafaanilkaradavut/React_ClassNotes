import Container from "react-bootstrap/Container";
// eslint-disable-next-line no-unused-vars
import { artistData } from "../helpers/data";

const Artist = () => {
  console.log(artistData);
  return (
    <Container>
      <h3 className="display-6 mb-3 " style={{ color: "rgb(166,18,189)" }}>
        Our Artist
      </h3>
    </Container>
  );
};

export default Artist;
