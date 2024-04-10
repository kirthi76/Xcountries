
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./Xcountries/Xcountries"
import Stopwatch from "./XStopWatch/XstopWatch"

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>FDT-INTV</h1>} />
        <Route  path="xCountries" exact Component={()=><Countries />} />
        <Route  path="xStopwatch" exact Component={()=><Stopwatch />} />
        </Routes>
    </BrowserRouter>
  )
  }

export default App;
