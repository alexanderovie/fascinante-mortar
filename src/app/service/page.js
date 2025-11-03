"use client"
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const ServicePage = () => {
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    useEffect(() => {
        const serviceImgItem = document.querySelectorAll(
            ".sevices-wrap .single-services "
        );
        function followImageCursor(event, serviceImgItem) {
            const contentBox = serviceImgItem.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            serviceImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px) rotate(25deg)`;
        }

        serviceImgItem.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 100);
            });
        });
    })
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Challenges <br /> Which We Tackle</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Solutions-01
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Service Page Banner Start */}
            <div className="service-page-banner-section mb-130">
                <div className="container">
                    <div className="banner-img-wrap">
                        <div className="banner-img">
                            <img src="/assets/img/innerpages/service-page-banner-img.jpg" alt="" />
                        </div>
                        <div className="counter-wrap">
                            <div className="counter-area">
                                <div className="counter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={146}
                                            speed={10}
                                            forwardedRef={ref2}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <p>Completed <br /> Projects</p>
                                </div>
                            </div>
                            <div className="counter-area two">
                                <div className="counter-content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={98}
                                            speed={10}
                                            forwardedRef={ref3}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>%</span>
                                    </div>
                                    <p>Client <br /> Retention Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-content-wrap">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-4 col-lg-5">
                                <div className="banner-title">
                                    <h2>Results-Driven Digital Solutions</h2>
                                    <p>“ We believe in bespoke strategies, designed specifically for your business needs.”</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner-content">
                                    <p>Our diverse background spans <span>Design</span>, <span>Marketing</span>, and <span>Technology</span>, allowing us to offer full-spectrum digital services. From startups to established enterprises, we tailor solutions to fit your unique needs, <span>no matter your industry or size.</span></p>
                                    <p>We work closely with our clients to understand their goals, challenges, and opportunities, ensuring that every solution is custom-fit to deliver measurable results. By combining cutting-edge technology with creative innovation, we help businesses not only keep up but get ahead.</p>
                                    <Link href="/contact" className="primary-btn3 three btn-hover">
                                        Start The Journey
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service Page Banner End */}
            {/* home3 Process Section Start */}
            <div className="home3-process-section mb-130">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="process-wrapper">
                                <div className="section-title three white mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <span>Working Step</span>
                                    <h2>Solution of Process.</h2>
                                </div>
                                <div className="process-card-area">
                                    <div className="row gy-md-5 gy-4 justify-content-between">
                                        <div className="col-xl-5 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="process-card2">
                                                <div className="step-no">
                                                    <span>Step</span>
                                                    <strong>01</strong>
                                                </div>
                                                <h4>Initial <br /> Consultation</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-md-6 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                                            <div className="process-card2 two">
                                                <h4>Strategy <br /> Development</h4>
                                                <div className="step-no">
                                                    <span>Step</span>
                                                    <strong>02</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <div className="process-card2 three">
                                                <h4>Execution &amp; <br /> Launch</h4>
                                                <div className="step-no">
                                                    <span>Step</span>
                                                    <strong>03</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="vector" width={204} height={650} viewBox="0 0 204 650" xmlns="http://www.w3.org/2000/svg">
                                        <path id="theMotionPath11" d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H183C194.046 300 203 308.954 203 320V629C203 640.046 194.046 649 183 649H110" />
                                        <circle cx={0} cy={0} r={3}>
                                            <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto">
                                                <mpath href="#theMotionPath11" />
                                            </animateMotion>
                                        </circle>
                                    </svg>
                                    {/* <svg class="vector" width="203" height="650" viewBox="0 0 203 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="theMo1tionPath11"
                              d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H182C193.046 300 202 308.954 202 320V629C202 640.046 193.046 649 182 649H110"
                              stroke="white" stroke-opacity="0.2" />
                          <circle cx="99" cy="179" r="3" fill="url(#paint0_linear_6561_16)">
                              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="">
                                  <mpath xlink:href="#theMo1tionPath11"></mpath>
                              </animateMotion>
                          </circle>
                          <defs>
                              <linearGradient id="paint0_linear_6561_16" x1="99" y1="176" x2="99" y2="182" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="white" />
                                  <stop offset="1" stop-color="#5956E9" />
                              </linearGradient>
                          </defs>
                      </svg> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 p-0">
                            <div className="founder-area">
                                <svg className="quote" width={136} height={152} viewBox="0 0 136 152" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M99.6484 20.2667C78.5409 20.2667 63.3017 37.5566 63.3017 63.1602C63.4339 100.356 91.6191 126.655 132.281 131.703C136.048 132.175 137.502 126.982 134.032 125.455C118.436 118.57 110.552 109.837 109.535 101.195C108.775 94.7369 112.31 89.0785 116.758 88.0164C128.276 85.2691 135.995 71.0347 135.995 56.3282C135.995 46.7641 132.166 37.5917 125.349 30.8289C118.533 24.066 109.288 20.2667 99.6484 20.2667ZM20.3466 20.2667C-0.760849 20.2667 -16 37.5566 -16 63.1602C-15.8678 100.356 12.3173 126.655 52.9793 131.703C56.7461 132.175 58.2 126.982 54.7305 125.455C39.1345 118.57 31.2506 109.837 30.2329 101.195C29.4729 94.7369 33.0085 89.0785 37.456 88.0164C48.9746 85.2691 56.6933 71.0347 56.6933 56.3282C56.6933 46.7641 52.8639 37.5917 46.0476 30.8289C39.2313 24.066 29.9864 20.2667 20.3466 20.2667Z" />
                                    </g>
                                </svg>
                                <div className="founder-content wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM200 3L195 0.113249V5.88675L200 3ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                        </g>
                                    </svg>
                                    <p>We specializes in providing a range of services aimed at helping companies establish and enhance their presence in the digital world.</p>
                                    <div className="founder-name-and-desig">
                                        <h5>Mr. David Milar</h5>
                                        <span>CEO &amp; Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home3 Process Section End */}
            {/* home3 Service Section Start */}
            <div className="home3-service-section mb-130">
                <div className="container">
                    <div className="row align-items-center justify-content-between mb-60">
                        <div className="col-lg-5 col-md-8 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title three">
                                <span>Smart Solution</span>
                                <h2>Scope of Work.</h2>
                                <p>We provides a wide range of services aimed at helping <span>Businesses, Organizations.</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 d-md-block d-none">
                            <div className="shape">
                                <svg width={95} height={85} viewBox="0 0 95 85" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M16.0501 69.9674C35.5969 88.559 66.5141 87.7847 85.1057 68.238L14.3206 0.911865C-4.27094 20.4586 -3.49663 51.3758 16.0501 69.9674Z" />
                                        <path d="M79.225 4.61569C92.1355 11.0232 97.4072 26.6836 90.9996 39.5941L44.2466 16.3903C50.6542 3.47983 66.3145 -1.79185 79.225 4.61569Z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-70">
                        <div className="col-lg-12">
                            <div className="sevices-wrap">
                                <div className="single-services wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="title-area">
                                        <div className="icon">
                                            <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M53.9531 36.9609C56.3203 34.8633 57.5859 32.4844 57.5859 30C57.5859 27.4688 56.25 25.0078 53.7305 22.8516C56.2383 20.707 57.5859 18.2578 57.5859 15.6914C57.5859 11.9062 54.668 8.35547 49.3594 5.70703C44.1094 3.08203 37.125 1.62891 29.707 1.62891C22.2891 1.62891 15.293 3.08203 10.043 5.70703C4.73438 8.35547 1.81641 11.9062 1.81641 15.6914C1.81641 18.2578 3.15234 20.707 5.67188 22.8516C3.15234 25.0078 1.81641 27.4688 1.81641 30C1.81641 32.5664 3.15234 35.0156 5.67188 37.1602C3.15234 39.3164 1.81641 41.7773 1.81641 44.3086C1.81641 48.0938 4.73438 51.6445 10.043 54.293C15.293 56.918 22.2773 58.3711 29.6953 58.3711C37.1133 58.3711 44.0977 56.9297 49.3477 54.293C50.168 53.8828 50.9414 53.4492 51.6445 52.9922C55.5938 50.5898 57.9492 47.5078 57.9492 44.1562C57.9492 41.5195 56.4844 39.0586 53.9531 36.9609ZM2.28516 15.6914C2.28516 8.20312 14.5781 2.09766 29.6953 2.09766C44.8125 2.09766 57.1055 8.1914 57.1055 15.6914C57.1055 23.1797 44.8125 29.2852 29.6953 29.2852C14.5781 29.2852 2.28516 23.1797 2.28516 15.6914ZM29.6953 43.5938C14.5781 43.5938 2.28516 37.4883 2.28516 30C2.28516 27.5859 3.58594 25.2305 6.03516 23.1563C7.16016 24.0586 8.49609 24.9141 10.043 25.6758C15.293 28.3008 22.2773 29.7539 29.6953 29.7539C37.1133 29.7539 44.0977 28.3125 49.3477 25.6758C50.8945 24.9023 52.2305 24.0586 53.3555 23.1563C55.8047 25.2305 57.1055 27.5977 57.1055 30C57.1055 37.4883 44.8125 43.5938 29.6953 43.5938Z" />
                                            </svg>
                                        </div>
                                        <h3><Link href="/service/details">Web Development <br /> &amp; Design.</Link></h3>
                                    </div>
                                    <div className="services-img">
                                        <img src="/assets/img/home3/service-img1.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                                        <ul className="tag-list">
                                            <li>+ Web Development</li>
                                            <li>+ UI/UX Design</li>
                                            <li>+ Strategy &amp; Consult</li>
                                        </ul>
                                    </div>
                                    <div className="button-area">
                                        <div className="details-btn">
                                            <Link href="/service/details" className="primary-btn3 three transparent btn-hover">
                                                View Details
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-services wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="title-area">
                                        <div className="icon">
                                            <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M44.297 15.7031C44.1681 7.92188 37.8048 1.64062 30.0001 1.64062C22.1954 1.64062 15.8321 7.93359 15.7032 15.7031C12.129 15.7617 8.76572 17.1211 6.14072 19.582C3.36338 22.1953 1.75791 25.7461 1.64072 29.5547C1.52354 33.3633 2.89463 37.0078 5.51963 39.7852C8.13291 42.5625 11.6837 44.168 15.4923 44.2852H15.6915C15.7501 47.8594 17.1095 51.2344 19.5704 53.8477C22.1837 56.625 25.7345 58.2305 29.5431 58.3477C29.6954 58.3477 29.8478 58.3594 29.9884 58.3594C33.6446 58.3594 37.1017 56.9883 39.7735 54.4805C42.5509 51.8672 44.1563 48.3164 44.2735 44.5078V44.3086C52.0548 44.1797 58.336 37.8164 58.336 30.0117C58.3595 22.1953 52.0665 15.832 44.297 15.7031ZM30.0001 2.10938C37.547 2.10938 43.6993 8.19141 43.8282 15.7031C36.9376 15.8086 31.2188 20.8242 30.0001 27.3867C29.5079 24.7148 28.2657 22.2305 26.3556 20.2031C23.7423 17.4258 20.1915 15.8203 16.3829 15.7031H16.1837C16.3009 8.19141 22.4532 2.10938 30.0001 2.10938ZM15.7032 43.8281H15.5157C11.8243 43.7109 8.39072 42.1758 5.87119 39.4805C3.33994 36.7852 2.00401 33.2695 2.12119 29.5781C2.23838 25.8867 3.77354 22.4531 6.46885 19.9336C9.0001 17.5547 12.2579 16.2305 15.7032 16.1836C15.8087 23.0742 20.8243 28.793 27.3868 30.0117C24.7149 30.5039 22.2306 31.7461 20.1915 33.6562C17.4142 36.2695 15.8087 39.8203 15.6915 43.6289C15.7032 43.6875 15.7032 43.7578 15.7032 43.8281ZM43.8282 44.4844C43.711 48.1758 42.1759 51.6094 39.4806 54.1289C36.7853 56.6602 33.2696 57.9844 29.5782 57.8789C25.8868 57.7617 22.4532 56.2266 19.9337 53.5312C17.5548 51 16.2306 47.7422 16.1837 44.2969C19.7579 44.2383 23.1329 42.8789 25.7462 40.418C27.9962 38.3086 29.461 35.5898 30.0118 32.6016C31.2306 39.1758 36.9493 44.1797 43.8399 44.2969C43.8282 44.3555 43.8282 44.4258 43.8282 44.4844ZM44.297 43.8281C44.2384 40.2539 42.879 36.8789 40.4181 34.2656C38.3087 32.0156 35.5899 30.5508 32.6017 30C39.1759 28.7812 44.1798 23.0625 44.297 16.1719C51.8204 16.3008 57.8907 22.4531 57.8907 30C57.8907 37.5469 51.8087 43.6992 44.297 43.8281Z" />
                                            </svg>
                                        </div>
                                        <h3><Link href="/service/details">Digital <br /> Marketing</Link></h3>
                                    </div>
                                    <div className="services-img">
                                        <img src="/assets/img/home3/service-img2.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                                        <ul className="tag-list">
                                            <li>+ Email Marketing</li>
                                            <li>+ Content Marekting</li>
                                            <li>+ SEO Optimize</li>
                                        </ul>
                                    </div>
                                    <div className="button-area">
                                        <div className="details-btn">
                                            <Link href="/service/details" className="primary-btn3 three transparent btn-hover">
                                                View Details
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="title-area">
                                        <div className="icon">
                                            <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M54.5747 39.1407C52.6997 36.1993 50.2388 33.1055 47.3443 30.0001C50.2388 26.8946 52.6997 23.8008 54.5747 20.8594C58.3833 14.8946 59.356 10.2423 57.3404 7.74616C55.313 5.26178 50.5552 5.2735 43.9458 7.79303C39.6333 9.43366 34.8521 12.0118 30.0005 15.2813C25.1607 12.0118 20.3794 9.44538 16.0552 7.79303C9.44584 5.2735 4.68802 5.26178 2.66068 7.74616C0.633335 10.2305 1.61771 14.8946 5.4263 20.8594C7.3013 23.8008 9.76224 26.9063 12.6568 30.0001C9.76224 33.1055 7.3013 36.1993 5.4263 39.1407C1.61771 45.1055 0.645054 49.7579 2.66068 52.254C3.66849 53.4844 5.34427 54.1055 7.59427 54.1055C9.86771 54.1055 12.7271 53.4727 16.0552 52.2071C20.3677 50.5665 25.149 47.9883 30.0005 44.7188C34.8404 47.9883 39.6216 50.5665 43.9458 52.2071C47.274 53.4727 50.1333 54.1055 52.4068 54.1055C54.6568 54.1055 56.3326 53.4844 57.3404 52.254C59.3677 49.7696 58.3833 45.1172 54.5747 39.1407ZM44.1099 8.22663C47.2505 7.03131 49.9693 6.41022 52.1724 6.36335C54.4107 6.31647 56.0279 6.89069 56.9654 8.03913C57.9029 9.19928 58.1255 10.8868 57.6333 13.0782C57.1412 15.2344 55.981 17.7657 54.1763 20.6016C52.313 23.5196 49.8872 26.5782 47.0162 29.6602C44.1919 26.6719 40.9693 23.6837 37.4654 20.8243C35.1333 18.9258 32.7661 17.1563 30.4107 15.5626C35.1802 12.3633 39.8677 9.84381 44.1099 8.22663ZM5.82474 20.6016C4.02005 17.7657 2.84818 15.2344 2.36771 13.0782C1.87552 10.8868 2.09818 9.19928 3.03568 8.03913C3.93802 6.92585 5.47318 6.36335 7.60599 6.36335H7.84037C10.0552 6.41022 12.7622 7.03131 15.9029 8.22663C20.1451 9.8321 24.8326 12.3633 29.5904 15.5508C27.2349 17.1563 24.8677 18.9141 22.5357 20.8126C19.0318 23.6602 15.8091 26.6602 12.9849 29.6485C10.1138 26.5899 7.6763 23.5196 5.82474 20.6016ZM15.8911 51.7735C12.7505 52.9688 10.0318 53.5899 7.82865 53.6368C5.59037 53.6837 3.97318 53.1094 3.03568 51.961C2.09818 50.8008 1.87552 49.1133 2.36771 46.9219C2.8599 44.7657 4.02005 42.2344 5.82474 39.3985C7.68802 36.4805 10.1138 33.4219 12.9849 30.3399C15.8091 33.3282 19.0318 36.3165 22.5357 39.1758C24.8677 41.0743 27.2349 42.8438 29.5904 44.4376C24.8208 47.6368 20.1333 50.1563 15.8911 51.7735ZM22.8286 38.8126C19.3365 35.9649 16.1138 32.9883 13.3013 30.0001C16.1138 27.0118 19.3365 24.0352 22.8286 21.1876C25.1958 19.254 27.6099 17.461 30.0005 15.8438C32.3911 17.4727 34.8052 19.2657 37.1724 21.1876C40.6763 24.0352 43.8872 27.0118 46.6997 30.0001C43.8872 32.9883 40.6646 35.9649 37.1724 38.8126C34.8052 40.7462 32.3911 42.5391 30.0005 44.1563C27.6099 42.5274 25.1958 40.7344 22.8286 38.8126ZM56.9771 51.961C56.0396 53.1212 54.4224 53.6837 52.1841 53.6368C49.9693 53.5899 47.2622 52.9688 44.1216 51.7735C39.8794 50.168 35.1919 47.6368 30.4341 44.4493C32.7896 42.8438 35.1568 41.086 37.4888 39.1876C40.9927 36.3399 44.2154 33.3399 47.0396 30.3516C49.9107 33.4219 52.3365 36.4922 54.1997 39.4102C56.0044 42.2462 57.1763 44.7774 57.6568 46.9337C58.1372 49.1016 57.9146 50.8008 56.9771 51.961Z" />
                                                <path d="M31.3242 29.4492L34.043 25.957L30.5508 28.6758L30 20.4609L29.4492 28.6758L25.957 25.957L28.6758 29.4492L24.2812 30L28.6758 30.5508L25.957 34.043L29.4492 31.3242L30 39.5391L30.5508 31.3242L34.043 34.043L31.3242 30.5508L35.7187 30L31.3242 29.4492Z" />
                                            </svg>
                                        </div>
                                        <h3><Link href="/service/details">E-commerce <br /> Solutions</Link></h3>
                                    </div>
                                    <div className="services-img">
                                        <img src="/assets/img/home3/service-img3.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                                        <ul className="tag-list">
                                            <li>+ Online Store Design</li>
                                            <li>+ Shopping Cart</li>
                                            <li>+ Payment Gateway</li>
                                        </ul>
                                    </div>
                                    <div className="button-area">
                                        <div className="details-btn">
                                            <Link href="/service/details" className="primary-btn3 three transparent btn-hover">
                                                View Details
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-services wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="title-area">
                                        <div className="icon">
                                            <svg width={55} height={58} viewBox="0 0 55 58" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M53.8125 2.11719C52.4414 1.8125 50.6484 1.37891 48.8086 0.652344L48.6445 0.582031L48.5391 0.722656C44.8477 5.60938 41.0977 8.22266 37.4648 10.7422C37.1367 10.9766 36.8086 11.1992 36.4805 11.4336C32.8359 13.8945 28.5469 17 24.3281 21.2773C20.9062 24.6641 17.4258 28.9063 14.0625 33.0078C13.4414 33.7695 12.8086 34.5312 12.1875 35.293C7.89844 40.3906 4.04297 44.6797 0.1875 45.5703L0.0117188 45.6172V48.6172L0.0468749 48.6758C1.41797 51.125 3.23438 54.3125 5.08594 57.2773L5.21484 57.4883L5.41406 57.3477C9.15234 54.8281 12.9375 49.8828 16.6055 45.1133C16.9336 44.6797 17.2617 44.2461 17.6016 43.8242C21.2227 39.0312 25.5 33.5703 29.707 29.4102C33.1055 25.9766 36.5742 23.2695 39.9258 20.6562C40.5469 20.1641 41.1797 19.6836 41.8125 19.1797C46.1367 15.6758 50.0391 12.207 53.9883 5.22266L54.0234 5.16406V2.15234L53.8125 2.11719ZM12.5391 35.5977C13.1602 34.8359 13.793 34.0742 14.4141 33.3125C17.7656 29.2227 21.2344 24.9805 24.6445 21.6172C28.8398 17.3633 33.1055 14.293 36.7383 11.832C37.0664 11.5977 37.3945 11.375 37.7344 11.1406C41.3672 8.62109 45.1172 6.00781 48.8086 1.15625C50.4727 1.8125 52.1133 2.22266 53.4023 2.51562C49.5469 9.25391 45.7266 12.6406 41.4961 16.0625C40.875 16.5547 40.2422 17.0469 39.6211 17.5273C36.2578 20.1523 32.7773 22.8594 29.3555 26.3164C25.1367 30.4883 20.8477 35.9609 17.2148 40.7773C16.8867 41.2109 16.5586 41.6328 16.2188 42.0664C12.6445 46.7305 8.95312 51.5469 5.34375 54.0664C3.60937 51.2773 1.91016 48.3008 0.585937 45.957C4.48828 44.8789 8.30859 40.625 12.5391 35.5977ZM5.03906 56.3164C3.35156 53.5859 1.73438 50.7266 0.46875 48.4883V46.6953C1.76953 49.0039 3.38672 51.8164 5.03906 54.4648V56.3164Z" />
                                            </svg>
                                        </div>
                                        <h3><Link href="/service/details">Branding &amp; <br /> Graphic Design</Link></h3>
                                    </div>
                                    <div className="services-img">
                                        <img src="/assets/img/home3/service-img4.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                                        <ul className="tag-list">
                                            <li>+ Logo Design</li>
                                            <li>+ Brand Guidelines</li>
                                            <li>+ Marketing Collateral</li>
                                        </ul>
                                    </div>
                                    <div className="button-area">
                                        <div className="details-btn">
                                            <Link href="/service/details" className="primary-btn3 three transparent btn-hover">
                                                View Details
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-services wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="title-area">
                                        <div className="icon">
                                            <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M44.297 15.7031C44.1681 7.92188 37.8048 1.64062 30.0001 1.64062C22.1954 1.64062 15.8321 7.93359 15.7032 15.7031C12.129 15.7617 8.76572 17.1211 6.14072 19.582C3.36338 22.1953 1.75791 25.7461 1.64072 29.5547C1.52354 33.3633 2.89463 37.0078 5.51963 39.7852C8.13291 42.5625 11.6837 44.168 15.4923 44.2852H15.6915C15.7501 47.8594 17.1095 51.2344 19.5704 53.8477C22.1837 56.625 25.7345 58.2305 29.5431 58.3477C29.6954 58.3477 29.8478 58.3594 29.9884 58.3594C33.6446 58.3594 37.1017 56.9883 39.7735 54.4805C42.5509 51.8672 44.1563 48.3164 44.2735 44.5078V44.3086C52.0548 44.1797 58.336 37.8164 58.336 30.0117C58.3595 22.1953 52.0665 15.832 44.297 15.7031ZM30.0001 2.10938C37.547 2.10938 43.6993 8.19141 43.8282 15.7031C36.9376 15.8086 31.2188 20.8242 30.0001 27.3867C29.5079 24.7148 28.2657 22.2305 26.3556 20.2031C23.7423 17.4258 20.1915 15.8203 16.3829 15.7031H16.1837C16.3009 8.19141 22.4532 2.10938 30.0001 2.10938ZM15.7032 43.8281H15.5157C11.8243 43.7109 8.39072 42.1758 5.87119 39.4805C3.33994 36.7852 2.00401 33.2695 2.12119 29.5781C2.23838 25.8867 3.77354 22.4531 6.46885 19.9336C9.0001 17.5547 12.2579 16.2305 15.7032 16.1836C15.8087 23.0742 20.8243 28.793 27.3868 30.0117C24.7149 30.5039 22.2306 31.7461 20.1915 33.6562C17.4142 36.2695 15.8087 39.8203 15.6915 43.6289C15.7032 43.6875 15.7032 43.7578 15.7032 43.8281ZM43.8282 44.4844C43.711 48.1758 42.1759 51.6094 39.4806 54.1289C36.7853 56.6602 33.2696 57.9844 29.5782 57.8789C25.8868 57.7617 22.4532 56.2266 19.9337 53.5312C17.5548 51 16.2306 47.7422 16.1837 44.2969C19.7579 44.2383 23.1329 42.8789 25.7462 40.418C27.9962 38.3086 29.461 35.5898 30.0118 32.6016C31.2306 39.1758 36.9493 44.1797 43.8399 44.2969C43.8282 44.3555 43.8282 44.4258 43.8282 44.4844ZM44.297 43.8281C44.2384 40.2539 42.879 36.8789 40.4181 34.2656C38.3087 32.0156 35.5899 30.5508 32.6017 30C39.1759 28.7812 44.1798 23.0625 44.297 16.1719C51.8204 16.3008 57.8907 22.4531 57.8907 30C57.8907 37.5469 51.8087 43.6992 44.297 43.8281Z" />
                                            </svg>
                                        </div>
                                        <h3><Link href="/service/details">Consulting &amp; <br /> Strategy</Link></h3>
                                    </div>
                                    <div className="services-img">
                                        <img src="/assets/img/home3/service-img5.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                                        <ul className="tag-list">
                                            <li>+ Digital Strategy</li>
                                            <li>+ Competitor Analysis</li>
                                            <li>+ Market Research</li>
                                        </ul>
                                    </div>
                                    <div className="button-area">
                                        <div className="details-btn">
                                            <Link href="/service/details" className="primary-btn3 three transparent btn-hover">
                                                View Details
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-8 col-lg-10">
                            <div className="contact-btn-area two">
                                <h6>To Make Sure to Best Service Provide Our Clients.</h6>
                                <Link href="/contact" className="primary-btn3 two btn-hover">
                                    Start The Journey
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="section-vector" width={300} height={372} viewBox="0 0 300 372" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx={320} cy={52} r={270} transform="rotate(180 320 52)" strokeWidth={100} />
                    </g>
                </svg>
            </div>
            {/* home3 Service Section End */}
            {/* home3 Scroll Text Section Start */}

            {/* home3 Scroll Text Section End */}


            <Home3Footer />
        </>
    )
}

export default ServicePage
