import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <div>
      <Badge
        colorScheme={color}
        fontSize={"14px"}
        paddingX={2}
        borderRadius={4}
      >
        {score}
      </Badge>
    </div>
  );
}

export default CriticScore;
