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

    // deleteClick = (event) => {
    //     fetch(`http://localhost:9292/movies/${event.target.id}`,{
    //         method: "DELETE"
    //     })
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         movies: [...this.state.movies], data
    //     }))
    // }

    renderMovies = () => {
        return this.state.movies.map((movie) => {
            return <div className="card-box">
                <h1 className="movie-titles">{movie.name}</h1>
                <img className="img-poster" src={movie.img_url} alt="img-url" />
                <p className="movie-titles">{movie.description}</p>
                {/* <button id={deleteData.id} onClick={deleteClick}>Delete</button> */}
            </div>
        });
    };

    render() {
        return (
            <div>
                <Link to="movies/new">New Movie</Link>
                <ul>{this.renderMovies()}</ul>
            </div>
        );

    }
}


export default Movies;