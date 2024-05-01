import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TiDelete, TiTick } from "react-icons/ti";
import { addLocal } from "../helpers/utils";

//.. ?. => optional chaining
const AppointmentList = ({ apps, setApps }) => {
  const handleDelete = (id) => {
    // setApps(apps?.filter(appo=> appo.id !== id)) //* setter asenkron çalışır
    // localStorage.setItem("appointments",JSON.stringify(apps)) //* setter asenkron olduğu için geriden gelir.
    console.log(
      "Appointments güncellendi Home Componenti render olduğu için AppointmentList Componenti render oldu."
    );
    const newAppo = apps?.filter((appo) => appo.id !== id);
    setApps(newAppo);
    // localStorage.setItem("appointments",JSON.stringify(newAppo))
    addLocal("appointments", newAppo);
  };
  const handleToggle = (id) => {
    // setApps(apps?.map(appo => appo.id === id ? {...appo,consulted: !appo.consulted} : appo ))

    const newAppo = apps?.map((appo) =>
      appo.id === id ? { ...appo, process: !appo.process } : appo
    );
    setApps(newAppo);
    localStorage.setItem("appointments", JSON.stringify(newAppo));
    addLocal("appointments", newAppo);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {/** appointments yoksa resmi göster varsa appointmenarı göster dedik */}
      {apps?.length ? (
        apps.map(({ id, customer, day, process, artist }) => (
          <Row
            key={id}
            className={
              "appointments justify-content-between align-items-center mx-auto" +
              (process ? " process" : "")
            }>
            <Col>
              <h4>{customer}</h4>
              <h5>{artist}</h5>
            </Col>
            <Col>
              <h5>Date : {new Date(day).toLocaleDateString()}</h5>
              <h5>Time : {new Date(day).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
              <TiTick
                type="button"
                className="text-success display-2"
                onClick={() => handleToggle(id)}
              />
              <TiDelete
                type="button"
                className="text-danger display-2"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        ))
      ) : (
        <img src="./img/datetattoo.webp" width="70%" alt="No Appointments" />
      )}
    </Container>
  );
};

export default AppointmentList;
