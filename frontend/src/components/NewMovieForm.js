import React from 'react';
import TextField from '@material-ui/core/TextField';

class NewMovieForm extends React.Component {
    state = {
        name: "",
        description: "",
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleOnSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:9292/movies/new", this.addNewMovie())
            .then(res => res.json())
            .then(movies => this.props.history.push("/movies"));
    };

    addNewMovie = () => {
        return {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        }
    };

    render() {
        const { name, description } = this.state
        return (
            <div>
                <form className="form-box" onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleOnChange} />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleOnChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
}

export default NewMovieForm;