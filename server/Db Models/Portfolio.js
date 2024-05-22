import mongoose from "mongoose"

const {Schema, model}= mongoose
const AboutSchema = new Schema({
    About:String
})

const About = model ('About', AboutSchema)


const ProjectSchema = new Schema({
    Projects:String
})

const Projects = model('Projects',ProjectSchema)


const SkillsSchema= new Schema({
    Skills:String
})

const Skills= model('Skills', SkillsSchema)

const contactFormSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    comments: String
  });
  
const ContactForm = model('ContactForm', contactFormSchema);
  

export {About,Skills, Projects, ContactForm}


