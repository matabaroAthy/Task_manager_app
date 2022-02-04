const mongoose = require('mongoose');


const task_schema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxLength:[20, 'name must be at least 20 characters']
    },
    completed: {
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task', task_schema);
