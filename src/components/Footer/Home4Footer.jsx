import Link from 'next/link'
import React from 'react'

const Home4Footer = () => {
    return (
        <footer className="footer-section style-4">
            <div className="container">
                <div className="footer-menu-wrap">
                    <div className="row gy-5">
                        <div className="col-lg-7">
                            <div className="footer-contact-wrap">
                                <div className="title-area">
                                    <h2>We are Global #1 Digital Marketing Agency.</h2>
                                </div>
                                <ul className="contact-list">
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
                                    <li><Link href="/industry/details">Finance &amp; Fintech</Link></li>
                                    <li><Link href="/industry/details">Healthcare &amp; Life</Link></li>
                                    <li><Link href="/industry/details">Retail &amp; Ecommerce</Link></li>
                                    <li><Link href="/industry/details">Government &amp; Public</Link></li>
                                    <li><Link href="/industry/details">Travel &amp; Hospitality</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <svg className="divider-line" height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                    </svg>
                    <div className="company-logo-and-location-area">
                        <div className="row gy-5">
                            <div className="col-lg-3 col-md-4">
                                <div className="company-logo-area">
                                    <img src="/assets/img/footer-logo3.svg" alt="" />
                                    <a href="assets/company-desk.pdf" className="file-download-btn" download>
                                        <div className="icon">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6758 2.80469H13.3242V11.0102H17.0039L12 17.5609L6.99609 11.0102H10.6758V2.80469Z" />
                                                <path d="M10.6758 3.1566H13.3266L12.975 2.80504V9.99801C12.975 10.3308 12.9633 10.6636 12.975 10.9964V11.0105C12.975 11.2004 13.1367 11.3621 13.3266 11.3621H17.0062C16.9055 11.1863 16.8047 11.0105 16.7016 10.8324C16.5352 11.0504 16.3711 11.266 16.2047 11.4839C15.8062 12.0043 15.4078 12.5246 15.0117 13.0472C14.5312 13.6777 14.0484 14.3082 13.568 14.9386C13.1508 15.4847 12.7336 16.0285 12.3187 16.5746C12.1172 16.8394 11.8969 17.0972 11.7094 17.3714C11.707 17.3761 11.7023 17.3785 11.7 17.3832H12.307C12.1406 17.1652 11.9766 16.9496 11.8102 16.7316C11.4117 16.2113 11.0133 15.691 10.6172 15.1683C10.1367 14.5379 9.6539 13.9074 9.17343 13.2769C8.75625 12.7308 8.33906 12.1871 7.92422 11.641C7.72265 11.3761 7.53281 11.0949 7.31484 10.8441C7.3125 10.8394 7.30781 10.8371 7.30547 10.8324C7.20469 11.0082 7.1039 11.1839 7.00078 11.3621H10.6805C10.8703 11.3621 11.032 11.2004 11.032 11.0105V3.81754C11.032 3.48473 11.0437 3.15192 11.032 2.8191V2.80504C11.032 2.62223 10.8703 2.4441 10.6805 2.45348C10.4906 2.46285 10.3289 2.60817 10.3289 2.80504V9.99801C10.3289 10.3285 10.3102 10.666 10.3289 10.9964V11.0105L10.6805 10.6589H7.00078C6.75937 10.6589 6.52969 10.9683 6.69609 11.1886C6.8625 11.4066 7.02656 11.6222 7.19297 11.8402C7.5914 12.3605 7.98984 12.8808 8.38593 13.4035C8.8664 14.0339 9.34922 14.6644 9.82968 15.2949C10.2469 15.841 10.6641 16.3847 11.0789 16.9308C11.2828 17.1957 11.4844 17.4629 11.6883 17.7277C11.6906 17.7324 11.6953 17.7347 11.6977 17.7394C11.8687 17.9621 12.1336 17.9621 12.3047 17.7394C12.4711 17.5214 12.6352 17.3058 12.8016 17.0879C13.2 16.5675 13.5984 16.0472 13.9945 15.5246C14.475 14.8941 14.9578 14.2636 15.4383 13.6332C15.8555 13.0871 16.2727 12.5433 16.6875 11.9972C16.8891 11.7324 17.1117 11.4769 17.2969 11.2004C17.2992 11.1957 17.3039 11.1933 17.3062 11.1886C17.475 10.9683 17.2453 10.6589 17.0016 10.6589H13.3219L13.6734 11.0105V3.81754C13.6734 3.48473 13.6852 3.15192 13.6734 2.8191V2.80504C13.6734 2.6152 13.5117 2.45348 13.3219 2.45348H10.6711C10.4883 2.45348 10.3102 2.6152 10.3195 2.80504C10.3312 2.99489 10.4789 3.1566 10.6758 3.1566Z" />
                                                <path d="M20.9297 17.2117V19.9609C20.9297 20.1132 20.939 20.2726 20.9203 20.425C20.9297 20.3617 20.9367 20.3007 20.9461 20.2375C20.9344 20.3101 20.9156 20.3804 20.8875 20.4507L20.9578 20.282C20.9367 20.3289 20.9133 20.3757 20.8875 20.4203C20.843 20.4882 20.8031 20.4836 20.925 20.3781C20.9062 20.3945 20.8898 20.4156 20.8734 20.4343C20.8664 20.4414 20.8195 20.4882 20.8172 20.4859C20.8125 20.4836 20.9859 20.3734 20.8734 20.439C20.8242 20.4695 20.7773 20.4953 20.7234 20.5187L20.8922 20.4484C20.8219 20.4765 20.7539 20.4953 20.6789 20.507C20.7422 20.4976 20.8031 20.4906 20.8664 20.4812C20.6789 20.5047 20.482 20.4906 20.2945 20.4906H3.2906C3.23904 20.4906 3.18982 20.4882 3.13826 20.4812C3.20154 20.4906 3.26248 20.4976 3.32576 20.507C3.2531 20.4953 3.18279 20.4765 3.11248 20.4484L3.28123 20.5187C3.23435 20.4976 3.18748 20.4742 3.14295 20.4484C3.07498 20.4039 3.07967 20.364 3.18514 20.4859C3.16873 20.4672 3.14764 20.4507 3.12889 20.4343C3.12185 20.4273 3.07498 20.3804 3.07732 20.3781C3.07967 20.3734 3.18982 20.5468 3.1242 20.4343C3.09373 20.3851 3.06795 20.3382 3.04451 20.2843L3.11482 20.4531C3.0867 20.3828 3.06795 20.3148 3.05623 20.2398C3.0656 20.3031 3.07264 20.364 3.08201 20.4273C3.0656 20.2984 3.07264 20.1648 3.07264 20.0359V17.2164C3.07264 16.8484 2.7492 16.4968 2.36951 16.5132C1.98748 16.5297 1.66639 16.8226 1.66639 17.2164V19.9726C1.66639 20.0804 1.66404 20.1906 1.66639 20.2984C1.6781 20.9875 2.10232 21.564 2.73982 21.8078C2.96951 21.8968 3.20857 21.9015 3.44998 21.9015H20.7117C21.6047 21.8992 22.3289 21.1937 22.343 20.2984C22.357 19.3703 22.343 18.4422 22.343 17.514V17.2164C22.343 16.8484 22.0195 16.4968 21.6398 16.5132C21.2508 16.525 20.9297 16.8179 20.9297 17.2117Z" />
                                            </svg>
                                        </div>
                                        Company <br /> Desk
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8">
                                <ul className="location-list">
                                    <li>
                                        <span>New York</span>
                                        <a href="https://www.google.com/maps">123 Business St., Suite 456, City, State, ZIP Code, Country</a>
                                    </li>
                                    <li>
                                        <span>Australia</span>
                                        <a href="https://www.google.com/maps">123 Innovation Road, Suite 101Tech City, State, ZIP Code Country</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 d-flex justify-content-lg-end">
                                <div className="newsletter-area">
                                    <h3>Newsletter</h3>
                                    <form className="newsletter-form">
                                        <input type="email" placeholder="Email" />
                                        <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z" />
                                        </svg>
                                    </form>
                                    <div className="social-area">
                                        <h5>Let’s Connect</h5>
                                        <ul className="social-list">
                                            <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                            
                                            <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                            <li><a href="https://www.youtube.com/"><i className="bx bxl-youtube" /></a></li>
                                            <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright-and-social-area">
                        <p>Copyright 2025 <a href="https://www.egenslab.com/">Egens Lab</a> | All Right Reserved.</p>
                        <div className="terms-condition">
                            <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.99981C0 5.83405 0.0632157 5.67508 0.17574 5.55787C0.288264 5.44066 0.44088 5.37481 0.600014 5.37481H8.7518L6.17534 2.69231C6.06267 2.57496 5.99938 2.41578 5.99938 2.24981C5.99938 2.08384 6.06267 1.92467 6.17534 1.80731C6.28801 1.68995 6.44081 1.62402 6.60015 1.62402C6.75948 1.62402 6.91229 1.68995 7.02496 1.80731L10.625 5.55731C10.6809 5.61537 10.7252 5.68434 10.7555 5.76027C10.7857 5.8362 10.8013 5.9176 10.8013 5.99981C10.8013 6.08202 10.7857 6.16342 10.7555 6.23935C10.7252 6.31529 10.6809 6.38426 10.625 6.44231L7.02496 10.1923C6.91229 10.3097 6.75948 10.3756 6.60015 10.3756C6.44081 10.3756 6.28801 10.3097 6.17534 10.1923C6.06267 10.075 5.99938 9.91578 5.99938 9.74981C5.99938 9.58384 6.06267 9.42467 6.17534 9.30731L8.7518 6.62481H0.600014C0.44088 6.62481 0.288264 6.55897 0.17574 6.44176C0.0632157 6.32455 0 6.16557 0 5.99981Z" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3969 1C11.556 1 11.7086 1.06585 11.8212 1.18306C11.9337 1.30027 11.9969 1.45924 11.9969 1.625V10.375C11.9969 10.5408 11.9337 10.6997 11.8212 10.8169C11.7086 10.9342 11.556 11 11.3969 11C11.2378 11 11.0851 10.9342 10.9726 10.8169C10.8601 10.6997 10.7969 10.5408 10.7969 10.375V1.625C10.7969 1.45924 10.8601 1.30027 10.9726 1.18306C11.0851 1.06585 11.2378 1 11.3969 1Z" />
                                </g>
                            </svg>
                            <p>Our Business <a href="#">Policy, Terms &amp; Condition</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Home4Footer
