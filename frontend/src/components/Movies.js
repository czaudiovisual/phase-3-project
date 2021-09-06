import React from "react";
import { Link } from "react-router-dom";

class Movies extends React.Component {
    state = {
        movies: []
    };

    componentDidMount() {
        fetch("http://localhost:9292/movies")
            .then((res) => res.json())
            .then((theaters) => this.setState({ theaters }));
    };

    renderMovies = () => {
        return this.state.movies.map((movie) => {
            return <div className="card-box">
                <p className="movie-titles">{movie.name}</p>
                <img className="img-poster" src={movie.img_url} alt="img-url"/>
                </div>
        });
    };

    render() {
        return (
            <div>
                <Link to="/movies/new">New Movie</Link>
                <ul>{this.renderMovies()}</ul>
            </div>
        );

    }
}

export default Movies;