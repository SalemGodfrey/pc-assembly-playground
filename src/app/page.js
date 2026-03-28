"use client";
import Card from "../components/Card";
import Prices from "../api/prices.json";
import { usePrices } from "../components/PricesContext";

export default function Home() {
  const { setSelectedItem } = usePrices();
  const pcPart = Prices.motherboards;
  return (
    <div>
      <div className="border h-[88vh] overflow-y-scroll left" style={{ scrollbarColor: "#00ff41 #0a0a0a" }}>
        <Card
          pcPart={pcPart}
          onItemClick={(item, index) => {
            setSelectedItem({
              product: "motherboards",
              name: item.name,
              price: item.price,
              socket: pcPart.socket[index],
              formFactor: pcPart.formFactor[index],
              memorySlots: pcPart.memorySlots[index],
            });
          }}
        />
      </div>
    </div>
  );
}
