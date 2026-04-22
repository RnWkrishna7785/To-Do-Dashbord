
let todos = []; 


exports.getTodos = (req, res) => {
    res.render('index', { todos });
};

exports.addForm = (req, res) => {
    res.render('add');
};


exports.createTodo = (req, res) => {
    const newTodo = {
        id: Date.now().toString(), 
        task: req.body.task,
        status: req.body.status || "Pending"
    };
    todos.push(newTodo);
    res.redirect('/');
};

exports.editForm = (req, res) => {
    const todo = todos.find(ui => ui.id === req.params.id);
    res.render('edit', { todo });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(ui => ui.id === id);
    if (index !== -1) {
        todos[index].task = req.body.task;
        todos[index].status = req.body.status;
    }
    res.redirect('/');
};


exports.deleteTodo = (req, res) => {
    todos = todos.filter(ui => ui.id !== req.params.id);
    res.redirect('/');
};