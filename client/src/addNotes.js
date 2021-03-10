import React from 'react';
import './App.css';
import axios from 'axios';

class AddNotes extends React.Component {
    state = {
        title: "",
        desc: ""
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        if (this.state.title != '' && this.state.desc != '') {
            axios.post('http://localhost:5000/notes', this.state)
                .then(result => {
                    console.log("SuccessFully Posted")
                    this.setState({ title: '', desc: '' });
                })
            window.location = '/';
        }
    }

    render() {
        return (
            <>
                <div className="main-note">
                    <form className="form" onSubmit={() => this.handleSubmit()}>
                        <input onChange={(e) => this.handleChange(e)} name="title" value={this.state.title} type="string" placeholder="Title" required></input>
                        <textarea onChange={(e) => this.handleChange(e)} width="100px" height="200px" name="desc" value={this.state.desc} placeholder="Add Description" required></textarea>
                        <button className="btn btn-primary" type="submit">Add</button>
                    </form>
                </div>

            </>
        );
    }
}

export default AddNotes;