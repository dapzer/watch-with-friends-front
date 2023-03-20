import React, { FC } from "react";
import { RoomCard, RoomType } from "@/entities/room";

interface RoomListProps {
  rooms?: RoomType[] | null;
}

export const RoomList: FC<RoomListProps> = (props) => {
  const { rooms } = props;
  return (
    <div className="flex flex-wrap justify-around gap-5">
      {rooms?.map((el) => (
        <RoomCard key={el.id} room={el} />
      ))}
    </div>
  );
};
