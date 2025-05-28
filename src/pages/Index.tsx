import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CryptoCard from "@/components/CryptoCard";
import ArbitrageCalculator from "@/components/ArbitrageCalculator";

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$67,234",
    change: "+2.45%",
    isPositive: true,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,456",
    change: "+1.89%",
    isPositive: true,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    price: "$542",
    change: "-0.72%",
    isPositive: false,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$156",
    change: "+5.23%",
    isPositive: true,
  },
];

const advantages = [
  {
    icon: "⚡",
    title: "Быстрая прибыль",
    description:
      "Получайте доход за считанные минуты благодаря разнице курсов на биржах",
  },
  {
    icon: "🔒",
    title: "Низкие риски",
    description:
      "Арбитраж - один из самых безопасных способов заработка на криптовалютах",
  },
  {
    icon: "📈",
    title: "Стабильный доход",
    description:
      "Регулярные возможности для арбитража обеспечивают постоянный заработок",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-crypto opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Крипто <span className="text-primary">Арбитраж</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Зарабатывайте на разнице курсов криптовалют между биржами. Простой и
            эффективный способ получения стабильного дохода.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="gradient-crypto text-white px-8 py-4 text-lg"
            >
              🚀 Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              📊 Изучить курсы
            </Button>
          </div>
        </div>
      </section>

      {/* Crypto Rates */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            💹 Актуальные курсы криптовалют
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoData.map((crypto) => (
              <CryptoCard key={crypto.symbol} {...crypto} />
            ))}
          </div>
        </div>
      </section>

      {/* Arbitrage Calculator */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            🔢 Рассчитайте свою прибыль
          </h2>
          <ArbitrageCalculator />
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            ⭐ Преимущества P2P арбитража
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="card-hover text-center bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="text-4xl mb-4 animate-float">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать зарабатывать?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам успешных арбитражеров и начните получать
            стабильный доход уже сегодня
          </p>
          <Button
            size="lg"
            className="gradient-crypto text-white px-12 py-4 text-lg glow-effect"
          >
            🎯 Начать арбитраж
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
