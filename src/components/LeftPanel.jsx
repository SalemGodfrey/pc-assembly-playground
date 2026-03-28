"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LeftPanel() {
  const pathname = usePathname();
  
  return (
    <div>
      <nav className="flex gap-2 py-2 text-xl justify-center" style={{ flexWrap: "wrap" }}>
        <Link className={pathname === "/" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/">
          [ MOTHERBOARD ]
        </Link>
        <Link className={pathname === "/cpu" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/cpu">
          [ CPU ]
        </Link>
        <Link className={pathname === "/gpu" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/gpu">
          [ GPU ]
        </Link>
        <Link className={pathname === "/ram" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/ram">
          [ RAM ]
        </Link>
        <Link className={pathname === "/psu" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/psu">
          [ PSU ]
        </Link>
        <Link className={pathname === "/storage" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/storage">
          [ STORAGE ]
        </Link>
        <Link className={pathname === "/cooler" ? "text-[#00ff41]" : "text-[#285c37] "} style={{ whiteSpace: "nowrap" }} href="/cooler">
          [ COOLER ]
        </Link>
      </nav>
    </div>
  );
}
