import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Film from "./components/Film/Film";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Film />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;