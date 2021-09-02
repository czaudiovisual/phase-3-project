import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movies" component={Movies} />
        </Switch>
      </Router>
    </div>
    );
}

export default App;
