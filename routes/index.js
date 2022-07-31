const router = require('express').Router()
const Todo = require("../models/Todo")

router.get("/", async(req, res) => {
    const grabAllTodo = await Todo.find()
    res.render("index", {todo: grabAllTodo})
})

module.exports = router