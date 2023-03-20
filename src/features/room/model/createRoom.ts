import { fetcher, generateApiUrl } from "@/shared/lib/utils";

export interface RoomForm {
  id: number;
  roomName: string;
}

const roomsApiUrl = generateApiUrl(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);

export const createRoomApi = async (form: RoomForm) => {
  return await fetcher(roomsApiUrl(""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
};
