import Login from "./pages/Login.tsx"
import Dashboard from "./pages/Dashboard/index.tsx"
import {Routes,Route} from "react-router-dom"

const App =()=>{
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </>
  )
}

export default App
