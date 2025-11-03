import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const ClassicPortfolioPage = () => {
  return (
    <>
      <Header3 />

      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>Portfolio Classic</h1>
                <ul className="breadcrumb-list">
                  <li><a href="/">Home</a></li>
                  <li>
                    <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>
                    Portfolio Classic
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Portfolio Inner Page Start */}
      <div className="portfolio-page mb-130">
        <div className="container">
          <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-xl-8 col-lg-10 d-flex justify-content-center">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-branding-tab" data-bs-toggle="pill" data-bs-target="#pills-branding" type="button" role="tab" aria-controls="pills-branding" aria-selected="false">Branding</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-ui-ux-tab" data-bs-toggle="pill" data-bs-target="#pills-ui-ux" type="button" role="tab" aria-controls="pills-ui-ux" aria-selected="false">UI/UX</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-development-tab" data-bs-toggle="pill" data-bs-target="#pills-development" type="button" role="tab" aria-controls="pills-development" aria-selected="false">Development</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-ecommerce-tab" data-bs-toggle="pill" data-bs-target="#pills-ecommerce" type="button" role="tab" aria-controls="pills-ecommerce" aria-selected="false">Ecommerce</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
              <div className="row gy-5 mb-70">
                <div className="col-lg-5 col-md-5 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>UI/UX Design</span>
                      <h4><Link href="/portfolio/details">Digital Masterpieces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Brand Amplifiers.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Creative Art</span>
                      <h4><Link href="/portfolio/details">Interactive Design.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img2.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Ecommerce</span>
                      <h4><Link href="/portfolio/details">E-commerce Excellence</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Engagement Redefined.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Seamless Interfaces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Development</span>
                      <h4><Link href="/portfolio/details">Scalable Web Designs.</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <div className="paginations-button">
                  <a href="#">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-branding" role="tabpanel" aria-labelledby="pills-branding-tab">
              <div className="row gy-5 mb-70">
                <div className="col-lg-5 col-md-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>UI/UX Design</span>
                      <h4><Link href="/portfolio/details">Digital Masterpieces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Brand Amplifiers.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Creative Art</span>
                      <h4><Link href="/portfolio/details">Interactive Design.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img2.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Ecommerce</span>
                      <h4><Link href="/portfolio/details">E-commerce Excellence</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Engagement Redefined.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Seamless Interfaces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Development</span>
                      <h4><Link href="/portfolio/details">Scalable Web Designs.</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <div className="paginations-button">
                  <a href="#">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-ui-ux" role="tabpanel" aria-labelledby="pills-ui-ux-tab">
              <div className="row gy-5 mb-70">
                <div className="col-lg-5 col-md-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>UI/UX Design</span>
                      <h4><Link href="/portfolio/details">Digital Masterpieces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Brand Amplifiers.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Creative Art</span>
                      <h4><Link href="/portfolio/details">Interactive Design.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img2.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Ecommerce</span>
                      <h4><Link href="/portfolio/details">E-commerce Excellence</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Engagement Redefined.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Seamless Interfaces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Development</span>
                      <h4><Link href="/portfolio/details">Scalable Web Designs.</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <div className="paginations-button">
                  <a href="#">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">
              <div className="row gy-5 mb-70">
                <div className="col-lg-5 col-md-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>UI/UX Design</span>
                      <h4><Link href="/portfolio/details">Digital Masterpieces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Brand Amplifiers.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Creative Art</span>
                      <h4><Link href="/portfolio/details">Interactive Design.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img2.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Ecommerce</span>
                      <h4><Link href="/portfolio/details">E-commerce Excellence</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Engagement Redefined.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Seamless Interfaces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Development</span>
                      <h4><Link href="/portfolio/details">Scalable Web Designs.</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <div className="paginations-button">
                  <a href="#">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-ecommerce" role="tabpanel" aria-labelledby="pills-ecommerce-tab">
              <div className="row gy-5 mb-70">
                <div className="col-lg-5 col-md-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>UI/UX Design</span>
                      <h4><Link href="/portfolio/details">Digital Masterpieces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Brand Amplifiers.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img1.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Creative Art</span>
                      <h4><Link href="/portfolio/details">Interactive Design.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img2.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Ecommerce</span>
                      <h4><Link href="/portfolio/details">E-commerce Excellence</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img3.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Engagement Redefined.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/home7/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Branding Design</span>
                      <h4><Link href="/portfolio/details">Seamless Interfaces.</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="portfolio-card2 two magnetic-item">
                    <div className="portfolio-img">
                      <img src="/assets/img/innerpages/portfolio-img4.jpg" alt="" />
                      <div className="details-btn-wrap">
                        <Link href="/portfolio/details" className="details-btn">
                          View Details
                          <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </Link>
                        <div className="icon">
                          <i className="bi bi-plus" />
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>Development</span>
                      <h4><Link href="/portfolio/details">Scalable Web Designs.</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <div className="paginations-button">
                  <a href="#">
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705" strokeWidth="1.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Home3Footer />
    </>
  )
}

export default ClassicPortfolioPage
