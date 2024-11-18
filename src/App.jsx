import { useState } from "react";
import CustomRoutes from "./routes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <CustomRoutes />
    </div>
  );
}

export default App;
