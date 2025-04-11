
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CVData, Skill } from "@/lib/types";
import CVSection from "./CVSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/components/ui/form";
import { PlusCircle, Trash2 } from "lucide-react";

interface CVEditorProps {
  cvData: CVData;
  onUpdateCV: (data: Partial<CVData>) => void;
}

const SKILL_LEVELS = [
  { value: 1, label: "Beginner" },
  { value: 2, label: "Elementary" },
  { value: 3, label: "Intermediate" },
  { value: 4, label: "Advanced" },
  { value: 5, label: "Expert" }
];

const CVEditor = ({ cvData, onUpdateCV }: CVEditorProps) => {
  const handlePersonalInfoChange = (field: string, value: string) => {
    onUpdateCV({
      personalInfo: {
        ...cvData.personalInfo,
        [field]: value,
      },
    });
  };

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    };
    
    onUpdateCV({
      experiences: [...cvData.experiences, newExperience],
    });
  };

  const updateExperience = (index: number, field: string, value: string | boolean) => {
    const updatedExperiences = [...cvData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    
    onUpdateCV({ experiences: updatedExperiences });
  };

  const removeExperience = (id: string) => {
    onUpdateCV({
      experiences: cvData.experiences.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    
    onUpdateCV({
      education: [...cvData.education, newEducation],
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...cvData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    
    onUpdateCV({ education: updatedEducation });
  };

  const removeEducation = (id: string) => {
    onUpdateCV({
      education: cvData.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: uuidv4(),
      name: "",
      level: 3,
    };
    
    onUpdateCV({
      skills: [...cvData.skills, newSkill],
    });
  };

  const updateSkill = (index: number, field: 'name' | 'level', value: string | number) => {
    const updatedSkills = [...cvData.skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [field]: value,
    };
    
    onUpdateCV({ skills: updatedSkills });
  };

  const removeSkill = (id: string) => {
    onUpdateCV({
      skills: cvData.skills.filter((skill) => skill.id !== id),
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <Tabs defaultValue="personal">
        <TabsList className="mb-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <div>
          <TabsContent value="personal">
            <CVSection title="Personal Information" collapsible={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-item">
                  <label className="block text-gray-700">First Name</label>
                  <Input 
                    value={cvData.personalInfo.firstName} 
                    onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)} 
                  />
                </div>
                
                <div className="form-item">
                  <label className="block text-gray-700">Last Name</label>
                  <Input 
                    value={cvData.personalInfo.lastName} 
                    onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)} 
                  />
                </div>
                
                <div className="form-item">
                  <label className="block text-gray-700">Professional Title</label>
                  <Input 
                    value={cvData.personalInfo.title} 
                    onChange={(e) => handlePersonalInfoChange("title", e.target.value)} 
                  />
                </div>
                
                <div className="form-item">
                  <label className="block text-gray-700">Email</label>
                  <Input 
                    type="email"
                    value={cvData.personalInfo.email} 
                    onChange={(e) => handlePersonalInfoChange("email", e.target.value)} 
                  />
                </div>
                
                <div className="form-item">
                  <label className="block text-gray-700">Phone</label>
                  <Input 
                    value={cvData.personalInfo.phone} 
                    onChange={(e) => handlePersonalInfoChange("phone", e.target.value)} 
                  />
                </div>
                
                <div className="form-item">
                  <label className="block text-gray-700">Location</label>
                  <Input 
                    value={cvData.personalInfo.location} 
                    onChange={(e) => handlePersonalInfoChange("location", e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="form-item mt-4">
                <label className="block text-gray-700">Professional Summary</label>
                <Textarea 
                  value={cvData.personalInfo.summary}
                  onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
                  rows={4}
                />
              </div>
            </CVSection>
          </TabsContent>
          
          <TabsContent value="experience">
            <CVSection title="Professional Experience" collapsible={false}>
              {cvData.experiences.map((experience, index) => (
                <div key={experience.id} className="mb-6">
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Position {index + 1}</h4>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removeExperience(experience.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-item">
                      <label className="block text-gray-700">Company</label>
                      <Input 
                        value={experience.company}
                        onChange={(e) => updateExperience(index, "company", e.target.value)}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label className="block text-gray-700">Position</label>
                      <Input 
                        value={experience.position}
                        onChange={(e) => updateExperience(index, "position", e.target.value)}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label className="block text-gray-700">Start Date</label>
                      <Input 
                        type="text" 
                        placeholder="MM/YYYY"
                        value={experience.startDate}
                        onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label className="block text-gray-700">End Date</label>
                      <div className="flex items-center gap-2">
                        <Input 
                          type="text" 
                          placeholder="MM/YYYY"
                          value={experience.endDate}
                          onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                          disabled={experience.current}
                        />
                        <div className="flex items-center">
                          <input 
                            type="checkbox"
                            id={`current-${experience.id}`}
                            checked={experience.current}
                            onChange={(e) => updateExperience(index, "current", e.target.checked)}
                            className="mr-2"
                          />
                          <label htmlFor={`current-${experience.id}`} className="text-sm">Current</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-item mt-4">
                    <label className="block text-gray-700">Description</label>
                    <Textarea 
                      value={experience.description}
                      onChange={(e) => updateExperience(index, "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              
              <Button onClick={addExperience} className="mt-2">
                <PlusCircle className="h-4 w-4 mr-2" /> Add Experience
              </Button>
            </CVSection>
          </TabsContent>
          
          <TabsContent value="education">
            <CVSection title="Education" collapsible={false}>
              {cvData.education.map((education, index) => (
                <div key={education.id} className="mb-6">
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Education {index + 1}</h4>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removeEducation(education.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Remove
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-item">
                      <label className="block text-gray-700">Institution</label>
                      <Input 
                        value={education.institution}
                        onChange={(e) => updateEducation(index, "institution", e.target.value)}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label className="block text-gray-700">Degree</label>
                      <Input 
                        value={education.degree}
                        onChange={(e) => updateEducation(index, "degree", e.target.value)}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label className="block text-gray-700">Field of Study</label>
                      <Input 
                        value={education.field}
                        onChange={(e) => updateEducation(index, "field", e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="form-item">
                        <label className="block text-gray-700">Start Date</label>
                        <Input 
                          type="text" 
                          placeholder="MM/YYYY"
                          value={education.startDate}
                          onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                        />
                      </div>
                      
                      <div className="form-item">
                        <label className="block text-gray-700">End Date</label>
                        <Input 
                          type="text" 
                          placeholder="MM/YYYY"
                          value={education.endDate}
                          onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-item mt-4">
                    <label className="block text-gray-700">Description</label>
                    <Textarea 
                      value={education.description}
                      onChange={(e) => updateEducation(index, "description", e.target.value)}
                      rows={2}
                    />
                  </div>
                </div>
              ))}
              
              <Button onClick={addEducation} className="mt-2">
                <PlusCircle className="h-4 w-4 mr-2" /> Add Education
              </Button>
            </CVSection>
          </TabsContent>
          
          <TabsContent value="skills">
            <CVSection title="Skills" collapsible={false}>
              <div className="space-y-4">
                {cvData.skills.map((skill, index) => (
                  <div key={skill.id} className="flex items-center space-x-2">
                    <Select 
                      value={skill.level.toString()} 
                      onValueChange={(value) => updateSkill(index, 'level', parseInt(value))}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Level" />
                      </SelectTrigger>
                      <SelectContent>
                        {SKILL_LEVELS.map((level) => (
                          <SelectItem key={level.value} value={level.value.toString()}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Input
                      className="flex-1"
                      placeholder="Skill name"
                      value={skill.name}
                      onChange={(e) => updateSkill(index, 'name', e.target.value)}
                    />

                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => removeSkill(skill.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                
                <Button onClick={addSkill} className="mt-2">
                  <PlusCircle className="h-4 w-4 mr-2" /> Add Skill
                </Button>
              </div>
            </CVSection>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CVEditor;
