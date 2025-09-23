import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, DollarSign, Users, CheckCircle, Heart } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Expensive Traditional Insurance",
      description: "Most dental insurance plans in Bahrain have prohibitively high premiums that strain family budgets."
    },
    {
      icon: Shield,
      title: "Limited Coverage",
      description: "Traditional plans often include only basic services, leaving families to pay out-of-pocket for essential treatments."
    },
    {
      icon: DollarSign,
      title: "Economic Pressure",
      description: "Filipino families abroad face unique financial pressures, making it difficult to afford necessary dental care."
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: "Tailored Specifically for Filipinos",
      description: "Designed with the Filipino community's unique needs and circumstances in mind"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing: BD 14–18/year",
      description: "Transparent, low-cost premiums that won't break your family budget"
    },
    {
      icon: Heart,
      title: "Tagalog-Speaking Support Staff",
      description: "Communicate comfortably in your preferred language with our bilingual team"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Services",
      description: "Access to quality dental care in a trusted, well-equipped clinic"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Understanding the Challenges
          </h1>
          <p className="text-xl text-blue-100">
            We know the dental insurance landscape in Bahrain isn't designed for Filipino families. 
            That's why we created SmileCare – a better solution.
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Common Dental Insurance Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Filipino families in Bahrain face these obstacles when seeking dental coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-red-200 shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-healthcare-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Solution for You
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              SmileCare addresses each of these challenges with a community-focused approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-healthcare-green rounded-full flex items-center justify-center flex-shrink-0">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-healthcare-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready for a Better Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't let dental insurance challenges hold you back. Experience the SmileCare difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/plans">View Our Plans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/registration">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;