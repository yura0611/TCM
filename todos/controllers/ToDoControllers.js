const mongoose = require("mongoose");
const Todo = require("../models/todo");
const TodoModel = Todo.TodoModel;
const Joi = require("joi");
const JoiModel = Todo.schema;

const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

//get all Todos
const getTodos = async function (req, res) {
  const data = await TodoModel.find({}, (err, toDos) => {
    if (err) {
      res.status(500).json({ er });
    } else {
      res.status(200).json({
        message: "All ToDos",
        toDos,
      });
    }
  });
};

//get one todo
const getToDo = async function (req, res, next) {
  const id = await req.params.task_id;
  const data = await TodoModel.findById(id, (err, toDo) => {
    if (err) {
      res.status(500).json({
        err,
      });
    } else {
      res.status(200).json({
        message: "To-Do",
        toDo,
      });
    }
  });
};

//create new Todo
const addTodo = async function (req, res, next) {
  const { error } = await JoiModel.validate(req.body, options);
  if (error) {
    return next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  }
  const data = await TodoModel.create(req.body);
  data.save((err, todo) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).json({
        message: "ToDo has been created",
        todo,
      });
    }
  });
};

//update one Todo
const updateTodo = async function (req, res, next) {
  const id = await req.params.task_id;
  const { name, description } = await req.body;
  const  {error} = JoiModel.validate(req.body);

  if (error) {
   return  next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  }
  const data = await TodoModel.findByIdAndUpdate(
    id,
    {
      name: name,
      description: description,
    },
    (err, Todo) => {
      if (err) {
        res.status(500).json({
          err,
        });
      } else {
        res.status(200).json({
          message: "To-Do updated",
          Todo,
        });
      }
    }
  );
};

//delete Todo by id
const removeTodo = async function (req, res) {
  const id = await req.params.task_id;
  const data = await TodoModel.findByIdAndDelete(id, (err, ToDo) => {
    if (err) {
      res.status(500).json({
        err,
      });
    } else {
      res.status(200).json({
        message: "To-Do has been removed",
        ToDo,
      });
    }
  });
};

//Mark Todo as Done
const MarkDone = async function (req, res) {
  const id = await req.params.task_id;
  const data = await TodoModel.findByIdAndUpdate(
    id,
    {
      marked: true,
    },
    (err, ToDo) => {
      if (err) {
        res.status(500).json({
          err,
        });
      } else {
        res.status(200).json({
          message: "To-Do marked",
          ToDo,
        });
      }
    }
  );
};

//Mark Todo as undone
const MarkUnDone = async function (req, res) {
  const id = await req.params.task_id;
  const data = await TodoModel.findByIdAndUpdate(
    id,
    {
      marked: false,
    },
    (err, ToDo) => {
      if (err) {
        res.status(500).json({
          err,
        });
      } else {
        res.status(200).json({
          message: "To-Do unmarked",
          ToDo,
        });
      }
    }
  );
};

module.exports = {
  getTodos,
  getToDo,
  addTodo,
  updateTodo,
  removeTodo,
  MarkDone,
  MarkUnDone,
};
