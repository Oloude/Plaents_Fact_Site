import Planet from "./components/Planet"
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Planet/>}/>
    <Route path='/:planet' element={<Planet/>}/>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App