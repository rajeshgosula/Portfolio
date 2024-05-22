// PortfolioController.js
import PortfolioService from "../Services/PortfolioServices.js";

const AboutController = {
  async getAbout(req, res) {
    try {
      const About = await PortfolioService.getAbout();
      res.json(About);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
async updateAbout(req, res){
  try{
    const {AboutId}=req.param
    const UpdatedAbout= await PortfolioService.updateAbout(AboutId, req.body)
    res.status(201).json({UpdatedAbout})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}};

const SkillsController ={
  async getSkills(req, res){
    try{
      const Skills =await PortfolioService.getSkills();
      res.json(Skills);
    }catch(error){
      res.status(500).json({error:error.message})
    }
    },
 async addSkills(req, res){
      try{
        const CreatenewSkill = await PortfolioService.addSkill()
        res.Status(201).json(CreatenewSkill)
      }catch(error){
        res.status(500).json({error: error.message})

      }
    },
  async updateSkill(req, res){
    try{
      const {SkillId}=req.param
      const updatedSkill= await PortfolioService.updateSkill(SkillId, req.body)
      res.status(201).json(updatedSkill)
    }catch(error){
      res.status(500).json({error: error.message})
    }
  },
  async DeleteSkill(req, res){
    try{
      const{SkillId}=req.param
      await PortfolioService.deleteSkill(SkillId)
      res.json({ message: "Skill deleted successfully" });
    }catch(error){
      res.status(500).json({error: error.message})
    }
  }
  }
const ProjectsController={
  async getProjects(req, res){
    try{
      const Projects= await PortfolioService.getProjects();
      res.json(Projects);
    }catch(error){
      res.status(500).json({error:error.message})
    }
  },
  async addProject(req, res){
    try{
      const CreateNewProject= await PortfolioService.addProject()
      res.status(201).json(CreateNewProject)
    }catch(error){
res.status(500).json({error:error.message})
    }
  },
  async updateProject(req, res){
try{
  const{projectId}=req.param 
  const updateProjectId=await PortfolioService.updateProject(projectId, req.body)
  res.status(201).json(updateProjectId)
}catch(error){
  res.status(500).json({error: error.message})
}
  }, 
async DeleteProject(req, res){
try{
  const {ProjectId}= req.param
 await PortfolioService.deleteProject(ProjectId)
  res.json({message:"Project Deleted Successfully "})
}catch(error){
  res.status(500).json({error: error.message})
}
}}
const ContactController = {
  async submitContactForm(req, res) {
    try {
      const formData = req.body;
      const newSubmission = await PortfolioService.addContactFormSubmission(formData);
      res.status(201).json({ message: 'Form submission saved successfully', data: newSubmission });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export {AboutController, SkillsController, ProjectsController, ContactController}