import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const FaqPage = () => {
    return (
        <div>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Frequently <br /> Ask &amp; Questions</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        FAQ’s
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Faq Page Banner Start */}
            <div className="industries-page-banner two mb-130">
                <div className="container">
                    <div className="banner-content-wrap">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-xl-4 col-lg-5">
                                <div className="banner-title">
                                    <h2>Don't Hesitate Enquiry.</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <p><span>We believe in transparency and clear communication.</span> Below, you’ll find answers to some of the most common questions we get from clients.</p>
                                    <p>If you have a question that isn’t covered here, feel free to reach out to us directly at <a href="mailto:info@example.com">[info@example.com].</a></p>
                                    <Link href="/contact" className="primary-btn3 three btn-hover">
                                        Enquiry Now
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <svg className="vector" width={1008} height={210} viewBox="0 0 1008 210" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-1 192C84 178.833 282.2 122.2 391 1C471.5 85 704.4 221.8 1008 221" />
                            <path d="M0 242C85 228.833 282.2 172.2 391 51C471.5 135 704.4 270.8 1008 270" />
                            <path d="M0 292C85 278.833 282.2 222.2 391 101C471.5 185 704.4 320.8 1008 320" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Faq Page Banner End */}
            {/* Faq Page Start */}
            <div className="faq-page mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="section-title three text-center mb-60">
                                <h2>Ask &amp; Questions</h2>
                            </div>
                            <div className="faq-wrap two">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What services does your agency offer?</button>
                                        </h5>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                We specialize in a full range of digital services including <span>web design and development, digital marketing, SEO, social media management, content creation, branding, UI/UX design, and more.</span> Visit our <Link href="/service">[Services Page]</Link> for a complete list of what we offer.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">How do you determine project pricing?</button>
                                        </h5>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Project pricing depends on factors like <span>project scope, complexity, timeline, and required resources.</span> We assess your specific needs and provide a customized quote based on the work involved.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">What’s your typical project timeline?</button>
                                        </h5>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Our typical project timeline varies based on the project's complexity, scope, and requirements. Smaller projects may take a few weeks, while larger or more complex ones can take several months.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Can you help redesign an existing website?</button>
                                        </h5>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Yes! We can help redesign your existing website to improve its look, functionality, and performance. Whether you need a modern refresh, better user experience, or enhanced features, we tailor the redesign to meet your goals. Contact us to discuss your vision!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive"> Do you offer SEO services?</button>
                                        </h5>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Yes! We offer SEO services to help improve your website’s visibility, search rankings, and organic traffic. Our services include keyword optimization, technical SEO, content strategy, and performance tracking. Let’s discuss how we can boost your online presence!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">How do you handle branding projects?</button>
                                        </h5>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                We handle branding projects by first understanding your business, target audience, and goals. Our process includes <span>research, strategy development, logo and visual identity creation, and brand messaging.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                        <h5 className="accordion-header" id="flush-headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven"> Can you help with social media management?</button>
                                        </h5>
                                        <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                Yes! We offer social media management services, including content creation, scheduling, engagement, and performance tracking.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Home3Footer />
        </div>
    )
}

export default FaqPage
