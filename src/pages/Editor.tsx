
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "@/components/Navbar";
import CVEditor from "@/components/CVEditor";
import CVPreview from "@/components/CVPreview";
import TemplateSelector from "@/components/TemplateSelector";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Download, Save } from "lucide-react";
import { CVData } from "@/lib/types";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Editor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("editor");
  const [selectedTemplate, setSelectedTemplate] = useState("professional");
  const [cvData, setCVData] = useState<CVData>({
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      title: "Software Developer",
      email: "john.doe@example.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
      summary: "Experienced software developer with a passion for creating elegant solutions to complex problems.",
    },
    experiences: [
      {
        id: uuidv4(),
        company: "Tech Solutions Inc.",
        position: "Senior Developer",
        startDate: "01/2020",
        endDate: "Present",
        description: "Led development team in creating enterprise software solutions. Implemented CI/CD pipeline and reduced deployment time by 40%.",
        current: true,
      },
    ],
    education: [
      {
        id: uuidv4(),
        institution: "University of Paris",
        degree: "Master's",
        field: "Computer Science",
        startDate: "09/2015",
        endDate: "06/2018",
        description: "Graduated with honors. Specialized in machine learning and artificial intelligence.",
      },
    ],
    skills: [
      {
        id: uuidv4(),
        name: "JavaScript",
        level: 5,
      },
      {
        id: uuidv4(),
        name: "React",
        level: 4,
      },
      {
        id: uuidv4(),
        name: "Node.js",
        level: 4,
      },
      {
        id: uuidv4(),
        name: "Python",
        level: 3,
      },
    ],
  });

  const handleUpdateCV = (data: Partial<CVData>) => {
    setCVData((prev) => ({ ...prev, ...data }));
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("cv-preview");
    if (!element) return;

    toast({
      title: "Preparing download...",
      description: "Your CV is being prepared for download.",
    });

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save("your-cv.pdf");

      toast({
        title: "Download successful!",
        description: "Your CV has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "There was an error downloading your CV. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Editor */}
          <div className="md:col-span-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
              <TabsList className="w-full">
                <TabsTrigger value="editor" className="flex-1">Editor</TabsTrigger>
                <TabsTrigger value="templates" className="flex-1">Templates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor">
                <CVEditor cvData={cvData} onUpdateCV={handleUpdateCV} />
              </TabsContent>
              
              <TabsContent value="templates">
                <TemplateSelector 
                  selectedTemplate={selectedTemplate} 
                  onSelectTemplate={setSelectedTemplate} 
                />
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Preview */}
          <div className="md:col-span-2">
            <Card className="p-4 h-full">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold">Preview</h2>
                <div className="flex gap-2">
                  <Button onClick={handleDownloadPDF}>
                    <Download className="h-4 w-4 mr-2" /> Download PDF
                  </Button>
                </div>
              </div>
              
              <div id="cv-preview" className="bg-gray-100 rounded p-2">
                <CVPreview cvData={cvData} templateId={selectedTemplate} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
