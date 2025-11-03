"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Counter from '../common/Counter'

const Home4Banner = () => {
  const ref3 = useRef(null);
  useEffect(() => {
    const paths = document.querySelectorAll(".blinking-svg .circle");
    // Check if paths exist on the current page
    if (paths.length > 0) {
      function randomHide() {
        // Select a random path
        const randomIndex = Math.floor(Math.random() * paths.length);
        const randomPath = paths[randomIndex];

        randomPath.classList.add("hide");

        setTimeout(() => {
          randomPath.classList.remove("hide");
        }, 1000);
      }

      // Run the randomHide function repeatedly
      setInterval(randomHide, 1000);
    }

  }, [])
  return (
    <div className="home4-banner-section mb-130">
      <div className="container position-relative">
        <div className="partner-area">
          <img src="/assets/img/home4/icon/meta-logo.svg" alt="" />
          <h5>Meta Partner - 2018</h5>
          <span>Think Depth.Bold Impact</span>
          <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
          </svg>
        </div>
        <div className="row gy-5 align-items-end">
          <div className="col-lg-2 d-lg-block d-none">
            <div className="animated-svg">
              <div className="blinking-svg">
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-content-wrap">
              <div className="subtitle">
                <span>#1 Rated Marketing Agency</span>
                <i className="corner tl" />
                <i className="corner tr" />
                <i className="corner br" />
                <i className="corner bl" />
              </div>
              <h1><span>Let’s Grow</span> Your Business.</h1>
              <p>We provides services related to online <span>Marketing, Development, Design,</span> and other digital solutions for clients.</p>
              <div className="btn-and-counter-area">
                <Link href="/contact" className="primary-btn4 black-bg">
                  <span className="icon">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="content">Get A Proposal</span>
                  <span className="icon two">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </Link>
                <div className="counter-area">
                  <div className="icon">
                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M0.351903 27.6225C0.143442 27.9805 0.264614 28.4396 0.622548 28.6481C0.980482 28.8566 1.43964 28.7354 1.6481 28.3775L0.351903 27.6225ZM29 3L21.7485 7.73454L29.4745 11.6472L29 3ZM20.0155 20.7406L19.3465 20.4017L20.0155 20.7406ZM1.6481 28.3775L7.7352 17.9257L6.439 17.1708L0.351903 27.6225L1.6481 28.3775ZM11.4985 17.7338L14.3075 21.5923L15.5202 20.7094L12.7112 16.851L11.4985 17.7338ZM20.6846 21.0794L26.6194 9.36065L25.2813 8.68295L19.3465 20.4017L20.6846 21.0794ZM14.3075 21.5923C15.957 23.8581 19.4184 23.5797 20.6846 21.0794L19.3465 20.4017C18.5867 21.9019 16.5099 22.0689 15.5202 20.7094L14.3075 21.5923ZM7.7352 17.9257C8.55264 16.5221 10.5425 16.4206 11.4985 17.7338L12.7112 16.851C11.1179 14.6624 7.80141 14.8315 6.439 17.1708L7.7352 17.9257Z" />
                        <circle cx={22} cy={17} r={3} />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <div className="number">
                      <Counter
                        start={0}
                        end={3}
                        speed={100}
                        forwardedRef={ref3}
                        as="h3"
                        className="counter"
                      />
                      <span>X+</span>
                    </div>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <div className="banner-img-wrap">
              <img src="/assets/img/home4/banner-img.jpg" alt="" />
              <div className="counter-wrap">
                <div className="counter-content">
                  <div className="number">
                    <Counter
                      start={0}
                      end={13}
                      speed={80}
                      forwardedRef={ref3}
                      as="h4"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <span>Award Wining.</span>
                </div>
                <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4Banner
