import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import NewMovieForm from "./components/NewMovieForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/movies/new" component={NewMoviesForm} />
        </Switch>
      </Router>
    </div>
    );
}

export default App;
