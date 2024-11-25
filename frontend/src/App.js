
// import './App.css';
import HotelByName from './components/hotelByName';
import Hotels from './components/hotels';

function App() {
  return (
    <div className="App">
      <Hotels />
      <HotelByName name="JW Mariotte" />
    </div>
  );
}

export default App;
