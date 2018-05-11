const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rtapi')

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: null},
    completed: {type: Boolean, default: false}
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema);