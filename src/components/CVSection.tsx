
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { PlusCircle, Trash2, ChevronUp, ChevronDown } from "lucide-react";

interface CVSectionProps {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
}

const CVSection = ({ title, children, collapsible = true }: CVSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card className="mb-4">
      <CardHeader className="py-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        {collapsible && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>
        )}
      </CardHeader>
      {!isCollapsed && <CardContent>{children}</CardContent>}
    </Card>
  );
};

export default CVSection;
