import React from 'react'

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
        this.state.movies.map((movie) => {
            return <li>${movie.name}</li>;
            });
        };
    
        render() {
            return <ul>{this.renderMovies()}</ul>; 
        }
    }


export default Movies;