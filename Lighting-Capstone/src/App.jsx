import { useState } from 'react';
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
import Footer from "/src/components/footer.jsx";
import Inventory from "./pages/Inventory.jsx";
// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);


function App() {
  return (
    <div className = "bg-indigo-900">
    <BrowserRouter >
      <nav class="object-top bg-indigo-950 w-screen">
        <div>
          <Link to="/home"><button className="m-5">Home</button></Link>
          <Link to="/plot"><button className="m-5">Plot</button></Link>
          <Link to="/notes"><button className="m-5">Notes</button></Link>
          <Link to="/archive"><button className="m-5">Archive</button></Link>
           <Link to="/info"><button className="m-5">Info</button></Link>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/plot" element={<Plot />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path = "/info" element = {<Info/>} />
        <Route path = "/source4" element = {<Source4/>} />
        <Route path = "/fresnel" element = {<Fresnel/>} />
        <Route path = "/par" element = {<Par/>} />
        <Route path = "/iq" element = {<IQ/>} />
        <Route path = "/led" element = {<LED/>} />
        <Route path = "/cyc" element = {<Cyc/>} />
        <Route path = "/inventory" element = {<Inventory/>} />
      </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
