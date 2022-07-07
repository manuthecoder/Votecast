import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

export function Option({
  option,
  id,
  voted,
  setVoted,
  totalVotes,
}: {
  option: any;
  id: number;
  voted: boolean;
  setVoted: any;
  totalVotes: any;
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
        position: "relative",
        height: "55px",
        "& *": { transition: "none!important" },
        background: "rgba(200,200,200,.2)",
      }}
    >
      {voted && (
        <LinearProgress
          sx={{ height: "500px" }}
          variant="determinate"
          value={(option.votes / totalVotes) * 100}
        />
      )}
      <CardActionArea sx={{ position: "absolute", top: 0 }}>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{option.name}</Typography>
          <Box sx={{ ml: "auto", mr: 1 }}>
            {voted && (
              <div style={{ display: "flex", gap: "10px" }}>
                {voted === option.name && (
                  <Box
                    sx={{
                      background: "#4a148c",
                      color: "#f3e5f5",
                      display: "inline-flex",
                      alignItems: "center",
                      borderRadius: 5,
                      px: 1,
                      py: 0.5,
                      fontSize: "11px",
                    }}
                  >
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: "14px" }}
                    >
                      check
                    </span>
                  </Box>
                )}
                <Box
                  sx={{
                    background: "#e1bee7",
                    color: "#6a1b9a",
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: 5,
                    px: 1,
                    py: 0.5,
                    fontSize: "12px",
                  }}
                >
                  {option.votes} votes
                </Box>
              </div>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
