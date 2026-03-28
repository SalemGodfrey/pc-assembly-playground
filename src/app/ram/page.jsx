"use client";
import Card from "../../components/Card";
import Prices from "../../api/prices.json";
import { usePrices } from "../../components/PricesContext";

export default function Ram() {
  const { setSelectedItem } = usePrices();
  const pcPart = Prices.rams;
  return (
    <div>
      <div  className="border h-[88vh] overflow-y-scroll left" style={{scrollbarColor: "#00ff41 #0a0a0a"}}>
        <Card  onItemClick={(item, index) => {
            setSelectedItem({
              product: "rams",
              name: item.name,
              price: item.price,
              modules: pcPart.modules[index],
              speed: pcPart.speed[index]
            });
          }} pcPart={pcPart}/>
      </div>
    </div>
  );
}
