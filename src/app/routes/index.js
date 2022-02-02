const {Router} = require('express');
const env = require('dotenv/config');
const separator = process.env.SEPARATOR
const {
    get_all_tasks, 
    get_single_task, 
    create_task, 
    update_task, 
    delete_task
} = require('../controller/index');

const router = Router();

router.route(`${separator}`).get(get_all_tasks).get(get_single_task);
router.route(`${separator}:id`).post(create_task).patch(update_task).delete(delete_task);
 
module.exports = router;
