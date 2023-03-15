import Head from "next/head";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Watch With Friends</title>
      </Head>
      <div className="container w-full py-11">
        <div className="w-full bg-amber-200 py-11"></div>
        <Typography as="h1">Heading</Typography>
        <Typography as={Link} href={"/"}>
          Link
        </Typography>
      </div>
    </>
  );
}
