import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Foooter from "./components/Footer/Foooter";
import Film from "./components/Film/Film";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import Contract from "./components/Screen/Contract";
import About from "./components/Screen/About";
import News from "./components/Screen/News";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Film />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route exact path="/contract/user" element={<Contract />}></Route>
        <Route exact path="/about/user" element={<About />}></Route>
        <Route exact path="/news/user" element={<News />}></Route>
      </Routes>
      <Foooter />
    </div>
  );
}
export default App;