import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Details from './components/Details';



function App() {
  

  return <div className="App">
    <NavBar/>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/details' component={Details}/>
    </Switch>
</div>

  
};

export default App;

