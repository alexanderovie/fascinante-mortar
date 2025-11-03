"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home2ServiceSection = () => {

  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  return (
    <>
      <div className="home2-service-section mb-130">
        <div className="container">
          <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12 d-flex align-items-lg-end align-items-center justify-content-between gap-3 flex-wrap">
              <div className="section-title two">
                <span>What We Do</span>
                <h2>How We Can Help?</h2>
              </div>
              <Link href="/service" className="primary-btn2 transparent">
                <span>More Services
                  <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span>More Services
                  <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="service-card2 magnetic-item">
                <div className="service-content-wrap">
                  <h3><Link href="/service/details">Digital Payments and Transfers.</Link></h3>
                  <div className="feature-and-btn-area">
                    <ul className="feature-list">
                      <li>Mobile Payments</li>
                      <li>Online Payments</li>
                      <li>Cross-Border Payments</li>
                    </ul>
                    <Link href="/service/details">
                      View Details
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="service-img">
                  <img src="/assets/img/home2/service-img1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="service-card2 two magnetic-item">
                <div className="service-content-wrap">
                  <h3><Link href="/service/details">Banking Services.</Link></h3>
                  <div className="feature-and-btn-area">
                    <ul className="feature-list">
                      <li>Digital-only banking</li>
                      <li>Savings &amp; checking</li>
                      <li>Debit/Credit issuance</li>
                    </ul>
                    <Link href="/service/details">
                      View Details
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="service-img">
                  <img src="/assets/img/home2/service-img2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="service-card2 two magnetic-item">
                <div className="service-content-wrap">
                  <h3><Link href="/service/details">Investment &amp; Management.</Link></h3>
                  <div className="feature-and-btn-area">
                    <ul className="feature-list">
                      <li>Digital-only banking</li>
                      <li>Savings &amp; checking</li>
                      <li>Debit/Credit issuance</li>
                    </ul>
                    <Link href="/service/details">
                      View Details
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="service-img">
                  <img src="/assets/img/home2/service-img3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="service-card2 three magnetic-item">
                <div className="service-content-wrap">
                  <h3><Link href="/service/details">Financial Inclusion Services.</Link></h3>
                  <div className="feature-and-btn-area">
                    <ul className="feature-list">
                      <li>Microfinance platforms</li>
                      <li>Digital Banking</li>
                      <li>Low-cost Remittance</li>
                    </ul>
                    <Link href="/service/details">
                      View Details
                      <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="service-img">
                  <img src="/assets/img/home2/service-img4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-global-map-section mb-130">
        <div className="container">
          <div className="banner-content">
            <div className="section-title two white wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <span>100% Secure Transaction</span>
              <h2>Global Impact of Mortar</h2>
              <p>Mortar is essential in binding bricks, stones, and concrete blocks together, providing the structural integrity needed for buildings, bridges, and other infrastructure.</p>
            </div>
            <div className="counter-wrap">
              <div className="single-counter">
                <div className="icon">
                  <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.0142 7.24994C23.8995 7.11358 23.7527 7.04552 23.5743 7.04552H20.3017C20.0846 5.78835 19.6763 4.69707 19.0767 3.77287H23.5358C23.7147 3.77287 23.8611 3.70473 23.9762 3.56869C24.0905 3.43241 24.1478 3.258 24.1478 3.04594V0.727255C24.1478 0.515033 24.0905 0.34094 23.9762 0.204501C23.861 0.0683791 23.7146 0 23.5357 0H7.61236C7.43364 0 7.28704 0.0683791 7.17214 0.204421C7.05758 0.340861 7 0.514953 7 0.727175V3.74987C7 3.94681 7.0606 4.11724 7.1818 4.26116C7.30299 4.40508 7.44652 4.47704 7.61236 4.47704H10.3875C13.0795 4.47704 14.7893 5.33286 15.5165 7.04512H7.61236C7.43364 7.04512 7.28684 7.11318 7.17214 7.24954C7.05758 7.38606 7 7.56007 7 7.7723V10.0907C7 10.3027 7.05731 10.4771 7.17214 10.6131C7.28704 10.7496 7.43391 10.8175 7.61236 10.8175H15.7848C15.5041 12.0603 14.8501 13.0071 13.8229 13.6586C12.7956 14.3103 11.4402 14.6361 9.75591 14.6361H7.61236C7.44652 14.6361 7.30299 14.7081 7.1818 14.852C7.06053 14.996 7 15.1665 7 15.3633V18.2499C7 18.4472 7.05731 18.6138 7.17214 18.75C9.62178 21.8408 12.7989 26.1662 16.7032 31.7273C16.8182 31.9093 16.9776 32 17.1818 32H20.9137C21.1819 32 21.3671 31.864 21.4688 31.5908C21.5964 31.318 21.5714 31.0604 21.3922 30.818C17.667 25.3936 14.7385 21.333 12.6077 18.6361C14.7768 18.3332 16.5376 17.4996 17.8901 16.1363C19.2425 14.7728 20.0653 12.9997 20.359 10.8179H23.5743C23.7527 10.8179 23.8996 10.7499 24.0142 10.6135C24.1292 10.4775 24.1867 10.3031 24.1867 10.0911V7.77293C24.1867 7.56047 24.1292 7.38638 24.0142 7.24994Z" />
                  </svg>
                </div>
                <div className="content">
                  <div className="number">
                    <Counter
                      start={0}
                      end={120}
                      speed={10}
                      forwardedRef={ref3}
                      as="h2"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <p>Capabilities Currencies.</p>
                </div>
              </div>
              <div className="single-counter">
                <div className="icon">
                  <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.66666 9.33333C9.66666 5.84133 12.508 3 16 3C19.492 3 22.3333 5.84133 22.3333 9.33333C22.3333 12.8253 19.492 15.6667 16 15.6667C12.508 15.6667 9.66666 12.8253 9.66666 9.33333ZM20 17.6667H12C7.77333 17.6667 4.33333 21.1067 4.33333 25.3333C4.33403 26.3056 4.72057 27.2378 5.40805 27.9253C6.09553 28.6128 7.02775 28.9993 8 29H24C24.9722 28.9993 25.9045 28.6128 26.5919 27.9253C27.2794 27.2378 27.666 26.3056 27.6667 25.3333C27.6667 21.1067 24.2267 17.6667 20 17.6667Z" />
                  </svg>
                </div>
                <div className="content">
                  <div className="number">
                    <Counter
                      start={0}
                      end={27}
                      speed={50}
                      forwardedRef={ref6}
                      as="h2"
                      className="counter"
                    />
                    <span>M</span>
                  </div>
                  <p>Registerd Users</p>
                </div>
              </div>
              <div className="single-counter">
                <div className="icon">
                  <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.6488 4.09304C29.5539 3.99406 29.4399 3.9155 29.3136 3.86217C29.1873 3.80885 29.0514 3.78189 28.9143 3.78294C28.7737 3.78294 28.4771 3.89838 28.0276 4.1262C27.5763 4.35463 27.0961 4.60885 26.5926 4.89255C26.0872 5.1744 25.4891 5.42985 24.7983 5.65829C24.1087 5.8861 23.4707 6.00155 22.883 6.00155C22.3396 6.00155 21.8618 5.89838 21.4486 5.69144C20.0798 5.05036 18.8885 4.57201 17.8784 4.25638C16.8677 3.94137 15.7808 3.78294 14.6171 3.78294C12.6079 3.78294 10.3193 4.4363 7.75376 5.74057C7.22444 6.00462 6.84495 6.2091 6.59932 6.35893L6.35554 4.5714C6.63891 4.32887 6.86659 4.02803 7.02301 3.68943C7.17943 3.35083 7.26092 2.98245 7.2619 2.60947C7.25139 1.92433 6.97184 1.27081 6.48361 0.790017C5.99539 0.309224 5.33766 0.0397339 4.65244 0.0397339C3.96722 0.0397339 3.30949 0.309224 2.82127 0.790017C2.33304 1.27081 2.05349 1.92433 2.04298 2.60947C2.04298 3.5496 2.54529 4.36691 3.29076 4.82623L6.81547 30.6721C6.87474 31.0717 7.0891 31.4318 7.41211 31.6744C7.73511 31.917 8.14071 32.0225 8.54097 31.968C8.94124 31.9136 9.30391 31.7035 9.55036 31.3835C9.79682 31.0634 9.90718 30.6591 9.85754 30.2582L8.4409 19.8708C11.0114 18.5953 13.2349 17.9524 15.1053 17.9524C15.8993 17.9524 16.6736 18.0697 17.4283 18.3104C18.1836 18.5505 18.8124 18.8097 19.3116 19.0915C19.8103 19.3746 20.4004 19.6362 21.0801 19.8738C21.7599 20.1133 22.4311 20.233 23.0936 20.233C24.7676 20.233 26.7713 19.6024 29.109 18.3417C29.4025 18.1894 29.6168 18.0396 29.7531 17.8935C29.8895 17.7467 29.957 17.5373 29.957 17.2665V4.82685C29.9582 4.69001 29.9315 4.55436 29.8785 4.4282C29.8255 4.30203 29.7473 4.18799 29.6488 4.09304Z" />
                  </svg>
                </div>
                <div className="content">
                  <div className="number">
                    <Counter
                      start={0}
                      end={27}
                      speed={50}
                      forwardedRef={ref4}
                      as="h2"
                      className="counter"
                    />
                    <span>+</span>
                  </div>
                  <p>Country Served</p>
                </div>
              </div>
              <div className="single-counter">
                <div className="icon">
                  <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1427 22.3914V25.3258L29.6 18.2922H4.89055V22.0493H20.8003C20.9894 22.0493 21.1427 22.2023 21.1427 22.3914ZM27.1094 9.95107H11.1997C11.1547 9.95107 11.1102 9.94221 11.0686 9.92501C11.0271 9.9078 10.9894 9.88258 10.9576 9.85078C10.9258 9.81899 10.9005 9.78124 10.8833 9.7397C10.8661 9.69816 10.8573 9.65363 10.8573 9.60867V6.67395L2.39999 13.7079H27.1094V9.95107Z" />
                  </svg>
                </div>
                <div className="content">
                  <div className="number">
                    <span>$</span>
                    <Counter
                      start={0}
                      end={80}
                      speed={50}
                      forwardedRef={ref5}
                      as="h2"
                      className="counter"
                    />
                    <span>M</span>
                  </div>
                  <p>Transacted Last Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="globe-area">
          <div className="location">
            <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0C12.0157 0 6.33331 5.68241 6.33331 12.6667C6.33331 14.7634 6.85752 16.8422 7.85406 18.6861L18.3073 37.5918C18.4465 37.8438 18.7117 38 19 38C19.2883 38 19.5535 37.8438 19.6927 37.5918L30.1498 18.6799C31.1425 16.8422 31.6667 14.7633 31.6667 12.6666C31.6667 5.68241 25.9843 0 19 0ZM19 19C15.5079 19 12.6667 16.1588 12.6667 12.6667C12.6667 9.17455 15.5079 6.33338 19 6.33338C22.4921 6.33338 25.3333 9.17455 25.3333 12.6667C25.3333 16.1588 22.4921 19 19 19Z" />
            </svg>
            <div className="content">
              <img src="/assets/img/home2/globe-area-location-branch-icon.svg" alt="" />
              <h6>Globally, We have 06 branches in World.</h6>
            </div>
          </div>
          <img src="/assets/img/home2/globe-shape.png" alt="" className="globe-vector" />
        </div>
      </div>
      <div className="home2-transaction-section mb-130">
        <div className="container">
          <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-12">
              <div className="section-title two text-center">
                <span>100% Secure Transaction</span>
                <h2>Easy Transaction</h2>
              </div>
            </div>
          </div>
          <div className="transaction-tool-wrapper mb-70">
            <div className="row gy-5">
              <div className="col-lg-4 d-flex justify-content-lg-start justify-content-center">
                <div className="transaction-tool-area">
                  <ul className="transaction-tool-list">
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/mobile-pay-logo.svg" alt="" />
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/paypal-logo.svg" alt="" />
                    </li>
                  </ul>
                  <ul className="transaction-tool-list">
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/google-pay-logo.svg" alt="" />
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/google-pay-logo2.svg" alt="" />
                    </li>
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/master-card-logo.svg" alt="" />
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/google-wallet-logo.svg" alt="" />
                    </li>
                  </ul>
                  <ul className="transaction-tool-list">
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/maestro-logo.svg" alt="" />
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/visa-logo.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-center">
                <div className="logo-and-vector">
                  <div className="company-logo-wrap">
                    <div className="company-logo">
                      <img src="/assets/img/home2/transaction-company-logo.svg" alt="" />
                    </div>
                  </div>
                  <svg className="vector" height={206} viewBox="0 0 720 206" xmlns="http://www.w3.org/2000/svg">
                    <path id="theMo1tionPath11" d="M0 203H182C187.523 203 192 198.523 192 193V133C192 127.477 196.477 123 202 123H518C523.523 123 528 127.477 528 133V193C528 198.523 532.477 203 538 203H720" />
                    <circle cx={0} cy={0} r={3}>
                      <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                        <mpath xlinkHref="#theMo1tionPath11" />
                      </animateMotion>
                    </circle>
                    <path id="theMo1tionPath12" d="M100 103H620" />
                    <circle cx={0} cy={0} r={3}>
                      <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                        <mpath xlinkHref="#theMo1tionPath12" />
                      </animateMotion>
                    </circle>
                    <path id="theMo1tionPath13" d="M0 3H182C187.523 3 192 7.47715 192 13V73C192 78.5228 196.477 83 202 83H518C523.523 83 528 78.5228 528 73V13C528 7.47715 532.477 3 538 3H720" />
                    <circle cx={0} cy={0} r={3}>
                      <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                        <mpath xlinkHref="#theMo1tionPath13" />
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center">
                <div className="transaction-tool-area">
                  <ul className="transaction-tool-list">
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/barber-shop-logo.svg" alt="" />
                      <span>Barber Shop</span>
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/baeuty-logo.svg" alt="" />
                      <span>Beauty &amp; Cosmetics</span>
                    </li>
                  </ul>
                  <ul className="transaction-tool-list">
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/grocery-logo.svg" alt="" />
                      <span>Grocery</span>
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/booking-logo.svg" alt="" />
                      <span>Booking</span>
                    </li>
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/ecommerec-logo.svg" alt="" />
                      <span>E-commerce</span>
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/grocery-logo.svg" alt="" />
                      <span>Essentials</span>
                    </li>
                  </ul>
                  <ul className="transaction-tool-list">
                    <li className="single-tool">
                      <img src="/assets/img/home2/icon/doctor-appointment-logo.svg" alt="" />
                      <span>Doctor Appointment</span>
                    </li>
                    <li className="single-tool two">
                      <img src="/assets/img/home2/icon/coffee-shop-logo.svg" alt="" />
                      <span>Coffee Shop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="home2-process-section wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="title-area">
              <h6>Easy 03 Step Making a Happiness</h6>
            </div>
            <div className="process-wrapper">
              <div className="row gy-md-4 gy-5 justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="single-process">
                    <h5>Register/Login</h5>
                    <div className="step-no">
                      <span>Step</span>
                      <strong>01</strong>
                    </div>
                    <p>Through <span>register/login</span>, you may get to permission payment transaction by <span>Mortar App.</span></p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-center">
                  <div className="single-process">
                    <h5>Payment Transaction</h5>
                    <div className="step-no">
                      <span>Step</span>
                      <strong>02</strong>
                    </div>
                    <p>Transaction via any payment meyhod like <span>Payple, Stripe</span> &amp; <span>Mastercard</span> etc. easily</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-end">
                  <div className="single-process">
                    <h5>Enjoy Mortar</h5>
                    <div className="step-no">
                      <span>Step</span>
                      <strong>03</strong>
                    </div>
                    <p>Enjoy with <span>Mortar App</span> for money transaction with few second around the world-wide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Home2ServiceSection
