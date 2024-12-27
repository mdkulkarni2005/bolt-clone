import projectModel from "../models/project.model.js";



export const createProject = async ({
    name, userId
}) => {
    if (!name) {
        throw new Error('Name is required');
    }
    if (!userId) {
        throw new Error('User is required');
    }

    try {
        const project = await projectModel.create({
            name,
            users: [userId]
        });
        return project;
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error code in MongoDB
            throw new Error('Project name already exists');
        }
        throw error;
    }

    return project;
 }