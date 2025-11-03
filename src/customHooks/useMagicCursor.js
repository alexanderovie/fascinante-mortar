import { useEffect } from "react";
import gsap from "gsap";

export const useMagicCursor = () => {
  useEffect(() => {
    // Create the magic cursor container
    let cursor = document.getElementById("magic-cursor");
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.id = "magic-cursor";
      document.body.appendChild(cursor);
    }

    // Create the ball inside the cursor container
    let ball = document.getElementById("ball");
    if (!ball) {
      ball = document.createElement("div");
      ball.id = "ball";
      cursor.appendChild(ball);
    }

    let $mouse = { x: 0, y: 0 };
    let $pos = { x: 0, y: 0 };
    let $ratio = 0.15;

    const updateMousePosition = (e) => {
      $mouse.x = e.clientX;
      $mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", updateMousePosition);

    const updatePosition = () => {
      $pos.x += ($mouse.x - $pos.x) * $ratio;
      $pos.y += ($mouse.y - $pos.y) * $ratio;
      gsap.set(ball, { x: $pos.x, y: $pos.y });
    };

    gsap.ticker.add(updatePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      gsap.ticker.remove(updatePosition);
      cursor.remove(); // Cleanup on unmount
    };
  }, []);
};
