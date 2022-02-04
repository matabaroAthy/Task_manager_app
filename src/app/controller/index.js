const Task = require('../../db/models/index');

const get_all_tasks = async (req, res) =>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    }catch(e){
        res.status(500).json({ msg:e })
    }
};

const get_single_task = async (req, res) =>{
    try{
        const { id:taskID } = req.params
        const task = await Task.findOne({_id: taskID}).exec();

        if(!task)return res.status(404).json({msg: `no task with id : ${taskID}`});
        res.status(200).json({ task });
    }catch(e){
        res.status(500).json({ msg:e})
    }
};

const create_task = async (req, res) =>{ 
   try{
       const task = await Task.create(req.body);
    res.status(201).json({
        task,
        message: 'Task created successfully'
    })}catch(e){
    res.status(500).json({ msg:e })
    }
};

const update_task = async(req, res) =>{
    try{
        const {id:taskID} = req.params

        const task = await Task.findOneAndUpdate({id:taskID}, req.body,{
            new: true,
            runValidators:true,
        })

        if(!task)return res.status(404).json({msg: `no task with id : ${taskID}`});
            res.status(200).json({task});

    }catch(e){
        res.status(500).json({ msg:e });
    }
};

const delete_task = async (req, res) =>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndDelete({_id: taskID}).exec();

        if(!task)return res.status(404).json({msg: `no task with id : ${taskID}`});
        res.status(200).json({task});
    } catch (e) {
        res.status(500).json({ msg:e });
    }
};

module.exports = {
    get_all_tasks: get_all_tasks,
    get_single_task: get_single_task,
    create_task: create_task,
    update_task: update_task,
    delete_task: delete_task
}