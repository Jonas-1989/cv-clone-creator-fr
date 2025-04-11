
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { CVData, Experience, Education, Skill } from "@/lib/types";
import CVSection from "./CVSection";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CVEditorProps {
  cvData: CVData;
  onUpdateCV: (data: Partial<CVData>) => void;
}

const CVEditor = ({ cvData, onUpdateCV }: CVEditorProps) => {
  const form = useForm<CVData>({
    defaultValues: cvData,
  });

  const handlePersonalInfoChange = (field: string, value: string) => {
    onUpdateCV({
      personalInfo: {
        ...cvData.personalInfo,
        [field]: value,
      },
    });
  };

  const addExperience = () => {
    const newExperience: Experience = {
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
    const newEducation: Education = {
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

  const updateSkill = (index: number, field: string, value: string | number) => {
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
        
        <TabsContent value="personal">
          <CVSection title="Personal Information" collapsible={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input 
                    value={cvData.personalInfo.firstName} 
                    onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)} 
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input 
                    value={cvData.personalInfo.lastName} 
                    onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)} 
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Professional Title</FormLabel>
                <FormControl>
                  <Input 
                    value={cvData.personalInfo.title} 
                    onChange={(e) => handlePersonalInfoChange("title", e.target.value)} 
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    value={cvData.personalInfo.email} 
                    onChange={(e) => handlePersonalInfoChange("email", e.target.value)} 
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input 
                    value={cvData.personalInfo.phone} 
                    onChange={(e) => handlePersonalInfoChange("phone", e.target.value)} 
                  />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input 
                    value={cvData.personalInfo.location} 
                    onChange={(e) => handlePersonalInfoChange("location", e.target.value)} 
                  />
                </FormControl>
              </FormItem>
            </div>
            
            <FormItem className="mt-4">
              <FormLabel>Professional Summary</FormLabel>
              <FormControl>
                <Textarea 
                  value={cvData.personalInfo.summary}
                  onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
                  rows={4}
                />
              </FormControl>
            </FormItem>
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
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input 
                        value={experience.company}
                        onChange={(e) => updateExperience(index, "company", e.target.value)}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input 
                        value={experience.position}
                        onChange={(e) => updateExperience(index, "position", e.target.value)}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="MM/YYYY"
                        value={experience.startDate}
                        onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
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
                  </FormItem>
                </div>
                
                <FormItem className="mt-4">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      value={experience.description}
                      onChange={(e) => updateExperience(index, "description", e.target.value)}
                      rows={3}
                    />
                  </FormControl>
                </FormItem>
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
                  <FormItem>
                    <FormLabel>Institution</FormLabel>
                    <FormControl>
                      <Input 
                        value={education.institution}
                        onChange={(e) => updateEducation(index, "institution", e.target.value)}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Degree</FormLabel>
                    <FormControl>
                      <Input 
                        value={education.degree}
                        onChange={(e) => updateEducation(index, "degree", e.target.value)}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel>Field of Study</FormLabel>
                    <FormControl>
                      <Input 
                        value={education.field}
                        onChange={(e) => updateEducation(index, "field", e.target.value)}
                      />
                    </FormControl>
                  </FormItem>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input 
                          type="text" 
                          placeholder="MM/YYYY"
                          value={education.startDate}
                          onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                        />
                      </FormControl>
                    </FormItem>
                    
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input 
                          type="text" 
                          placeholder="MM/YYYY"
                          value={education.endDate}
                          onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>
                
                <FormItem className="mt-4">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      value={education.description}
                      onChange={(e) => updateEducation(index, "description", e.target.value)}
                      rows={2}
                    />
                  </FormControl>
                </FormItem>
              </div>
            ))}
            
            <Button onClick={addEducation} className="mt-2">
              <PlusCircle className="h-4 w-4 mr-2" /> Add Education
            </Button>
          </CVSection>
        </TabsContent>
        
        <TabsContent value="skills">
          <CVSection title="Skills" collapsible={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cvData.skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center gap-2">
                  <Input 
                    value={skill.name}
                    onChange={(e) => updateSkill(index, "name", e.target.value)}
                    placeholder="Skill name"
                    className="flex-1"
                  />
                  <select
                    value={skill.level}
                    onChange={(e) => updateSkill(index, "level", parseInt(e.target.value))}
                    className="border border-gray-300 rounded px-3 py-2"
                  >
                    <option value={1}>Beginner</option>
                    <option value={2}>Elementary</option>
                    <option value={3}>Intermediate</option>
                    <option value={4}>Advanced</option>
                    <option value={5}>Expert</option>
                  </select>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => removeSkill(skill.id)}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <Button onClick={addSkill} className="mt-4">
              <PlusCircle className="h-4 w-4 mr-2" /> Add Skill
            </Button>
          </CVSection>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CVEditor;
