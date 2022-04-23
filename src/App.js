import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Signup from './Screens/Signup'
import Forgotpassword from "./Screens/Forgotpassword";
import ManageBookings from "./Screens/ManageBookings";
import Review from "./Screens/Review";
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
        <Route path='/Review' element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
