"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home2TestimonialSection = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: 'fade',             // Use the fade effect
      fadeEffect: {
        crossFade: true           // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".testimonial-slider-next",
        prevEl: ".testimonial-slider-prev",
      },
      pagination: {
        el: ".franctional-pagi",
        type: "fraction",
      },
    };
  }, []);
  return (
    <>
      <div className="home2-testimonial-section mb-130">
        <div className="container">
          <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two text-center">
                <span>Customer Satisfaction</span>
                <h2>They Loves Us</h2>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-area">
            <Swiper {...settings} className="swiper home2-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img1.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo1.png" alt="" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo1-white.png" alt="" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>Outstanding Apps! They are very helpful &amp; mindblowing to get services. Providing comprehensive care and creativity for customer satisfaction.</p>
                          </div>
                          <div className="author-area">
                            <h5>Jorche Milton</h5>
                            <span>Project Manager (HR)</span>
                          </div>
                          <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                          </svg>
                          <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                          <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img2.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo2.png" alt="" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo2-white.png" alt="" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>Excellent Work! Evaluate the effectiveness of the team’s communication and collaboration throughout the project. I prefer that.</p>
                          </div>
                          <div className="author-area">
                            <h5>Robert Baruni</h5>
                            <span>QA Engineer</span>
                          </div>
                          <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                          </svg>
                          <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                          <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img3.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo3.png" alt="" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo3-white.png" alt="" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>We were thoroughly impressed with the professionalism and dedication of Mortar. From our initial consultation to the final delivery.</p>
                          </div>
                          <div className="author-area">
                            <h5>Hanry Macle</h5>
                            <span>Support Engineer</span>
                          </div>
                          <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                          </svg>
                          <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                          <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card2">
                    <div className="row gy-4">
                      <div className="col-lg-4 col-md-7">
                        <div className="testimonial-img">
                          <img src="/assets/img/home2/testimonial-author-img4.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="testimonial-content-wrap">
                          <div className="company-logo">
                            <img src="/assets/img/home1/testimonial-company-logo4.png" alt="" className="light" />
                            <img src="/assets/img/home1/testimonial-company-logo4-white.png" alt="" className="dark" />
                          </div>
                          <div className="testimonial-content">
                            <ul className="rating-area">
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-fill" /></li>
                              <li><i className="bi bi-star-half" /></li>
                            </ul>
                            <p>The team at Mortar was fantastic to work with! They maintained open and clear communication throughout the entire process.</p>
                          </div>
                          <div className="author-area">
                            <h5>Miecle Maiker</h5>
                            <span>Support Engineer</span>
                          </div>
                          <svg className="quote" width={90} height={66} viewBox="0 0 90 66" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14042 65.4859L2.13985 65.486C0.465777 65.6958 -0.145829 63.4059 1.3666 62.74L1.36702 62.7398C10.6535 58.6405 15.5326 53.3624 16.1668 47.9767L16.1669 47.9766C16.6365 43.9852 14.4641 40.3342 11.5096 39.6286L11.5095 39.6286C8.26933 38.8558 5.52035 36.4554 3.57183 33.1359C1.62485 29.819 0.502964 25.6234 0.502964 21.3522C0.502964 15.8231 2.71671 10.5197 6.65849 6.60885C10.6004 2.69787 15.9476 0.5 21.524 0.5C27.6271 0.5 32.8687 2.99571 36.5916 7.3391C40.3187 11.6874 42.5449 17.9146 42.545 25.3967C42.4673 47.107 26.0325 62.5195 2.14042 65.4859ZM49.0954 65.4859L49.0948 65.486C47.4208 65.6958 46.8091 63.4059 48.3216 62.74L48.322 62.7398C57.6084 58.6405 62.4875 53.3624 63.1218 47.9767L63.1218 47.9766C63.5915 43.9852 61.4191 40.3342 58.4646 39.6286L58.4644 39.6286C55.2243 38.8558 52.4753 36.4554 50.5268 33.1359C48.5798 29.819 47.4579 25.6234 47.4579 21.3522C47.4579 15.8231 49.6717 10.5197 53.6135 6.60885C57.5554 2.69787 62.9026 0.5 68.479 0.5C74.5821 0.5 79.8236 2.99571 83.5466 7.3391C87.2735 11.6872 89.4996 17.914 89.5 25.3957C89.4229 47.1065 72.9879 62.5194 49.0954 65.4859Z" />
                          </svg>
                          <svg className="joint1" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                          <svg className="joint2" width={24} height={30} viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0C14.4 10.6667 4 4.44444 0 0V30C9.2 19.3333 19.8333 25.5556 24 30V0Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-btn-area">
              <div className="franctional-pagi" />
              <div className="slider-btn-grp two">
                <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                  <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.85712 9.28577C7.14283 7.50005 3.5714 5.71434 1.42855 5.00005C3.5714 4.28577 6.78569 3.21434 7.85712 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
                  <svg width={9} height={10} viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home2TestimonialSection
