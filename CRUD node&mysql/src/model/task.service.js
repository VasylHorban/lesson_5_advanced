const dbConn = require('../../config/db.connect');
const Task = require('./Task');

const getAll = (callback) => {
    dbConn.query('SELECT * FROM task', (err, rows, fields) => {
        if (err) console.log('DB field')
        else return callback(rows)
        console.log(rows)
    })

};

const getTask = (id, callback) => {
    if (!Task.isCorrectId(id)) return callback('incorrect data');
    dbConn.query('SELECT * FROM task WHERE id = ?', id, (err, rows, fields) => {
        if (err) console.log('DB field')
        else return callback(rows)
    })
};

const removeTask = (id, callback) => {
    if (!Task.isCorrectId(id)) return callback('Incorrect id, please check data !');
    dbConn.query('DELETE FROM task WHERE id = ?', id, (err, rows, fields) => {
        if (err) console.log('DB field', err)
        else return callback(`Task(id = ${id}) deleted succesfully`)
    })
}

const createTask = (params, callback) => {

    let task = new Task();
    task.setId(params.id);
    task.setName(params.name);
    task.setDescription(params.description);
    task.setIsDone(params.isDone);
    if(!task.isCorrectTask()) return callback('Incorrect data, please check input !')
    
    let query = "INSERT INTO task (`name`, `description`, `isDone`) VALUES " + `('${task.name}', '${task.description}', '${task.isDone}')`;
    console.log(query)
    dbConn.query(query,(err, rows, fields)=>{
        console.log(rows)
        if(err) console.log('DB field', err)
        else return callback('Task added successfully')
    })
}

const updateTask = (params, callback) => {
    let task = new Task();
    task.setId(params.id);
    task.setName(params.name);
    task.setDescription(params.description);
    task.setIsDone(params.isDone);

    for(let key in task){
        if(task[key] == undefined) {
            delete task[key]
        }
    }
    let query = '';


    if(!Task.isCorrectId(task.id)) return callback('incorrect data');
        for(let key in task){
            if(task[key] != '' && task[key] != undefined && key != 'id'){
                query += "`" + key  + "`='" + task[key] + "',"
            
            }
        }
        query = "UPDATE `task` SET " + query.slice(0,-1) + " WHERE id = " + task.id;

        dbConn.query(query, (err, rows, fields)=>{
            if(err) console.log('DB field', err)
            else callback(`Task ${task.id} updated successfully`)
        })

    
    console.log(query)
};
module.exports = {
    getAll,
    getTask,
    removeTask,
    createTask,
    updateTask
}