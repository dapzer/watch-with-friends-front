import Head from "next/head";
import { CreateRoomForm } from "@/features/room";
import { useEffect, useState } from "react";
import { getAllRoomsApi, RoomList, RoomType } from "@/entities/room";

export default function Home() {
  const [rooms, setRooms] = useState<RoomType[] | null>();

  const getRooms = () => {
    getAllRoomsApi().then((res) => setRooms(res));
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <Head>
        <title>Watch With Friends</title>
      </Head>

      <div className="container w-full">
        <div className="flex gap-5 py-5">
          <CreateRoomForm onSuccessCreateHandler={getRooms} />
          <RoomList rooms={rooms} />
        </div>
      </div>
    </>
  );
}
