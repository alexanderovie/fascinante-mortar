"use client";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export const useWow = () => {
  const pathname = usePathname();
  const [wow, setWow] = useState(null);

  useEffect(() => {
    const initWow = async () => {
      if (typeof window !== "undefined") {
        const WOW = (await import("wowjs")).default;
        const instance = new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        instance.init();
        setWow(instance);
      }
    };

    initWow();

    return () => {
      if (wow) {
        wow.stop();
      }
    };
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    if (wow) {
      wow.sync();
    }
  }, [pathname, wow]); // Run when pathname changes and wow is available

  return wow;
};
