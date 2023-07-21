import './App.css';
import Nav from './Nav';
import Homepage from "./Homepage";
import Menu from "./Menu";
import Reservation from './Reservation';
import OrderOnline from './OrderOnline';
import About from './About';
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div>
        <Nav/>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Menu' element={<Menu />}></Route>
          <Route path='/Reservation' element={<Reservation />}></Route>
          <Route path='/OrderOnline' element={<OrderOnline />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
        <Footer />
    </div>

  );
}

export default App;