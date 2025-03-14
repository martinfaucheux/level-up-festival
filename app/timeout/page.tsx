"use client";

import React, { useEffect, useState } from "react";

export default function Timeout() {
  const dateFestival = new Date("2025-09-12T18:00:00.000Z").getTime();

  const remainingTime = () => {
    const now = new Date().getTime();
    const distance = dateFestival - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      return "Le festival est commencé!";
    }

    return `${days}j ${hours}h ${minutes}m ${seconds}s`;
  };

  const [ticking, setTicking] = useState(true),
    [remaining, setRemaining] = useState(remainingTime());

  useEffect(() => {
    const timer = setTimeout(
      () => ticking && setRemaining(remainingTime()),
      1e3
    );
    return () => clearTimeout(timer);
  }, [remaining, ticking]);
  return (
    <div className="w-full text-5xl flex justify-center items-center my-5 md:my-0">
        <div className="px-10 py-10 border-2 rounded-lg">{remaining}</div>
    </div>
  );
}
