import './App.css';
import Footer from './components/Footer.js';
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Room from './pages/Room.js';
import InsertRoom from './pages/InsertRoom.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Home/>}/>
            <Route path='/rooms/:id' element={<Room/>}/>
            <Route path='/postroom' element={<InsertRoom/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
