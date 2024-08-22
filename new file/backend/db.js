const mongoose = require("mongoose")
const Schema =mongoose.Schema

mongoose.connect("mongodb+srv://yashdharme:yash@cluster0.blgov.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoSchema)

module.exports= {
    todo
}