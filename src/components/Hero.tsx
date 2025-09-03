import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            Er. S. STEFFI
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
            B.E., M.E, MBA, (Ph.D), Drone Pilot
          </p>
          <p className="text-lg text-primary-foreground/80">
            Computer Science Engineer & Research Scholar & Drone Pilot
          </p>
        </div>

        <Card className="bg-card/95 backdrop-blur-sm shadow-elegant p-8 mb-8 animate-slide-in">
          <h2 className="text-2xl font-semibold text-primary mb-4">Career Objective</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To pursue a challenging role as Engineer towards the growth of the Organization.
          </p>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/95 backdrop-blur-sm shadow-card p-6 animate-fade-in">
            <Phone className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Mobile</p>
            <p className="font-medium">+91 8525880869</p>
          </Card>
          
          <Card className="bg-card/95 backdrop-blur-sm shadow-card p-6 animate-fade-in">
            <Mail className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">steffis992@gmail.com</p>
          </Card>
          
          <Card className="bg-card/95 backdrop-blur-sm shadow-card p-6 animate-fade-in">
            <MapPin className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">Chennai, Tamil Nadu</p>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-card transition-smooth"
          >
            View Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
          >
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
