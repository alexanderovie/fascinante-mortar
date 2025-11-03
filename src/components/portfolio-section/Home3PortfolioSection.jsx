import Link from 'next/link'
import React from 'react'

const Home3PortfolioSection = () => {
  return (
    <div className="home3-portfolio-section">
      <div className="container">
        <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xl-9 col-lg-10">
            <div className="title-area">
              <div className="project-time">
                <span>Selected Projects</span>
                <p>(2012-2024)*</p>
              </div>
              <div className="section-title three white">
                <h2>Latest Work</h2>
                <p>We have completed more than about <span>Topnotch 250+ Product</span> in marketplace.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 justify-content-between mb-70">
          <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="portfolio-card magnetic-item">
              <div className="portfolio-img-wrap">
                <div className="portfolio-img">
                  <img src="/assets/img/home3/portfolio-img1.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="icon">
                    <i className="bi bi-plus" />
                  </div>
                  <Link href="/portfolio/details" className="details-btn">
                    View Details
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h3><Link href="/portfolio/details">Pixel Pulse</Link></h3>
                <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                <Link href="/portfolio/creative" className="tag">Artifical Intellegnce</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="portfolio-card magnetic-item">
              <div className="portfolio-img-wrap">
                <div className="portfolio-img">
                  <img src="/assets/img/home3/portfolio-img2.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="icon">
                    <i className="bi bi-plus" />
                  </div>
                  <Link href="/portfolio/details" className="details-btn">
                    View Details
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h3><Link href="/portfolio/details">Engage360</Link></h3>
                <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                <Link href="/portfolio/creative" className="tag">Health Care</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="portfolio-card magnetic-item">
              <div className="portfolio-img-wrap">
                <div className="portfolio-img">
                  <img src="/assets/img/home3/portfolio-img3.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="icon">
                    <i className="bi bi-plus" />
                  </div>
                  <Link href="/portfolio/details" className="details-btn">
                    View Details
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h3><Link href="/portfolio/details">UX Elevate</Link></h3>
                <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                <Link href="/portfolio/creative" className="tag">UI/UX Design</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
            <div className="portfolio-card magnetic-item">
              <div className="portfolio-img-wrap">
                <div className="portfolio-img">
                  <img src="/assets/img/home3/portfolio-img4.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="icon">
                    <i className="bi bi-plus" />
                  </div>
                  <Link href="/portfolio/details" className="details-btn">
                    View Details
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h3><Link href="/portfolio/details">SocialSphere</Link></h3>
                <p>To perfectly using <span>Typhography, UX Consistency.</span></p>
                <Link href="/portfolio/creative" className="tag">Artifical Intellegnce</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Link href="/portfolio/creative" className="primary-btn3 btn-hover">
              View All Work
              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home3PortfolioSection
