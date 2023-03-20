import { generateApiUrl } from "@/shared/lib/utils";

export const getRoomsApiUrl = generateApiUrl(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
