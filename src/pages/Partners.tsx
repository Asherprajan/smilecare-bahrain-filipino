import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Shield, Users, MapPin, Award, Stethoscope, Globe, Camera } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Philippine Embassy (Bahrain)",
      role: "Community Outreach & Recognition",
      description: "Official recognition and support for serving the Filipino community in Bahrain",
      icon: Globe,
      established: "Diplomatic Relations"
    },
    {
      name: "Gulf Union Insurance",
      role: "Insurance Underwriter",
      description: "Established insurance provider with over 30 years of experience in the Gulf region",
      icon: Shield,
      established: "Est. 1995"
    },
    {
      name: "Fakhro Insurance Services",
      role: "Brokerage & Registration Support",
      description: "Trusted insurance brokerage providing registration and customer support services",
      icon: Building,
      established: "Est. 2000"
    },
    {
      name: "Mazaya Dental Centre",
      role: "Exclusive Dental Provider",
      description: "State-of-the-art dental facility in Isa Town providing comprehensive dental care",
      icon: Stethoscope,
      established: "Est. 2024"
    }
  ];

  const facilities = [
    "5+ advanced treatment rooms",
    "CBCT & digital X-ray systems", 
    "Fully equipped dental laboratory",
    "Modern sterilization equipment",
    "Comfortable patient waiting areas"
  ];

  const team = [
    "10+ certified dental professionals",
    "Specialists in orthodontics",
    "Endodontics experts",
    "Prosthetics specialists", 
    "Oral surgery professionals",
    "Tagalog-speaking assistants"
  ];

  const services = [
    "General dentistry & check-ups",
    "Root canal treatments",
    "Aesthetic & cosmetic dentistry",
    "Dental fillings & restorations",
    "Tooth extractions",
    "Dentures & oral surgery"
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Trusted Partners
          </h1>
          <p className="text-xl text-blue-100">
            Working together to provide exceptional dental care and insurance services 
            for the Filipino community in Bahrain
          </p>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Strategic Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with established institutions to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <partner.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{partner.name}</CardTitle>
                      <p className="text-healthcare-blue font-medium">{partner.role}</p>
                      <p className="text-sm text-muted-foreground">{partner.established}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mazaya Dental Centre Details */}
      <section className="py-16 bg-healthcare-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mazaya Dental Centre – Our Exclusive Provider
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern facility in Isa Town equipped with the latest technology and Filipino-friendly staff
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Facilities */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-healthcare-blue" />
                  <CardTitle className="text-xl text-foreground">Facilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-healthcare-blue" />
                  <CardTitle className="text-xl text-foreground">Expert Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {team.map((member, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{member}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-healthcare-blue" />
                  <CardTitle className="text-xl text-foreground">Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-healthcare-blue" />
              </div>
              <CardTitle className="text-2xl text-foreground">Visit Our Clinic</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mazaya Dental Centre</h3>
                  <p className="text-muted-foreground">Isa Town, Bahrain</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">For appointments:</p>
                  <p className="text-xl font-semibold text-healthcare-blue">+973-17777234</p>
                </div>
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link to="/registration">Schedule Your First Visit</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Partners;