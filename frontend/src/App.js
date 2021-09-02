import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Route>
      <Switch>
        <Route path="/movies" component={Movies}/>
      </Switch>
    </Route>
  );
}

export default App;
