const mongoose = require("mongoose");

const Joi = require("joi");

const ToDo = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  marked: { type: Boolean, default: false },
});

const schema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  marked: Joi.boolean(),
});

const TodoModel = mongoose.model("ToDo", ToDo);

module.exports = { TodoModel, schema };
