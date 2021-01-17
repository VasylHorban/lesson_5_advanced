const express = require('express');
const router = express.Router();

const taskConntroller = require('../controller/task');

router.get('/tasks', (req, res)=>{
    taskConntroller.all_task_get(req, res)
});

router.get('/tasks/:id', (req, res)=>{
    taskConntroller.task_get(req,res)
})

router.delete('/tasks/:id', (req, res)=>{
    taskConntroller.task_delete(req,res)
})

router.post('/tasks', (req, res)=>{
    taskConntroller.create_task_post(req, res)
});

router.put('/tasks/', (req, res)=>{
    taskConntroller.update_task_put(req, res)
});

module.exports = router;
