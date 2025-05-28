import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-crypto opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Простой способ сделать{" "}
                <span className="text-primary">криптовалюту</span> стабильным
                источником высокого дохода
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Научу находить монеты с потенциалом роста X2-X10 c помощью
                простых инструментов, доступных каждому и делать сотни процентов
                профита к своему капиталу.
              </p>
            </div>

            {/* Right Content - Image and Benefits */}
            <div className="flex flex-col items-center animate-fade-in">
              {/* Person Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                  alt="Криптоэксперт"
                  className="w-64 h-64 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </div>

              {/* Benefits Card */}
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 w-full max-w-sm">
                <CardContent className="p-6">
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center">
                      <span className="text-primary mr-3">✓</span>
                      Без больших вложений
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-3">✓</span>
                      Без сложных схем
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-3">✓</span>
                      За 21 день
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 animate-fade-in">
            <Button
              size="lg"
              className="gradient-crypto text-white px-12 py-6 text-xl font-semibold glow-effect hover:scale-105 transition-transform"
            >
              🚀 Принять участие
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
