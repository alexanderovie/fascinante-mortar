import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Header3 />

            <div>
                {/* Breadcrumb Section Start */}
                <div className="breadcrumb-section mb-130">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="banner-content">
                                    <h1>Construction and Manufacturing</h1>
                                    <ul className="breadcrumb-list">
                                        <li><a href="/">Home</a></li>
                                        <li>
                                            <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                            </svg>
                                            Construction and Manufacturing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb Section End */}
                {/* Industry Details Page Start */}
                <div className="industry-details-page mb-130">
                    <div className="container">
                        <div className="details-content-wrap">
                            <div className="post-thumb mb-70">
                                <img src="/assets/img/innerpages/industry-details-thumb-img.jpg" alt="" />
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-10">
                                    <h2>We Focus on Our Hard Work</h2>
                                    <span className="line-break" />
                                    <p>The construction and manufacturing industries are transitioning into the digital age, where online visibility and client engagement play a critical role in growth. Digital strategies in this space focus on showcasing capabilities, building credibility, and generating high-value leads.</p>
                                    <span className="line-break" />
                                    <p>Construction and manufacturing companies also benefit from digital platforms to streamline operations, share project portfolios, and engage with partners and clients effectively.</p>
                                    <span className="line-break" />
                                    <h6>Our Speciality of Constructions :</h6>
                                    <span className="line-break" />
                                    <ul className="listing">
                                        <li>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                            </svg>
                                            Website Design &amp; Development
                                        </li>
                                        <li>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                            </svg>
                                            Search Engine Optimization
                                        </li>
                                        <li>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                            </svg>
                                            Social Media Management
                                        </li>
                                        <li>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                            </svg>
                                            Lead Generation
                                        </li>
                                        <li>
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                                            </svg>
                                            Content Marketing
                                        </li>
                                    </ul>
                                    <span className="line-break" />
                                    <span className="line-break" />
                                    <span className="line-break" />
                                    <blockquote>
                                        <svg width={28} height={127} viewBox="0 0 28 127" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 10L27.7735 0H16.2265L21 10H23ZM22 52L22.725 52.6888L23 52.3993V52H22ZM3 72L2.275 71.3112L0.670689 73H3V72ZM22 72H23V71H22V72ZM21 117L16.2265 127H27.7735L23 117H21ZM21 9V52H23V9H21ZM21.275 51.3112L2.275 71.3112L3.725 72.6888L22.725 52.6888L21.275 51.3112ZM3 73H22V71H3V73ZM21 72V118H23V72H21Z" />
                                        </svg>
                                        <div className="content">
                                            <h4>This era laid the groundwork for a highly connected, always-online consumer culture.</h4>
                                            <div className="author-area">
                                                <h6>Dr. Samuel Nathan</h6>
                                                <span>CEO at Mortar</span>
                                            </div>
                                        </div>
                                        <svg className="quote" width={100} height={74} viewBox="0 0 100 74" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M76.0844 0.333984C62.1979 0.333984 52.1722 11.7089 52.1722 28.5534C52.2591 53.0243 70.802 70.326 97.5533 73.6474C100.031 73.958 100.988 70.5417 98.7054 69.5366C88.4449 65.0074 83.2581 59.2617 82.5886 53.5764C82.0886 49.3275 84.4146 45.6049 87.3406 44.9061C94.9186 43.0987 99.9967 33.734 99.9967 24.0586C99.9967 17.7665 97.4774 11.732 92.993 7.28277C88.5086 2.83354 82.4264 0.333984 76.0844 0.333984ZM23.9123 0.333984C10.0258 0.333984 0 11.7089 0 28.5534C0.0869522 53.0243 18.6298 70.326 45.3811 73.6474C47.8593 73.958 48.8158 70.5417 46.5333 69.5366C36.2727 65.0074 31.0859 59.2617 30.4164 53.5764C29.9164 49.3275 32.2424 45.6049 35.1684 44.9061C42.7464 43.0987 47.8245 33.734 47.8245 24.0586C47.8245 17.7665 45.3052 11.732 40.8208 7.28277C36.3364 2.83354 30.2542 0.333984 23.9123 0.333984Z" />
                                        </svg>
                                    </blockquote>
                                </div>
                            </div>
                            <span className="line-break" />
                            <span className="line-break" />
                            <span className="line-break" />
                            <div className="img-grp">
                                <div className="row g-lg-4 g-md-3 g-4">
                                    <div className="col-lg-3 col-md-3">
                                        <img src="/assets/img/innerpages/industry-details-img1.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <img src="/assets/img/innerpages/industry-details-img2.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                        <img src="/assets/img/innerpages/industry-details-img3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <span className="line-break" />
                            <span className="line-break" />
                            <span className="line-break" />
                            <div className="row justify-content-center mb-130">
                                <div className="col-xl-8 col-lg-10">
                                    <h2>Our Goal, Our Achievement</h2>
                                    <span className="line-break" />
                                    <p>To drive qualified leads, enhance brand reputation, and showcase industry expertise, helping companies stand out in a competitive market. By using digital tools, construction and manufacturing firms can also streamline project collaboration, improve client communication, and showcase their work to a broader audience.</p>
                                    <div className="tag-and-social-area">
                                        <div className="tag-area">
                                            <h6>Tag:</h6>
                                            <ul className="tag-list">
                                                <li><Link href="/industry">Manufacture</Link></li>
                                                <li><Link href="/industry">Renovation</Link></li>
                                            </ul>
                                        </div>
                                        <div className="social-area">
                                            <h6>Share:</h6>
                                            <ul className="social-list">
                                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                                              
                                                <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-10">
                                    <div className="details-pagination">
                                        <div className="single-pagination">
                                            <Link className="pagination-btn" href="/industry/details">
                                                <img src="/assets/img/innerpages/details-pagination-btn-bg3.png" alt="" />
                                                <div className="btn-content">
                                                    <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                                                    </svg>
                                                    Prev
                                                </div>
                                            </Link>
                                            <div className="content">
                                                <h6><Link href="/industry/details">Government &amp; Public Sector</Link></h6>
                                            </div>
                                        </div>
                                        <div className="single-pagination two text-end">
                                            <div className="content">
                                                <h6><Link href="/industry/details">Telecommunications</Link></h6>
                                            </div>
                                            <Link className="pagination-btn" href="/industry/details">
                                                <img src="/assets/img/innerpages/details-pagination-btn-bg4.png" alt="" />
                                                <div className="btn-content">
                                                    Next
                                                    <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                        <svg className="divider-line" width={6} height={88} viewBox="0 0 6 88" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 83L0.113249 88H5.88675L3.5 83H2.5ZM2.5 4.5V83.5H3.5V4.5H2.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Industry Details Page End */}
            </div>


            <Home3Footer />
        </>
    )
}

export default page
