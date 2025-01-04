"use client";
import React, { useState } from "react";
import deleteRoom from "../actions/deleteRoom";
import { AlertDialog, Button, Flex, Spinner } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const DeleteRoomButton = ({ roomId }: { roomId: string }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await deleteRoom({ roomId });
      console.log(response.success);
      router.push("/");
    } catch (error) {
      setIsDeleting(false);
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            color="red"
            disabled={isDeleting}
            size="3"
            className="!w-full"
          >
            Delete{isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this room? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gapX="2">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={handleDelete} className="w-full">
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            Something went wrong. Please try again.
          </AlertDialog.Description>

          <Button size="4" onClick={() => setError(false)} color="red">
            Try Again
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteRoomButton;
