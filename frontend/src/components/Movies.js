import React from 'react'
import { link } from "react-router-dom"

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
            return <li>{movie.name}</li>
            });
        };
    
        render() {
            return ( 
                <div>
                    <link to="movies/new">New Movie</link>
                    <ul>{this.renderMovies()}</ul>
                </div>
            );
            
        }
    }


export default Movies;