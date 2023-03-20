import Head from "next/head";
import { Typography } from "@/shared/ui/Typography";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { CreateRoomForm } from "@/features/room";

export default function Home() {
  return (
    <>
      <Head>
        <title>Watch With Friends</title>
      </Head>
      <div className="container w-full">
        <CreateRoomForm />
      </div>
    </>
  );
}
