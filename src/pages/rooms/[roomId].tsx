import React, { FC } from "react";
import { useRoom } from "@/entities/room/model/useRoom";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import ReactPlayer from "react-player";
import { Input } from "@/shared/ui/Input";

interface RoomIdProps {}

const RoomPage: FC<RoomIdProps> = () => {
  const { roomData, handlePlay, handlePause, handleSendProgress, handleUpdateRoom, handleContent, player } = useRoom();
  const [url, setUrl] = React.useState<string>(roomData?.src || "");

  return (
    <div className="container w-full">
      <Typography as="h1" variant="title4" className="pb-5">
        Room: {roomData?.roomName}
      </Typography>
      <div className="my-6 flex max-w-xs items-end gap-2">
        <Input label="Ссылка на видеоролик" onChange={(event) => setUrl(event.target.value)} value={url} placeholder="Вставьте url" />
        <Button className="h-fit" onClick={() => handleContent(url)}>
          Обновить
        </Button>
      </div>
      <div className="mb-6 flex w-full max-w-lg">
        {roomData?.src && (
          <ReactPlayer
            controls
            muted
            ref={player}
            url={roomData?.src}
            playing={roomData.isPlaying}
            onPause={handlePause}
            onPlay={handlePlay}
            onSeek={handleSendProgress}
            onProgress={(state) => handleSendProgress(state.playedSeconds)}
          />
        )}
      </div>
      <div className="flex gap-2">
        <Button onClick={handlePlay}>play</Button>
        <Button onClick={handlePause}>pause</Button>
        <Button onClick={handleUpdateRoom}>update</Button>
      </div>
    </div>
  );
};

export default RoomPage;
