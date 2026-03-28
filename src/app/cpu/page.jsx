"use client";
import Card from "../../components/Card";
import Prices from "../../api/prices.json";
import { usePrices } from "../../components/PricesContext";

export default function Cpu() {
  const { setSelectedItem } = usePrices();
  const pcPart = Prices.cpus;

  return (
    <div>
      <div className="border h-[88vh] overflow-y-scroll left" style={{ scrollbarColor: "#00ff41 #0a0a0a" }}>
        <Card
          onItemClick={(item, index) => {
            setSelectedItem({
              product: "cpus",
              name: item.name,
              price: item.price,
              coreAmount: pcPart.coreAmount[index],
              performanceCoreBoostClock: pcPart.performanceCoreBoostClock[index],
              microarchitecture: pcPart.microarchitecture[index],
              tdp: pcPart.tdp[index],
              socket: pcPart.socket[index]
            });
          }}
          pcPart={pcPart}
        />
      </div>
    </div>
  );
}
