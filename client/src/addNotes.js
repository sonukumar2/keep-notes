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
                <div>
                    <form onSubmit={() => this.handleSubmit()} style = {{ display: 'grid', justifyContent:'center', marginLeft: '50px', marginRight:'50px' }} >
                       <div> <input onChange={(e) => this.handleChange(e)} name="Title" value={this.state.Title} type="string" placeholder="Title" style = {{margin: '10px'}} required></input> </div>
                       <div> <textarea onChange={(e) => this.handleChange(e)} type="string" width="100px" height="200px" name="Description" value={this.state.Description} style = {{margin: '10px'}} placeholder="Add Description" required></textarea>  </div>
                       <div> <button className="btn btn-primary" type="submit" style = {{margin: '10px', display: 'flex', justifyContent:'center' }}>Add</button> </div>
                    </form>
                </div>

            </>
        );
    }
}

export default AddNotes;