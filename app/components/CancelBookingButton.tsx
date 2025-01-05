"use client";
import cancelBooking from "@/app/actions/cancelBooking";
import { AlertDialog, Button, Spinner, Flex } from "@radix-ui/themes";

import React, { useState } from "react";

const CancelBookingButton = ({ bookingId }: { bookingId: string }) => {
  const [error, setError] = useState(false);
  const [isCanceling, setCanceling] = useState(false);

  const handleCancel = async () => {
    try {
      setCanceling(true);

      const result = await cancelBooking(bookingId);

      if (result.success) {
        console.log("Booking cancelled successfully!");
        setCanceling(false); // Reset canceling state after success
      }
    } catch (error) {
      setCanceling(false);
      console.log("Failed to cancel booking", error);
      setError(true); // Set error state if cancellation fails
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            color="red"
            disabled={isCanceling}
            size="3"
            className="!w-full"
          >
            Cancel{isCanceling && <Spinner />}
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this booking? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gapX="2">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                No
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={handleCancel} className="w-full">
                Yes
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {error && (
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
      )}
    </>
  );
};

export default CancelBookingButton;
