import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
});

const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

const skillSchema = new mongoose.Schema({
    frontend: {
        type: String,
        required: true
    },
    backend: {
        type: String,
        required: true
    },
    others: {
        type: String,
        required: true
    }
});

const projectSchema = new mongoose.Schema({
    image: { 
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    }
});

const linkSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    twitter: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    linkedin: {
        type: Object,
        required: true
    },
    resume: {
        type: String,
        required: true,
    }
}); 

export const Experience = mongoose.model('experiences', experienceSchema)
export const Education = mongoose.model('educations', educationSchema)
export const Skills = mongoose.model('skills', skillSchema)
export const Projects = mongoose.model('projects', projectSchema)
export const Links = mongoose.model('links', linkSchema)
