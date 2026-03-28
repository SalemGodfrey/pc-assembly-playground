"use client";
import Card from "../../components/Card";
import Prices from "../../api/prices.json";
import { usePrices } from "../../components/PricesContext";

export default function Cooler() {
  const { setSelectedItem } = usePrices();
  const pcPart = Prices.coolers;
  return (
    <div>
      <div className="border h-[88vh] overflow-y-scroll" style={{ scrollbarColor: "#00ff41 #0a0a0a" }}>
        <Card
          onItemClick={(item, index) => {
            setSelectedItem({
              product: "coolers",
              name: item.name,
              price: item.price,
              noiseLevel: pcPart.noiseLevel[index],
              rpm: pcPart.rpm[index] 
            });
          }}
          pcPart={pcPart}
        />
      </div>
    </div>
  );
}
