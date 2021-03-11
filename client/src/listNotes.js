import React from 'react';
import axios from 'axios';
import './App.css';


class ListNotes extends React.Component {
    state = {
        Notes: []
    };

    getNotes = () => {
        axios.get('http://localhost:5000')
            .then(res => {
                console.log(res);
                this.setState({ Notes: res.data });
            })
    }

    componentDidMount = () => {
        this.getNotes();
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then(res => {
                console.log(res);
                window.location = '/';
            })
            .catch(err => {
                console.log("Error Occured");
            })
    }

    render() {
        return (
            this.state.Notes.map(note => (
                <div style={{ display: 'inline-block', borderStyle: 'solid', margin: '10px', borderRadius : '10px',  }}>

                    <div style={{ padding: '6px ', backgroundColor: '#faf86b',  }} key={note._id}>
                        <h3>{note.Title} </h3>
                        <hr style={{ width: '100px' }} ></hr>
                        <p> {note.Description} </p>
                        <button onClick={() => this.handleDelete(note._id)} className="btn btn-danger btn-sm"  > Delete </button>
                    </div>
                </div>
            ))

        )
    }

}

export default ListNotes;