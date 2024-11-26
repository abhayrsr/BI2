
// import './App.css';
import AddHotel from './components/addHotel';
import HotelByName from './components/hotelByName';
import Hotels from './components/hotels';

function App() {
  return (
    <div className="App">
      <AddHotel />
      <Hotels />
      <HotelByName name="JW Mariotte" />
    </div>
  );
}

export default App;
