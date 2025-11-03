import Link from 'next/link'
import React from 'react'

const Home3aboutSection = () => {
    return (
        <div className="home3-about-section mb-130" id="about-section">
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between mb-60">
                    <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title three">
                            <span>About Mortar</span>
                            <h2>Make Brands in the Digital World.</h2>
                            <p>We provides a wide range of services aimed at helping <span>Businesses, Organizations,</span> &amp; individuals thrive in the digital space.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="achievment-area">
                            <div className="icon">
                                <svg width={106} height={78} viewBox="0 0 106 78" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.333333 28C0.333333 29.4728 1.52724 30.6667 3 30.6667C4.47276 30.6667 5.66667 29.4728 5.66667 28C5.66667 26.5272 4.47276 25.3333 3 25.3333C1.52724 25.3333 0.333333 26.5272 0.333333 28ZM102.99 78L105.699 72.9015L99.9292 73.1047L102.99 78ZM2.55625 28.2304C9.19406 41.0143 18.6039 47.0915 29.0259 49.7921C39.4124 52.4835 50.7986 51.8181 61.3856 51.1694C66.6923 50.8443 71.7956 50.5229 76.5065 50.6173C81.2178 50.7118 85.5015 51.2223 89.1697 52.5433C92.8276 53.8605 95.8727 55.983 98.1246 59.3148C100.381 62.6539 101.867 67.245 102.333 73.5385L103.33 73.4646C102.856 67.0568 101.336 62.281 98.9531 58.7548C96.5649 55.2213 93.3341 52.98 89.5085 51.6024C85.6933 50.2285 81.2859 49.713 76.5266 49.6175C71.7668 49.5221 66.6198 49.8469 61.3245 50.1713C50.7076 50.8218 39.4834 51.4689 29.2768 48.8241C19.1058 46.1886 9.94009 40.2811 3.44375 27.7696L2.55625 28.2304Z" />
                                    <g>
                                        <path d="M48.7809 2.75954C48.7102 2.71124 48.6318 2.67514 48.5492 2.65272C45.4317 1.15692 42.033 0.337841 38.5765 0.24932C35.1199 0.160798 31.6838 0.804835 28.4939 2.13911C25.304 3.47338 22.4325 5.46767 20.0682 7.99092C17.7039 10.5142 15.9002 13.5093 14.7759 16.7793C14.7362 16.8511 14.7083 16.9287 14.6932 17.0093L14.7006 17.027C13.2073 21.5004 13.0337 26.3093 14.2007 30.8788C15.3676 35.4482 17.8257 39.5849 21.2811 42.7942C24.7365 46.0036 29.043 48.1498 33.6857 48.9763C38.3284 49.8028 43.1108 49.2746 47.4613 47.4549C51.8118 45.6352 55.5463 42.6009 58.2182 38.7149C60.8901 34.8288 62.3865 30.2554 62.5284 25.5414C62.6703 20.8274 61.4517 16.1723 59.0183 12.1326C56.585 8.09282 53.0398 4.83941 48.8066 2.76127L48.7809 2.75954ZM59.9751 31.516C57.9745 31.2499 55.9506 31.2053 53.9401 31.383C53.6096 27.5012 52.6987 23.6909 51.238 20.0793L59.4875 16.6287C61.3051 21.3991 61.4772 26.6401 59.9766 31.5196L59.9751 31.516ZM17.0541 34.3776L25.3037 30.927C26.849 34.5046 28.9223 37.8301 31.4544 40.7925C29.9161 42.0991 28.5266 43.5715 27.311 45.1828C22.7837 42.8247 19.1737 39.0217 17.0541 34.3776ZM16.0039 17.9956C17.993 18.2565 20.0047 18.2991 22.0032 18.1228C22.3266 22.0338 23.2398 25.8734 24.7116 29.5112L16.4621 32.9618C14.6374 28.1653 14.476 22.8949 16.0039 17.9956ZM34.6329 14.8153C37.7234 13.4709 40.6336 11.7451 43.2957 9.67819C45.7435 12.5551 47.7485 15.7811 49.2444 19.2497L38.3866 23.7913L34.6329 14.8153ZM34.0408 13.3996L29.8194 3.30517C33.5753 2.20409 38.1407 4.31161 42.2422 8.55108C39.7172 10.497 36.9628 12.1254 34.0408 13.3996ZM32.6252 13.9917C29.6662 15.1774 26.5727 15.9951 23.4144 16.4263C23.2766 10.5289 24.9824 5.79829 28.4038 3.8973L32.6252 13.9917ZM33.2173 15.4075L36.971 24.3834L26.1273 28.9191C24.7043 25.4208 23.811 21.7298 23.4769 17.9679C26.8177 17.5239 30.0899 16.6638 33.2173 15.4075ZM26.7193 30.3349L37.563 25.7992L41.2842 34.6973C38.1943 36.044 35.2851 37.7722 32.6243 39.8415C30.1981 36.9811 28.2083 33.7776 26.7193 30.3349ZM41.8762 36.113L46.1302 46.2853C42.3587 47.3888 37.7531 45.2648 33.6495 40.9805C36.1812 39.026 38.9443 37.3911 41.8762 36.113ZM43.2918 35.5209C46.2606 34.331 49.3647 33.5117 52.534 33.0815C52.7021 39.012 50.9799 43.7827 47.5458 45.6932L43.2918 35.5209ZM42.6998 34.1052L38.9786 25.2071L49.8223 20.6714C51.2266 24.1481 52.1093 27.8133 52.4416 31.5482C49.1004 31.9908 45.8277 32.8498 42.6998 34.1052ZM50.6459 18.6635C49.0898 15.0609 46.9978 11.7144 44.4408 8.7376C45.9698 7.43857 47.3521 5.97627 48.5633 4.37677C53.1238 6.72938 56.7623 10.5454 58.8955 15.2129L50.6459 18.6635ZM47.1557 3.70549C46.0424 5.12988 44.7856 6.43595 43.405 7.60308C40.6959 4.79396 37.7531 2.84776 34.897 1.98394C39.0637 1.42745 43.3033 2.02283 47.1557 3.70549ZM23.8975 6.58474C22.5023 9.21432 21.8277 12.682 21.9264 16.5871C20.1261 16.7504 18.3138 16.7281 16.518 16.5205C18.0247 12.5969 20.5768 9.16079 23.8975 6.58474ZM28.7236 45.8562C29.8386 44.4202 31.0997 43.1039 32.4866 41.9285C35.2141 44.7715 38.1788 46.7501 41.0491 47.608C36.8577 48.1675 32.5932 47.5613 28.7236 45.8562ZM52.0627 43.0013C53.446 40.3434 54.141 36.8548 54.0325 32.9163C55.8432 32.7543 57.6658 32.7807 59.471 32.9952C57.9653 36.9507 55.3982 40.4145 52.0521 43.0057L52.0627 43.0013Z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="content">
                                <h6>Achievment</h6>
                                <p>An award-winning<span>“Digital Excellence Awards”</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-xl-end mb-50">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-feature-card magnetic-item">
                            <div className="card-content">
                                <div className="number">
                                    <h2>06</h2>
                                </div>
                                <p>World-Wide Branches</p>
                            </div>
                            <svg className="arrow" width={33} height={33} viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 32L31 2M31 2C24.3333 3.25 9.75 5.75 1 2M31 2C29.75 8.25 27.25 22 31 32" strokeWidth={2} strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="about-feature-card two magnetic-item">
                            <div className="card-content">
                                <div className="number">
                                    <h2>99</h2>
                                    <span>%</span>
                                </div>
                                <p>Customer Retention Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="about-feature-card three magnetic-item">
                            <div className="card-content">
                                <h3>Keep Reading</h3>
                                <Link href="/about">
                                    About Mortar
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-8 col-lg-10">
                        <div className="contact-btn-area two">
                            <h6>To Make Sure to Best Service Provide Our Clients.</h6>
                            <Link href="/contact" className="primary-btn3 btn-hover">
                                Start The Journey
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span />
                            </Link>
                        </div>
                    </div>
                </div>
                <svg className="scroll-svg" width={1322} height={654} viewBox="0 0 1322 654" xmlns="http://www.w3.org/2000/svg">
                    <path id="route-1" d="M897 1H1301C1312.05 1 1321 9.95431 1321 21V142C1321 153.046 1312.05 162 1301 162H954C942.954 162 934 170.954 934 182V403C934 414.046 925.046 423 914 423H21C9.95429 423 1 431.954 1 443V633C1 644.046 9.95431 653 21 653H283" strokeWidth={2} />
                </svg>
            </div>
        </div>
    )
}

export default Home3aboutSection
