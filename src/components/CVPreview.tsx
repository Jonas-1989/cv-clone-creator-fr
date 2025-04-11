
import { CVData } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Briefcase, BookOpen, Award, MapPin, Mail, Phone } from "lucide-react";

interface CVPreviewProps {
  cvData: CVData;
  templateId: string;
}

const CVPreview = ({ cvData, templateId }: CVPreviewProps) => {
  const renderProfessionalTemplate = () => {
    return (
      <div className="bg-white p-8 shadow-sm">
        {/* Header */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold mb-1">
            {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
          </h1>
          <h2 className="text-lg text-gray-600 mb-3">{cvData.personalInfo.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {cvData.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            
            {cvData.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            
            {cvData.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{cvData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Summary */}
        {cvData.personalInfo.summary && (
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2 border-b pb-1">Summary</h3>
            <p className="text-sm text-gray-700">{cvData.personalInfo.summary}</p>
          </div>
        )}
        
        {/* Experience */}
        {cvData.experiences.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-3 border-b pb-1 flex items-center">
              <Briefcase className="h-4 w-4 mr-2" /> Experience
            </h3>
            
            {cvData.experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">{exp.position}</h4>
                  <div className="text-xs text-gray-600">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-1">{exp.company}</div>
                <p className="text-xs text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Education */}
        {cvData.education.length > 0 && (
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-3 border-b pb-1 flex items-center">
              <BookOpen className="h-4 w-4 mr-2" /> Education
            </h3>
            
            {cvData.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">{edu.degree}</h4>
                  <div className="text-xs text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-1">{edu.institution}</div>
                <p className="text-xs text-gray-600">{edu.field}</p>
                {edu.description && <p className="text-xs text-gray-700 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}
        
        {/* Skills */}
        {cvData.skills.length > 0 && (
          <div>
            <h3 className="text-md font-semibold mb-2 border-b pb-1 flex items-center">
              <Award className="h-4 w-4 mr-2" /> Skills
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill) => (
                <div key={skill.id} className="bg-gray-100 px-2 py-1 rounded text-xs flex items-center">
                  <span className="mr-2">{skill.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 w-1 rounded-full mx-0.5 ${
                          i < skill.level ? "bg-blue-500" : "bg-gray-300"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderModernTemplate = () => {
    return (
      <div className="flex bg-white shadow-sm">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          <div className="mb-8">
            <div className="h-24 w-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 font-bold text-2xl">
              {cvData.personalInfo.firstName.charAt(0)}
              {cvData.personalInfo.lastName.charAt(0)}
            </div>
            
            <h1 className="text-center font-bold mb-1">
              {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
            </h1>
            <h2 className="text-center text-sm text-gray-600 mb-3">
              {cvData.personalInfo.title}
            </h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-bold tracking-wide mb-2">Contact</h3>
            {cvData.personalInfo.email && (
              <div className="flex items-center gap-2 mb-1 text-xs">
                <Mail className="h-3 w-3" />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            
            {cvData.personalInfo.phone && (
              <div className="flex items-center gap-2 mb-1 text-xs">
                <Phone className="h-3 w-3" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            
            {cvData.personalInfo.location && (
              <div className="flex items-center gap-2 mb-1 text-xs">
                <MapPin className="h-3 w-3" />
                <span>{cvData.personalInfo.location}</span>
              </div>
            )}
          </div>
          
          {/* Skills */}
          {cvData.skills.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wide mb-2">Skills</h3>
              
              {cvData.skills.map((skill) => (
                <div key={skill.id} className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>{skill.name}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full">
                    <div 
                      className="h-1.5 bg-blue-500 rounded-full" 
                      style={{ width: `${skill.level * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Main Content */}
        <div className="w-2/3 p-6">
          {/* Summary */}
          {cvData.personalInfo.summary && (
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600 mb-2">Profile</h3>
              <p className="text-sm text-gray-700">{cvData.personalInfo.summary}</p>
            </div>
          )}
          
          {/* Experience */}
          {cvData.experiences.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600 mb-3">Work Experience</h3>
              
              {cvData.experiences.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-sm">{exp.position}</h4>
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 rounded">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{exp.company}</div>
                  <p className="text-xs text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Education */}
          {cvData.education.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-blue-600 mb-3">Education</h3>
              
              {cvData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-sm">{edu.degree} in {edu.field}</h4>
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 rounded">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{edu.institution}</div>
                  {edu.description && <p className="text-xs text-gray-700">{edu.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderCreativeTemplate = () => {
    return (
      <div className="bg-white p-6 shadow-sm">
        {/* Header with background */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 -mx-6 -mt-6 mb-6">
          <h1 className="text-3xl font-bold">
            {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
          </h1>
          <h2 className="text-xl opacity-90 mt-1">{cvData.personalInfo.title}</h2>
          
          {/* Contact info in a row */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-90">
            {cvData.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            
            {cvData.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            
            {cvData.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{cvData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-1">
            {/* Skills */}
            {cvData.skills.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-purple-600 border-b border-purple-200 pb-2 mb-3">Skills</h3>
                
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600" 
                        style={{ width: `${skill.level * 20}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Education */}
            {cvData.education.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-purple-600 border-b border-purple-200 pb-2 mb-3">Education</h3>
                
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="mb-4">
                    <div className="text-sm font-bold">{edu.degree}</div>
                    <div className="text-sm">{edu.field}</div>
                    <div className="text-xs text-gray-600 mt-1">{edu.institution}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {edu.startDate} - {edu.endDate}
                    </div>
                    {edu.description && (
                      <p className="text-xs text-gray-600 mt-1">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Right Column */}
          <div className="col-span-2">
            {/* Summary */}
            {cvData.personalInfo.summary && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-purple-600 border-b border-purple-200 pb-2 mb-3">Profile</h3>
                <p className="text-sm">{cvData.personalInfo.summary}</p>
              </div>
            )}
            
            {/* Experience */}
            {cvData.experiences.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-purple-600 border-b border-purple-200 pb-2 mb-3">Experience</h3>
                
                {cvData.experiences.map((exp) => (
                  <div key={exp.id} className="mb-5">
                    <div className="flex justify-between items-center">
                      <h4 className="text-base font-bold">{exp.position}</h4>
                      <div className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </div>
                    </div>
                    <div className="text-sm font-medium mt-1">{exp.company}</div>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderTemplate = () => {
    switch (templateId) {
      case 'professional':
        return renderProfessionalTemplate();
      case 'modern':
        return renderModernTemplate();
      case 'creative':
        return renderCreativeTemplate();
      default:
        return renderProfessionalTemplate();
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="h-full w-full overflow-y-auto">{renderTemplate()}</div>
    </Card>
  );
};

export default CVPreview;
