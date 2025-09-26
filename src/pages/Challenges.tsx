import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import {
  DollarSign,
  XCircle,
  TrendingDown,
  MessageCircle,
  Building2,
  Shield,
} from "lucide-react";

const challenges = [
  {
    icon: DollarSign,
    title: "Expensive Insurance",
    description:
      "Traditional dental insurance is often too costly for many Filipino residents.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: XCircle,
    title: "Limited Coverage",
    description:
      "Most plans don’t cover the full range of dental needs.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: TrendingDown,
    title: "Financial Pressure",
    description:
      "Dental care can create extra financial stress.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const solutions = [
  {
    icon: Shield,
    title: "Tailored Plans",
    description:
      "Coverage designed for Filipino residents.",
    iconBg: "bg-healthcare-blue/10",
    iconColor: "text-healthcare-blue",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description:
      "Low-cost, comprehensive dental insurance.",
    iconBg: "bg-healthcare-green/10",
    iconColor: "text-healthcare-green",
  },
  {
    icon: MessageCircle,
    title: "Cultural Sensitivity",
    description:
      "Tagalog support and understanding of Filipino needs.",
    iconBg: "bg-healthcare-blue/10",
    iconColor: "text-healthcare-blue",
  },
  {
    icon: Building2,
    title: "Quality Local Care",
    description:
      "Access to trusted dental clinics in Bahrain.",
    iconBg: "bg-healthcare-blue/10",
    iconColor: "text-healthcare-blue",
  },
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-blue via-healthcare-green-light to-healthcare-gray">
      <SEO
        title="Dental Insurance Challenges & Solutions - SmileCare for Filipino Residents"
        description="Understanding the challenges Filipino residents face with dental insurance in Bahrain and how SmileCare provides affordable, culturally sensitive solutions with comprehensive coverage starting from BD 14/year."
        keywords="dental insurance challenges Bahrain, Filipino dental insurance problems, affordable dental insurance solutions, SmileCare solutions, dental insurance barriers, cultural sensitive dental care"
        canonicalUrl="https://smilecare-bahrain.com/challenges"
      />
      {/* Header */}
      <section className="py-20 relative text-white">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
          <Badge className="mb-3 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20 text-base font-semibold">
            Challenges & Solution
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg roboto-black">
            Dental Insurance in Bahrain
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-2 roboto-regular">
            SmileCare: Affordable Dental Insurance for Filipino Residents
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-red-100 text-red-600 border-red-200 text-base font-semibold">
              Challenges
            </Badge>
            <h2 className="text-2xl font-bold text-foreground mb-4 roboto-bold">
              Why Is Dental Insurance Difficult?
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto roboto-regular">
              Common obstacles for Filipino residents in Bahrain:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <Card
                key={idx}
                className="shadow-soft hover:shadow-md transition-all duration-300 bg-white"
              >
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className={`w-11 h-11 ${item.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-1 roboto-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground roboto-regular">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 bg-gradient-to-r from-healthcare-blue to-healthcare-green text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-healthcare-green/10 text-healthcare-green border-healthcare-green/20 text-base font-semibold">
              SmileCare Solution
            </Badge>
            <h2 className="text-2xl font-bold mb-4 roboto-bold">
              SmileCare: A Better Way
            </h2>
            <p className="text-base text-white/80 max-w-2xl mx-auto roboto-regular">
              Designed for Filipino residents in Bahrain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((item, idx) => (
              <Card
                key={idx}
                className="shadow-soft hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-sm"
              >
                <CardContent className="p-6 flex items-center">
                  <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mr-4`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white roboto-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 roboto-regular">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-healthcare-blue mb-4 roboto-bold">
            SmileCare: Affordable Dental Insurance
          </h2>
          <p className="text-base text-muted-foreground mb-6 roboto-regular">
            Don’t let insurance challenges hold you back. Discover affordable, culturally sensitive dental coverage with SmileCare.
          </p>
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
              Get Started
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Challenges;