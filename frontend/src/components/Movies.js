import React from "react";
import { Link } from "react-router-dom";

class Movies extends React.Component {
    state = {
        movies: []
    };

    componentDidMount() {
        fetch("http://localhost:9292/movies")
            .then((res) => res.json())
            .then((movies) => this.setState({ movies }));
    };

    renderMovies = () => {
        return this.state.movies.map((movie) => {
            return <div className="card-box">
                
                <img className="img-poster" src={movie.img_url} alt="img-url"/>
                </div>
        });
    };

    render() {
        return (
            <div>
                <button>
                <Link to="/movies/new">New Movie</Link>
                </button>
                <h1>{this.renderMovies()}</h1>
            </div>
        );

    }
}

export default Movies;