import Task from "../model/Task";

export const createTask = async (req, res, next) => {
    try {
        const { name, projectId, done } = req.body;
        const created = await Task.create({ name, projectId, done });
        if (created) res.send({ msg: "Task created successfully!" })
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}

export const getTask = async (req, res, next) => {
    try {
        const { id } = req.body;
        const tasks = await Task.findAll({
            where: { id }
        });

        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.send(error)
    }
}