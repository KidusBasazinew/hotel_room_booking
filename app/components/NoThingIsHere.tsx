import React from "react";
import Image from "next/image";

const NoThingIsHere = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <div
        aria-hidden="true"
        className="relative mb-4 h-40 w-40 text-muted-foreground"
      >
        <Image
          src="/hippo-empty-cart.png"
          fill
          loading="eager"
          alt="empty shopping cart hippo"
        />
      </div>
      <h3 className="font-semibold text-2xl">{label}</h3>
      <p className="text-muted-foreground text-center">
        Whoops! Nothing to show here yet.
      </p>
    </div>
  );
};

export default NoThingIsHere;
