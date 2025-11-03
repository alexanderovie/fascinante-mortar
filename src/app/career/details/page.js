import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import React from 'react'

const page = () => {
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Hiring of <br /> UI/UX Designer</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Career Details
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Modal */}
            <div className="modal fade job-form-modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">Apply to the position of
                                UI/UX Designer</h2>
                        </div>
                        <button type="button" className="modal-close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-x-lg" />
                        </button>
                        <div className="modal-body">
                            <form>
                                <div className="single-info mb-50">
                                    <h4 className="info-title">Personal Info</h4>
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <label>Full Name</label>
                                                <input type="text" placeholder="Mr. Daniel Scoot" aria-autocomplete="list" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Your Email*</label>
                                                <input type="email" placeholder="info@example.com" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Phone Number</label>
                                                <input type="text" placeholder="+920- 5566 **** ****" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-info mb-50">
                                    <h5 className="info-title">Career Info</h5>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Current Job</label>
                                                <input type="text" placeholder="Egenslab" aria-autocomplete="list" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Current Position</label>
                                                <input type="text" placeholder="UI/UX Designer" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Experiences*</label>
                                                <input type="number" placeholder="2 Years" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Current Salary</label>
                                                <input type="text" placeholder="$90K" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Applied Position*</label>
                                                <select>
                                                    <option>Digital Marketer</option>
                                                    <option>UX/UI Designer</option>
                                                    <option>Frontend Developer</option>
                                                    <option>Software Engineer</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Expecetd Salary*</label>
                                                <input type="text" placeholder="Type amount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-info mb-50">
                                    <h5 className="info-title">Key Documents</h5>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-inner mb-25">
                                                <label>Cover Letter*</label>
                                                <textarea placeholder="Write cover letter" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner mb-25">
                                                <label>Upload Your CV*</label>
                                                <div className="file-upload-area">
                                                    <div className="icon">
                                                        <img src="/assets/img/innerpages/icon/pdf-icon.svg" alt="" />
                                                    </div>
                                                    <input type="file" className="custom-upload" />
                                                    <div className="check-icon">
                                                        <i className="bi bi-check" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="contactCheck1" />
                                                    <label className="form-check-label" htmlFor="contactCheck1">
                                                        By applying, you will agree our <span>privacy-policy &amp; terms conditions.</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-inner">
                                    <button className="primary-btn3 three btn-hover" type="submit">
                                        Apply Position
                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Career Details Page Start */}
            <div className="career-details-page mb-130">
                <div className="container">
                    <div className="row gy-5 justify-content-between">
                        <div className="col-xl-6 col-lg-7">
                            <div className="career-details-content">
                                <h4>Job Overview</h4>
                                <span className="line-break" />
                                <p>We are looking for a talented and passionate UI/UX Designer to join our team at Mortar. As a UI/UX Designer, you will collaborate with our clients, developers, and marketing team to create intuitive, beautiful, and user-centered digital experiences. You'll be responsible for transforming client needs and project requirements into elegant designs that deliver a seamless user experience across various platforms.</p>
                                <span className="line-break" />
                                <p>If you are driven by a passion for design, a user-first mindset, and the ability to solve complex challenges creatively, we want you to join our growing team!</p>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h4>Key Responsibilities</h4>
                                <span className="line-break" />
                                <ul>
                                    <li><span>Research &amp; Strategy:</span> Conduct user research, interviews, and analysis to understand user needs, motivations, and pain points.</li>
                                    <li><span>User-Centered Design:</span> Create wireframes, storyboards, user flows, process flows, and site maps based on user needs and project goals.</li>
                                    <li><span>Prototyping &amp; Interaction:</span> Develop prototypes and mockups to visualize and test design concepts and interactions before finalizing designs.</li>
                                    <li><span>Collaborate with Developers:</span> Work closely with front-end developers to ensure design feasibility and consistency across all digital platforms.</li>
                                    <li><span>Usability Testing:</span> Plan and conduct usability testing sessions, and iterate designs based on user feedback and analytics.</li>
                                    <li><span>Client Presentations:</span> Present design concepts, user flows, and interactive prototypes to clients and stakeholders.</li>
                                </ul>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h4>Qualifications &amp; Skills</h4>
                                <span className="line-break" />
                                <ul>
                                    <li><span>Experience:</span> Proven work experience as a UI/UX Designer or in a
                                        similar role.</li>
                                    <li><span>Tools:</span> Proficiency in design tools like Adobe XD, Figma, Sketch, InVision, or similar software.</li>
                                    <li><span>Development Knowledge:</span> Basic understanding of front-end development languages like HTML, CSS, and JavaScript (preferred, but not required).</li>
                                    <li><span>Design Portfolio:</span> A strong portfolio showcasing your UI/UX design projects, demonstrating your process, creativity, and attention to detail.</li>
                                    <li><span>Problem-Solving:</span> Strong problem-solving skills with a focus on user-centered design solutions.</li>
                                    <li><span>Collaboration:</span> Ability to work collaboratively in a team environment with developers, project managers, and other designers.</li>
                                </ul>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h4>Why Join Us?</h4>
                                <span className="line-break" />
                                <ul>
                                    <li>Generous vacation and paid time off.</li>
                                    <li>Work with industries topper &amp; grow-up yourself gradually.</li>
                                    <li>Learning and development opportunities.</li>
                                    <li>Remote and flexible work options.</li>
                                </ul>
                                <span className="line-break" />
                                <span className="line-break" />
                                <span className="line-break" />
                                <h4>How to Apply</h4>
                                <span className="line-break" />
                                <p>Ready to take the next step? Send your resume and portfolio (if applicable) to <a href="mailto:info@example.com">info@example.com</a>. Make sure to include a cover letter explaining why you’d be a great fit for the role and our team."</p>
                                <div className="job-apply-area">
                                    <div className="vector-area">
                                        <img src="/assets/img/innerpages/job-apply-area-circle-vector.svg" alt="" className="circle" />
                                        <img src="/assets/img/innerpages/job-apply-area-vector.png" alt="" className="vector" />
                                    </div>
                                    <div className="contact-area">
                                        <svg width={38} height={42} viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 41L37 1M37 1C37 1 19.3353 1 10.9 1M37 1V26.2222" stroke="url(#paint0_linear_4004_2307)" strokeWidth="1.5" strokeLinecap="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_4004_2307" x1={19} y1={1} x2={1} y2="42.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="#1C1A1E" />
                                                    <stop offset={1} stopColor="#C1E8CF" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="contact">
                                            <span>Apply by Email</span>
                                            <a href="mailto:info@examplegmail.com">info@examplegmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="career-details-sidebar">
                                <h4>Ready to grow your career with us?</h4>
                                <a href="#" className="primary-btn3 three btn-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Apply Position
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </a>
                                <p>We’re ready to meet with you &amp; opptimistic you will doing great well!</p>
                                <div className="form-inner2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="contactCheck22" />
                                        <label className="form-check-label" htmlFor="contactCheck22">
                                            By applying, you will agree our <span>privacy-policy &amp; terms conditions.</span>.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Career Details Page End */}
            <Home3Footer />
        </>
    )
}

export default page
