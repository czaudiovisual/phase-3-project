import React from "react";
import { Link } from "react-router-dom";

class Movies extends React.Component {
    state = {
        movies: [],
        theaters: [],
        filterAllMovies: [],
    };

    componentDidMount() {
        fetch("http://localhost:9292/movies")
            .then((res) => res.json())
            .then((movies) => this.setState({ movies, filterAllMovies: movies }));
        fetch("http://localhost:9292/theaters")
            .then((res) => res.json())
            .then((theaters) => this.setState({ theaters }));
    };

    handleOnChange = (event) => {
        const { value } = event.target;
        if (value == "all")
            return this.setState({ filterAllMovies: this.state.movies });
        const filterAllMovies = this.state.movies.filter(movie => {
            return movie.theater_id == value
        })
        this.setState({ filterAllMovies })
    };

    deleteClick = (event) => {
        console.log(event.target.id)
        fetch(`http://localhost:9292/movies/${event.target.id}`, {
            method: "DELETE"
        })
            .then(() => {
                const filterMovies = this.state.movies.filter(movie => {
                    console.log(movie, "hello-------------------------", event.target.id != movie.id);
                    return movie.id != event.target.id
                })
                return this.setState({
                    movies: [...filterMovies]

                })
            })
    }

    renderTheatersForm = () => {
        console.log(this.state.theaters)
        return this.state.theaters.map(theaters => {
            return <option value={theaters.id}>{theaters.name}</option>
        });
    }

    renderMovies = () => {
        return this.state.filterAllMovies.map((movie) => {
            return <div className="card-box">
                <h3 className="movie-titles">{movie.name}</h3>
                <img className="img-poster" src={movie.img_url} alt="img-url" />
                {/* <p className="movie-titles">{movie.description}</p> */}
                <button id={movie.id} onClick={this.deleteClick}>Delete</button>
            </div>
        });
    };

    render() {
        return (
            <div>
                <div>
                    <select
                        onChange={this.handleOnChange}
                        name="theater_id" id="">
                        <option value="all"> All</option>
                        {this.renderTheatersForm()}
                    </select>
                </div>

                <Link to="movies/new">New Movie</Link>
                <ul>{this.renderMovies()}</ul>
            </div>
        );

    }
}


export default Movies;