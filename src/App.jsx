import './App.css';
import Nav from './Layout/Nav';
import Homepage from "./Homepage/Homepage";
import Menu from "./Menu/Menu";
import BookingPage from './Booking/BookingPage';
import OrderOnline from './OnlineOrders/OrderOnline';
import About from './About/About';
import Footer from "./Layout/Footer";
import Header from './Layout/Header';
import ConfirmedBooking from './Booking/ConfirmedBooking';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/BookingPage' element={<BookingPage />} />
          <Route path='/OrderOnline' element={<OrderOnline />} />
          <Route path='/About' element={<About />} />
          <Route path='/ConfirmedBooking' element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;