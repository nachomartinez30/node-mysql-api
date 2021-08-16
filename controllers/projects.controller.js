import Project from "../model/Project";

export const createProject = async (req, res, next) => {
    try {
        const { name, priority, description, deliverydat } = req.body;
        const created = await Project.create({
            name,
            priority,
            description,
            deliverydat
        });
        if (created) res.send({ msg: "Project created successfully!" })
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}

export const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.findAll()
        res.send(projects)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getOneProject = async (req, res, next) => {
    try {
        const { id } = req.params
        const project = await Project.findOne({ where: { id } })
        res.send(project)
    } catch (error) {
        console.error(error);
        res.send(error)
    }
}

export const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params
        const rowCount = await Project.destroy({ where: { id } })
        if (rowCount > 0) res.send({ msg: "Projects deleted", count: rowCount });
        else res.send({ msg: "Projects was not deleted", count: rowCount });

    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}


export const updateProject = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, priority, description, deliverydat } = req.body;
        /* FIND ONE PROJECTS WITH THIS ID */
        const projects = await Project.findOne({ where: { id } });

        projects.name = name;
        projects.priority = priority;
        projects.description = description;
        projects.deliverydat = deliverydat;

        await projects.save();

        res.send({
            msg: "Project successfully",
            projects
        })
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}
