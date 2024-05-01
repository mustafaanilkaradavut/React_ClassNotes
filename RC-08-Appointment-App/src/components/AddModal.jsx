import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ showModal, handleClose, artistName, addAppointment }) {
  //   const [show, setShow] = useState(false);
  //   const [showModal, setShow] = useState(false);
  //__ Modalı resimlere tıklanıldğında açtırmak isteğimiz için show state'ini resimlerin olduğu yerde manipüle edebilmemiz lazım. Eğer state'i burada oluşturursam setShow'u resimlerin olduğu üst componente gönderemem o nedenle Liting State Up yaparak show stateini resimlerin olduğu üst componente taşıdık.
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  // console.log(crypto.randomUUID());   //? JS'nin bize sunmuş olduğu özel ID'lerdir.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ customerName, date, artistName });
    addAppointment({
      id: crypto.randomUUID,
      customer: customerName,
      day: date,
      process: false,
      artist: artistName,
    });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size={"m"}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for: {artistName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Customer Name"
                onChange={(e) => setCustomerName(e.target.value)}
                value={customerName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
