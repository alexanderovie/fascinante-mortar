"use client";
import Header3 from '@/components/header/Header3';
import Link from 'next/link';
import { useEffect, useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



const CarouselPortfolioPage = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
  }, []);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true           // Enable cross-fade transition
      },
      mousewheel: {
        invert: false,
      },
      navigation: {
        nextEl: ".portfolio-carousel-slider-next",
        prevEl: ".portfolio-carousel-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
    };
  }, []);
  return (
    <>
      <Header3 />
      {/* Portfolio Carousal Slider Page Start */}
      <div className="portfolio-carousel-slider-page">
        <div className="container-fluid">
          <div className="portfolio-carousel-slider-wrap">
            <Swiper {...settings} className="swiper portfolio-carousel-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="portfolio-carousel-slider-item">
                    <div className="row gy-md-5 gy-4 align-items-center justify-content-between">
                      <div className="col-xxl-5 col-lg-6">
                        <div className="portfolio-slider-content">
                          <div className="title-area">
                            <ul>
                              <li><Link href="/portfolio/classic">Branding &amp; Graphics</Link></li>
                              <li><Link href="/portfolio/classic">2024</Link></li>
                            </ul>
                            <h1><Link href="/portfolio/details">Strategic Web Creations.</Link></h1>
                          </div>
                          <div className="social-area d-lg-block d-none">
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
                      <div className="col-lg-6">
                        <div className="portfolio-slider-img">
                          <img src="/assets/img/innerpages/portfolio-carousel-img1.jpg" alt="" />
                          <span />
                          <strong>01</strong>
                        </div>
                        <div className="social-area d-lg-none d-block">
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="portfolio-carousel-slider-item">
                    <div className="row gy-md-5 gy-4 align-items-center justify-content-between">
                      <div className="col-xxl-5 col-lg-6">
                        <div className="portfolio-slider-content">
                          <div className="title-area">
                            <ul>
                              <li><Link href="/portfolio/classic">UI/UX Design</Link></li>
                              <li><Link href="/portfolio/classic">2024</Link></li>
                            </ul>
                            <h1><Link href="/portfolio/details">Innovative Digital Creations</Link></h1>
                          </div>
                          <div className="social-area d-lg-block d-none">
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
                      <div className="col-lg-6">
                        <div className="portfolio-slider-img">
                          <img src="/assets/img/innerpages/portfolio-carousel-img2.jpg" alt="" />
                          <span />
                          <strong>02</strong>
                        </div>
                        <div className="social-area d-lg-none d-block">
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="portfolio-carousel-slider-item">
                    <div className="row gy-md-5 gy-4 align-items-center justify-content-between">
                      <div className="col-xxl-5 col-lg-6">
                        <div className="portfolio-slider-content">
                          <div className="title-area">
                            <ul>
                              <li><Link href="/portfolio/classic">Creative Art</Link></li>
                              <li><Link href="/portfolio/classic">2024</Link></li>
                            </ul>
                            <h1><Link href="/portfolio/details">Engaging User Experience</Link></h1>
                          </div>
                          <div className="social-area d-lg-block d-none">
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
                      <div className="col-lg-6">
                        <div className="portfolio-slider-img">
                          <img src="/assets/img/innerpages/portfolio-carousel-img3.jpg" alt="" />
                          <span />
                          <strong>03</strong>
                        </div>
                        <div className="social-area d-lg-none d-block">
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
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="portfolio-carousel-slider-item">
                    <div className="row gy-md-5 gy-4 align-items-center justify-content-between">
                      <div className="col-xxl-5 col-lg-6">
                        <div className="portfolio-slider-content">
                          <div className="title-area">
                            <ul>
                              <li><Link href="/portfolio/classic">Development</Link></li>
                              <li><Link href="/portfolio/classic">2024</Link></li>
                            </ul>
                            <h1><Link href="/portfolio/details">Scalable Web Designs</Link></h1>
                          </div>
                          <div className="social-area d-lg-block d-none">
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
                      <div className="col-lg-6">
                        <div className="portfolio-slider-img">
                          <img src="/assets/img/innerpages/portfolio-carousel-img4.jpg" alt="" />
                          <span />
                          <strong>04</strong>
                        </div>
                        <div className="social-area d-lg-none d-block">
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
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-btn-grp three">
              <div className="slider-btn portfolio-carousel-slider-prev" style={{ cursor: "pointer" }}>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M1 11C3.5 10 6 5 7 2C8 5 9.5 9.5 13 11" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <div className="swiper-pagination1" />
              <div className="slider-btn portfolio-carousel-slider-next" style={{ cursor: "pointer" }}>
                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M1 3C3.5 4 6 9 7 12C8 9 9.5 4.5 13 3" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Carousal Slider Page End */}

    </>
  )
}

export default CarouselPortfolioPage
