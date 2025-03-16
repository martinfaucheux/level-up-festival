"use client";

import React, { useEffect, useState } from "react";

export default function Timeout() {
  const dateFestival = new Date("2025-09-12T18:00:00.000Z").getTime();

  const getRemainingTime = () => {
    const now = new Date().getTime();
    return dateFestival - now;
  };

  const getDigits = () => {
    const distance = getRemainingTime();
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [ticking, setTicking] = useState(true),
    [remaining, setRemaining] = useState(getDigits());

  useEffect(() => {
    const timer = setTimeout(() => ticking && setRemaining(getDigits()), 1e3);
    return () => clearTimeout(timer);
  }, [remaining, ticking]);

  const units = ["jours", "heures", "minutes", "secondes"];

  return (
    <div className="w-full text-5xl flex justify-center items-center my-5 md:mx-5 md:my-0">
      {getRemainingTime() < 0 ? (
        <div>IT'S ON BIAAATCH</div>
      ) : (
        <div className="flex justify-center gap-4">
          {remaining.map((unit, index) => (
            <div
              key={index}
              className="w-20 h-20 md:w-30 md:h-30 flex flex-col items-center justify-center bg-[#d66d1d] text-white rounded-full shadow-lg"
            >
              <span className="text-xl md:text-3xl font-bold">{unit}</span>
              <span className="text-xs">{units[index]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
