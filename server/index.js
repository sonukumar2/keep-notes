const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const NotesModel = require('./model/notesSchema');
const bodyParser = require('body-parser');


// Create Express App for Backend 
const app = express();
app.use(express.json());
app.use(cors())
 
// Mongo Db Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Auth:auth@cluster0.d1lzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connection.on('connected', () => {
    console.log("Successfully Connected to Db");
})

mongoose.connection.on('error', () => {
    console.log("Error occur");
})

// Get Data 
app.get('/', async (req, res) => {
    const notes = await NotesModel.find({});
    try {
        res.status(200).send(notes);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

// Post Data in DB 
app.post('/notes', async (req, res) => {

    const notes = new NotesModel(req.body);
    await notes.save()
        .then(result => {
            res.status(200).json({ "msg": "Successfuly Posted" })
        })
        .catch(err => {
            res.status(500).json({ "msg": "Error" })
        })
})

app.delete('/notes/:id', async (req, res) => {
    try {
        const notes = await NotesModel.findByIdAndDelete(req.params.id);

        if (!notes) res.status(404).send("No item found")
        res.status(200).json({ "msg": "Successfully Deleted" })
    } catch (err) {
        res.status(500).send(err)
    }
})

app.put('/notes/:id', (req, res) => {
    const title = req.body.Title;
    const desc = req.body.Description;
    const id = req.params.id;

     NotesModel.updateOne(
        { _id: id },
        { $set: { Title: title, Description: desc } }
    )
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"successfully Updated"});
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({msg:"Error Occured"});
    })
})


// Create Server 
const port = 5000;
app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
})