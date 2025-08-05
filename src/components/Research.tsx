import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Lightbulb, Award } from "lucide-react";

const Research = () => {
  const researchArea = "Medical Image Processing";

  const publications = {
    conferences: [
      {
        title: "Detection of Microaneurysms Using Gabor Walsh-Hadamard Transform and Deep Autoencoder",
        venue: "IEEE International Conference on Computing, Communication, and Intelligent Systems",
        organizer: "Sharda University",
        type: "Conference"
      }
    ],
    journals: [
      {
        title: "Automated microaneurysms detection in retinal images using SSA optimised U-NET and Bayesian optimised CNN",
        journal: "Computer methods in Biomechanics and Biomedical Engineering: Imaging & Visualization",
        publisher: "Taylor & Francis Group",
        type: "Journal"
      },
      {
        title: "Resilient back-propagation machine learning-based classification on fundus images for retinal microaneurysm detection",
        journal: "International Ophthalmology",
        publisher: "Springer",
        type: "Journal"
      }
    ],
    patents: [
      {
        title: "Method for real time analysis and visualization of Bigdata using matrix factorization",
        publishDate: "18.8.2023",
        type: "Patent"
      }
    ]
  };

  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research & Publications
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground">Research Area:</span>
            <span className="font-semibold text-accent">{researchArea}</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Conference Publications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Conference Publications
            </h3>
            <div className="space-y-4">
              {publications.conferences.map((pub, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                        {pub.type}
                      </Badge>
                      <h4 className="text-lg font-medium text-foreground mb-2 leading-relaxed">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-1">
                        <span className="font-medium">Conference:</span> {pub.venue}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Organized by:</span> {pub.organizer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Journal Publications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-accent" />
              Journal Publications
            </h3>
            <div className="space-y-4">
              {publications.journals.map((pub, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent border-accent/20">
                        {pub.type}
                      </Badge>
                      <h4 className="text-lg font-medium text-foreground mb-2 leading-relaxed">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-1">
                        <span className="font-medium">Journal:</span> {pub.journal}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Publisher:</span> {pub.publisher}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Patents */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Patents
            </h3>
            <div className="space-y-4">
              {publications.patents.map((pub, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-accent/20">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="default" className="mb-3 bg-accent text-accent-foreground">
                        {pub.type}
                      </Badge>
                      <h4 className="text-lg font-medium text-foreground mb-2 leading-relaxed">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Published:</span> {pub.publishDate}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;