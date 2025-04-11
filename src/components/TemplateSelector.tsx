
import { useState } from "react";
import { Template } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const templates: Template[] = [
  {
    id: "professional",
    name: "Professional",
    thumbnail: "https://via.placeholder.com/150x200?text=Professional",
  },
  {
    id: "modern",
    name: "Modern",
    thumbnail: "https://via.placeholder.com/150x200?text=Modern",
  },
  {
    id: "creative",
    name: "Creative",
    thumbnail: "https://via.placeholder.com/150x200?text=Creative",
  },
];

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector = ({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
      <div className="grid grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card 
            key={template.id} 
            className={`cursor-pointer relative ${selectedTemplate === template.id ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <CardContent className="p-2">
              <img 
                src={template.thumbnail} 
                alt={template.name} 
                className="w-full h-40 object-cover rounded"
              />
              <p className="mt-2 text-center text-sm font-medium">{template.name}</p>
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
