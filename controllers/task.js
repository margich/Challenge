const { Task } = require('../config/sequelize')

exports.get_all = (req, res, next) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const order = req.query.order || 'created'
    const orderMethod = req.query.orderMethod || 'DESC'
    const offset = (page - 1) * limit
    Task.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [[order, orderMethod]]
        })
        .then(result => {
            const response = {
                totalTasks: result.count,
                page: page,
                perPage: limit,
                tasks: result.rows.map(result => {
                return {
                            task_id: result.task_id,
                            customer_first_name: result.customer_first_name,
                            personnel_first_name: result.personnel_first_name,
                            personnel_other_name: result.personnel_other_name,
                            customer_last_name: result.customer_last_name,
                            agentId: result.agentId,
                            assigned: result.assigned,
                            in_progress: result.in_progress,
                            completed: result.completed,
                            deferred: result.deferred,
                            status: result.task_status_name,
                            location: result.customer_location,
                            gender: result.customer_gender,
                            age: result.customer_age,
                            access_code: result.customer_access_code,
                            splash_page: result.customer_splash_page,
                            mpesa: result.customer_mpesa,
                            autoplay: result.customer_autoplay,
                            comments: result.customer_comments,
                            registration: result.registration
                }
            })
        }
            res.status(200).json(response)
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err.message
            });
        });
}
