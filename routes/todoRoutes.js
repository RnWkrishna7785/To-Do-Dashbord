const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/', controller.getTodos);
router.get('/add', controller.addForm);
router.post('/add', controller.createTodo);
router.get('/edit/:id', controller.editForm);
router.post('/update/:id', controller.updateTodo);
router.get('/delete/:id', controller.deleteTodo);

module.exports = router;