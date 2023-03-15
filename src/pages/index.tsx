import Head from "next/head";
import { Typography } from "@/shared/ui/Typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>Watch With Friends</title>
      </Head>
      <div className="container w-full">
        <Typography as="h1" variant="title">
          Heading
        </Typography>
        <Typography as="h2" variant="title2">
          Heading
        </Typography>
        <Typography as="h3" variant="title3">
          Heading
        </Typography>
        <Typography as="h4" variant="title4">
          Heading
        </Typography>
        <Typography as="a" variant="link">
          Heading
        </Typography>
        <Typography as="span" variant="textSmall">
          Heading
        </Typography>
      </div>
    </>
  );
}
