import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React from 'react'

const PricingPage = () => {
    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content">
                                <h1>Cost Breakdown</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Pricing Plan
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Pricing Plan Page Start */}
            <div className="pricing-plan-page mb-130">
                <div className="container">
                    <div className="nav-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill" data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly" aria-selected="false">Yearly</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
                            <div className="row gy-5">
                                <div className="col-lg-4 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="pricing-plan-card magnetic-item">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>Standard</h4>
                                                <span>10% off</span>
                                            </div>
                                            <h2>$299 <sub>/per month</sub></h2>
                                        </div>
                                        <p>The <strong>Standard Plan</strong> provides a balanced offering with both content creation, SEO, and social media management.</p>
                                        <Link href="/contact" className="primary-btn3 white-bg btn-hover">
                                            7 Days for Free
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Custom UX/UI Design
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Full On-Page SEO
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Social Media Management (3 Channels)
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Full Campaign Management
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Phone &amp; Email Support
                                                </li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="pricing-plan-card magnetic-item premium">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>Premium</h4>
                                                <span>20% off</span>
                                            </div>
                                            <h2>$499 <sub>/per month</sub></h2>
                                        </div>
                                        <p>The <strong>Premium Plan</strong> is designed for businesses seeking comprehensive digital solutions, from advanced website design.</p>
                                        <Link href="/contact" className="primary-btn3 btn-hover">
                                            14 Days for Free
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Advanced Custom Design
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    On-Page + Off-Page SEO
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Advanced Strategy + Ads (5 Channels)
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Advanced PPC Campaigns
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    24/7 Phone, Email, &amp; Chat
                                                </li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="pricing-plan-card magnetic-item enterprise">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>Enterprise</h4>
                                            </div>
                                            <h2>Let’s Talk</h2>
                                        </div>
                                        <p>The <strong>Enterprise Plan</strong> is ideal for large businesses or corporations that require a full-scale digital marketing strategy.</p>
                                        <Link href="/contact" className="primary-btn3 two btn-hover">
                                            Let’s Talk
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Fully Tailored Design + Dev
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Full SEO + Content Strategy
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Dedicated Social Manager + Strategy
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Comprehensive Ads Strategy
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Dedicated Account Manager
                                                </li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                            <div className="row gy-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-plan-card magnetic-item">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>Standard</h4>
                                                <span>10% off</span>
                                            </div>
                                            <h2>$799 <sub>/per year</sub></h2>
                                        </div>
                                        <p>The <strong>Standard Plan</strong> provides a balanced offering with both content creation, SEO, and social media management.</p>
                                        <Link href="/contact" className="primary-btn3 white-bg btn-hover">
                                            7 Days for Free
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Custom UX/UI Design
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Full On-Page SEO
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Social Media Management (3 Channels)
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Full Campaign Management
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Phone &amp; Email Support
                                                </li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-plan-card magnetic-item premium">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>Premium</h4>
                                                <span>20% off</span>
                                            </div>
                                            <h2>$1499 <sub>/per year</sub></h2>
                                        </div>
                                        <p>The <strong>Premium Plan</strong> is designed for businesses seeking comprehensive digital solutions, from advanced website design.</p>
                                        <Link href="/contact" className="primary-btn3 btn-hover">
                                            14 Days for Free
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Advanced Custom Design
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    On-Page + Off-Page SEO
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Advanced Strategy + Ads (5 Channels)
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Advanced PPC Campaigns
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    24/7 Phone, Email, &amp; Chat
                                                </li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-plan-card magnetic-item enterprise">
                                        <div className="pricing-plan-top">
                                            <div className="title-area">
                                                <h4>Enterprise</h4>
                                            </div>
                                            <h2>Let’s Talk</h2>
                                        </div>
                                        <p>The <strong>Enterprise Plan</strong> is ideal for large businesses or corporations that require a full-scale digital marketing strategy.</p>
                                        <Link href="/contact" className="primary-btn3 two btn-hover">
                                            Let’s Talk
                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <span />
                                        </Link>
                                        <div className="included-feature-area">
                                            <h6>What’s Included of Standard :</h6>
                                            <ul>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Fully Tailored Design + Dev
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Full SEO + Content Strategy
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Dedicated Social Manager + Strategy
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Comprehensive Ads Strategy
                                                </li>
                                                <li>
                                                    <svg width={12} height={16} viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5236 9.35783L4.0516 11.5708C4.99992 10.2009 9.21512 3.50919 11.6388 0.400391C9.12872 5.14183 6.94664 10.0882 4.98408 15.0588C4.70248 15.7717 3.69832 15.7839 3.40264 15.0767C2.46776 12.8415 1.46264 10.6202 0.363281 8.46199C1.15368 8.30391 1.99656 8.56743 2.52344 9.35783H2.5236Z" />
                                                    </svg>
                                                    Dedicated Account Manager
                                                </li>
                                            </ul>
                                        </div>
                                        <svg className="vector" width={141} height={146} viewBox="0 0 141 146" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <circle cx="95.5" cy="-2.5" r={95} strokeDasharray="4 4" />
                                                <circle cx="148.5" cy="50.5" r={95} strokeDasharray="4 4" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing Plan Page End */}
            <Home3Footer />
        </>
    )
}

export default PricingPage
