import './App.css';
import Banner from './Components/Banner/Banner';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import { originals,action,romance,horror,comedy } from './urls';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Card title='Netflix Originals' url={originals}/>
      <Card title='Action' isSmall url={action}/>
      <Card title='Comedy' isSmall url={comedy}/>
      <Card title='Horror' isSmall url={horror}/>
      <Card title='Romance' isSmall url={romance}/>
    </div>
  );
}

export default App;
