"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'


const VerticalPortfolioPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("section");
    const images = containerRef.current.querySelectorAll(".bg");
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");

    if (sections.length && images.length && outerWrappers.length && innerWrappers.length) {
      let currentIndex = -1;
      let wrap = gsap.utils.wrap(0, sections.length);
      let animating;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      function gotoSection(index, direction) {
        index = wrap(index);
        animating = true;
        const fromTop = direction === -1;
        const dFactor = fromTop ? -1 : 1;

        const tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });

        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
        }

        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
          { yPercent: 0 },
          0
        ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

        currentIndex = index;
      }

      Observer.create({
        target: containerRef.current,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      gotoSection(0, 1);
    }
  }, []);
  useEffect(() => {
    document.body.classList.add('digital-agency')
  })
  return (
    <>
      <Header3 />

      <div ref={containerRef} className="portfolio-vertiical-slider-page" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg2.jpg")' }}>
        <section>
          <div className="outer">
            <div className="inner">
              <div className="bg one" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg2.jpg")' }}>
                <div className="portfolio-slider-content">
                  <div className="title-area">
                    <ul>
                      <li><Link href="/portfolio/classic">Branding &amp; Graphics</Link></li>
                      <li><Link href="/portfolio/classic">2024</Link></li>
                    </ul>
                    <h1><Link href="/portfolio/details">Strategic Web Creations.</Link></h1>
                  </div>
                  <div className="social-area">
                    <Link href="/portfolio/classic">Visit More Portfolio
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://dribbble.com/">Dribbble</a></li>
                      <li><a href="https://www.behance.net/">Behance</a></li>
                      <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                      <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">
              <div className="bg one" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg1.jpg")' }}>
                <div className="portfolio-slider-content">
                  <div className="title-area">
                    <ul>
                      <li><Link href="/portfolio/classic">UI/UX Design</Link></li>
                      <li><Link href="/portfolio/classic">2024</Link></li>
                    </ul>
                    <h1><Link href="/portfolio/details">Innovative Digital Creations</Link></h1>
                  </div>
                  <div className="social-area">
                    <Link href="/portfolio/classic">Visit More Portfolio
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://dribbble.com/">Dribbble</a></li>
                      <li><a href="https://www.behance.net/">Behance</a></li>
                      <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                      <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">
              <div className="bg one" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg3.jpg")' }}>
                <div className="portfolio-slider-content">
                  <div className="title-area">
                    <ul>
                      <li><Link href="/portfolio/classic">Creative Art</Link></li>
                      <li><Link href="/portfolio/classic">2024</Link></li>
                    </ul>
                    <h1><Link href="/portfolio/details">Engaging User Experience</Link></h1>
                  </div>
                  <div className="social-area">
                    <Link href="/portfolio/classic">Visit More Portfolio
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://dribbble.com/">Dribbble</a></li>
                      <li><a href="https://www.behance.net/">Behance</a></li>
                      <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                      <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">
              <div className="bg one" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url("/assets/img/innerpages/portfolio-horizontal-bg4.jpg")' }}>
                <div className="portfolio-slider-content">
                  <div className="title-area">
                    <ul>
                      <li><Link href="/portfolio/classic">Development</Link></li>
                      <li><Link href="/portfolio/classic">2024</Link></li>
                    </ul>
                    <h1><Link href="/portfolio/details">Scalable Web Designs</Link></h1>
                  </div>
                  <div className="social-area">
                    <Link href="/portfolio/classic">Visit More Portfolio
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://dribbble.com/">Dribbble</a></li>
                      <li><a href="https://www.behance.net/">Behance</a></li>
                      <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                      <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default VerticalPortfolioPage
