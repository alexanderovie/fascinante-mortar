import Link from 'next/link'
import React from 'react'

const Home1ServiceSection = () => {
  return (
    <div className="home1-service-section mb-80">
      <div className="container">
        <div className="row mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12">
            <div className="section-title white">
              <span>Our Solution</span>
              <h2>Smart Solution</h2>
              <p>These services can be tailored to meet the specific needs of your clients.</p>
            </div>
          </div>
        </div>
        <div className="row gy-lg-5 gy-4">
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">Product <br />Development</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/html-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/react-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>We provide end-to-end product development services, from ideation to launch.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">Design <br />Department</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/figma-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/xd-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/zepline-icon.svg" alt="" /></li>
              </ul>
              <p>Our design team focuses on aesthetics and usability, ensuring your digital products.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">Cloud <br />Solutions</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/node-js-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/d3-js-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/graphql-icon.svg" alt="" /></li>
              </ul>
              <p>We offer scalable and secure cloud services that enable your business to operate.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">Data &amp; <br />Analytics</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>Our data &amp; analytics services help you make informed decisions, optimize operations.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">AI &amp; Machine <br />Learning</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/jquiry-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>We harness the power of AI and machine learning to unlock new opportunities for your business.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">E-commerce <br />Solutions</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/html-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/javascript-icon.svg" alt="" /></li>
              </ul>
              <p>We create powerful e-commerce platforms that drive sales &amp; customer engagement.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">IoT <br />Development</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/node-js-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/python-icon.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/graphql-icon.svg" alt="" /></li>
              </ul>
              <p>We provide end-to-end product development services, from ideation to launch.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="service-card magnetic-item">
              <h3><Link href="/service/details">Technical <br />Support</Link></h3>
              <ul>
                <li><img src="/assets/img/home1/icon/support-icon2.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/support-icon3.svg" alt="" /></li>
                <li><img src="/assets/img/home1/icon/support-icon4.svg" alt="" /></li>
              </ul>
              <p>Our team is always ready to assist with updates, performance optimization.</p>
              <Link href="/service/details" className="learn-btn">
                View Details
                <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8L8 1M8 1C6.44444 1.29167 3.04167 1.875 1 1M8 1C7.70833 2.45833 7.125 5.66667 8 8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home1ServiceSection
