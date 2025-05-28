import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ArbitrageCalculator = () => {
  const [amount, setAmount] = useState("1000");
  const [profit, setProfit] = useState("45");

  const calculateProfit = () => {
    const baseAmount = parseFloat(amount) || 0;
    const profitPercent = parseFloat(profit) || 0;
    return ((baseAmount * profitPercent) / 100).toFixed(2);
  };

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 glow-effect">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          💰 P2P Арбитраж Калькулятор
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Сумма инвестиций
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="Введите сумму"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Ожидаемая прибыль (%)
            </label>
            <input
              type="number"
              value={profit}
              onChange={(e) => setProfit(e.target.value)}
              className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="Процент прибыли"
            />
          </div>
        </div>

        <div className="text-center p-6 bg-success/10 rounded-lg border border-success/20">
          <p className="text-sm text-muted-foreground mb-2">
            Потенциальная прибыль
          </p>
          <p className="text-3xl font-bold text-success">
            ${calculateProfit()}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Итого: $
            {(parseFloat(amount) + parseFloat(calculateProfit())).toFixed(2)}
          </p>
        </div>

        <Button className="w-full gradient-crypto text-white font-medium py-3">
          🚀 Начать арбитраж
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArbitrageCalculator;
