import { fetcher } from "@/shared/lib/utils";
import { getRoomsApiUrl, RoomType } from "@/entities/room";

export const getAllRoomsApi = async () => {
  return await fetcher<RoomType[]>(getRoomsApiUrl());
};
