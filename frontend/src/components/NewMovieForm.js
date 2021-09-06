import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class NewMovieForm extends React.Component {
    state = {
        name: "",
        description: "",
        img_url: "",
        theater_id: 1,
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
            body: JSON.stringify(this.state),
            body: JSON.stringify({
                name: this.state.name,
                theater_id: this.state.theater_id,
                description: this.state.description,
                img_url: this.state.img_url,
            }),
        }
    };

    renderTheatersForm = () => {
        console.log(this.state.theaters)
        return this.state.theaters.map(theaters => {
            return <option value={theaters.id}>{theaters.name}</option>
        });
    }

    render() {
        const { name, description, img_url } = this.state
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

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control input-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.
                        </div>
                    </div>

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
                    <label>Image Url</label>
                    <input
                        type="text"
                        name="img_url"
                        value={img_url}
                        id=""
                        onChange={this.handleOnChange} />
                    <div className="back-button">
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            type="submit">Add Movie
                        </Button>
                    </div>
                </form>
            </div>
        );
    };

};

export default NewMovieForm;
