import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Building2,
  Shield,
  Users,
  MapPin,
  Award,
  Stethoscope,
  Globe,
  Handshake,
  ChevronRight,
  Heart,
} from "lucide-react";

const CTA_URL = "https://fakhroinsurance.com/special-payments/";

const Partners = () => {
  const partners = [
    {
      name: "Philippine Embassy (Bahrain)",
      role: "Community Outreach & Recognition",
      description:
        "Official recognition and support for serving the Filipino community in Bahrain.",
      icon: Globe,
      established: "Diplomatic Relations",
      color: "from-healthcare-blue to-healthcare-green",
    },
    {
      name: "Gulf Union Insurance",
      role: "Insurance Underwriter",
      description:
        "Established insurance provider with over 30 years of experience in the Gulf region.",
      icon: Shield,
      established: "Est. 1995",
      color: "from-healthcare-green to-healthcare-blue",
    },
    {
      name: "Fakhro Insurance Services",
      role: "Brokerage & Registration Support",
      description:
        "Trusted insurance brokerage providing registration and customer support services.",
      icon: Building2,
      established: "Est. 2000",
      color: "from-healthcare-blue to-healthcare-blue-light",
    },
    {
      name: "Mazaya Dental Centre",
      role: "Exclusive Dental Provider",
      description:
        "State-of-the-art dental facility in Isa Town providing comprehensive dental care.",
      icon: Stethoscope,
      established: "Est. 2024",
      color: "from-healthcare-green to-healthcare-green-light",
    },
  ];

  const facilities = [
    "5+ advanced treatment rooms",
    "CBCT & digital X-ray systems",
    "Fully equipped dental laboratory",
    "Modern sterilization equipment",
    "Comfortable patient waiting areas",
  ];

  const team = [
    "10+ certified dental professionals",
    "Specialists in orthodontics",
    "Endodontics experts",
    "Prosthetics specialists",
    "Oral surgery professionals",
    "Tagalog-speaking assistants",
  ];

  const services = [
    "General dentistry & check-ups",
    "Root canal treatments",
    "Aesthetic & cosmetic dentistry",
    "Dental fillings & restorations",
    "Tooth extractions",
    "Dentures & oral surgery",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-healthcare-gray">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-blue to-healthcare-green text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 roboto-medium">
            <Handshake className="w-4 h-4 mr-2" />
            Trusted Partners
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 roboto-black">
            Our <span className="text-white/90">Trusted Partners</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto roboto-regular">
            Working together to provide exceptional dental care and insurance services for the Filipino community in Bahrain
          </p>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Strategic <span className="text-healthcare-blue">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto roboto-regular">
              Collaborating with established institutions to serve you better
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center space-x-5">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <partner.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-1 roboto-bold group-hover:text-healthcare-blue transition-colors">
                        {partner.name}
                      </CardTitle>
                      <p className="text-healthcare-blue font-medium roboto-medium">{partner.role}</p>
                      <p className="text-sm text-muted-foreground roboto-regular">{partner.established}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed roboto-regular">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mazaya Dental Centre Details */}
      <section className="py-20 bg-healthcare-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-healthcare-blue/10 text-healthcare-blue border-healthcare-blue/20 roboto-medium">
              <Stethoscope className="w-4 h-4 mr-2" />
              Exclusive Provider
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 roboto-bold">
              Mazaya Dental Centre
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto roboto-regular">
              Modern facility in Isa Town equipped with the latest technology and Filipino-friendly staff
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facilities */}
            <Card className="shadow-soft bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 text-healthcare-blue" />
                  <CardTitle className="text-xl text-foreground roboto-bold">Facilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground roboto-regular">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {/* Team */}
            <Card className="shadow-soft bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-healthcare-blue" />
                  <CardTitle className="text-xl text-foreground roboto-bold">Expert Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {team.map((member, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground roboto-regular">{member}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {/* Services */}
            <Card className="shadow-soft bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-healthcare-blue" />
                  <CardTitle className="text-xl text-foreground roboto-bold">Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-healthcare-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground roboto-regular">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-large border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-healthcare-blue" />
              </div>
              <CardTitle className="text-2xl text-foreground roboto-bold">Visit Our Clinic</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 roboto-bold">Mazaya Dental Centre</h3>
                  <p className="text-muted-foreground roboto-regular">Isa Town, Bahrain</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2 roboto-regular">For appointments:</p>
                  <p className="text-xl font-semibold text-healthcare-blue roboto-black">+973-17777234</p>
                </div>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-healthcare-green text-white hover:bg-healthcare-blue px-8 py-4 text-lg font-semibold shadow-large hover:shadow-xl transition-all duration-300 roboto-bold"
                    asChild
                  >
                    <a
                      href={CTA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Get Started Today
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
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