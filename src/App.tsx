import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path="/home" />
        <Route index element={<Homepage />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
