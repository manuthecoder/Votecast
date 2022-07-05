import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography>Pollcast</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
