import { useRouter } from "next/router";
import React, { useState } from "react";
import { RoomType } from "@/entities/room";
import ReactPlayer from "react-player";

export const useRoom = () => {
  const router = useRouter();
  const ws = React.useRef<WebSocket | null>(null);
  const player = React.useRef<ReactPlayer | null>(null);

  const [roomData, setRoomData] = useState<RoomType>();

  React.useEffect(() => {
    if (router.query.roomId) {
      try {
        ws.current = new WebSocket(`${process.env.NEXT_PUBLIC_WS_API_URL}/${router.query.roomId}`);

        ws.current?.addEventListener("message", (msg) => {
          try {
            msg = JSON.parse(msg.data);
          } catch (e) {
            ws.current?.close();
            router.push("/");
          }
          if (typeof msg !== "string" && typeof msg !== "undefined") {
            const data = msg as unknown as RoomType;
            setRoomData(data);
          }
        });
      } catch (e) {
        ws.current?.close();
        router.push("/");
      }
    }
  }, [router]);

  React.useEffect(() => {
    return () => ws.current?.close();
  }, []);

  React.useEffect(() => {
    roomData?.isPlaying && player.current?.seekTo(roomData?.progress || 0, "seconds");
  }, [roomData?.isPlaying]);

  const updateField = (field: Partial<RoomType>) => {
    setRoomData((prevState) => {
      if (prevState) {
        return {
          ...prevState,
          ...field,
        };
      }
      return prevState;
    });
  };

  const handlePlay = () => {
    ws.current?.send(JSON.stringify({ event: "play" }));
  };

  const handlePause = () => {
    ws.current?.send(JSON.stringify({ event: "pause" }));
  };

  const handleSendProgress = (progress: number, flag: string = "") => {
    if (progress < (roomData?.progress || 0)) flag = "global";
    ws.current?.send(JSON.stringify({ event: "changeProgress", progress: progress, flag }));
    updateField({ progress });
  };

  const handleUpdateRoom = () => {
    ws.current?.send(JSON.stringify({ event: "update" }));
  };

  const handleContent = (url: string) => {
    ws.current?.send(JSON.stringify({ event: "changeContent", src: url }));
  };

  return {
    roomData,
    player,
    setRoomData,
    handlePlay,
    handlePause,
    handleSendProgress,
    handleUpdateRoom,
    handleContent,
  };
};
