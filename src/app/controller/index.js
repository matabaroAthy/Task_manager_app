

const get_all_tasks = (req, res) =>{
    res.send('get all tasks')
};

const get_single_task = (req, res) =>{
    res.json({id: req.params.id})
};

const create_task = (req, res) =>{ 
    res.json(req.body)
};

const update_task = (req, res) =>{
    res.json({id: req.params.id})
};

const delete_task = (req, res) =>{
    res.json({id: req.params.id})
};

module.exports = {
    get_all_tasks: get_all_tasks,
    get_single_task: get_single_task,
    create_task: create_task,
    update_task: update_task,
    delete_task: delete_task
}