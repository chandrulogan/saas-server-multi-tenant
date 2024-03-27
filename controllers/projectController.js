const { connectToDatabase } = require('../utils/database');
const projectModel = require('../models/projectModel');


const createProject = async (req, res) => {
    const { organisationName } = req.body;
    const db = await connectToDatabase(organisationName);

    try {
        const Project = db.model('projects', projectModel.schema);

        const newProject = new Project({
            organisationName: req.body.organisationName,
            projectName: req.body.projectName,
        });

        await newProject.save();

        // Close the connection after saving the user
        db.close();

        res.status(201).json({
            message: 'Project added successfully',
            newProject
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { createProject };
