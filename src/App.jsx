import './App.css';
import Nav from './Nav';
import Homepage from "./Homepage";
import Menu from "./Menu";
import BookingPage from './BookingPage';
import OrderOnline from './OrderOnline';
import About from './About';
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div>
        <Nav/>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/BookingPage' element={<BookingPage />} />
          <Route path='/OrderOnline' element={<OrderOnline />} />
          <Route path='/About' element={<About />} />
          <Route path='/ConfirmedBooking' element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
    </div>

  );
}

export default App;