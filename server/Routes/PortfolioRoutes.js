import express from 'express';
import { AboutController, SkillsController, ProjectsController, ContactController } from '../Controllers/Portfoliocontroller.js';

const router = express.Router();

router.get('/About', AboutController.getAbout);
router.put('/About/:AboutId', AboutController.updateAbout); 

router.get('/Skills', SkillsController.getSkills);
router.post('/Skills', SkillsController.addSkills);
router.put('/Skills/:SkillId', SkillsController.updateSkill); 
router.delete('/Skills/:SkillId', SkillsController.DeleteSkill); 

router.get('/Projects', ProjectsController.getProjects);
router.post('/Projects', ProjectsController.addProject); 
router.put('/Projects/:projectId', ProjectsController.updateProject); 
router.delete('/Projects/:ProjectId', ProjectsController.DeleteProject); 
router.post('/submitContactForm', ContactController.submitContactForm);

export { router };
