"use client";
import React, { useState } from "react";
import { usePrices } from "./PricesContext";

export default function Card({ pcPart, onItemClick }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      {pcPart.name.map((name, index) => {
        const item = { name, price: pcPart.price[index],   socket: pcPart.socket?.[index] ?? null,  speed: pcPart.speed?.[index] ?? null   };
        if (item.price === null) return null;

        return (
          <div
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onItemClick?.(item, index); 
            }}
            className={`border-1 p-2 flex items-center justify-between mb-3 ms-5 me-3 cursor-pointer ${
              selectedIndex === index ? "bg-[#08130b] border-green-600" : "bg-[#0a0a0a] border-[#285c37]"
            }`}
          >
            <div className="flex items-center">
              <button>
                <i className="bi bi-play-fill text-[#285c37] text-3xl"></i>
              </button>
              <p className="text-[#00ff41] ps-2 text-lg">{item.name}</p>
            </div>
            <span className="text-[#00ff41] text-lg pe-2">  {item.speed ? `${item.speed} · ` : ""} {item.socket ? `${item.socket} · ` : ""}${item.price}</span>
          </div>
        );
      })}
    </div>
  );
}