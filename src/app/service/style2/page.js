"use client"
import Counter from '@/components/common/Counter'
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useRef } from 'react'

const ServicePage = () => {
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    return (
        <div>
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
                                        Solutions-02
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
                            <img src="/assets/img/innerpages/service-page-banner-img2.jpg" alt="" />
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
                </div>
            </div>
            {/* Service Page Banner End */}
            {/* Service2 Page Start */}
            <div className="service2-page mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-70">
                        <div className="col-lg-6">
                            <div className="section-title2">
                                <div className="shape-and-title-area">
                                    <svg width={88} height={64} viewBox="0 0 88 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M88 0V64H0L88 0Z" />
                                        <path d="M60 8L10 44V8H60Z" />
                                    </svg>
                                    <h2>Our Goal, Our Achievements</h2>
                                </div>
                                <p>We believe in bespoke strategies, designed specifically for your business needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="service-card4 magnetic-item">
                                <div className="icon">
                                    <svg width={80} height={80} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.6207 77.7142C39.4779 77.7127 39.3376 77.6766 39.2118 77.6089L6.1861 59.888C6.04348 59.8114 5.92429 59.6977 5.8412 59.5588C5.75811 59.4199 5.71423 59.2611 5.71423 59.0993V22.0448C5.71423 21.8829 5.75811 21.7241 5.8412 21.5852C5.92429 21.4464 6.04348 21.3326 6.1861 21.2561L39.212 3.53492C39.3425 3.46519 39.4883 3.42871 39.6363 3.42871C39.7842 3.42871 39.93 3.46519 40.0605 3.53492L73.0862 21.2561C73.2288 21.3326 73.348 21.4464 73.4311 21.5852C73.5142 21.7241 73.5581 21.8829 73.5581 22.0448V59.0993C73.5581 59.2611 73.5142 59.4199 73.4311 59.5588C73.348 59.6977 73.2288 59.8114 73.0862 59.888L40.0603 77.6089C39.9253 77.6814 39.7738 77.7176 39.6207 77.7142ZM18.9305 40.572L39.6361 75.0814L60.3416 40.572L39.6361 6.06268L18.9305 40.572ZM61.8922 41.4671L42.0743 74.4969L71.7678 58.5639V41.4671H61.8922ZM7.5043 58.5639L37.198 74.4969L17.3801 41.4671H7.5043V58.5639ZM61.8922 39.677H71.7678V22.5802L42.0743 6.64714L61.8922 39.677ZM7.5043 39.677H17.3799L37.198 6.64714L7.5043 22.5802V39.677Z" />
                                    </svg>
                                </div>
                                <h4><Link href="/service/details">Web Development <br /> &amp; Design</Link></h4>
                                <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card4 two magnetic-item">
                                <div className="icon">
                                    <svg width={80} height={80} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M74.1564 71.9244C74.1553 71.9243 74.1542 71.9243 74.1531 71.9244H5.84328C5.69682 71.9244 5.55289 71.8862 5.42566 71.8137C5.29843 71.7411 5.19228 71.6367 5.11767 71.5107C5.04305 71.3846 5.00254 71.2413 5.00012 71.0949C4.99769 70.9485 5.03344 70.8039 5.10385 70.6755L21.9588 39.9622L5.10402 9.24897C5.03357 9.12056 4.99777 8.97601 5.00016 8.82957C5.00256 8.68312 5.04305 8.53982 5.11765 8.41377C5.19226 8.28773 5.2984 8.18329 5.42564 8.11073C5.55288 8.03818 5.69681 8.00002 5.84328 8H74.1531C74.4511 8 74.7269 8.15737 74.8788 8.41374C75.0308 8.67011 75.0359 8.98771 74.8925 9.24897L58.0377 39.9622L74.8588 70.6139C74.9433 70.741 74.9918 70.8886 74.999 71.041C75.0063 71.1934 74.9721 71.345 74.9 71.4795C74.8279 71.614 74.7207 71.7264 74.5897 71.8048C74.4588 71.8831 74.309 71.9245 74.1564 71.9244ZM41.4231 70.2378H72.7283L57.0756 41.7152L41.4231 70.2378ZM7.26817 70.2378H38.5734L22.9207 41.7152L7.26817 70.2378ZM23.8828 39.9622L39.9982 69.3282L56.1137 39.9622L39.9982 10.5963L23.8828 39.9622ZM41.4231 9.68666L57.0758 38.2093L72.7283 9.68666H41.4231ZM7.26817 9.68666L22.9209 38.2093L38.5734 9.68666H7.26817Z" />
                                    </svg>
                                </div>
                                <h4><Link href="/service/details">Digital <br /> Marketing</Link></h4>
                                <p>Boosting your online visibility with on-page and off-page SEO strategies to rank higher in search results.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card4 three magnetic-item">
                                <div className="icon">
                                    <svg width={80} height={80} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M58.3915 71.6146H22.6083C22.4529 71.6146 22.3001 71.5745 22.1647 71.4982C22.0292 71.4218 21.9158 71.3118 21.8354 71.1788L3.13054 40.2752C3.04514 40.134 3 39.9722 3 39.8073C3 39.6423 3.04514 39.4805 3.13054 39.3394L21.8354 8.43572C21.9159 8.30276 22.0293 8.1928 22.1647 8.11648C22.3001 8.04015 22.4529 8.00003 22.6083 8H58.3915C58.547 8.00002 58.6998 8.04013 58.8352 8.11645C58.9706 8.19278 59.084 8.30275 59.1645 8.43572L77.8693 39.3394C77.9548 39.4805 78 39.6423 78 39.8073C78 39.9723 77.9548 40.1341 77.8693 40.2752L59.1645 71.1788C59.084 71.3118 58.9706 71.4218 58.8352 71.4982C58.6998 71.5745 58.547 71.6146 58.3915 71.6146ZM23.1178 69.8073H57.8823L76.0402 39.8073L57.8823 9.80723H23.1178L4.95982 39.8073L23.1178 69.8073ZM54.3036 67.5485C54.148 67.5487 53.9949 67.5086 53.8593 67.4323C53.7238 67.3559 53.6102 67.2458 53.5297 67.1126L37.2872 40.2766C37.2018 40.1355 37.1567 39.9737 37.1567 39.8087C37.1567 39.6438 37.2018 39.482 37.2872 39.3408L53.5297 12.5049C53.6554 12.3033 53.8555 12.1593 54.0866 12.1041C54.3177 12.0489 54.5612 12.0869 54.7644 12.21C54.9677 12.333 55.1143 12.5311 55.1725 12.7615C55.2308 12.9918 55.196 13.2358 55.0756 13.4407L39.1163 39.8087L55.0756 66.1768C55.1586 66.3138 55.2036 66.4703 55.2062 66.6305C55.2087 66.7906 55.1687 66.9485 55.0901 67.0881C55.0116 67.2276 54.8974 67.3438 54.7592 67.4247C54.6209 67.5056 54.4637 67.5483 54.3036 67.5485ZM31.5325 67.547C31.3768 67.5472 31.2238 67.5072 31.0882 67.4308C30.9526 67.3544 30.8391 67.2443 30.7586 67.1111L14.5161 40.2752C14.4307 40.134 14.3856 39.9722 14.3856 39.8073C14.3856 39.6423 14.4307 39.4805 14.5161 39.3394L30.7586 12.5034C30.82 12.4019 30.9008 12.3135 30.9964 12.2432C31.0921 12.1729 31.2006 12.1221 31.3158 12.0938C31.431 12.0655 31.5507 12.0601 31.668 12.0781C31.7853 12.096 31.8979 12.1369 31.9994 12.1984C32.101 12.2598 32.1894 12.3406 32.2597 12.4363C32.3299 12.5319 32.3807 12.6404 32.409 12.7556C32.4373 12.8708 32.4427 12.9905 32.4247 13.1078C32.4068 13.2251 32.366 13.3377 32.3045 13.4392L16.3454 39.8073L32.3047 66.1753C32.3876 66.3123 32.4327 66.4689 32.4353 66.6291C32.4378 66.7892 32.3977 66.9471 32.3192 67.0867C32.2406 67.2263 32.1263 67.3424 31.9881 67.4233C31.8499 67.5042 31.6926 67.5469 31.5325 67.547ZM42.9406 67.5456C42.785 67.5458 42.632 67.5057 42.4964 67.4294C42.3608 67.353 42.2472 67.2429 42.1667 67.1097L25.9243 40.2737C25.8389 40.1326 25.7937 39.9708 25.7937 39.8058C25.7937 39.6409 25.8389 39.4791 25.9243 39.3379L42.1667 12.502C42.2925 12.3004 42.4925 12.1564 42.7236 12.1012C42.9547 12.046 43.1982 12.084 43.4015 12.2071C43.6047 12.3301 43.7513 12.5282 43.8096 12.7586C43.8678 12.9889 43.833 13.2329 43.7127 13.4378L27.7535 39.8058L43.7128 66.1739C43.7958 66.3109 43.8409 66.4675 43.8434 66.6276C43.8459 66.7878 43.8059 66.9457 43.7273 67.0853C43.6487 67.2248 43.5345 67.341 43.3962 67.4219C43.258 67.5028 43.1008 67.5455 42.9406 67.5456Z" />
                                    </svg>
                                </div>
                                <h4><Link href="/service/details">E-commerce <br /> Solutions</Link></h4>
                                <p>Specializing in leading e-commerce platforms for flexible and scalable solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="service-card4 two magnetic-item">
                                <div className="icon">
                                    <svg width={80} height={80} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M73.1804 73.9947C73.0728 73.9949 72.9662 73.9738 72.8668 73.9326C72.7674 73.8914 72.6771 73.8309 72.6012 73.7547L56.2233 57.3769L40.5826 73.0175C40.5065 73.0936 40.4162 73.1539 40.3168 73.1951C40.2174 73.2363 40.1109 73.2575 40.0033 73.2575C39.8957 73.2575 39.7892 73.2363 39.6898 73.1951C39.5904 73.1539 39.5001 73.0936 39.4241 73.0175L23.7836 57.3769L7.40577 73.7547C7.33007 73.8324 7.2397 73.8942 7.1399 73.9367C7.04011 73.9791 6.93288 74.0014 6.82443 74.0021C6.71598 74.0028 6.60848 73.9819 6.50815 73.9407C6.40782 73.8996 6.31667 73.8389 6.23997 73.7622C6.16328 73.6855 6.10258 73.5944 6.06139 73.494C6.0202 73.3937 5.99934 73.2862 6.00002 73.1778C6.0007 73.0693 6.0229 72.9621 6.06535 72.8623C6.10779 72.7625 6.16963 72.6721 6.24728 72.5964L22.6251 56.2184L6.98454 40.5778C6.83092 40.4241 6.74462 40.2158 6.74462 39.9985C6.74462 39.7813 6.83092 39.5729 6.98454 39.4193L22.6251 23.7788L6.24728 7.40097C6.17066 7.32502 6.1098 7.23469 6.06819 7.13516C6.02658 7.03563 6.00504 6.92886 6.0048 6.82098C6.00457 6.7131 6.02564 6.60624 6.06682 6.50652C6.10799 6.40681 6.16845 6.31622 6.24474 6.23993C6.32102 6.16365 6.41162 6.10319 6.51133 6.06201C6.61104 6.02084 6.7179 5.99977 6.82578 6C6.93366 6.00024 7.04043 6.02178 7.13996 6.06339C7.23949 6.105 7.32982 6.16586 7.40577 6.24248L23.7836 22.6203L39.4241 6.97974C39.5777 6.82612 39.7861 6.73981 40.0033 6.73981C40.2206 6.73981 40.4289 6.82612 40.5826 6.97974L56.2233 22.6203L72.6012 6.24248C72.7555 6.09207 72.9628 6.00851 73.1783 6.00989C73.3937 6.01127 73.6 6.09749 73.7523 6.24985C73.9047 6.40222 73.9908 6.60847 73.9922 6.82393C73.9935 7.03939 73.91 7.2467 73.7595 7.40097L57.3819 23.7788L73.0224 39.4193C73.176 39.5729 73.2624 39.7813 73.2624 39.9985C73.2624 40.2158 73.176 40.4241 73.0224 40.5778L57.3819 56.2184L73.7597 72.5964C73.8744 72.7109 73.9525 72.8569 73.9842 73.0158C74.0159 73.1748 73.9997 73.3396 73.9376 73.4893C73.8756 73.639 73.7705 73.767 73.6357 73.857C73.5009 73.947 73.3424 73.9949 73.1804 73.9947ZM24.9422 56.2184L40.0034 71.2798L55.0648 56.2184L40.0034 41.1571L24.9422 56.2184ZM41.1621 39.9986L56.2233 55.06L71.2846 39.9986L56.2233 24.9372L41.1621 39.9986ZM8.72236 39.9986L23.7836 55.06L38.8449 39.9986L23.7836 24.9372L8.72236 39.9986ZM24.9422 23.7788L40.0034 38.8401L55.0648 23.7788L40.0034 8.7174L24.9422 23.7788Z" />
                                    </svg>
                                </div>
                                <h4><Link href="/service/details">Branding &amp; <br /> Graphic Design</Link></h4>
                                <p>Strategy that involves creating and sharing content on social a website's media platforms.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card4 four magnetic-item">
                                <div className="icon">
                                    <svg width={80} height={80} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M73.1624 73.9892C73.0559 73.992 72.9499 73.9735 72.8506 73.9348C72.7514 73.8961 72.6608 73.838 72.5842 73.7639L55.8544 57.7945L40.605 73.737C40.5268 73.8187 40.4329 73.8838 40.3289 73.9282C40.2249 73.9726 40.1129 73.9955 39.9998 73.9955C39.8867 73.9955 39.7748 73.9726 39.6708 73.9282C39.5668 73.8838 39.4729 73.8187 39.3947 73.737L24.1454 57.7945L7.41561 73.7639C7.29698 73.8772 7.14773 73.953 6.98637 73.9822C6.825 74.0114 6.65863 73.9925 6.50788 73.928C6.35714 73.8635 6.22865 73.7561 6.13837 73.6192C6.04808 73.4823 5.99997 73.322 6 73.158C6 73.158 6.0005 38.4555 6.00168 38.4346C6.01542 38.2241 6.10786 38.0265 6.26061 37.881L39.4185 6.23023C39.7389 5.9244 40.265 5.92155 40.5832 6.23191L73.7414 37.8829C73.8944 38.0292 73.9862 38.2281 73.9985 38.4395C73.9995 38.4555 74 73.1116 74 73.1581C73.9998 73.6455 73.5895 73.9798 73.1624 73.9892ZM25.3569 56.6382L39.9998 71.9467L54.6428 56.6382L39.9998 42.6606L25.3569 56.6382ZM57.0121 56.5842L72.325 71.2012V40.5753L57.0121 56.5842ZM7.67471 40.5753V71.201L22.9876 56.5842L7.67471 40.5753ZM40.8373 41.1447L55.8004 55.4277L71.9778 38.5152L40.8373 8.79011V41.1447ZM8.02191 38.5152L24.1992 55.4277L39.1624 41.1447V8.79011L8.02191 38.5152Z" />
                                    </svg>
                                </div>
                                <h4><Link href="/service/details">Consulting &amp;  <br /> Strategy</Link></h4>
                                <p>Crafting your brand’s voice, visual identity, and messaging to stand out in the market.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card4 two magnetic-item">
                                <div className="icon">
                                    <svg width={80} height={80} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M60.2018 75C59.9981 75.0001 59.8009 74.9278 59.6455 74.7961L40.0321 58.2001L20.4188 74.7961C20.2442 74.9437 20.0182 75.016 19.7903 74.997C19.5625 74.978 19.3516 74.8692 19.2039 74.6947C19.0563 74.5201 18.984 74.2941 19.003 74.0663C19.022 73.8384 19.1307 73.6275 19.3053 73.4798L38.6978 57.0709L19.3053 40.6619C19.2097 40.5809 19.1329 40.4801 19.0802 40.3665C19.0275 40.2529 19.0002 40.1291 19.0002 40.0038C19.0002 39.8786 19.0275 39.7548 19.0802 39.6412C19.1329 39.5275 19.2097 39.4267 19.3053 39.3458L38.6978 22.9368L19.3053 6.52769C18.9419 6.22014 18.8965 5.67641 19.2041 5.313C19.5116 4.94959 20.0555 4.90408 20.4188 5.2118L40.0321 21.8076L59.6457 5.21163C59.7318 5.13669 59.832 5.07961 59.9404 5.04371C60.0488 5.00781 60.1632 4.9938 60.2771 5.00251C60.391 5.01121 60.5019 5.04245 60.6036 5.09441C60.7053 5.14636 60.7957 5.21801 60.8694 5.30517C60.9432 5.39234 60.9989 5.49329 61.0333 5.60217C61.0677 5.71104 61.0802 5.82567 61.0699 5.9394C61.0596 6.05312 61.0269 6.16368 60.9735 6.26464C60.9202 6.3656 60.8473 6.45496 60.7592 6.52752L41.3665 22.9368L60.759 39.3458C60.8546 39.4267 60.9315 39.5275 60.9842 39.6412C61.0369 39.7548 61.0642 39.8786 61.0642 40.0038C61.0642 40.1291 61.0369 40.2529 60.9842 40.3665C60.9315 40.4802 60.8546 40.581 60.759 40.6619L41.3665 57.0709L60.759 73.48C60.8937 73.5941 60.9902 73.7469 61.0353 73.9176C61.0804 74.0883 61.072 74.2688 61.0112 74.4346C60.9505 74.6004 60.8402 74.7435 60.6955 74.8446C60.5507 74.9458 60.3784 75 60.2018 75ZM21.1964 40.0038L40.0321 55.9417L58.868 40.0038L40.0321 24.0659L21.1964 40.0038Z" />
                                    </svg>
                                </div>
                                <h4><Link href="/service/details">Video &amp; Content <br /> Production</Link></h4>
                                <p>Creating eye-catching visual assets, including infographics, social media graphics, and banners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service2 Page End */}
            {/* home3 Partner Section Start */}
            <div className="partner-area three mb-130">
                <div className="container">
                    <div className="partner-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h6>Our Globally <span>20K+</span> Clients.</h6>
                        <h6>Our Happy Cleints <span>90%+</span></h6>
                    </div>
                    <div className="partner-wrap">
                        <div className="marquee light">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-06.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="marquee dark">
                            <div className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-light-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-06.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><img src="/assets/img/home1/partner-light-01.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-02.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-03.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-04.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-05.png" alt="" /></a>
                                <a href="#"><img src="/assets/img/home1/partner-light-06.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home3 Partner Section End */}
            {/* home3 Scroll Text Section Start */}

            {/* home3 Scroll Text Section End */}


            <Home3Footer />
        </div>
    )
}

export default ServicePage
