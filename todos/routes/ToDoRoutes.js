const controller = require('../controllers/ToDoControllers');
const { collection } = require('../models/todo');

const getToDo = controller.getToDo;
const getTodos = controller.getTodos;
const addTodo = controller.addTodo;
const updateTodo = controller.updateTodo;
const removeTodo = controller.removeTodo;
const MarkDone = controller.MarkDone;
const MarkUnDone = controller.MarkUnDone;




 const routes = (app) => {
     app.route('/tasks')
    .get(getTodos);

     app.route('/tasks/:task_id')
    .get(getToDo)
    .post(updateTodo)
    .delete(removeTodo);

    app.route('/mark/:task_id')
    .post(MarkDone)

    app.route('/create')
    .post(addTodo);

    app.route('/unmark/:task_id')
    .post(MarkUnDone)

}
module.exports = routes;   

