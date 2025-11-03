"use client"
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useRef } from 'react'

const CaseStudyDetailsPage = () => {
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="banner-content">
                                <h1>Revamping Brand Identity Success Story.</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Revamping Brand Identity Success Story
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Case Study Details Page Start */}
            <div className="case-study-details-page mb-130">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-8">
                            <div className="details-content-wrap">
                                <div className="post-thumb two mb-70">
                                    <img src="/assets/img/innerpages/case-study-details-thumb-img.jpg" alt="" />
                                </div>
                                <h2>Projects Summary</h2>
                                <span className="line-break" />
                                <h5>Client Overview:</h5>
                                <span className="line-break two" />
                                <p>Brightwave Electronics, a mid-sized electronics manufacturer specializing in eco-friendly consumer devices, faced challenges in connecting with its audience due to an outdated brand image. The company wanted a brand identity that reflected its commitment to innovation and sustainability.</p>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h2>Challenges</h2>
                                <span className="line-break" />
                                <ul className="listing three">
                                    <li><span>Outdated Brand Perception:</span> The company was perceived as traditional and conservative, which didn’t align with its eco-friendly and innovative product lines.</li>
                                    <li><span>Lack of Brand Differentiation:</span> In a competitive market, the existing brand lacked elements that set it apart from other players.</li>
                                </ul>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h2>Outcomes</h2>
                                <span className="line-break" />
                                <div className="case-details-result-area">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="single-item">
                                                <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M55.6173 53.9433C55.6165 53.9432 55.6156 53.9432 55.6148 53.9433H4.38246C4.27261 53.9433 4.16467 53.9147 4.06924 53.8603C3.97382 53.8058 3.89421 53.7275 3.83825 53.633C3.78229 53.5385 3.7519 53.431 3.75009 53.3212C3.74827 53.2113 3.77508 53.1029 3.82789 53.0066L16.4691 29.9717L3.82801 6.93673C3.77517 6.84042 3.74833 6.73201 3.75012 6.62217C3.75192 6.51234 3.78229 6.40486 3.83824 6.31033C3.89419 6.2158 3.9738 6.13747 4.06923 6.08305C4.16466 6.02864 4.27261 6.00001 4.38246 6H55.6148C55.8383 6 56.0451 6.11802 56.1591 6.3103C56.2731 6.50258 56.2769 6.74078 56.1694 6.93673L43.5283 29.9717L56.1441 52.9604C56.2075 53.0557 56.2438 53.1664 56.2493 53.2807C56.2547 53.3951 56.229 53.5087 56.175 53.6096C56.1209 53.7105 56.0405 53.7948 55.9423 53.8536C55.8441 53.9123 55.7318 53.9434 55.6173 53.9433ZM31.0673 52.6783H54.5462L42.8067 31.2864L31.0673 52.6783ZM5.45113 52.6783H28.9301L17.1905 31.2864L5.45113 52.6783ZM17.9121 29.9717L29.9986 51.9961L42.0853 29.9717L29.9986 7.94721L17.9121 29.9717ZM31.0673 7.265L42.8068 28.657L54.5462 7.265H31.0673ZM5.45113 7.265L17.1907 28.657L28.9301 7.265H5.45113Z" />
                                                </svg>
                                                <h5>Increased Brand <br />Awareness</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-item two">
                                                <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M43.7937 53.7109H16.9563C16.8397 53.7109 16.7251 53.6809 16.6235 53.6236C16.5219 53.5664 16.4369 53.4839 16.3765 53.3841L2.34791 30.2064C2.28386 30.1005 2.25 29.9792 2.25 29.8555C2.25 29.7317 2.28386 29.6104 2.34791 29.5045L16.3765 6.32679C16.4369 6.22707 16.522 6.1446 16.6235 6.08736C16.7251 6.03011 16.8397 6.00002 16.9563 6H43.7937C43.9102 6.00001 44.0248 6.03009 44.1264 6.08734C44.2279 6.14459 44.313 6.22706 44.3734 6.32679L58.402 29.5045C58.4661 29.6104 58.5 29.7317 58.5 29.8555C58.5 29.9792 58.4661 30.1006 58.402 30.2064L44.3734 53.3841C44.313 53.4839 44.228 53.5664 44.1264 53.6236C44.0248 53.6809 43.9102 53.7109 43.7937 53.7109ZM17.3384 52.3555H43.4117L57.0302 29.8555L43.4117 7.35542H17.3384L3.71987 29.8555L17.3384 52.3555ZM40.7277 50.6614C40.611 50.6615 40.4962 50.6315 40.3945 50.5742C40.2928 50.5169 40.2077 50.4343 40.1473 50.3344L27.9654 30.2075C27.9014 30.1016 27.8675 29.9803 27.8675 29.8565C27.8675 29.7328 27.9014 29.6115 27.9654 29.5056L40.1473 9.37867C40.2416 9.22746 40.3916 9.11946 40.5649 9.07806C40.7382 9.03666 40.9209 9.06519 41.0733 9.15747C41.2258 9.24974 41.3357 9.39834 41.3794 9.5711C41.4231 9.74385 41.397 9.92686 41.3067 10.0805L29.3372 29.8565L41.3067 49.6326C41.3689 49.7353 41.4027 49.8528 41.4046 49.9728C41.4066 50.0929 41.3765 50.2114 41.3176 50.3161C41.2587 50.4207 41.173 50.5079 41.0694 50.5685C40.9657 50.6292 40.8478 50.6612 40.7277 50.6614ZM23.6493 50.6603C23.5326 50.6604 23.4179 50.6304 23.3162 50.5731C23.2145 50.5158 23.1293 50.4332 23.0689 50.3333L10.8871 30.2064C10.823 30.1005 10.7892 29.9792 10.7892 29.8555C10.7892 29.7317 10.823 29.6104 10.8871 29.5045L23.0689 9.37758C23.115 9.30143 23.1756 9.2351 23.2473 9.18239C23.319 9.12967 23.4004 9.0916 23.4869 9.07036C23.5733 9.04911 23.663 9.0451 23.751 9.05856C23.839 9.07201 23.9235 9.10267 23.9996 9.14879C24.0757 9.19486 24.142 9.25548 24.1947 9.32719C24.2474 9.3989 24.2855 9.48029 24.3068 9.56671C24.328 9.65313 24.332 9.74289 24.3186 9.83086C24.3051 9.91883 24.2745 10.0033 24.2284 10.0794L12.259 29.8555L24.2285 49.6315C24.2907 49.7343 24.3245 49.8517 24.3264 49.9718C24.3283 50.0919 24.2983 50.2104 24.2394 50.315C24.1804 50.4197 24.0947 50.5068 23.9911 50.5675C23.8874 50.6282 23.7695 50.6602 23.6493 50.6603ZM32.2055 50.6592C32.0887 50.6593 31.974 50.6293 31.8723 50.572C31.7706 50.5147 31.6854 50.4321 31.6251 50.3323L19.4432 30.2053C19.3791 30.0994 19.3453 29.9781 19.3453 29.8544C19.3453 29.7307 19.3791 29.6093 19.4432 29.5035L31.6251 9.3765C31.7193 9.22529 31.8694 9.1173 32.0427 9.0759C32.216 9.0345 32.3987 9.06302 32.5511 9.1553C32.7035 9.24757 32.8135 9.39617 32.8572 9.56893C32.9009 9.74168 32.8748 9.92469 32.7845 10.0783L20.8152 29.8544L32.7846 49.6304C32.8469 49.7332 32.8806 49.8506 32.8826 49.9707C32.8845 50.0908 32.8544 50.2093 32.7955 50.3139C32.7366 50.4186 32.6509 50.5057 32.5472 50.5664C32.4435 50.6271 32.3256 50.6591 32.2055 50.6592Z" />
                                                </svg>
                                                <h5>Enhanced Customer <br />Engagement</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-item three">
                                                <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M54.8853 55.4961C54.8046 55.4962 54.7247 55.4803 54.6501 55.4494C54.5756 55.4185 54.5079 55.3732 54.4509 55.316L42.1674 43.0327L30.4369 54.7631C30.3799 54.8202 30.3122 54.8655 30.2376 54.8963C30.1631 54.9272 30.0832 54.9431 30.0025 54.9431C29.9218 54.9431 29.8419 54.9272 29.7674 54.8963C29.6928 54.8655 29.6251 54.8202 29.5681 54.7631L17.8377 43.0327L5.55433 55.316C5.49755 55.3743 5.42977 55.4207 5.35493 55.4525C5.28008 55.4844 5.19966 55.501 5.11832 55.5016C5.03699 55.5021 4.95636 55.4864 4.88111 55.4556C4.80586 55.4247 4.7375 55.3792 4.67998 55.3216C4.62246 55.2641 4.57694 55.1958 4.54604 55.1205C4.51515 55.0453 4.4995 54.9647 4.50001 54.8833C4.50052 54.802 4.51718 54.7216 4.54901 54.6467C4.58084 54.5719 4.62722 54.5041 4.68546 54.4473L16.9688 42.1638L5.23841 30.4333C5.12319 30.3181 5.05846 30.1618 5.05846 29.9989C5.05846 29.8359 5.12319 29.6797 5.23841 29.5645L16.9688 17.8341L4.68546 5.55072C4.628 5.49376 4.58235 5.42602 4.55115 5.35137C4.51994 5.27672 4.50378 5.19664 4.5036 5.11573C4.50343 5.03482 4.51923 4.95468 4.55011 4.87989C4.58099 4.80511 4.62634 4.73716 4.68355 4.67995C4.74076 4.62274 4.80871 4.57739 4.8835 4.54651C4.95828 4.51563 5.03843 4.49982 5.11934 4.5C5.20024 4.50018 5.28032 4.51634 5.35497 4.54754C5.42962 4.57875 5.49737 4.6244 5.55433 4.68186L17.8377 16.9652L29.5681 5.23481C29.6833 5.11959 29.8395 5.05486 30.0025 5.05486C30.1654 5.05486 30.3217 5.11959 30.4369 5.23481L42.1674 16.9652L54.4509 4.68186C54.5666 4.56906 54.7221 4.50638 54.8837 4.50742C55.0453 4.50846 55.2 4.57311 55.3142 4.68739C55.4285 4.80166 55.4931 4.95635 55.4941 5.11795C55.4952 5.27954 55.4325 5.43503 55.3196 5.55072L43.0364 17.8341L54.7668 29.5645C54.882 29.6797 54.9468 29.8359 54.9468 29.9989C54.9468 30.1618 54.882 30.3181 54.7668 30.4333L43.0364 42.1638L55.3198 54.4473C55.4058 54.5332 55.4644 54.6427 55.4882 54.7619C55.5119 54.8811 55.4998 55.0047 55.4532 55.117C55.4067 55.2293 55.3279 55.3253 55.2268 55.3927C55.1257 55.4602 55.0068 55.4962 54.8853 55.4961ZM18.7067 42.1638L30.0026 53.4599L41.2986 42.1638L30.0026 30.8678L18.7067 42.1638ZM30.8715 29.999L42.1674 41.295L53.4635 29.999L42.1674 18.7029L30.8715 29.999ZM6.54177 29.999L17.8377 41.295L29.1337 29.999L17.8377 18.7029L6.54177 29.999ZM18.7067 17.8341L30.0026 29.1301L41.2986 17.8341L30.0026 6.53805L18.7067 17.8341Z" />
                                                </svg>
                                                <h5>Sales Growth Around <br />05 Months</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-item four">
                                                <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M54.8718 55.4919C54.7919 55.494 54.7124 55.4801 54.638 55.4511C54.5635 55.4221 54.4956 55.3785 54.4382 55.323L41.8908 43.3459L30.4537 55.3027C30.3951 55.364 30.3246 55.4128 30.2466 55.4461C30.1686 55.4795 30.0847 55.4966 29.9999 55.4966C29.9151 55.4966 29.8311 55.4795 29.7531 55.4461C29.6751 55.4128 29.6047 55.364 29.546 55.3027L18.1091 43.3459L5.5617 55.323C5.47274 55.4079 5.3608 55.4648 5.23978 55.4867C5.11875 55.5085 4.99397 55.4944 4.88091 55.446C4.76785 55.3976 4.67149 55.3171 4.60378 55.2144C4.53606 55.1117 4.49998 54.9915 4.5 54.8685C4.5 54.8685 4.50038 28.8417 4.50126 28.8259C4.51157 28.6681 4.58089 28.5199 4.69546 28.4108L29.5639 4.67267C29.8042 4.4433 30.1987 4.44116 30.4374 4.67393L55.306 28.4122C55.4208 28.5219 55.4897 28.6711 55.4989 28.8296C55.4996 28.8417 55.5 54.8337 55.5 54.8686C55.4999 55.2341 55.1921 55.4849 54.8718 55.4919ZM19.0177 42.4786L29.9999 53.96L40.9821 42.4786L29.9999 31.9955L19.0177 42.4786ZM42.759 42.4382L54.2437 53.4009V30.4314L42.759 42.4382ZM5.75603 30.4314V53.4008L17.2407 42.4382L5.75603 30.4314ZM30.628 30.8585L41.8503 41.5708L53.9833 28.8864L30.628 6.59259V30.8585ZM6.01643 28.8864L18.1494 41.5708L29.3718 30.8585V6.59259L6.01643 28.8864Z" />
                                                </svg>
                                                <h5>Employee Morale <br />40% Increase</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h2>Key Takeaways</h2>
                                <span className="line-break" />
                                <ul className="listing three">
                                    <li><span>Rebranding for Alignment:</span> Ensuring the brand identity matched company values attracted a loyal, aligned customer base.</li>
                                    <li><span>Employee Involvement:</span> Employees play a crucial role in successful rebranding, as they embody the brand’s values.</li>
                                </ul>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <div className="img-grp mb-130">
                                    <div className="row g-4">
                                        <div className="col-xl-8 col-md-7">
                                            <img src="/assets/img/innerpages/case-study-details-img1.jpg" alt="" />
                                        </div>
                                        <div className="col-xl-4 col-md-5">
                                            <img src="/assets/img/innerpages/case-study-details-img2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="details-pagination">
                                    <div className="single-pagination">
                                        <Link className="pagination-btn" href="/news-insight-grid/details">
                                            <img src="/assets/img/innerpages/details-pagination-btn-bg5.png" alt="" />
                                            <div className="btn-content">
                                                <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                                </svg>
                                                Prev
                                            </div>
                                        </Link>
                                        <div className="content">
                                            <h6><Link href="/news-insight-grid/details">Crafting a Seamless Digital Presence for DEF Technology.</Link></h6>
                                        </div>
                                    </div>
                                    <div className="single-pagination two text-end">
                                        <div className="content">
                                            <h6><Link href="/news-insight-grid/details">Increasing Lead Generation Through Campaigns.</Link></h6>
                                        </div>
                                        <Link className="pagination-btn" href="/news-insight-grid/details">
                                            <img src="/assets/img/innerpages/details-pagination-btn-bg1.png" alt="" />
                                            <div className="btn-content">
                                                Next
                                                <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                    <svg className="divider-line" width={6} height={88} viewBox="0 0 6 88" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 83L0.113249 88H5.88675L3.5 83H2.5ZM2.5 4.5V83.5H3.5V4.5H2.5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="case-study-details-sidebar">
                                <div className="case-study-details-info-wrap">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span>Category:</span></td>
                                                <td>Technology</td>
                                            </tr>
                                            <tr>
                                                <td><span>Clients:</span></td>
                                                <td>Daniel Scoot</td>
                                            </tr>
                                            <tr>
                                                <td><span>Location:</span></td>
                                                <td>Menchester, UK</td>
                                            </tr>
                                            <tr>
                                                <td><span>Date:</span></td>
                                                <td>15/01/2025</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ul className="download-btns">
                                        <li>
                                            <a href="assets/company-desk.pdf" download="company-desk.pdf" className="primary-btn3 btn-hover">
                                                <img src="/assets/img/innerpages/icon/pdf-icon2.svg" alt="" />
                                                Download Pdf
                                                <span />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="assets/company-desk.pdf" download="company-desk.pdf" className="primary-btn3 two btn-hover">
                                                Download Docs
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                <span />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="note-area">
                                    <div className="title-area">
                                        <h6>Note</h6>
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p><span>Increased Brand Awareness:</span> Following the rebrand, Brightwave reported a <span>35% increase</span> in brand recognition and media mentions.</p>
                                        <ul>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Organic Traffic
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={600}
                                                        speed={10}
                                                        forwardedRef={ref2}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>%</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h6>
                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <g mask="url(#mask0_1535_152744)">
                                                            <path d="M1 10V0L9 5L1 10Z" />
                                                        </g>
                                                    </svg>
                                                    Online Revenue
                                                </h6>
                                                <div className="counter-area">
                                                    <Counter
                                                        start={0}
                                                        end={10}
                                                        speed={50}
                                                        forwardedRef={ref2}
                                                        as="h5"
                                                        className="counter"
                                                    />
                                                    <span>M+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="social-area">
                                    <h6>Share:</h6>
                                    <ul className="social-link">
                                        <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                        <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                                        <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
                                        <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Case Study Details Page End */}
            <Home3Footer />
        </>
    )
}

export default CaseStudyDetailsPage
