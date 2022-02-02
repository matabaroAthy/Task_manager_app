

const get_all_tasks = (req, res) =>{
    res.send('get all tasks')
};

const get_single_task = (req, res) =>{
    res.send('get single tasks')
};

const create_task = (req, res) =>{
    res.send('create task')
};

const update_task = (req, res) =>{
    res.send('update task')
};

const delete_task = (req, res) =>{
    res.send('update task')
};

module.exports = {
    get_all_tasks: get_all_tasks,
    get_single_task: get_single_task,
    create_task: create_task,
    update_task: update_task,
    delete_task: delete_task
}