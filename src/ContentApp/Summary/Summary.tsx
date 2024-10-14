import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Chip,
  Typography,
} from "@mui/joy";
import { memo } from "react";

const Summary = ({ summary }: { summary: Record<string, string> }) => {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={summary.image}
            loading="lazy"
            alt="summary preview"
            style={{
              objectFit: "cover",
              display: "block",
              minWidth: "100%",
              minHeight: "100%",
              objectPosition: "left top",
            }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{summary.title}</Typography>
        <Typography level="body-sm">{summary.summary}</Typography>
        <Typography level="body-md">
          <Chip>{summary.category}</Chip>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(Summary);
