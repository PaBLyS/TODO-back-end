const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    id: Number,
    label: String
});

mongoose.model('List', ListSchema);