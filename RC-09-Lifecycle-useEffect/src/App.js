import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import LifeCycleMethods from "./components/LifeCycleMethods";
// import UseEffectHook from "./components/UseEffectHook";

import User from "./components/User";

function App() {
  const [goster, setGoster] = useState(true);

  return (
    <div className="container text text-center mt-4">
      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        {goster ? "Gizle" : "Goster"}
      </button>

      {/* {goster && <LifeCycleMethods />} */}
      {/* {goster && <UseEffectHook />} */}

      {goster && <User />}
    </div>
  );
}

export default App;
