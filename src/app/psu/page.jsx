"use client";
import Card from "../../components/Card";
import Prices from "../../api/prices.json";
import { usePrices } from "../../components/PricesContext";

export default function Psu() {
  const { setSelectedItem } = usePrices();
  const pcPart = Prices.psus;
  
  return (
    <div>
      <div  className="border h-[88vh] overflow-y-scroll left" style={{scrollbarColor: "#00ff41 #0a0a0a"}}>
        <Card onItemClick={(item, index) => {
            setSelectedItem({
              product: "psus",
              name: item.name,
              price: item.price,
              type: pcPart.type[index],
              wattage: pcPart.wattage[index]
            });
          }} pcPart={pcPart}/>
      </div>
    </div>
  );
}
