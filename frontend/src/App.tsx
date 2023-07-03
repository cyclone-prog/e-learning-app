import Login from "./pages/SignIn/Login.tsx"
import {Routes,Route} from "react-router-dom"
import Register from "./pages/SignUp/Register.tsx"
import {ToastContainer} from "react-toastify"
import Sidebar from "./components/Sidebar/index.tsx"
import Dashboard from "./pages/Dashboard/index.tsx"

const App =()=>{
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/" element={<Sidebar/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    <ToastContainer />
      
    </>
  )
}

export default App
