const mongoose = require ("mongoose");
// mongodb+srv://kushalnaredawork:TSPENYRQm47YdcuC@100xdevs.x4dl5hv.mongodb.net/
mongoose.connect("mongodb+srv://kushalnaredawork:TSPENYRQm47YdcuC@100xdevs.x4dl5hv.mongodb.net/")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports ={
    todo
}
