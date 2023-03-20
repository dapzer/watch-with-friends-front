import React, { FC } from "react";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { createRoomApi, RoomForm } from "@/features/room";
import { toast } from "react-toastify";

interface CreateRoomFormProps {}

export const CreateRoomForm: FC<CreateRoomFormProps> = (props) => {
  const {} = props;
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RoomForm>();

  const createRoomHandler: SubmitHandler<RoomForm> = (data) => {
    createRoomApi(data)
      .then(() => {
        reset();
        toast.success("Комната успешна создана!");
      })
      .catch((reason) => {
        setError("id", { message: reason });
        toast.error(reason);
      });
  };

  return (
    <form className="flex h-fit w-fit flex-col gap-3 p-4 shadow-3xl shadow" onSubmit={handleSubmit(createRoomHandler)}>
      <Input
        {...register("id", { pattern: /^[0-9]/ })}
        placeholder="Введите идентификатор комнаты"
        name="id"
        type="text"
        required
        error={errors?.id?.message as string}
      />
      <Input
        {...register("roomName")}
        placeholder="Введите название комнаты"
        name="roomName"
        type="text"
        error={errors?.roomName?.message as string}
        required
      />

      <Button type="submit" className="mt-2">
        Создать комнату
      </Button>
    </form>
  );
};
