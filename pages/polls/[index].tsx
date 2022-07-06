import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Poll } from "../../components/Poll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Home() {
  const router = useRouter();
  const { index } = router.query;

  const url = "/api/poll?id=" + index;
  const { error, data } = useSWR(url, () =>
    fetch(url).then((res) => res.json())
  );

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography>Votecast</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Poll data={data} />
    </div>
  );
}
