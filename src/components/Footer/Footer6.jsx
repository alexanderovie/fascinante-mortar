import Link from 'next/link'
import React from 'react'

const Footer6 = () => {
    return (
        <footer className="footer-section style-6">
            <div className="container">
                <div className="footer-top-area">
                    <div className="footer-top-left-content">
                        <h2>14 Days Free Trial</h2>
                        <p>To get outsanding performance you can free trial of 14 days.</p>
                    </div>
                    <div className="footer-top-right-content">
                        <form className="email-area">
                            <div className="form-inner">
                                <input type="email" placeholder="Enter Your Email" />
                                <button className="primary-btn3 two btn-hover" type="submit">
                                    Start A Free Trial
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </button>
                            </div>
                        </form>
                        <ul>
                            <li>
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.95746 8.18786L5.29446 10.1242C6.12424 8.92552 9.81254 3.0703 11.9333 0.350098C9.73694 4.49886 7.82762 8.82696 6.11038 13.1762C5.86398 13.8 4.98534 13.8107 4.72662 13.1919C3.9086 11.2361 3.02912 9.29246 2.06718 7.404C2.75878 7.26568 3.4963 7.49626 3.95732 8.18786H3.95746Z" />
                                </svg>
                                14 days free trial.
                            </li>
                            <li>
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.95746 8.18786L5.29446 10.1242C6.12424 8.92552 9.81254 3.0703 11.9333 0.350098C9.73694 4.49886 7.82762 8.82696 6.11038 13.1762C5.86398 13.8 4.98534 13.8107 4.72662 13.1919C3.9086 11.2361 3.02912 9.29246 2.06718 7.404C2.75878 7.26568 3.4963 7.49626 3.95732 8.18786H3.95746Z" />
                                </svg>
                                Cancle any time.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-menu-wrap">
                    <div className="row gy-5">
                        <div className="col-xl-4 col-lg-3 col-sm-6">
                            <div className="company-logo-area">
                                <img src="/assets/img/footer-logo3.svg" alt="" />
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
                        <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-center">
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
                        <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-center">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h3>Products</h3>
                                </div>
                                <ul className="widget-list">
                                    <li><a href="#">Finance &amp; Fintech</a></li>
                                    <li><a href="#">Healthcare &amp; Life</a></li>
                                    <li><a href="#">CRM Management</a></li>
                                    <li><a href="#">Task Management</a></li>
                                    <li><a href="#">Travel &amp; Hospitality</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h3>Help</h3>
                                </div>
                                <ul className="widget-list">
                                    <li><a href="#">Contact Sales</a></li>
                                    <li><a href="#">Request A Demo</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">Trust Center</a></li>
                                    <li><a href="#">Travel &amp; Hospitality</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <svg className="line" width={1320} height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                    </svg>
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

export default Footer6
