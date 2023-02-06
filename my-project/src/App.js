

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { Events } from "./Components/Events";
import { Footer } from "./Components/Footer";
import { HomePage } from "./Components/HomePage";
import { Info } from "./Components/Info";
import { Navbar } from "./Components/Navbar";
import { Team } from "./Components/Team";

function App() {
  return (
    <Router>

    <div className="flex-col">
    <Navbar/>
     <Routes>
    <Route path="/home" element={<HomePage/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/taem" element={<Team/>}/>
      <Route path="/info" element={<Info/>}/>
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
