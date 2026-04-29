import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Plot from "./pages/Plot.jsx";
import Notes from "./pages/Notes.jsx";
import Archive from "./pages/Archive.jsx";
import Info from "./pages/Info.jsx";
import Source4 from "./pages/Source4.jsx";
import Fresnel from "./pages/Fresnel.jsx";
import Par from "./pages/Par.jsx";
import IQ from "./pages/IQ.jsx";
import LED from "./pages/LED.jsx";
import Cyc from "./pages/Cyc.jsx";
import Inventory from "./pages/Inventory.jsx";
import NewArchive from "./pages/newArchive.jsx";
import Footer from "./components/footer.jsx";
import NewNote from "./pages/newNote.jsx";

function App() {
  return (
    <div className="bg-indigo-900 text-white min-h-screen flex flex-col">
      <BrowserRouter>
        <nav className="bg-indigo-950 w-screen">
          <div className="flex flex-wrap">
            <Link to="/home" className="m-5">Home</Link>
            <Link to="/plot" className="m-5">Plot</Link>
            <Link to="/notes" className="m-5">Notes</Link>
            <Link to="/archive" className="m-5">Archive</Link>
            <Link to="/info" className="m-5">Info</Link>
          </div>
        </nav>
        <div className="flex-1">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/plot" element={<Plot />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/info" element={<Info />} />
            <Route path="/source4" element={<Source4 />} />
            <Route path="/fresnel" element={<Fresnel />} />
            <Route path="/par" element={<Par />} />
            <Route path="/iq" element={<IQ />} />
            <Route path="/led" element={<LED />} />
            <Route path="/cyc" element={<Cyc />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/newarchive" element={<NewArchive />} />
            <Route path='/newnote' element={<NewNote />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;