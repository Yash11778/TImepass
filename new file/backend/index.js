const express = require('express');
const {createTodo, updateTodo} = require("/types");
const { todo } = require('./db');
const { reconnect } = require('wagmi/actions');
const app = express();

app.use(express.json());
    

app.post("/todo",async function(req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "U Sent Wrong input"
        })
        return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.json({
        msg: "Todo created"
    })
     
})

app.get("/todos",async function(req, res){
    //const todos = await todo.find({})
    
    res.json({
        todos : []
    })
})

app.put("/completed",async function (req, res) {
    const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "U Sent Wrong input"
        })
        return
    } 
    await todo.update({
        _id: rec.body.id
    },{
        completed : true
    })
    res.json({
        msg: "Todo Marked as Completed"
    })
})

app.listen(3000)