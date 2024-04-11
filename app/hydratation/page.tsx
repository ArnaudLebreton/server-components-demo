"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const isClient = typeof window !== "undefined";

  return isClient ? "Client Side" : "Server Side";
};

// const Page = () => {
//   const [isHydrated, setIsHydrated] = useState(false);

//   useEffect(() => {
//     setIsHydrated(true);
//   }, []);

//   return isHydrated ? "Client Side" : "Server Side";
// };

export default Page;
