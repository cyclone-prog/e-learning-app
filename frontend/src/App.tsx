import Login from "./pages/SignIn/Login.tsx"
import Dashboard from "./pages/Dashboard/index.tsx"
import {Routes,Route} from "react-router-dom"
import Register from "./pages/SignUp/Register.tsx"
import {ToastContainer} from "react-toastify"

const App =()=>{
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    <ToastContainer />
      
    </>
  )
}

export default App
