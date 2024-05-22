// PortfolioServices.js
import {About,Skills,Projects, ContactForm} from "../Db Models/Portfolio.js";

const PortfolioService = {
  async getAbout() {
    return await About.find();
  },
  async updateAbout(AboutId, UpdatedAbout){
return await About.findByIdAndUpdate(AboutId, UpdatedAbout, {new:true})
  },
  async getSkills(){
    return await Skills.find();
  },
  async addSkill(newSkill){
    return await Skills.create(newSkill)
  },
  async updateSkill(SkillId, updatedSkill){
    return await Skills.findByIdAndUpdate(SkillId, updatedSkill, {new:true})
  },
  async deleteSkill( SkillId){
return await Skills.findByIdAndDelete(SkillId)
  },
  async getProjects(){
    return await Projects.find();
  },
  async addProject(newProject) {
    return await Projects.create(newProject);
  },
  async updateProject(ProjectId, updatedProject) {
    return await Projects.findByIdAndUpdate(ProjectId, updatedProject, { new: true });
  },
  async deleteProject(ProjectId) {
    return await Projects.findByIdAndDelete(ProjectId);
  },
  async addContactFormSubmission(formData) {
    return await ContactForm.create(formData);
  }
  
  // Other service methods...
};

export default PortfolioService;
