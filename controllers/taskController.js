const Task = require('../models/task')

const taskIndex = (req, res) => {
    Task.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { tasks: result, title: 'Tasks' });
    })
    .catch(err => {
      console.log(err);
    });
}