const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema( { 
    Title: {
        type: String, required: true
    },
    Description: {
        type: String, required: true
    }
});

module.exports = mongoose.model('Notes', NotesSchema);