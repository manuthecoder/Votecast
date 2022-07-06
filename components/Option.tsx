import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

export function Option({
  option,
  id,
  voted,
  setVoted,
}: {
  option: any;
  id: number;
  voted: boolean;
  setVoted: any;
}) {
  return (
    <Card
      onClick={() => setVoted(option.name)}
      sx={{
        mb: 2,
        borderRadius: 5,
        boxShadow: 0,
        background: "rgba(200,200,200,.2)",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography>{option.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
