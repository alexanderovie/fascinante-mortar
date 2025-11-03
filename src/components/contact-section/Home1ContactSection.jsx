"use client"
import ThrowableItems from "@/utils/ThrowableItems"
import Counter from "../common/Counter"
import { useRef } from "react";



const Home1ContactSection = () => {
    const ref3 = useRef(null);
    return (
        <>
            <div className="home1-contact-section mb-80">
                <div className="container">
                    <div className="row gy-md-5 gy-4">
                        <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="contact-area">
                                <div className="section-title mb-50">
                                    <span>Free Consultation</span>
                                    <h2>We’d Love to Hear You!</h2>
                                </div>
                                <div className="arrow-and-contact-list">
                                    <svg className="arrow" width={6} height={355} viewBox="0 0 6 355" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM3 355L5.88675 350H0.113249L3 355ZM2.5 4.5V151H3.5V4.5H2.5ZM2.5 151V350.5H3.5V151H2.5Z" />
                                    </svg>
                                    <ul className="contact-list">
                                        <li className="single-contact">
                                            <h5>Chat with US</h5>
                                            <div className="contact-content-wrap">
                                                <div className="icon">
                                                    <img src="/assets/img/home1/icon/contact-mail-icon.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <span>Send Us Mail</span>
                                                    <a href="mailto:info@example.com">info@example.com</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="single-contact">
                                            <h5>Call Us</h5>
                                            <div className="contact-content-wrap">
                                                <div className="icon">
                                                    <img src="/assets/img/home1/icon/contact-call-icon.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <span>Call 24/7 Hours</span>
                                                    <a href="tel:+997636844563">+99-763 684 4563</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="single-contact location">
                                            <h5>Visit Office</h5>
                                            <div className="contact-content-wrap">
                                                <div className="icon">
                                                    <img src="/assets/img/home1/icon/contact-location-icon.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <a href="https://www.google.com/maps">1234 Innovation Drive, Suite 500 San Francisco, CA 94107 United States</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="contact-form-wrap">
                                <form>
                                    <div className="row g-4 mb-40">
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Full name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Company</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Company Email</label>
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Phone</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner2">
                                                <label>How can We Assist You?</label>
                                                <ul>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                                                            <label className="form-check-label" htmlFor="contactCheck">
                                                                IT Consulitng
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck2" />
                                                            <label className="form-check-label" htmlFor="contactCheck2">
                                                                UI/UX Design
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck3" />
                                                            <label className="form-check-label" htmlFor="contactCheck3">
                                                                Cloud Solution
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck4" />
                                                            <label className="form-check-label" htmlFor="contactCheck4">
                                                                AI &amp; Machine Learning
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck5" />
                                                            <label className="form-check-label" htmlFor="contactCheck5">
                                                                Technical Support
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck6" />
                                                            <label className="form-check-label" htmlFor="contactCheck6">
                                                                DevOps Services
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <label>Message</label>
                                                <textarea placeholder="Write your message" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="primary-btn1">
                                        <span>Submit
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        <span>Submit
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home1-company-info-section mb-80">
                <div className="container">
                    <div className="row mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span>Company Info</span>
                                <h2>Number of Key</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-7 d-md-block d-none wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="feature-wrap" id="feature-wrap">
                                <div className="title-area">
                                    <h3>Grow Your Business on Digital Platform.</h3>
                                </div>
                                {/* <span className="throwable-item">Machine Learning</span>
                                <span className="pink throwable-item">Professional Expert</span>
                                <span className="blue throwable-item">06 Global Branches</span>
                                <span className="green throwable-item">99% Success</span>
                                <span className="throwable-item">Data Analytics</span>
                                <span className="light-blue throwable-item">Product Design</span>
                                <span className="light-green throwable-item">IT Consulting</span> */}
                                <ThrowableItems />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="counter-wrap">
                                <div className="counter-content-area">
                                    <div className="icon">
                                        <img src="/assets/img/home1/icon/folder-icon.svg" alt="" />
                                    </div>
                                    <div className="counter-content">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={10}
                                                speed={50}
                                                forwardedRef={ref3}
                                                as="h2"
                                                className="counter"
                                            />
                                            <span>K+</span>
                                        </div>
                                        <p>Succesfully Project Delivery.</p>
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

export default Home1ContactSection
