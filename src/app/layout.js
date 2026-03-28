// "use client";
import "./globals.css";
import RightPanel from "../components/RightPanel.jsx";
import BottomPanel from "../components/BottomPanel.jsx";
import LeftPanel from "@/components/LeftPanel";
import "bootstrap-icons/font/bootstrap-icons.css";
import { PricesProvider } from "@/components/PricesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PricesProvider>
          <div className="parent">
            <div className="div1">
              <p className="text-[#285c37] text-xl border-b border-[#285c37] pb-2">
                // <span className="text-[#00ff41]">RIGLAB</span> - PC ASSEMBLY PLAYGROUND //
              </p>
              <LeftPanel />
              {children}   {/* страницы */}
            </div>
            <div className="div2 text-[#285c37] p-[1rem]">
              <p className="text-[#285c37] text-xl border-b border-[#285c37] pb-2 ">
                // <span className="text-[#00ff41]">BULD LOG</span> //
              </p>
              <p className="text-[#285c37] text-xl border-b border-[#285c37] w-fit  py-2 ">// SELECT COMPONENTS TO BEGIN</p>
              <div className="py-3">
                <RightPanel />
              </div>
            </div>
            <div className="div3 text-[#285c37]">
              <BottomPanel />
            </div>
          </div>
        </PricesProvider>
      </body>
    </html>
  );
} 