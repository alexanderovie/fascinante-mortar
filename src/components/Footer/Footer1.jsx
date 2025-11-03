import Link from 'next/link'
import React from 'react'

const Footer1 = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-menu-wrap">
                    <div className="row gy-5">
                        <div className="col-lg-7">
                            <div className="footer-contact-wrap">
                                <div className="title-area">
                                    <h2>We are Global Digital Brand Tech Agency.</h2>
                                </div>
                                <ul className="contact-list">
                                    <li className="single-contact">
                                        <div className="icon">
                                            <img src="/assets/img/home1/icon/contact-call-icon.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <span>Call 24/7 Hours</span>
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
                                <a href="https://www.google.com/maps" className="primary-btn1 transparent">
                                    <span>View Site Map
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>View Site Map
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-sm-6">
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
                        <div className="col-xl-2 col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h3>Industries</h3>
                                </div>
                                <ul className="widget-list">
                                    <li><Link href="/industry-details">Finance &amp; Fintech</Link></li>
                                    <li><Link href="/industry-details">Healthcare &amp; Life</Link></li>
                                    <li><Link href="/industry-details">Retail &amp; Ecommerce</Link></li>
                                    <li><Link href="/industry-details">Government &amp; Public</Link></li>
                                    <li><Link href="/industry-details">Travel &amp; Hospitality</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/assets/company-desk.pdf" className="file-download-btn" download="company-desk.pdf">
                    <div className="icon">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6758 2.80469H13.3242V11.0102H17.0039L12 17.5609L6.99609 11.0102H10.6758V2.80469Z" />
                            <path d="M10.6758 3.1566H13.3266L12.975 2.80504V9.99801C12.975 10.3308 12.9633 10.6636 12.975 10.9964V11.0105C12.975 11.2004 13.1367 11.3621 13.3266 11.3621H17.0062C16.9055 11.1863 16.8047 11.0105 16.7016 10.8324C16.5352 11.0504 16.3711 11.266 16.2047 11.4839C15.8062 12.0043 15.4078 12.5246 15.0117 13.0472C14.5312 13.6777 14.0484 14.3082 13.568 14.9386C13.1508 15.4847 12.7336 16.0285 12.3187 16.5746C12.1172 16.8394 11.8969 17.0972 11.7094 17.3714C11.707 17.3761 11.7023 17.3785 11.7 17.3832H12.307C12.1406 17.1652 11.9766 16.9496 11.8102 16.7316C11.4117 16.2113 11.0133 15.691 10.6172 15.1683C10.1367 14.5379 9.6539 13.9074 9.17343 13.2769C8.75625 12.7308 8.33906 12.1871 7.92422 11.641C7.72265 11.3761 7.53281 11.0949 7.31484 10.8441C7.3125 10.8394 7.30781 10.8371 7.30547 10.8324C7.20469 11.0082 7.1039 11.1839 7.00078 11.3621H10.6805C10.8703 11.3621 11.032 11.2004 11.032 11.0105V3.81754C11.032 3.48473 11.0437 3.15192 11.032 2.8191V2.80504C11.032 2.62223 10.8703 2.4441 10.6805 2.45348C10.4906 2.46285 10.3289 2.60817 10.3289 2.80504V9.99801C10.3289 10.3285 10.3102 10.666 10.3289 10.9964V11.0105L10.6805 10.6589H7.00078C6.75937 10.6589 6.52969 10.9683 6.69609 11.1886C6.8625 11.4066 7.02656 11.6222 7.19297 11.8402C7.5914 12.3605 7.98984 12.8808 8.38593 13.4035C8.8664 14.0339 9.34922 14.6644 9.82968 15.2949C10.2469 15.841 10.6641 16.3847 11.0789 16.9308C11.2828 17.1957 11.4844 17.4629 11.6883 17.7277C11.6906 17.7324 11.6953 17.7347 11.6977 17.7394C11.8687 17.9621 12.1336 17.9621 12.3047 17.7394C12.4711 17.5214 12.6352 17.3058 12.8016 17.0879C13.2 16.5675 13.5984 16.0472 13.9945 15.5246C14.475 14.8941 14.9578 14.2636 15.4383 13.6332C15.8555 13.0871 16.2727 12.5433 16.6875 11.9972C16.8891 11.7324 17.1117 11.4769 17.2969 11.2004C17.2992 11.1957 17.3039 11.1933 17.3062 11.1886C17.475 10.9683 17.2453 10.6589 17.0016 10.6589H13.3219L13.6734 11.0105V3.81754C13.6734 3.48473 13.6852 3.15192 13.6734 2.8191V2.80504C13.6734 2.6152 13.5117 2.45348 13.3219 2.45348H10.6711C10.4883 2.45348 10.3102 2.6152 10.3195 2.80504C10.3312 2.99489 10.4789 3.1566 10.6758 3.1566Z" />
                            <path d="M20.9297 17.2117V19.9609C20.9297 20.1132 20.939 20.2726 20.9203 20.425C20.9297 20.3617 20.9367 20.3007 20.9461 20.2375C20.9344 20.3101 20.9156 20.3804 20.8875 20.4507L20.9578 20.282C20.9367 20.3289 20.9133 20.3757 20.8875 20.4203C20.843 20.4882 20.8031 20.4836 20.925 20.3781C20.9062 20.3945 20.8898 20.4156 20.8734 20.4343C20.8664 20.4414 20.8195 20.4882 20.8172 20.4859C20.8125 20.4836 20.9859 20.3734 20.8734 20.439C20.8242 20.4695 20.7773 20.4953 20.7234 20.5187L20.8922 20.4484C20.8219 20.4765 20.7539 20.4953 20.6789 20.507C20.7422 20.4976 20.8031 20.4906 20.8664 20.4812C20.6789 20.5047 20.482 20.4906 20.2945 20.4906H3.2906C3.23904 20.4906 3.18982 20.4882 3.13826 20.4812C3.20154 20.4906 3.26248 20.4976 3.32576 20.507C3.2531 20.4953 3.18279 20.4765 3.11248 20.4484L3.28123 20.5187C3.23435 20.4976 3.18748 20.4742 3.14295 20.4484C3.07498 20.4039 3.07967 20.364 3.18514 20.4859C3.16873 20.4672 3.14764 20.4507 3.12889 20.4343C3.12185 20.4273 3.07498 20.3804 3.07732 20.3781C3.07967 20.3734 3.18982 20.5468 3.1242 20.4343C3.09373 20.3851 3.06795 20.3382 3.04451 20.2843L3.11482 20.4531C3.0867 20.3828 3.06795 20.3148 3.05623 20.2398C3.0656 20.3031 3.07264 20.364 3.08201 20.4273C3.0656 20.2984 3.07264 20.1648 3.07264 20.0359V17.2164C3.07264 16.8484 2.7492 16.4968 2.36951 16.5132C1.98748 16.5297 1.66639 16.8226 1.66639 17.2164V19.9726C1.66639 20.0804 1.66404 20.1906 1.66639 20.2984C1.6781 20.9875 2.10232 21.564 2.73982 21.8078C2.96951 21.8968 3.20857 21.9015 3.44998 21.9015H20.7117C21.6047 21.8992 22.3289 21.1937 22.343 20.2984C22.357 19.3703 22.343 18.4422 22.343 17.514V17.2164C22.343 16.8484 22.0195 16.4968 21.6398 16.5132C21.2508 16.525 20.9297 16.8179 20.9297 17.2117Z" />
                        </svg>
                    </div>
                    Company Desk
                </a>
                <div className="logo-and-sevice-menu-wrap">
                    <Link href="/" className="footer-logo">
                        <img src="/assets/img/footer-logo.svg" alt="" />
                    </Link>
                    <ul className="service-list">
                        <li><Link href="/service">Product Development</Link></li>
                        <li><Link href="/service">Design Department</Link></li>
                        <li><Link href="/service">Cloud Solution</Link></li>
                        <li><Link href="/service">Data Analytics</Link></li>
                    </ul>
                </div>
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



    )
}

export default Footer1