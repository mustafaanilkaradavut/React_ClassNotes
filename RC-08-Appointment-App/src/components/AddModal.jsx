import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddModal({ showModal, handleClose, artistName, addAppointment }) {
  //   const [showModal, setShow] = useState(false); //! Modalı resimlere tıklanıldğında açtırmak isteğidğim için show stateini resimlerin olduğu yerde manipüle edebilmem lazım. Eğer statei burada oluşturursam setShowu resimlerin olduğu üst componente gönderemem o nedenle Liting State Up yaparak show stateini resimlerin olduğu üst componente taşıdık.
  console.log(
    "Appointments güncellendi Home Componenti render olduğu için Artist Componenti render olduğu için AddModal render oldu."
  );
  // console.log("showModal güncellendi Doctors Componenti render olduğu için AddModal render oldu.")
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  // console.log(crypto.randomUUID());
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ customerName, date, artistName });
    // addAppointment({
    //   id: new Date().getTime(),
    //   patient: patientName,
    //   day: date,
    //   consulted: false,
    //   doctor: drName,
    // });

    addAppointment({
      id: crypto.randomUUID(), //? crypto.randomUUID() metodu her çağırıldığında farklı, unique karakter dizisi dönüyor. Id değeri bize update-delete işlemleri için lazım olacak ve işimizi kolaylaştıracak.
      patient: customerName,
      day: date,
      consulted: false, //? default olarak false yapmış olduk
      doctor: artistName, //__ tTıklanılan doktoru yukarıda yakalamıştık burada da kullanıyoruz.
    });
    setCustomerName(""); //__ input alanlarını temizlemek için kullanılan fonksiyon.
    setDate("");
    handleClose(); //__ İşlem başarılı bittiğinde modalı kapatması için kullanılan fonksiyon.
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for : {artistName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Customer Name"
                onChange={(e) => setCustomerName(e.target.value)}
                value={customerName} //__ inputun içini yönetebilmek için value attributeını kullanıyoruz. Statei  güncellediğimizde inputun içi de statein değerini almış oluyor.
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
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
      </Modal>
    </>
  );
}

export default AddModal;
