import { toast } from "react-toastify";

export const fetcher = async <T = unknown>(url: string, body?: RequestInit, customMessage?: string): Promise<T | null> => {
  const response = await fetch(url, body);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    toast.warning((customMessage || "An error occurred while getting data. ") + `Code: ${data.code}`);
    throw data;
  }
};
