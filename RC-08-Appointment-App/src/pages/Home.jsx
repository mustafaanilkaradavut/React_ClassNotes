import Artists from "../components/Artists";
import AppointmentList from "../components/AppointmentList";

const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">TATTOO CENTER </h1>
      <Artists />
      <AppointmentList />
    </main>
  );
};

export default Home;
