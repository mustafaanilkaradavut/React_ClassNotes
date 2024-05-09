// import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";
// import HoverAndFocus from "./components/HoverAndFocus";
// import SpacingAndSizing from "./components/SpacingAndSizing";
// import Typografy from "./components/Typografy";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl text-purple-700">Hello Tailwind</h1>
      {/* <Typografy /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverAndFocus /> */}
      {/* <FlexAndResponsive /> */}
      <Navbar />
      <ProfileCard />
    </div>
  );
}

export default App;
