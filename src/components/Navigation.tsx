import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, GraduationCap, Briefcase, BookOpen, Code, Target, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#personal", icon: User },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Research", href: "#research", icon: BookOpen },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Roadmap", href: "#roadmap", icon: Target },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-primary">
            Er. S. STEFFI
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full justify-start text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;