import React from 'react';
import TextField from '@material-ui/core/TextField';

class NewMovieForm extends React.Component {
    state = {
        name: "",
        description: "",
        theater_id: null,
        theaters: [],
    };

    componentDidMount() {
        fetch("http://localhost:9292/theaters")
            .then((res) => res.json())
            .then((theaters) => this.setState({ theaters }));
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
            body: JSON.stringify({
                name: this.state.name,
                theater_id: this.state.theater_id,
            }),
        }
    };

    renderTheatersForm = () => {
        return this.state.theaters.map(theaters => {
            return <option value={theaters.id}>{theaters.name}</option>
        });
    }

    render() {
        const { name, description } = this.state
        return (
            <div>
                <div>
                    <select
                        onChange={this.handleOnChange}
                        name="theater_id" id="">
                        {this.renderTheatersForm()}
                    </select>
                </div>
                <form className="form-box" onSubmit={this.handleOnSubmit}>
                    <label>name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id=""
                        onChange={this.handleOnChange} />
                    <label>description</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        id=""
                        onChange={this.handleOnChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
}

export default NewMovieForm;