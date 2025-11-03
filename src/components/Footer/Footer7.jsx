"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Footer7 = () => {
    useEffect(()=>{
        const celebrateBtn = document.getElementById('celebrateBtn');

	if (celebrateBtn) {
		celebrateBtn.addEventListener('mouseenter', () => {
			// trigger confetti
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 }
			});

			// button animation
			celebrateBtn.style.transform = 'scale(0.95)';
		});

		celebrateBtn.addEventListener('mouseleave', () => {
			celebrateBtn.style.transform = 'scale(1)';
		});
	}
    })
    return (
        <footer className="footer-section style-7">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="footer-top">
                            <h2>Let’s Talk About Your Dreams.</h2>
                            <a href="mailto:info@examplegmail.com" id="celebrateBtn" className="mail-area">info@examplegmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-menu-wrap">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="company-logo-area">
                                <img src="/assets/img/footer-logo3.svg" alt="" />
                                <h4>To Create Digital Art &amp; Modern Design.</h4>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4 d-flex justify-content-lg-center">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul className="widget-list">
                                    <li><Link href="/about">About us</Link></li>
                                    <li><Link href="/portfolio/classic">My Portfolio</Link></li>
                                    <li><Link href="/portfolio">News &amp; Insight</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-center">
                            <div className="footer-widget">
                                <div className="widget-title">
                                    <h3>More Work</h3>
                                </div>
                                <ul className="widget-list">
                                    <li><a href="https://dribbble.com/">Dribbble</a></li>
                                    <li><a href="https://www.behance.net/">Behance</a></li>
                                    <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                                    <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                                    <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                            <div className="newsletter-area">
                                <h3>Newsletter</h3>
                                <form className="newsletter-form">
                                    <input type="email" placeholder="Email" />
                                    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z" />
                                    </svg>
                                </form>
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

export default Footer7
