"use client";

import { useEffect } from "react";
import { gsap, Power2 } from "gsap";

const MagicCursor = () => {
  useEffect(() => {
    // Ensure only on desktop and when body has class
    if (
      !document.body.classList.contains("is-mobile") &&
      document.body.classList.contains("tt-magic-cursor") &&
      window.innerWidth > 1024
    ) {
      gsap.config({ nullTargetWarn: false, trialWarn: false });

      const ball = document.getElementById("ball");
      const magneticItems = document.querySelectorAll(".magnetic-item");

      // Wrap magnetic items
      magneticItems.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "magnetic-wrap";
        item.parentNode.insertBefore(wrapper, item);
        wrapper.appendChild(item);
        if (item.tagName.toLowerCase() === "a") {
          item.classList.add("not-hide-cursor");
        }
      });

      const mouse = { x: 0, y: 0 };
      const pos = { x: 0, y: 0 };
      let active = false;
      const ratio = 0.15;

      const ballWidth = 20;
      const ballHeight = 20;
      const ballOpacity = 0.5;
      const ballBorderWidth = 2;

      gsap.set(ball, {
        xPercent: -50,
        yPercent: -50,
        width: ballWidth,
        height: ballHeight,
        borderWidth: ballBorderWidth,
        opacity: ballOpacity,
      });

      const mouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      const updatePosition = () => {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;
          gsap.set(ball, { x: pos.x, y: pos.y });
        }
      };

      document.addEventListener("mousemove", mouseMove);
      gsap.ticker.add(updatePosition);

      const parallaxIt = (e, parent, target, movement) => {
        const rect = parent.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        gsap.to(target, {
          duration: 0.3,
          x: ((relX - rect.width / 2) / rect.width) * movement,
          y: ((relY - rect.height / 2) / rect.height) * movement,
          ease: Power2.easeOut,
        });
      };

      const parallaxCursor = (e, parent, movement) => {
        const rect = parent.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
        gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
      };

      // Hover logic
      const magneticWraps = document.querySelectorAll(".magnetic-wrap");
      magneticWraps.forEach((wrap) => {
        const item = wrap.querySelector(".magnetic-item");

        wrap.addEventListener("mousemove", (e) => {
          parallaxCursor(e, wrap, 2);
          parallaxIt(e, wrap, item, 25);
        });

        wrap.addEventListener("mouseenter", () => {
          ball.classList.add("magnetic-active");
          gsap.to(ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
          active = true;
        });

        wrap.addEventListener("mouseleave", () => {
          ball.classList.remove("magnetic-active");
          gsap.to(ball, {
            duration: 0.3,
            width: ballWidth,
            height: ballHeight,
            opacity: ballOpacity,
          });
          gsap.to(item, {
            duration: 0.3,
            x: 0,
            y: 0,
            clearProps: "all",
          });
          active = false;
        });
      });

      return () => {
        document.removeEventListener("mousemove", mouseMove);
        gsap.ticker.remove(updatePosition);
      };
    }
  }, []);

  return null; // You can add your custom cursor markup elsewhere
};

export default MagicCursor;
