import './App.css';
import Banner from './Components/Banner/Banner';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import { originals,action } from './urls';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Card title='Netflix Originals' url={originals}/>
      <Card title='Action' isSmall url={action}/>
    </div>
  );
}

export default App;
