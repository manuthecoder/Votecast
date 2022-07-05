import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";

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

      <main>
        {error && "An error occured, please try again"}
        {data ? JSON.stringify(data) : "Loading..."}
      </main>
    </div>
  );
}
