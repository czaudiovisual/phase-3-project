import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import NewMovieForm from "./components/NewMovieForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/new" component={NewMovieForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
