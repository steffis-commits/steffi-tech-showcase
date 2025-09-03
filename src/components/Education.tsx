import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Drone Pilot"
    },
    {
      degree: "Ph.D (Pursuing)",
      institution: "MS University",
      university: "MS University",
      year: "Pursuing",
      grade: "A+",
      status: "current"
    },
    {
      degree: "MBA",
      institution: "Alagappa University",
      university: "Alagappa University", 
      year: "2018",
      grade: "70%"
    },
    {
      degree: "M.E (CSE)",
      institution: "University College of Engineering Nagercoil",
      university: "Anna University Chennai",
      year: "2014", 
      grade: "CGPA 8.1"
    },
    {
      degree: "B.E (CSE)",
      institution: "St.Xavier's Catholic College of Engineering",
      university: "Anna University Thirunelveli",
      year: "2011",
      grade: "71%"
    },
    {
      degree: "HSC (Maths-Biology)",
      institution: "St.Joseph Higher Secondary School",
      university: "State Board",
      year: "2007",
      grade: "76%"
    },
    {
      degree: "SSLC",
      institution: "L.M.S Higher Secondary School",
      university: "State Board", 
      year: "2005",
      grade: "81%"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational Qualification
          </h2>
          <p className="text-muted-foreground text-lg">
            B.E, M.E, MBA, (Ph.D.)
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`p-6 shadow-card transition-smooth hover:shadow-elegant ${
                edu.status === 'current' ? 'border-accent bg-accent/5' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    {edu.status === 'current' && (
                      <Badge variant="default" className="bg-accent text-accent-foreground">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.university}</p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
