"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Home2FooterSection = () => {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const appbackimg = document.querySelector('.home2-app-banner-section .banner-img');
      if (appbackimg) { // Check if the element exists
        const getAppBlockHeight = appbackimg.getBoundingClientRect().y;
        appbackimg.classList.toggle("animate-back-img", 320 >= getAppBlockHeight);
      }
    });
  })
  return (
    <>
      <div className="home2-app-banner-section">
        <div className="container">
          <div className="banner-wrapper">
            <div className="row">
              <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="banner-content">
                  <div className="section-title two">
                    <span>Quick Features</span>
                    <h2>Download Mobile App</h2>
                    <p>Mortar is essential in binding bricks, stones, and concrete blocks together, providing the structural integrity.</p>
                  </div>
                  <ul className="store-list">
                    <li><a href="#"><img src="/assets/img/home2/play-store-icon.png" alt="" /></a></li>
                    <li><a href="#"><img src="/assets/img/home2/app-store-icon.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 d-lg-block d-none">
                <div className="banner-img">
                  <img src="/assets/img/home2/home2-app-banner-front-img.png" alt="" />
                  <img src="/assets/img/home2/home2-app-banner-back-img.png" alt="" className="back-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 d-flex justify-content-center text-center">
              <div className="contact-content">
                <div className="section-title two text-center wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <span>Help Line</span>
                  <h2>Ready to Get Started?</h2>
                  <p>To get user friendly spport, hit the contact us button.</p>
                </div>
                <Link href="/contact" className="primary-btn2">
                  <span>Contact Us
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>Contact Us
                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-section style-2">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="footer-contact-wrap">
              <div className="title-area">
                <Link href="/fintech" className="footer-logo">
                  <img src="/assets/img/footer-logo2.svg" alt="" />
                </Link>
                <h2>We are Global Digital Brand Fintech Agency.</h2>
              </div>
              <ul className="contact-list">
                <li className="single-contact">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/contact-whtsapp-icon.svg" alt="" />
                  </div>
                  <div className="content">
                    <span>WhatsApp</span>
                    <a href="tel:+997636844563">+99-763 684 4563</a>
                  </div>
                </li>
                <li className="single-contact">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/contact-mail-icon.svg" alt="" />
                  </div>
                  <div className="content">
                    <span>Send Us Mail</span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <svg className="divider-line" viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
            </svg>
            <div className="row gy-5">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Product</h3>
                  </div>
                  <ul className="widget-list">
                    <li><a href="#">Venmo</a></li>
                    <li><a href="#">Cash App</a></li>
                    <li><a href="#">Adyen</a></li>
                    <li><a href="#">Revolut</a></li>
                    <li><a href="#">Robinhood</a></li>
                    <li><a href="#">Betterment</a></li>
                    <li><a href="#">Wealthfront</a></li>
                    <li><a href="#">Coinbase</a></li>
                    <li><a href="#">Binance</a></li>
                    <li><a href="#">TransferWise</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Resource</h3>
                  </div>
                  <ul className="widget-list">
                    <li><a href="#">Happy Guide</a></li>
                    <li><Link href="/news-insight-grid">News &amp; Insight</Link></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Customer Stories</a></li>
                    <li><a href="#">Annual Conference</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                    <li><a href="#">Licenece</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-center">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Solutions</h3>
                  </div>
                  <ul className="widget-list">
                    <li><Link href="/service/details">Digital Payment &amp; Transfer</Link></li>
                    <li><Link href="/service/details">Banking Services</Link></li>
                    <li><Link href="/service/details">Investment &amp; Management</Link></li>
                    <li><Link href="/service/details">Financial Inclusion</Link></li>
                    <li><Link href="/service/details">Enterprise Financial</Link></li>
                    <li><Link href="/service/details">Crowdfunding</Link></li>
                    <li><Link href="/service/details">Payment Gateway</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Company</h3>
                  </div>
                  <ul className="widget-list">
                    <li><Link href="/about">About us</Link></li>
                    <li><Link href="/team">Our Team</Link></li>
                    <li><Link href="/portfolio">Our Portfolio</Link></li>
                    <li><Link href="/career">Careers <span>Hiring</span></Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <svg className="divider-line" viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
          </svg>
          <div className="copyright-and-social-area">
            <p>Copyright 2025 <a href="https://www.egenslab.com/">Egens Lab</a> | All Right Reserved.</p>
            <ul className="social-list">
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>

              <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
              <li><a href="https://www.youtube.com/"><i className="bx bxl-youtube" /></a></li>
              <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
            </ul>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home2FooterSection
