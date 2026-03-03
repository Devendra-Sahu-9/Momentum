import { Button } from "../../../shared/components/ui/Button";
import Card from "../../../shared/components/ui/Card";

interface Props {
  title: string;
  description: string;
  to: string;
}

const ModuleShortcutCard = ({ title, description, to }: Props) => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>

      <Button variant="outline" to={to}>
        Open Module
      </Button>
    </Card>
  );
};

export default ModuleShortcutCard;
