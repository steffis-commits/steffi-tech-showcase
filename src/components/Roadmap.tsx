import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, TrendingUp, BookOpen, Users, Award } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Current Focus",
      period: "2024",
      status: "in-progress",
      items: [
        {
          title: "Complete Ph.D Research",
          description: "Finalizing doctoral thesis in Medical Image Processing",
          icon: BookOpen,
          priority: "high"
        },
        {
          title: "Advanced Research Publications",
          description: "Publish additional papers in high-impact journals",
          icon: Award,
          priority: "high"
        }
      ]
    },
    {
      phase: "Short Term Goals",
      period: "2024-2025",
      status: "planned",
      items: [
        {
          title: "Industry Collaboration",
          description: "Partner with healthcare technology companies for AI implementation",
          icon: Users,
          priority: "medium"
        },
        {
          title: "Conference Presentations",
          description: "Present research findings at international conferences",
          icon: TrendingUp,
          priority: "medium"
        },
        {
          title: "Advanced Certifications",
          description: "Pursue certifications in AI/ML and Cloud Computing",
          icon: Award,
          priority: "medium"
        }
      ]
    },
    {
      phase: "Medium Term Vision",
      period: "2025-2027",
      status: "planned",
      items: [
        {
          title: "Academic Leadership Role",
          description: "Secure position as Associate Professor or Department Head",
          icon: Users,
          priority: "high"
        },
        {
          title: "Research Lab Establishment",
          description: "Establish dedicated Medical AI research laboratory",
          icon: Target,
          priority: "high"
        },
        {
          title: "Industry Consulting",
          description: "Provide expertise to healthcare and tech organizations",
          icon: TrendingUp,
          priority: "medium"
        }
      ]
    },
    {
      phase: "Long Term Aspirations",
      period: "2027+",
      status: "vision",
      items: [
        {
          title: "Professor & Research Director",
          description: "Lead a research team in AI for medical applications",
          icon: Users,
          priority: "high"
        },
        {
          title: "International Recognition",
          description: "Achieve recognition as expert in Medical Image Processing",
          icon: Award,
          priority: "high"
        },
        {
          title: "Technology Innovation",
          description: "Develop breakthrough AI solutions for healthcare",
          icon: Target,
          priority: "high"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-accent text-accent-foreground";
      case "planned":
        return "bg-primary/10 text-primary border-primary/20";
      case "vision":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-accent/10 text-accent border-accent/20";
      case "medium":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Roadmap
          </h2>
          <p className="text-muted-foreground text-lg">
            Strategic career development and research advancement plan
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {phase.phase}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{phase.period}</span>
                  </div>
                </div>
                <Badge variant="secondary" className={getStatusColor(phase.status)}>
                  {phase.status === "in-progress" ? "In Progress" : 
                   phase.status === "planned" ? "Planned" : "Vision"}
                </Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {phase.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-4 bg-card border border-border/50">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getPriorityColor(item.priority)}`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-accent/5 border-accent/20">
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Continuous Growth Mindset
            </h3>
            <p className="text-muted-foreground">
              Committed to lifelong learning, research excellence, and making meaningful contributions 
              to the field of Medical Image Processing and Computer Science Engineering.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Roadmap;