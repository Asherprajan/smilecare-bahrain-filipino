import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, DollarSign, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-dental-care.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Fillings, extractions, cleanings & more covered under our plans."
    },
    {
      icon: DollarSign,
      title: "Low-Cost Premiums",
      description: "Plans starting from just BD 14/year - affordable for every Filipino family."
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "Backed by Gulf Union Insurance & Fakhro Insurance Services."
    },
    {
      icon: Heart,
      title: "Filipino-Friendly Care",
      description: "Tagalog-speaking staff who understand your needs and culture."
    }
  ];

  const stats = [
    { number: "30+", label: "Years Insurance Expertise" },
    { number: "10+", label: "Certified Dental Professionals" },
    { number: "5+", label: "Advanced Treatment Rooms" },
    { number: "100%", label: "Same-Month Activation" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Affordable Dental Insurance for <br />
            <span className="text-healthcare-green-light">Filipino Residents</span> in Bahrain
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Protect your smile with coverage designed exclusively for Filipinos abroad – 
            affordable, accessible, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-healthcare-green hover:bg-healthcare-green-light text-white" asChild>
              <Link to="/registration">Register Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-blue" asChild>
              <Link to="/plans">View Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why SmileCare Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose SmileCare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique needs of Filipino families living abroad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-healthcare-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by the Community
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-4xl lg:text-5xl font-bold text-healthcare-blue mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Protect Your Smile?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of Filipino families who trust SmileCare for their dental needs
          </p>
          <Button size="lg" className="bg-white text-healthcare-green hover:bg-gray-100" asChild>
            <Link to="/registration">Start Your Registration</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;