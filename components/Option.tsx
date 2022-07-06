import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
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
        ...(voted && {
          pointerEvents: "none",
        }),
        mb: 2,
        borderRadius: 5,
        boxShadow: 0,
        background: "rgba(200,200,200,.2)",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{option.name}</Typography>
          {voted === option.name && (
            <Badge
              sx={{ ml: "auto", mr: 2 }}
              badgeContent={
                <span className="material-symbols-rounded">check</span>
              }
              color="secondary"
            ></Badge>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
