import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Shield,
  DollarSign,
  Users,
  CheckCircle,
  Heart,
} from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Expensive Traditional Insurance",
      description:
        "Most dental insurance plans in Bahrain have prohibitively high premiums that strain family budgets.",
    },
    {
      icon: Shield,
      title: "Limited Coverage",
      description:
        "Traditional plans often include only basic services, leaving families to pay out-of-pocket for essential treatments.",
    },
    {
      icon: DollarSign,
      title: "Economic Pressure",
      description:
        "Filipino families abroad face unique financial pressures, making it difficult to afford necessary dental care.",
    },
  ];

  const solutions = [
    {
      icon: Users,
      title: "Tailored for Filipinos",
      description:
        "Plans designed with the Filipino community’s unique needs and circumstances in mind.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing: BD 14–18/year",
      description:
        "Transparent, low-cost premiums that won’t break your family budget.",
    },
    {
      icon: Heart,
      title: "Tagalog-Speaking Support",
      description:
        "Communicate comfortably in your preferred language with our bilingual team.",
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Services",
      description:
        "Access to quality dental care in a trusted, well-equipped clinic.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray">
      {/* Header */}
      <section className="py-24 lg:py-32 relative text-white">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg roboto-black">
            Dental Insurance in Bahrain: <span className="text-healthcare-green-light">The Real Challenges</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-2 roboto-regular">
            Most plans aren’t built for Filipino families. See the difference for yourself.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 roboto-bold">
              What Makes Traditional Dental Insurance So Difficult?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed roboto-regular">
              Filipino families in Bahrain face these obstacles when seeking dental coverage:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {challenges.map((challenge, idx) => (
              <Card
                key={idx}
                className="group border-0 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-200 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <challenge.icon className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-healthcare-blue roboto-bold group-hover:text-healthcare-green transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed roboto-regular">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-gradient-to-r from-healthcare-blue to-healthcare-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 roboto-bold">
              SmileCare: <span className="text-healthcare-green-light">How We’re Different</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed roboto-regular">
              We built SmileCare to solve these exact problems for Filipino families in Bahrain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-healthcare-green flex items-center justify-center rounded-xl shadow-lg mr-2">
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white roboto-bold">
                    {solution.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed roboto-regular">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-healthcare-blue mb-6 roboto-bold">
            See the SmileCare Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-10 roboto-regular">
            Don’t let old insurance challenges hold you back. Experience affordable, community-focused dental coverage today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-healthcare-green hover:bg-healthcare-green-light text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 roboto-bold"
              asChild
            >
              <a
                href="https://fakhroinsurance.com/special-payments/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Today
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;