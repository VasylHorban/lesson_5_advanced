const taskService = require('../model/task.service');

const all_task_get = (req, res) => {
    taskService.getAll(result=>{
        res.send(result)
    })
}

const task_get = (req, res) => {
    let id = req.params.id;
    taskService.getTask(id, (result) => {
        res.send(result)
    })
}

const task_delete = (req, res) => {
    let id = req.body.id;
    taskService.removeTask(id, (result)=>{
        res.send(result)
    })
}

const create_task_post = (req, res) => {
    let params = req.body;
    taskService.createTask(params , (result)=> {
        res.send(result)
    })
}

const update_task_put = (req, res) => {
    let params = req.body;
    taskService.updateTask(params, (result) => {
        res.send(result)
    })
}
module.exports = {
    all_task_get,
    task_get,
    task_delete,
    create_task_post,
    update_task_put
}