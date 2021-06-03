const express = require("express");
const bodyParser = require('body-parser')
const TodoModel = require("./models/todo");

const routes = require("./routes/ToDoRoutes");
const logger = require('morgan');



const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://user1:YuRa0611@todos.yhnva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true};
mongoose.connect(mongoDB, dbOptions);
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const PORT = 3000;

routes(app);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
