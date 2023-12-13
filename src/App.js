import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./paginas/Inicio";
import Header from "./paginas/Header";
import { AdaLovelace } from "./paginas/AdaLovelace";
import AlanTuring from "./paginas/AlanTuring";
import DennisRitchie from "./paginas/DennisRitchie";
import BajarneStroustrup from "./paginas/BajarneStroustrup";
import TimBernersLee from "./paginas/TimBernersLee";
import AlanCooper from "./paginas/AlanCooper";
import LinusTorvalds from "./paginas/LinusTorvalds";
import SteveJobs from "./paginas/SteveJobs";
import BillGates from "./paginas/BillGates";
import Creditos from "./paginas/Creditos";
import Footer from "./paginas/Footer";

function App() {
  return (
    <div className="Pagina">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>  
          <Route path="/AdaLovelace" element={<AdaLovelace/>}/>
          <Route path="/AlanTuring" element={<AlanTuring/>}/> 
          <Route path="/DennisRitchie" element={<DennisRitchie/>}/> 
          <Route path="/BajarneStroustrup" element={<BajarneStroustrup/>}/> 
          <Route path="/TimBernersLee" element={<TimBernersLee/>}/> 
          <Route path="/AlanCooper" element={<AlanCooper/>}/> 
          <Route path="/LinusTorvalds" element={<LinusTorvalds/>}/> 
          <Route path="/SteveJobs" element={<SteveJobs/>}/> 
          <Route path="/BillGates" element={<BillGates/>}/> 
          <Route path="/Creditos" element={<Creditos/>}/>  
        </Routes>  

        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
