import { fetcher } from "@/shared/lib/utils";
import { getRoomsApiUrl } from "@/entities/room";

export interface RoomForm {
  id: number;
  roomName: string;
}

export const createRoomApi = async (form: RoomForm) => {
  return await fetcher(getRoomsApiUrl(""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
};
