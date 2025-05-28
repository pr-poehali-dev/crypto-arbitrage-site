import { Card, CardContent } from "@/components/ui/card";

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const CryptoCard = ({
  name,
  symbol,
  price,
  change,
  isPositive,
}: CryptoCardProps) => {
  return (
    <Card className="card-hover bg-card/50 backdrop-blur-sm border border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">
                {symbol[0]}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{symbol}</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-foreground">{price}</p>
          <p
            className={`text-sm font-medium ${isPositive ? "text-success" : "text-danger"}`}
          >
            {isPositive ? "↗" : "↘"} {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
