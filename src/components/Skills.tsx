import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Award } from "lucide-react";

const Skills = () => {
  const technicalSkills = {
    programmingLanguages: [
      "Python",
      "PHP", 
      "JavaScript",
      "Node.js"
      "R Programming"
    ],
    frameworks: [
      "Angular",
      "React",
      "Express.js"
    ],
    dataVisualization: [
      "Tableau",
      "Python Visualization Libraries",
      "Data Analytics"
    ],
    specializations: [
      "Web Development",
      "Mobile Application Development", 
      "Data Analytics using Python",
      "Data Visualization",
      "Digital Nurture",
      "Medical Image Processing",
      "Hadoop"
    ]
  };

  const completedCourses = [
    "Data Analytics Using Python"
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Code className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Proficiency
          </h2>
          <p className="text-muted-foreground text-lg">
            Programming Languages, Frameworks & Specializations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">
                Programming Languages
              </h3>
            </div>
            <div className="space-y-3">
              {technicalSkills.programmingLanguages.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Frameworks */}
          <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth">
            <div className="flex items-center gap-3 mb-4">
              <Database className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Frameworks
              </h3>
            </div>
            <div className="space-y-3">
              {technicalSkills.frameworks.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Data Visualization */}
          <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">
                Data & Analytics
              </h3>
            </div>
            <div className="space-y-3">
              {technicalSkills.dataVisualization.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Specializations */}
        <Card className="mt-8 p-6 shadow-card">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Core Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.specializations.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-primary/10 text-primary border-primary/20 p-3 justify-center text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Completed Courses */}
        <Card className="mt-8 p-6 shadow-card border-accent/20">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-accent" />
            Completed Courses
          </h3>
          <div className="space-y-3">
            {completedCourses.map((course, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">{course}</span>
                <Badge variant="default" className="bg-accent text-accent-foreground ml-auto">
                  Certified
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
