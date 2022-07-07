import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Option } from "./Option";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function Chat() {
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 330px)",
        }}
      ></Box>
      <Box sx={{ width: "100%" }}>
        <TextField
          fullWidth
          placeholder="Type message here"
          InputProps={{
            sx: {
              borderRadius: "0 0 19px 19px",
            },
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  mr: 1,
                  "& span": {
                    transition: "all .2s cubic-bezier(.17,.67,.44,1.31)",
                  },
                  "&:hover span": { transform: "rotate(-90deg)" },
                  "&:active span": { transform: "rotate(-90deg)" },
                }}
              >
                <IconButton aria-label="toggle password visibility" edge="end">
                  <span className="material-symbols-rounded">east</span>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function PollCard({ data }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [voted, setVoted] = React.useState<boolean>(false);
  return (
    <>
      <Grid container sx={{ width: "100%" }} spacing={4}>
        <Grid item xs={5}>
          <Card
            sx={{
              maxHeight: "calc(100vh - 200px)",
              mt: 2,
              overflow: "auto",
              p: 3,
              position: "relative",
              borderRadius: 5,
            }}
            variant="outlined"
          >
            <Tabs
              value={value}
              variant="fullWidth"
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  height: "100%",
                  opacity: 0.4,
                  borderRadius: 5,
                },
                "& .MuiButtonBase-root": {
                  textTransform: "none",
                  color: "#000!important",
                },
              }}
            >
              <Tab sx={{ borderRadius: 5 }} label="Instructions" />
              <Tab sx={{ borderRadius: 5 }} label="Chat" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <img
                src={data.banner}
                style={{
                  width: "100%",
                  borderRadius: "28px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h3" sx={{ mb: 2, fontWeight: "900", mt: 2 }}>
                {data.name}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
                {data.description}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Chat />
            </TabPanel>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 5,
              maxHeight: "calc(100vh - 200px)",
              mt: 2,
              position: "relative",
              height: "100%",
              overflow: "auto",
              p: 3,
            }}
            variant="outlined"
          >
            <Box sx={{ width: "100%" }}>
              {data.options &&
                [...data.options].map((option, id) => (
                  <Option
                    option={option}
                    key={id}
                    id={id}
                    setVoted={setVoted}
                    voted={voted}
                    totalVotes={data.options.reduce(
                      (n, { votes }) => n + parseInt(votes),
                      0
                    )}
                  />
                ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export function Poll({ data }: any) {
  const isLoading = !data;
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ mt: 4, px: 3, width: "100vw" }}>
        {isLoading ? <CircularProgress /> : <PollCard data={data} />}
      </Box>
    </Box>
  );
}
