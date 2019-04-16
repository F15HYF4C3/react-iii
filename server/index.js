const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 4000;

app.use(bodyParser.json());

const todoList = [];
const id = 0;

app.get('/api/todo', (req, res)=>{
    res.send(todoList)
});

app.delete('/api/todo/:id', (req, res)=>{
    const index = todoList.findIndex(e=>e.id===req.params.id);
    todoList.splice(index, 1)
    res.send(todoList)
});i

app.put('/api/todo/:id', (req, res)=>{
    const index = todoList.findIndex(e=>e.id===req.params.id);
    todoList[index].completed = true;
    res.send(todoList)
});

app.post('/api/todo', (req, res)=>{i
    const todo = {
        completed: false,
        description: req.body.description,
        id: id++
    };
    todoList.push(todo)
    res.send(todoList)
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})