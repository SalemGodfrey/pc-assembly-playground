"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePrices } from "./PricesContext";

export default function RightPanel() {
  const { selectedItem, updateInstalled } = usePrices();
  const [history, setHistory] = useState([]);
  const [installed, setInstalled] = useState({});
  const endRef = useRef(null);
  // ...
  useEffect(() => {
    if (!selectedItem) return;
    updateInstalled(selectedItem); // добавить эту строку
    // остальная логика истории...
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem) return;

    setHistory((prev) => {
      const newHistory = [...prev];
      const product = selectedItem.product;

      const existing = installed[product];

      if (existing) {
        newHistory.push({
          product: "uninstall",
          item: existing,
        });
      }

      newHistory.push({
        product: "install",
        item: selectedItem,
      });

      return newHistory;
    });

    setInstalled((prev) => ({
      ...prev,
      [selectedItem.product]: selectedItem,
    }));
  }, [selectedItem]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="h-full overflow-y-auto  right" style={{ overflowY: "scroll", height: "45vh", scrollbarColor: "#00ff41 #0a0a0a" }}>
      {history.map((entry, index) => {
        const item = entry.item;

        if (entry.product === "uninstall") {
          return (
            <p key={index}>
              root@riglab: <span className="text-[#00ff41]">pc.uninstall("{item.name}")</span>
            </p>
          );
        }

        return (
          <div key={index} className="mb-4">
            <p>
              root@riglab: <span className="text-[#00ff41]">pc.install("{item.name}")</span>
            </p>

            <p>
              &gt; <span className="text-[#00ff41]"> Price: ${item.price}</span>
            </p>
            {item.socket && (
              <p>
                &gt; <span className="text-[#00ff41]"> Socket: {item.socket}</span>{" "}
              </p>
            )}
            {item.formFactor && (
              <p>
                &gt; <span className="text-[#00ff41]"> Form Factor: {item.formFactor}</span>{" "}
              </p>
            )}
            {item.memory && (
              <p>
                &gt; <span className="text-[#00ff41]"> Memory: {item.memory}</span>{" "}
              </p>
            )}
            {item.coreAmount && (
              <p>
                &gt; <span className="text-[#00ff41]"> Cores: {item.coreAmount}</span>{" "}
              </p>
            )}
            {item.performanceCoreBoostClock && (
              <p>
                &gt; <span className="text-[#00ff41]"> Performance Core Boost Clock: {item.performanceCoreBoostClock}</span>{" "}
              </p>
            )}
            {item.tdp && (
              <p>
                &gt; <span className="text-[#00ff41]"> TDP: {item.tdp}</span>{" "}
              </p>
            )}
            {item.memorySlots && (
              <p>
                &gt; <span className="text-[#00ff41]"> Memory Slots: {item.memorySlots}</span>{" "}
              </p>
            )}
            {item.microarchitecture && (
              <p>
                &gt; <span className="text-[#00ff41]"> Microarcheticure: {item.microarchitecture}</span>{" "}
              </p>
            )}
            {item.rpm && (
              <p>
                &gt; <span className="text-[#00ff41]"> RPM: {item.rpm} RPM</span>
              </p>
            )}
            {item.noiseLevel && (
              <p>
                &gt; <span className="text-[#00ff41]"> Noice Level: {item.noiseLevel}</span>{" "}
              </p>
            )}
            {item.speed && (
              <p>
                &gt; <span className="text-[#00ff41]"> Speed: {item.speed}</span>{" "}
              </p>
            )}
            {item.modules && (
              <p>
                &gt; <span className="text-[#00ff41]"> Modules: {item.modules}</span>{" "}
              </p>
            )}
            {item.capacity && (
              <p>
                &gt; <span className="text-[#00ff41]"> Capacity: {item.capacity}</span>{" "}
              </p>
            )}
            {item.type && (
              <p>
                &gt; <span className="text-[#00ff41]"> Type: {item.type}</span>{" "}
              </p>
            )}
            {item.interface && (
              <p>
                &gt; <span className="text-[#00ff41]"> Interface: {item.interface}</span>{" "}
              </p>
            )}
            {item.chipset && (
              <p>
                &gt; <span className="text-[#00ff41]"> Chipset: {item.chipset}</span>{" "}
              </p>
            )}
            {item.boostClock && (
              <p>
                &gt; <span className="text-[#00ff41]"> Boost Clock: {item.boostClock}</span>{" "}
              </p>
            )}
            {item.wattage && (
              <p>
                &gt; <span className="text-[#00ff41]"> Wattage: {item.wattage}</span>{" "}
              </p>
            )}
            
          </div>
        );
      })}

      <div ref={endRef} />
    </div>
  );
}
