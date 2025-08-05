import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, MapPin, Heart, Home } from "lucide-react";

const PersonalInfo = () => {
  const personalDetails = [
    {
      icon: Calendar,
      label: "Date of Birth",
      value: "07-08-1989"
    },
    {
      icon: User,
      label: "Gender",
      value: "Female"
    },
    {
      icon: MapPin,
      label: "Nationality",
      value: "Indian"
    },
    {
      icon: Heart,
      label: "Religion",
      value: "Christian"
    },
    {
      icon: User,
      label: "Marital Status",
      value: "Married"
    }
  ];

  const addresses = {
    current: {
      title: "Current Address",
      location: "Avadi, Chennai, Tamil Nadu",
      icon: Home
    },
    permanent: {
      title: "Permanent Address", 
      location: "Karungal P.O, Kanyakumari District, Pin: 629157, Tamil Nadu",
      icon: MapPin
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <User className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Personal Details
          </h2>
          <p className="text-muted-foreground text-lg">
            Background and Contact Information
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <User className="h-6 w-6 text-primary" />
              Personal Information
            </h3>
            <div className="space-y-4">
              {personalDetails.map((detail, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <detail.icon className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{detail.label}</span>
                  </div>
                  <span className="font-medium text-foreground">{detail.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Address Information */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" />
              Address Information
            </h3>
            <div className="space-y-6">
              {Object.entries(addresses).map(([key, address]) => (
                <div key={key} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <address.icon className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">{address.title}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed ml-8">
                    {address.location}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Professional Identity Summary */}
        <Card className="mt-8 p-6 bg-gradient-subtle border-primary/20">
          <div className="text-center">
            <Badge variant="default" className="bg-primary text-primary-foreground mb-4">
              Professional Identity
            </Badge>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Er. S. STEFFI, M.E, MBA, (Ph.D)
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A dedicated Computer Science Engineer and Research Scholar with extensive academic qualifications 
              and international experience. Specialized in Medical Image Processing with a strong foundation 
              in web development, data analytics, and educational leadership. Committed to advancing technology 
              for healthcare applications and contributing to academic excellence.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PersonalInfo;