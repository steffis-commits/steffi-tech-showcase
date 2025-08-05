import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 8525880869",
      href: "tel:+918525880869"
    },
    {
      icon: Mail,
      label: "Email",
      value: "steffis992@gmail.com",
      href: "mailto:steffis992@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#"
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-hero text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-primary-foreground/80 text-lg">
            Let's discuss opportunities for collaboration and research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-card/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <info.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {info.label}
              </h3>
              {info.href.startsWith('#') ? (
                <p className="text-primary-foreground/80">{info.value}</p>
              ) : (
                <a 
                  href={info.href}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  {info.value}
                </a>
              )}
            </Card>
          ))}
        </div>

        <Card className="bg-card/10 backdrop-blur-sm border-primary-foreground/20 p-8 text-center">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
            Professional Summary
          </h3>
          <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-4xl mx-auto">
            Computer Science Engineer with M.E, MBA, and pursuing Ph.D. in Medical Image Processing. 
            International academic experience with expertise in web development, data analytics, and AI research. 
            Committed to advancing healthcare technology through innovative research and education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact for Opportunities
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
            >
              <Phone className="h-4 w-4 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </Card>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-accent" /> by Er. S. STEFFI © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;