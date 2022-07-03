import './App.css';
import Banner from './Components/Banner/Banner';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Card/>
    </div>
  );
}

export default App;
