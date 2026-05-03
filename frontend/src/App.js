import './App.css';
import Footer from './components/Footer.js';
import Home from './pages/Home.js'

import Room from './pages/Room.js';
import InsertRoom from './pages/InsertRoom.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home1 from './pages/Home1.js';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer></ToastContainer>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Home/>}/>
            <Route path='/search1' element={<Home1/>}/>
            <Route path='/rooms/:id' element={<Room/>}/>
            <Route path='/postroom' element={<InsertRoom/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home1' element={<Home1/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
