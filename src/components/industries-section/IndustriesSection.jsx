import Link from 'next/link'
import React from 'react'

const IndustriesSection = () => {
  return (
    <div>
      <div className="home1-industries-section mb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="home1-industries-top mb-50">
                <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="col-xxl-6 col-xl-8 col-lg-7">
                    <div className="section-title text-center">
                      <span>Industries Cover Area</span>
                      <h2>Tech Sectors to Drive Significant Impact.</h2>
                    </div>
                  </div>
                </div>
                <ul className="industries-list wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <li>
                    <Link href="/industry-details">
                      <span>Finance &amp; Fintech <sup>(04)</sup></span>
                      <div className="hover-img">
                        <img src="/assets/img/home1/industries-hover-img2.png" alt="" className="img1" />
                        <img src="/assets/img/home1/industries-hover-img1.png" alt="" className="img2" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/industry-details">
                      <span>Healthcare &amp; Life <sup>(03)</sup></span>
                      <div className="hover-img">
                        <img src="/assets/img/home1/industries-hover-img4.png" alt="" className="img1" />
                        <img src="/assets/img/home1/industries-hover-img3.png" alt="" className="img2" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/industry-details">
                      <span>Retail &amp; E-commerce <sup>(05)</sup></span>
                      <div className="hover-img">
                        <img src="/assets/img/home1/industries-hover-img6.png" alt="" className="img1" />
                        <img src="/assets/img/home1/industries-hover-img5.png" alt="" className="img2" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/industry-details">
                      <span>Education &amp; EdTech <sup>(08)</sup></span>
                      <div className="hover-img">
                        <img src="/assets/img/home1/industries-hover-img8.png" alt="" className="img1" />
                        <img src="/assets/img/home1/industries-hover-img7.png" alt="" className="img2" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/industry-details">
                      <span>Government &amp; Public Sector <sup>(04)</sup></span>
                      <div className="hover-img">
                        <img src="/assets/img/home1/industries-hover-img10.png" alt="" className="img1" />
                        <img src="/assets/img/home1/industries-hover-img9.png" alt="" className="img2" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/industry-details">
                      <span>Travel &amp; Hospitality <sup>(04)</sup></span>
                      <div className="hover-img">
                        <img src="/assets/img/home1/industries-hover-img12.png" alt="" className="img1" />
                        <img src="/assets/img/home1/industries-hover-img11.png" alt="" className="img2" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="industries-banner-area">
                <div className="banner-content">
                  <h5>We Build Long-Lasting Relationships That Don’t Stop At Project Delivery.</h5>
                  <a href="#" className="primary-btn1">
                    <span>Get a Free Strategy Session
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>Get a Free Strategy Session
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </a>
                </div>
                <img src="/assets/img/home1/industries-banner-vector.png" alt="" className="vector" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IndustriesSection
