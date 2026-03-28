"use client";
import React from "react";
import { usePrices } from "./PricesContext";

const PRODUCT_LABELS = {
  motherboards: "MOBO",
  cpus: "CPU",
  gpus: "GPU",
  rams: "RAM",
  psus: "PSU",
  storages: "SSD/HDD",
  coolers: "COOLER",
};

const PRODUCT_ORDER = ["motherboards", "cpus", "gpus", "rams", "storages", "psus", "coolers"];

function SpecRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-2" style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
      <span className="text-[#285c37] text-lg leading-4">{label}</span>
      <span className="text-[#00ff41] text-right text-lg leading-4">{value}</span>
    </div>
  );
}

function getSpecs(item) {
  if (!item) return [];
  const s = [];
  if (item.socket) s.push(["SOCKET", item.socket]);
  if (item.formFactor) s.push(["FORM FACTOR", item.formFactor]);
  if (item.memorySlots) s.push(["MEM SLOTS", item.memorySlots]);
  if (item.coreAmount) s.push(["CORES", item.coreAmount]);
  if (item.performanceCoreBoostClock) s.push(["BOOST CLOCK", item.performanceCoreBoostClock]);
  if (item.microarchitecture) s.push(["ARCH", item.microarchitecture]);
  if (item.tdp) s.push(["TDP", item.tdp]);
  if (item.chipset) s.push(["CHIPSET", item.chipset]);
  if (item.memory) s.push(["VRAM", item.memory]);
  if (item.boostClock) s.push(["BOOST CLOCK", item.boostClock]);
  if (item.speed) s.push(["SPEED", item.speed]);
  if (item.modules) s.push(["MODULES", item.modules]);
  if (item.capacity) s.push(["CAPACITY", item.capacity]);
  if (item.type) s.push(["TYPE", item.type]);
  if (item.interface) s.push(["INTERFACE", item.interface]);
  if (item.wattage) s.push(["WATTAGE", item.wattage]);
  if (item.rpm) s.push(["RPM", item.rpm]);
  if (item.noiseLevel) s.push(["NOISE", item.noiseLevel]);
  return s;
}

function getCompatibility(installed) {
  const checks = [];
  const cpu = installed["cpus"];
  const mobo = installed["motherboards"];

  if (cpu && mobo) {
    const match = cpu.socket === mobo.socket;
    checks.push({
      label: "CPU ↔ MOBO SOCKET",
      value: `${cpu.socket} / ${mobo.socket}`,
      ok: match,
    });
  } else if (cpu || mobo) {
    checks.push({
      label: "CPU ↔ MOBO SOCKET",
      value: !cpu ? "no CPU selected" : "no MOBO selected",
      ok: null,
    });
  }

  return checks;
}

export default function BottomPanel() {
  const { installed, selectedItem } = usePrices();

  const total = Object.values(installed).reduce((sum, i) => sum + (parseFloat(i.price) || 0), 0);
  const specs = getSpecs(selectedItem);
  const compatibility = getCompatibility(installed);

  return (
    <div className="h-full p-[0.5rem] pt-0 bottom">
      <div className="bottom-parent h-full ">

        {/* div1 — выбранные компоненты + итог */}
        <div className="bottom-div1 border border-[#285c37] h-full p-3 flex flex-col">
          <p className="text-[#285c37] text-xl border-b border-[#285c37] pb-1 mb-2">
            // <span className="text-[#00ff41]">COMPONENTS</span>
          </p>
          <div className="flex flex-col gap-1 flex-1 overflow-hidden">
            {PRODUCT_ORDER.map((key) => {
              const item = installed[key];
              return (
                <div key={key} className="flex justify-between gap-2" style={{ fontFamily: "monospace", fontSize: "0.72rem" }}>
                  <span className="text-[#285c37] text-lg leading-4 pt-1">{PRODUCT_LABELS[key]}</span>
                  {item ? (
                    <span className="text-[#00ff41] text-right leading-4 text-lg pt-1" style={{ maxWidth: "100%" }}>{item.name}</span>
                  ) : (
                    <span style={{ color: "#285c37", opacity: 0.5 }}>—</span>
                  )}
                </div>
              );
            })}
          </div>
          {total > 0 && (
            <div className="border-t border-[#285c37] pt-2 mt-2 flex justify-between" style={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
              <span className="text-[#285c37] text-lg p-0 leading-5">TOTAL</span>
              <span className="text-[#00ff41] text-lg p-0 leading-5">${total.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* div2 — характеристики последнего выбранного */}
        <div className="bottom-div2 border border-[#285c37] h-full p-3 flex flex-col">
          <p className="text-[#285c37] text-xl border-b border-[#285c37] pb-1 mb-2">
            // <span className="text-[#00ff41] ">{selectedItem ? `${PRODUCT_LABELS[selectedItem.product] ?? selectedItem.product} SPECS` : "SPECS"}</span>
          </p>
          {!selectedItem ? (
            <p className="text-[#285c37] text-lg leading-3" style={{ fontFamily: "monospace" }}>-- select a component --</p>
          ) : (
            <div className="flex flex-col gap-1 ">
              <div className="mb-1 text-lg leading-5" style={{ fontFamily: "monospace", color: "#00ff41" }}>
                {selectedItem.name}
              </div>
              {specs.map(([label, value]) => (
                <SpecRow key={label} label={label} value={value} />
              ))}
              <div className="flex justify-between gap-2 mt-1 border-t border-[#285c37] pt-1" style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                <span className="text-[#285c37] text-lg leading-5 ">PRICE</span>
                <span className="text-[#00ff41] text-lg leading-5 ">${selectedItem.price}</span>
              </div>
            </div>
          )}
        </div>

        {/* div3 — совместимость */}
        <div className="bottom-div3 border border-[#285c37] h-full p-3 flex flex-col">
          <p className="text-[#285c37] text-xl border-b border-[#285c37] pb-1 mb-2">
            // <span className="text-[#00ff41] ">SOCKET COMPATIBILITY</span>
          </p>
          {compatibility.length === 0 ? (
            <p className="text-[#285c37] text-lg" style={{ fontFamily: "monospace" }}>-- select CPU and MOBO --</p>
          ) : (
            <div className="flex flex-col gap-2">
              {compatibility.map((check, i) => (
                <div key={i} className="flex justify-between items-center gap-2" style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                  <span className="text-[#285c37]">{check.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#285c37] text-lg leading-1">{check.value}</span>
                    {check.ok === true && <span className="text-lg" style={{ color: "#00ff41" }}>[ OK ]</span>}
                    {check.ok === false && <span style={{ color: "#ff4141" }}>[ MISMATCH ]</span>}
                    {check.ok === null && <span style={{ color: "#285c37" }}>[ — ]</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}