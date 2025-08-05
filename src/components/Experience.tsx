import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Assistant Professor",
      organization: "DMI - St. John the Baptist University",
      location: "Lilongwe Campus, Malawi, Africa",
      duration: "29.10.2014 to 02.11.2016",
      period: "2 years",
      type: "International",
      subjects: [
        "Web and Mobile Application Development",
        "Data Analytics using Python", 
        "Data Visualization",
        "Python Programming",
        "Digital Nurture"
      ]
    },
    {
      position: "Head of Department (HOD)",
      organization: "St. Judes School and Polytechnic College",
      location: "Tholayavattam, Kanyakumari District",
      duration: "02.07.2012 to 30.09.2014", 
      period: "2 years and 2 months",
      type: "Academic Leadership"
    }
  ];

  const totalExperience = "4 years and 2 months";

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground">Total Experience:</span>
            <span className="font-semibold text-accent">{totalExperience}</span>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className={`w-fit ${
                        exp.type === 'International' 
                          ? 'bg-accent/10 text-accent border-accent/20' 
                          : 'bg-primary/10 text-primary border-primary/20'
                      }`}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-lg font-medium text-foreground">
                      {exp.organization}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {exp.subjects && (
                    <div>
                      <h5 className="font-medium text-foreground mb-3">Subjects Handled:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.subjects.map((subject, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-muted-foreground">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-right lg:text-left lg:min-w-48">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;