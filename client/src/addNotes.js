import React from 'react';
import './App.css';
import axios from 'axios';

class AddNotes extends React.Component {
    state = {
        Title: '',
        Description: ''
    };

    handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
            console.log("Cehck");
            axios.post('http://localhost:5000/notes', this.state)
                .then(result => {
                    
                    console.log("SuccessFully Posted")
                    this.setState({ Title: '', Description: '' });
                })
            window.location = '/';
        
    }

    render() {
        return (
            <>
                <div className="main-note">
                    <form onSubmit={() => this.handleSubmit()}>
                        <input onChange={(e) => this.handleChange(e)} name="Title" value={this.state.Title} type="string" placeholder="Title" required></input>
                        <input onChange={(e) => this.handleChange(e)} type="string" width="100px" height="200px" name="Description" value={this.state.Description} placeholder="Add Description" required></input>
                        <button className="btn btn-primary" type="submit">Add</button>
                    </form>
                </div>

            </>
        );
    }
}

export default AddNotes;