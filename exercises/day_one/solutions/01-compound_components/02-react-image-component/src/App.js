import logo from './logo.svg';
import './App.css';
import FancyImage from './FancyImage';
import flower from './Flower_11.jpg';

function App() {
  return (
    <div className="App">
		<FancyImage src={flower} text="Beautiful Flower"/>
    </div>
  );
}

export default App;
