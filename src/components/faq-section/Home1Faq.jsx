import Link from 'next/link'
import React from 'react'

const Home1Faq = () => {
    return (
        <div className="home1-faq-section mb-130">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-7 order-lg-1 order-2">
                        <div className="faq-wrap">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            01. Do you provide design and architectural services?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we offer comprehensive design and architectural services to meet your construction needs, ensuring a seamless process from concept to completion.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            02. Is Vernex suitable for my business?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Discover if Vernex is the right fit for your business by exploring its tailored solutions for various industries and unique needs.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            03. What is your typical project timeline?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Discover the typical project timeline for our construction services, outlining each phase from planning to completion, ensuring timely and efficient project delivery.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            04. How do you handle permits and inspections?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We handle all necessary permits and inspections for your project, ensuring full compliance with local regulations and smooth progress throughout the construction process.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            05. How do you handle waste disposal and recycling?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            At our construction sites, we prioritize responsible waste disposal and recycling by adhering to local regulations, implementing sustainable practices, and partnering with certified waste management services to minimize environmental impact.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            06. How do ensure buildings are structurally safe?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Learn how we prioritize safety in construction by following strict structural guidelines and using high-quality materials to ensure buildings are secure and reliable.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="title-area">
                            <div className="section-title">
                                <span>Ask the Builder</span>
                                <h2>Curious About Vernex?</h2>
                                <p>We understand your needs and delivery digitaloi marketing through unique selling oneto homeles proposition Our team of expert.</p>
                            </div>
                            <div className="button-area">
                                <Link href="/contact" className="primary-btn2">
                                    <span>
                                        Contact Us Now
                                        <svg viewBox="0 0 13 20">
                                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home1Faq