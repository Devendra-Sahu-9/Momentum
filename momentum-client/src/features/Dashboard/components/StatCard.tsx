import Card from "../../../shared/components/ui/Card";

interface Props {
  title: string;
  value: number;
  color?: string;
}

const StatCard = ({ title, value, color = "text-blue-600" }: Props) => {
  return (
    <Card className="p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h2>
    </Card>
  );
};

export default StatCard;
