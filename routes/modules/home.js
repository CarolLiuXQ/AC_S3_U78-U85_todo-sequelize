const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

///////架設根目錄/////////
router.get('/', (req, res) => {
  return Todo.findAll({
    raw: true,
    nest: true
  })
    .then((todos) => { return res.render('index', { todos: todos }) })
    .catch((error) => { return res.status(422).json(error) })
})
// 匯出路由模組
module.exports = router