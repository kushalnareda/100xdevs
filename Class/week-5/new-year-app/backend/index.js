const express = require("express");
const app= express();
const cors = require("cors");
const { createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173/"
}));

app.post ("/todos", async function(req,res){
    const createPayload =  req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(404).json({
            msg : "You sent the wrong inputs"
        })
    }//put it in mongodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo Created"
    })
})

app.get ("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })

})
app.put ("/todos", async function(req,res){
    const updatedPayload = req.body;
    const parsedPayload = createTodo.safeParse(updatedPayload);
    if (!parsedPayload.success){
        res.status(404).json({
            msg : "You sent the wrong inputs"
        })
    }

    await todo.update({
        _id: req.body.id
    },{
        completed :true
    })
    res.json({
        msg: "Todos marked as compeleted"
    })
})

app.listen(3000);
