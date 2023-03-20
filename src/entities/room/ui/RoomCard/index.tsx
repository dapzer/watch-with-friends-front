import React, { FC } from "react";
import { Typography } from "@/shared/ui/Typography";
import { RoomType } from "@/entities/room";
import Link from "next/link";

interface RoomCardProps {
  room: RoomType;
}

export const RoomCard: FC<RoomCardProps> = (props) => {
  const { room } = props;

  return (
    <div className="flex w-full max-w-[500px] flex-col gap-3 p-6 shadow-3xl shadow">
      <ul>
        <li>
          <Typography variant="text">
            Название комнаты:{" "}
            <Typography variant="text" className="!font-bold">
              {room.roomName}
            </Typography>
          </Typography>
        </li>
        <li>
          <Typography variant="text">
            Идентификатор комнаты:{" "}
            <Typography variant="text" className="!font-bold">
              {room.id}
            </Typography>
          </Typography>
        </li>
      </ul>

      <Typography variant="link" as={Link} href={`/rooms/${room.id}`}>
        Перейти в комнату
      </Typography>
    </div>
  );
};
