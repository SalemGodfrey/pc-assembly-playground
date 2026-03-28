"use client";
import Card from "../../components/Card";
import Prices from "../../api/prices.json";
import { usePrices } from "../../components/PricesContext";

export default function Storage() {
  const { setSelectedItem } = usePrices();
  const pcPart = Prices.storages;

  return (
    <div>
      <div className="border h-[88vh] overflow-y-scroll left" style={{ scrollbarColor: "#00ff41 #0a0a0a" }}>
        <Card
          onItemClick={(item, index) => {
            setSelectedItem({
              product: "storages",
              name: item.name,
              price: item.price,
              capacity: pcPart.capacity[index],
              type: pcPart.type[index],
              interface: pcPart.interface[index],
            });
          }}
          pcPart={pcPart}
        />
      </div>
    </div>
  );
}
