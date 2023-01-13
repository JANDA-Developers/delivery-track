import './App.css';
import dummy from "./dummy.json"
import { DeliveryTrack } from './DeliveryTrack';


function App() {
  return (
    <div className="App">
        <DeliveryTrack deliveryTrack={dummy} ok></DeliveryTrack>
    </div>
  );
}

export default App;
