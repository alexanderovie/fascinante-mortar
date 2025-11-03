import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = ({ cursorRef }) => {
  const ballRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.isMobile) return;

    const body = document.body;
    if (!body.classList.contains("tt-magic-cursor")) return;

    if (window.innerWidth <= 1024) return;

    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    const ball = ballRef.current;
    if (!ball) return;

    const $ballWidth = 20;
    const $ballHeight = 20;
    const $ballOpacity = 0.5;

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      width: $ballWidth,
      height: $ballHeight,
      borderWidth: 2,
      opacity: $ballOpacity,
    });

    const $magneticWrap = document.querySelectorAll(".magnetic-wrap");

    $magneticWrap.forEach((wrap) => {
      wrap.addEventListener("mouseenter", () => {
        ball.classList.add("magnetic-active");
        gsap.to(ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
      });

      wrap.addEventListener("mouseleave", () => {
        ball.classList.remove("magnetic-active");
        gsap.to(ball, {
          duration: 0.3,
          width: $ballWidth,
          height: $ballHeight,
          opacity: $ballOpacity,
        });
        gsap.to(wrap.querySelector(".magnetic-item"), {
          duration: 0.3,
          x: 0,
          y: 0,
          clearProps: "all",
        });
      });
    });

    return () => {
      $magneticWrap.forEach((wrap) => {
        wrap.removeEventListener("mouseenter", () => {});
        wrap.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return <div ref={(el) => { ballRef.current = el; cursorRef.current = el; }} className='magnetic-active' id="ball"></div>;
};

export default Cursor;
