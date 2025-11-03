"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home1blog = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".blog-slider-next",
        prevEl: ".blog-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="home1-blog-section mb-130">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-4 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="section-title">
              <span>Industry Insights</span>
              <h2>News &amp; Blog Insights.</h2>
            </div>
            <div className="slider-btn-grp">
              <div className="slider-btn blog-slider-prev">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn blog-slider-next">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <Swiper {...settings} className="swiper home1-blog-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-card">
                    <Link href="/blog/blog-details" className="blog-img">
                      <img src="/assets/img/home1/blog-img1.jpg" alt="" />
                    </Link>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li><Link href="/blog/blog-grid" className="blog-date">10 August, 2024</Link></li>
                          <li><Link href="/blog/blog-grid">Industry</Link></li>
                        </ul>
                      </div>
                      <h4><Link href="/blog/blog-details">Construction News &amp; Tips Buildin Knowledge Base.</Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-card">
                    <Link href="/blog/blog-details" className="blog-img">
                      <img src="/assets/img/home1/blog-img2.jpg" alt="" />
                    </Link>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li><Link href="/blog/blog-grid" className="blog-date">05 July, 2024</Link></li>
                          <li><Link href="/blog/blog-grid">Ware House</Link></li>
                        </ul>
                      </div>
                      <h4><Link href="/blog/blog-details">Contractor Corner Build Smarter
                        Blueprint for Success.</Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-card">
                    <Link href="/blog/blog-details" className="blog-img">
                      <img src="/assets/img/home1/blog-img3.jpg" alt="" />
                    </Link>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li><Link href="/blog/blog-grid" className="blog-date">20 August, 2024</Link></li>
                          <li><Link href="/blog/blog-grid">Industry</Link></li>
                        </ul>
                      </div>
                      <h4><Link href="/blog/blog-details">Architecture Shaping the Future of Urban Design.</Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-card">
                    <Link href="/blog/blog-details" className="blog-img">
                      <img src="/assets/img/home1/blog-img4.jpg" alt="" />
                    </Link>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li><Link href="/blog/blog-grid" className="blog-date">25 August, 2024</Link></li>
                          <li><Link href="/blog/blog-grid">Industry</Link></li>
                        </ul>
                      </div>
                      <h4><Link href="/blog/blog-details">Building Dreams The Intersection of Edge Architecture.</Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-card">
                    <Link href="/blog/blog-details" className="blog-img">
                      <img src="/assets/img/home1/blog-img5.jpg" alt="" />
                    </Link>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li><Link href="/blog/blog-grid" className="blog-date">30 August, 2024</Link></li>
                          <li><Link href="/blog/blog-grid">Ware House</Link></li>
                        </ul>
                      </div>
                      <h4><Link href="/blog/blog-details">From Blueprint Reality Architect &amp; Construction.</Link></h4>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home1blog