"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Counter from '../common/Counter';

const Home4ServiceSection = () => {
    const industryListRef = useRef(null);
    const industryImgRefs = useRef([]);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    useEffect(() => {
        const listItems = industryListRef.current?.querySelectorAll("ul li") || [];

        const handleMouseEnter = (index) => {
            // Remove active class from all list items
            listItems.forEach((li) => li.classList.remove("active"));
            industryImgRefs.current.forEach((container) => {
                container.querySelectorAll("ul li").forEach((li) => li.classList.remove("active"));
            });

            // Add active class to the hovered item and corresponding images
            listItems[index].classList.add("active");
            industryImgRefs.current.forEach((container) => {
                const target = container.querySelectorAll("ul li")[index];
                if (target) target.classList.add("active");
            });
        };

        // Attach event listeners
        listItems.forEach((li, index) => {
            li.addEventListener("mouseenter", () => handleMouseEnter(index));
        });

        // Cleanup
        return () => {
            listItems.forEach((li, index) => {
                li.removeEventListener("mouseenter", () => handleMouseEnter(index));
            });
        };
    }, []);

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
        <>
            <div className="home4-service-section mb-130">
                <div className="container">
                    <div className="row justify-content-lg-end mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-10 col-lg-11">
                            <div className="row g-4 justify-content-between align-items-end">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="section-title2">
                                        <h2><strong>To Provide</strong> Smart Solution.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex justify-content-lg-end">
                                    <div className="result-area">
                                        <span>100%</span>
                                        <p>Measurable Results &amp; ROI.</p>
                                        <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-md-5 gy-4">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="service-card3 magnetic-item">
                                <h4><Link href="/service/details">Digital <br /> Marketing.</Link></h4>
                                <ul>
                                    <li>+ Social Media Marketing</li>
                                    <li>+ Email Marketing</li>
                                    <li>+ Content Marketing</li>
                                </ul>
                                <Link href="/service/details" className="primary-btn3 three btn-hover">
                                    View Details
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                                <svg className="shape" width={68} height={250} viewBox="0 0 68 250" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <h4><Link href="/service/details">Branding and  <br /> Identity.</Link></h4>
                                <ul>
                                    <li>+ Logo Design</li>
                                    <li>+ Rebranding Services</li>
                                    <li>+ Visual Branding</li>
                                </ul>
                                <Link href="/service/details" className="primary-btn3 three btn-hover">
                                    View Details
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                                <svg className="shape" width={68} height={250} viewBox="0 0 68 250" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card3 magnetic-item">
                                <h4><Link href="/service/details">Content Creation <br /> &amp; Strategy.</Link></h4>
                                <ul>
                                    <li>+ Blog Writing</li>
                                    <li>+ Copywriting &amp; Copyediting</li>
                                    <li>+ Video Production</li>
                                </ul>
                                <Link href="/service/details" className="primary-btn3 three btn-hover">
                                    View Details
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                                <svg className="shape" width={68} height={250} viewBox="0 0 68 250" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="service-card3 three magnetic-item">
                                <h4><Link href="/service/details">Paid <br /> Advertising.</Link></h4>
                                <ul>
                                    <li>+ Social Media Marketing</li>
                                    <li>+ Email Marketing</li>
                                    <li>+ Content Marketing</li>
                                </ul>
                                <Link href="/service/details" className="primary-btn3 three btn-hover">
                                    View Details
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                                <svg className="shape" width={68} height={250} viewBox="0 0 68 250" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card3 magnetic-item">
                                <h4><Link href="/service/details">Marketing <br /> Automation.</Link></h4>
                                <ul>
                                    <li>+ Email Drip Campaigns</li>
                                    <li>+ Lead Scoring &amp; Nurturing</li>
                                    <li>+ Workflow Automation</li>
                                </ul>
                                <Link href="/service/details" className="primary-btn3 three btn-hover">
                                    View Details
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                                <svg className="shape" width={68} height={250} viewBox="0 0 68 250" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card3 four magnetic-item">
                                <h4><Link href="/service/details">Affiliate <br /> Marketing.</Link></h4>
                                <ul>
                                    <li>+ Partner Outreach</li>
                                    <li>+ Affiliate Program Strategy</li>
                                    <li>+ Affiliate Campaign</li>
                                </ul>
                                <Link href="/service/details" className="primary-btn3 three btn-hover">
                                    View Details
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                                <svg className="shape" width={68} height={250} viewBox="0 0 68 250" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home4-counter-section mb-130">
                <svg className="bg-shape" height={472} viewBox="0 0 1920 472" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-29.145 1.7091C97.5305 119.595 459.868 370.081 881.462 307.82C1187.68 262.597 1395.29 252.524 1556.31 265.635C1717.31 278.745 1831.74 315.037 1951.63 362.577L1951.99 361.648C1832.05 314.085 1717.52 277.759 1556.39 264.638C1395.27 251.518 1187.57 261.603 881.316 306.831C460.166 369.026 98.1229 118.78 -28.4638 0.977051L-29.145 1.7091ZM-29.145 23.4171C97.5305 141.303 459.868 391.789 881.462 329.528C1187.68 284.305 1395.29 274.232 1556.31 287.343C1717.31 300.453 1831.74 336.745 1951.63 384.285L1951.99 383.356C1832.05 335.793 1717.52 299.467 1556.39 286.346C1395.27 273.226 1187.57 283.311 881.316 328.539C460.166 390.734 98.1229 140.488 -28.4638 22.6851L-29.145 23.4171ZM881.462 351.236C459.868 413.496 97.5307 163.011 -29.1448 45.125L-28.4636 44.393C98.1231 162.196 460.166 412.442 881.316 350.246C1187.57 305.018 1395.27 294.934 1556.39 308.054C1717.52 321.175 1832.05 357.501 1951.99 405.064L1951.63 405.993C1831.74 358.453 1717.31 322.161 1556.31 309.051C1395.29 295.94 1187.68 306.013 881.462 351.236ZM-29.145 66.8336C97.5305 184.719 459.868 435.205 881.462 372.944C1187.68 327.722 1395.29 317.648 1556.31 330.759C1717.31 343.869 1831.74 380.162 1951.63 427.702L1951.99 426.772C1832.05 379.21 1717.52 342.883 1556.39 329.763C1395.27 316.643 1187.57 326.727 881.316 371.955C460.166 434.15 98.1229 183.905 -28.4638 66.1016L-29.145 66.8336ZM881.462 394.652C459.868 456.913 97.5305 206.427 -29.145 88.5416L-28.4638 87.8096C98.1229 205.613 460.166 455.858 881.316 393.663C1187.57 348.435 1395.27 338.351 1556.39 351.471C1717.52 364.591 1832.05 400.918 1951.99 448.48L1951.63 449.41C1831.74 401.87 1717.31 365.577 1556.31 352.467C1395.29 339.356 1187.68 349.43 881.462 394.652ZM-29.145 110.25C97.5305 228.136 459.868 478.622 881.462 416.361C1187.68 371.138 1395.29 361.065 1556.31 374.176C1717.31 387.286 1831.74 423.578 1951.63 471.118L1951.99 470.189C1832.05 422.626 1717.52 386.3 1556.39 373.179C1395.27 360.059 1187.57 370.144 881.316 415.372C460.166 477.567 98.1229 227.321 -28.4638 109.518L-29.145 110.25Z" />
                </svg>
                <div className="container">
                    <div className="row justify-content-lg-end mb-70">
                        <div className="col-lg-11">
                            <div className="row justify-content-between">
                                <div className="col-xl-8 col-lg-10 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="section-title2">
                                        <div className="shape-and-title-area">
                                            <svg width={88} height={64} viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M88 64V0L0 64H88ZM10 44L60 8H10V44Z" />
                                            </svg>
                                            <h2><strong>Real Data-Driven</strong> Website Marketing.</h2>
                                        </div>
                                        <p>Companies need innovative ideas to engage their target audience.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-2 d-lg-flex d-none justify-content-lg-end">
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
                            </div>
                        </div>
                    </div>
                    <div className="row g-xl-4 g-lg-3 g-4 mb-50">
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="single-counter bg-clip">
                                <img src="/assets/img/home4/icon/home4-counter-vector1.svg" alt="" className="vector" />
                                <div className="conter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={235}
                                            speed={10}
                                            forwardedRef={ref6}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <p>Total Campaign <br />Handaled.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="single-counter two">
                                <img src="/assets/img/home4/icon/home4-counter-vector2.svg" alt="" className="vector" />
                                <div className="conter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={23}
                                            speed={20}
                                            forwardedRef={ref3}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <p>Country-wise <br />Clients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="single-counter bg-clip three">
                                <img src="/assets/img/home4/icon/home4-counter-vector3.svg" alt="" className="vector" />
                                <div className="conter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={8}
                                            speed={50}
                                            forwardedRef={ref4}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <p>Award <br />Achievement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="single-counter">
                                <img src="/assets/img/home4/icon/home4-counter-vector4.svg" alt="" className="vector" />
                                <div className="conter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={35}
                                            speed={20}
                                            forwardedRef={ref5}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <p>Clients <br />Retention Rate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="contact-btn-area two">
                                <h6>To Make Sure to Best Service Provide Our Clients.</h6>
                                <a href="#" className="primary-btn4 transparent">
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
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home4-industry-section mb-130">
                <div className="container">
                    <div className="row g-4 align-items-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-3 col-md-4">
                            <div className="result-area">
                                <span>100%</span>
                                <p>Measurable Results &amp; ROI.</p>
                                <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8">
                            <div className="section-title2">
                                <h2><strong>To Make Significant</strong> Impact.</h2>
                                <p>Providing expert legal guidance tailored to your unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 align-items-md-end">
                        <div className="col-lg-3 d-lg-block d-none">
                            <div className="industry-img" ref={(el) => (industryImgRefs.current[0] = el)}>
                                <ul>
                                    <li className="active">
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-sm-img1.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-sm-img2.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-sm-img3.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-sm-img4.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-sm-img5.png" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-sm-img6.png" alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="industry-list" ref={industryListRef}>
                                <ul>
                                    <li className="active">
                                        <h2><Link href="/industry/details">Health Care</Link></h2>
                                        <div className="industry-content">
                                            <p>Establish a consistent and trustworthy brand identity for <strong>Hospitals, Clinics,</strong> &amp; <strong>Healthcare companies.</strong></p>
                                            <svg className="divider" width={313} height={6} viewBox="0 0 313 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM313 3L308 0.113249V5.88675L313 3ZM1 3.5H308.5V2.5H1V3.5Z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <h2><Link href="/industry/details">Pet Care &amp; Shop</Link></h2>
                                        <div className="industry-content">
                                            <p>Establish a consistent and trustworthy brand identity for <strong>Hospitals, Clinics,</strong> &amp; <strong>Healthcare companies.</strong></p>
                                            <svg className="divider" width={313} height={6} viewBox="0 0 313 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM313 3L308 0.113249V5.88675L313 3ZM1 3.5H308.5V2.5H1V3.5Z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <h2><Link href="/industry/details">Entertainment</Link></h2>
                                        <div className="industry-content">
                                            <p>Establish a consistent and trustworthy brand identity for <strong>Hospitals, Clinics,</strong> &amp; <strong>Healthcare companies.</strong></p>
                                            <svg className="divider" width={313} height={6} viewBox="0 0 313 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM313 3L308 0.113249V5.88675L313 3ZM1 3.5H308.5V2.5H1V3.5Z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <h2><Link href="/industry/details">Ecommerce</Link></h2>
                                        <div className="industry-content">
                                            <p>Establish a consistent and trustworthy brand identity for <strong>Hospitals, Clinics,</strong> &amp; <strong>Healthcare companies.</strong></p>
                                            <svg className="divider" width={313} height={6} viewBox="0 0 313 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM313 3L308 0.113249V5.88675L313 3ZM1 3.5H308.5V2.5H1V3.5Z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <h2><Link href="/industry/details">Finance &amp; Banking</Link></h2>
                                        <div className="industry-content">
                                            <p>Establish a consistent and trustworthy brand identity for <strong>Hospitals, Clinics,</strong> &amp; <strong>Healthcare companies.</strong></p>
                                            <svg className="divider" width={313} height={6} viewBox="0 0 313 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM313 3L308 0.113249V5.88675L313 3ZM1 3.5H308.5V2.5H1V3.5Z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <h2><Link href="/industry/details">Hospitality &amp; Travel</Link></h2>
                                        <div className="industry-content">
                                            <p>Establish a consistent and trustworthy brand identity for <strong>Hospitals, Clinics,</strong> &amp; <strong>Healthcare companies.</strong></p>
                                            <svg className="divider" width={313} height={6} viewBox="0 0 313 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM313 3L308 0.113249V5.88675L313 3ZM1 3.5H308.5V2.5H1V3.5Z" />
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                                <Link href="/industry" className="details-btn">
                                    View All Industries
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="industry-img two" ref={(el) => (industryImgRefs.current[1] = el)}>
                                <ul>
                                    <li className="active">
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-img1.png" alt="" />
                                        </div>
                                        <div className="counter-wrap">
                                            <div className="counter-content">
                                                <div className="number">
                                                    <h4>98</h4>
                                                    <span>%</span>
                                                </div>
                                                <span>Success Rate</span>
                                            </div>
                                            <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-img2.png" alt="" />
                                        </div>
                                        <div className="counter-wrap">
                                            <div className="counter-content">
                                                <div className="number">
                                                    <h4>95</h4>
                                                    <span>%</span>
                                                </div>
                                                <span>Success Rate</span>
                                            </div>
                                            <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-img3.png" alt="" />
                                        </div>
                                        <div className="counter-wrap">
                                            <div className="counter-content">
                                                <div className="number">
                                                    <h4>99</h4>
                                                    <span>%</span>
                                                </div>
                                                <span>Success Rate</span>
                                            </div>
                                            <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-img4.png" alt="" />
                                        </div>
                                        <div className="counter-wrap">
                                            <div className="counter-content">
                                                <div className="number">
                                                    <h4>93</h4>
                                                    <span>%</span>
                                                </div>
                                                <span>Success Rate</span>
                                            </div>
                                            <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-img5.png" alt="" />
                                        </div>
                                        <div className="counter-wrap">
                                            <div className="counter-content">
                                                <div className="number">
                                                    <h4>94</h4>
                                                    <span>%</span>
                                                </div>
                                                <span>Success Rate</span>
                                            </div>
                                            <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-img">
                                            <img src="/assets/img/home4/industry-img6.png" alt="" />
                                        </div>
                                        <div className="counter-wrap">
                                            <div className="counter-content">
                                                <div className="number">
                                                    <h4>99</h4>
                                                    <span>%</span>
                                                </div>
                                                <span>Success Rate</span>
                                            </div>
                                            <svg className="arrow" width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 14L13 2M13 2C10.3333 2.5 4.5 3.5 1 2M13 2C12.5 4.5 11.5 10 13 14" strokeWidth={2} strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home4ServiceSection
