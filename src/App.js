import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Signup from './Screens/Signup'
import Forgotpassword from "./Screens/Forgotpassword";
import ManageBookings from "./Screens/ManageBookings";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Forgotpassword' element={<Forgotpassword />} />
        <Route path='/ManageBookings' element={<ManageBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
