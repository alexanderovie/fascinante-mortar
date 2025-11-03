// customHooks/useGsapAnimations.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useGsapAnimations() {
  useEffect(() => {
    // Ensure the code runs only in the client
    if (typeof window !== "undefined") {
      // Register plugins
      gsap.registerPlugin(ScrollTrigger);

      // Check if SplitText is available
      if (typeof SplitText === "undefined") {
        console.error("SplitText is not available. Please check your script tags.");
        return;
      }

      // Title Animation
      const splitTitleLines = gsap.utils.toArray(".text-animation");

      splitTitleLines.forEach((splitTextLine) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl2.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      });

      // Text Animation
      const splitTextLines = gsap.utils.toArray(".text-animation p");

      splitTextLines.forEach((splitTextLine) => {
        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl3.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.5,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      });
    }
  }, []); // Empty dependency array ensures this runs only once, on mount.
}
