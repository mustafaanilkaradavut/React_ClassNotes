import AppointmentList from "../components/AppointmentList";
import Artist from "../components/Artist";

const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">TATTOO CENTER </h1>
      <Artist />
      <AppointmentList />
    </main>
  );
};

export default Home;
