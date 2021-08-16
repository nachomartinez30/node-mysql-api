import Task from "../model/Task";

export const createTask = async (req, res, next) => {
    try {
        const { name, projectId, done } = req.body;
        const created = await Task.create({ name, projectId, done });
        if (created) res.send({ msg: "Task created successfully!" })
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getTask = async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getOneTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Task.findOne({ where: { id } });
        res.send(task)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const rowCount = await Task.destroy({ where: { id } });
        if (rowCount > 0) res.send({ msg: "Project deleted", count: rowCount })
        else res.send({ msg: "Project was not deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, projectId, done } = req.body
        const task = await Task.findOne({ where: { id } });

        task.name = name;
        task.projectId = projectId;
        task.done = done;

        task.save();

        res.send({ msg: "Task Updated successfully", task });

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getTasksByProject = async (req, res, next) => {
    try {
        const { projectId } = req.params
        const task = await Task.findAll({ where: { projectId } });
        res.send(task)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
