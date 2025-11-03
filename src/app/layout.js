"use client";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/style.css";
import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';
import useMagneticHover from "@/customHooks/useMagneticHover";
import { dmsans, suseSans, lora } from "@/fonts/font";
import { usePathname } from 'next/navigation'; // Import usePathname


import Script from 'next/script';

import ThemeSwitch from "@/components/common/Theme";
import ScrollCircleProgress from "@/utils/ScrollCircleProgess";
import useButtonHoverEffect from "@/customHooks/useButtonHoverEffect";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import AnimatedCursor from "react-animated-cursor";


export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  useMagneticHover();
  useWow()
  useButtonHoverEffect();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../../public/assets/js/confetti.browser.min");

    // Load boxicons CSS after preload to avoid render blocking
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Mortar - IT Startup & Digital Agency Template.</title>
        <link rel="preload" href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' as="style" />
        <noscript><link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' /></noscript>

        {/* GSAP Scripts */}
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" onLoad={() => { window.gsap.registerPlugin(window.ScrollTrigger); }} />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="beforeInteractive" />
      </head>
      <body id="body" className={`tt-magic-cursor ${lora.variable} ${dmsans.variable} ${suseSans.variable}`}>

        <SmoothPageScroll />
        {children}
        <AnimatedCursor
          innerSize={16}
          outerSize={16}

          color='88, 65, 216'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          outerStyle={{
            zIndex: 999999,
          }}
          innerStyle={{
            zIndex: 999999,
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />

        <ScrollCircleProgress />
        <ThemeSwitch />
      </body>
    </html>
  );
}
