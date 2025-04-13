import { CVData } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Briefcase, BookOpen, Award, MapPin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CVPreviewProps {
  cvData: CVData;
  templateId: string;
}

const CVPreview = ({ cvData, templateId }: CVPreviewProps) => {
  const renderProfessionalTemplate = () => {
    return (
      <div className="bg-white shadow-sm max-w-[210mm] mx-auto print:shadow-none" style={{ 
        minHeight: '297mm',
        padding: '15mm',
        boxSizing: 'border-box',
        position: 'relative',
        marginBottom: '10mm'
      }}>
        <div className="absolute inset-0 border border-gray-200 m-[5mm]"></div>
        <div className="relative h-full pb-[5mm]">
          <div className="relative">
            {/* Header */}
            <div className="border-b pb-4 mb-6">
              <div className="flex items-center justify-between gap-6 mb-4">
                <div className="flex-1">
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

                  {/* Optional Information */}
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                    {cvData.personalInfo.birthDate && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Date de naissance:</span>
                        <span>{cvData.personalInfo.birthDate}</span>
                      </div>
                    )}
                    
                    {cvData.personalInfo.gender && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Sexe:</span>
                        <span>{cvData.personalInfo.gender === 'male' ? 'Homme' : 'Femme'}</span>
                      </div>
                    )}

                    {cvData.personalInfo.maritalStatus && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">État civil:</span>
                        <span>
                          {cvData.personalInfo.maritalStatus === 'single' && 'Célibataire'}
                          {cvData.personalInfo.maritalStatus === 'married' && 'Marié(e)'}
                          {cvData.personalInfo.maritalStatus === 'divorced' && 'Divorcé(e)'}
                          {cvData.personalInfo.maritalStatus === 'widowed' && 'Veuf/Veuve'}
                        </span>
                      </div>
                    )}

                    {cvData.personalInfo.drivingLicense && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Permis de conduire:</span>
                        <span>{cvData.personalInfo.drivingLicense}</span>
                      </div>
                    )}

                    {cvData.personalInfo.linkedin && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">LinkedIn:</span>
                        <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {cvData.personalInfo.linkedin}
                        </a>
                      </div>
                    )}

                    {cvData.personalInfo.customField && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Autre:</span>
                        <span>{cvData.personalInfo.customField}</span>
                      </div>
                    )}
                  </div>
                </div>

                {cvData.personalInfo.photo ? (
                  <div className="flex-shrink-0 flex items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={cvData.personalInfo.photo} alt="Profile photo" />
                      <AvatarFallback>
                        {cvData.personalInfo.firstName.charAt(0)}
                        {cvData.personalInfo.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ) : null}
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
        </div>
      </div>
    );
  };

  const renderModernTemplate = () => {
    return (
      <div className="bg-white shadow-sm max-w-[210mm] mx-auto print:shadow-none" style={{ 
        minHeight: '297mm',
        padding: '0',
        boxSizing: 'border-box',
        position: 'relative',
        marginBottom: '10mm'
      }}>
        <div className="absolute inset-0 border border-gray-200 m-[5mm]"></div>
        <div className="relative flex h-full" style={{ minHeight: 'calc(297mm - 10mm)' }}>
          {/* Left Column - Contact & Skills */}
          <div className="w-1/3 relative" style={{ minHeight: 'calc(297mm - 10mm)' }}>
            {/* Vertical Accent Line */}
            <div className="absolute top-[10mm] right-0 w-1 bottom-[2mm] bg-yellow-400"></div>

            <div className="p-8 space-y-8">
              {/* Profile Photo */}
              <div>
                {cvData.personalInfo.photo ? (
                  <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                    <img 
                      src={cvData.personalInfo.photo} 
                      alt="Profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-40 w-40 bg-blue-50 rounded-full flex items-center justify-center text-4xl font-light border-4 border-gray-100 shadow-lg text-blue-600">
                    {cvData.personalInfo.firstName.charAt(0)}
                    {cvData.personalInfo.lastName.charAt(0)}
                  </div>
                )}
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-bold mb-6 text-gray-400">Contact</h3>
                <div className="space-y-4">
                  {cvData.personalInfo.email && (
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-600">{cvData.personalInfo.email}</span>
                    </div>
                  )}
                  {cvData.personalInfo.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-600">{cvData.personalInfo.phone}</span>
                    </div>
                  )}
                  {cvData.personalInfo.location && (
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-600">{cvData.personalInfo.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills Section */}
              {cvData.skills.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-bold mb-6 text-gray-400">Skills</h3>
                  <div className="space-y-4">
                    {cvData.skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">{skill.name}</span>
                        </div>
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`h-2.5 w-2.5 rounded-full ${
                                level <= skill.level ? 'bg-yellow-400' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hobbies Section */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-bold mb-6 text-gray-400">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Gaming', 'Writing', 'Travelling', 'Sketching'].map((hobby) => (
                    <span key={hobby} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-full">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="w-2/3 p-10 pt-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-2">
                {cvData.personalInfo.firstName} <span className="text-blue-600">{cvData.personalInfo.lastName}</span>
              </h1>
              <h2 className="text-2xl text-gray-500 uppercase tracking-wide">
                {cvData.personalInfo.title}
              </h2>
            </div>

            {/* About Section */}
            {cvData.personalInfo.summary && (
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-wider font-bold mb-6 text-gray-400">About</h3>
                <p className="text-gray-600 leading-relaxed text-base">{cvData.personalInfo.summary}</p>
              </div>
            )}

            {/* Work Experience */}
            {cvData.experiences.length > 0 && (
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-wider font-bold mb-8 text-gray-400">
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {cvData.experiences.map((exp) => (
                    <div key={exp.id} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="mb-3">
                        <h4 className="text-xl font-semibold text-gray-800">{exp.position}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-blue-600 text-lg">{exp.company}</span>
                          <span className="text-sm text-gray-500">
                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {cvData.education.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wider font-bold mb-8 text-gray-400">Education</h3>
                <div className="space-y-8">
                  {cvData.education.map((edu) => (
                    <div key={edu.id} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="mb-3">
                        <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-blue-600 text-lg">{edu.institution}</span>
                          <span className="text-sm text-gray-500">
                            {edu.startDate} - {edu.endDate}
                          </span>
                        </div>
                        {edu.field && <p className="text-gray-600 text-base mt-1">{edu.field}</p>}
                      </div>
                      {edu.description && (
                        <p className="text-gray-600 text-base leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCreativeTemplate = () => {
    return (
      <div className="bg-white shadow-sm max-w-[210mm] mx-auto print:shadow-none" style={{ 
        minHeight: '297mm',
        padding: '15mm',
        boxSizing: 'border-box',
        position: 'relative',
        marginBottom: '10mm'
      }}>
        <div className="absolute inset-0 border border-gray-200 m-[5mm]"></div>
        <div className="relative h-full pb-[5mm]">
          {/* Header with background */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 -mx-6 -mt-6 mb-6">
            <div className="flex items-center gap-6 mb-4">
              {cvData.personalInfo.photo ? (
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src={cvData.personalInfo.photo} 
                      alt="Profile photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : null}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">
                  {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
                </h1>
                <h2 className="text-xl text-white/80 mb-4">{cvData.personalInfo.title}</h2>
              </div>
            </div>
            
            {/* Contact info in a row */}
            <div className="flex flex-wrap gap-4 mt-4 text-base text-gray-600">
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

              {/* Optional Information for Creative Template */}
              <div className="flex flex-wrap gap-4 mt-4 text-base text-gray-200">
                {cvData.personalInfo.birthDate && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Date de naissance:</span>
                    <span>{cvData.personalInfo.birthDate}</span>
                  </div>
                )}
                
                {cvData.personalInfo.gender && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Sexe:</span>
                    <span>{cvData.personalInfo.gender === 'male' ? 'Homme' : 'Femme'}</span>
                  </div>
                )}

                {cvData.personalInfo.maritalStatus && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">État civil:</span>
                    <span>
                      {cvData.personalInfo.maritalStatus === 'single' && 'Célibataire'}
                      {cvData.personalInfo.maritalStatus === 'married' && 'Marié(e)'}
                      {cvData.personalInfo.maritalStatus === 'divorced' && 'Divorcé(e)'}
                      {cvData.personalInfo.maritalStatus === 'widowed' && 'Veuf/Veuve'}
                    </span>
                  </div>
                )}

                {cvData.personalInfo.drivingLicense && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Permis de conduire:</span>
                    <span>{cvData.personalInfo.drivingLicense}</span>
                  </div>
                )}

                {cvData.personalInfo.linkedin && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">LinkedIn:</span>
                    <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 hover:underline">
                      {cvData.personalInfo.linkedin}
                    </a>
                  </div>
                )}

                {cvData.personalInfo.customField && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Autre:</span>
                    <span>{cvData.personalInfo.customField}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTurquoiseTemplate = () => {
    return (
      <div className="bg-white shadow-sm max-w-[210mm] mx-auto print:shadow-none" style={{ 
        minHeight: '297mm',
        padding: '15mm',
        boxSizing: 'border-box',
        position: 'relative',
        marginBottom: '10mm'
      }}>
        <div className="absolute inset-0 border border-gray-200 m-[5mm]"></div>
        <div className="relative flex h-full pb-[5mm]">
          {/* Left Sidebar */}
          <div className="w-1/3 bg-[#20B2AA] text-white p-6">
            {/* Profile Photo and Name */}
            <div className="mb-8 text-center">
              {cvData.personalInfo.photo ? (
                <div className="h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                  <img 
                    src={cvData.personalInfo.photo} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-32 w-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  {cvData.personalInfo.firstName.charAt(0)}
                  {cvData.personalInfo.lastName.charAt(0)}
                </div>
              )}
              <h1 className="text-xl font-bold mb-1">
                {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
              </h1>
            </div>

            {/* Informations personnelles */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Informations personnelles</h2>
              <div className="space-y-2 text-sm">
                {cvData.personalInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{cvData.personalInfo.email}</span>
                  </div>
                )}
                {cvData.personalInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{cvData.personalInfo.phone}</span>
                  </div>
                )}
                {cvData.personalInfo.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{cvData.personalInfo.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Compétences */}
            {cvData.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Compétences</h2>
                <div className="space-y-3">
                  {cvData.skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                      </div>
                      <div className="w-full bg-white/20 h-1.5 rounded-full">
                        <div 
                          className="h-full bg-white rounded-full" 
                          style={{ width: `${skill.level * 20}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualités */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Qualités</h2>
              <ul className="list-none space-y-2">
                {['Dynamique', 'Ponctuelle', 'Souriante'].map((quality) => (
                  <li key={quality} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {quality}
                  </li>
                ))}
              </ul>
            </div>

            {/* Centres d'intérêt */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Centres d'intérêt</h2>
              <ul className="list-none space-y-2">
                {['Yoga', 'Danse contemporaine'].map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-2/3 p-6">
            {/* Profil */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#20B2AA] mb-4">Profil</h2>
              <p className="text-sm text-gray-600">{cvData.personalInfo.summary}</p>
            </div>

            {/* Expérience professionnelle */}
            {cvData.experiences.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#20B2AA] mb-4">Expérience professionnelle</h2>
                <div className="space-y-6">
                  {cvData.experiences.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-gray-800">{exp.position}</h3>
                          <p className="text-sm text-gray-600">{exp.company}</p>
                        </div>
                        <span className="text-sm text-[#20B2AA]">
                          {exp.startDate} - {exp.current ? "ce jour" : exp.endDate}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <h4 className="font-semibold mb-1">Réalisation de soins esthétiques :</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.description.split('\n').map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formation */}
            {cvData.education.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-[#20B2AA] mb-4">Formation</h2>
                <div className="space-y-4">
                  {cvData.education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                          <p className="text-sm text-gray-600">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-[#20B2AA]">{edu.startDate}</span>
                      </div>
                      {edu.description && (
                        <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
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
      case 'turquoise':
        return renderTurquoiseTemplate();
      default:
        return renderProfessionalTemplate();
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto">{renderTemplate()}</div>
  );
};

export default CVPreview;
