'use client'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useEffect } from 'react'

const InterActiveLinkPortfolioPage = () => {
    useEffect(()=>{
        document.querySelectorAll(".interactive-link").forEach(link => {
            link.addEventListener("mouseover", function () {
              document.querySelectorAll(".interactive-item").forEach(item => {
                item.classList.remove("active");
              });
              const parentItem = link.closest(".interactive-item");
              if (parentItem) {
                parentItem.classList.add("active");
              }
            });
          });
    })
    return (
        <>
            <Header3 />
            <div className="portfolio-interactive-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-branding-tab" data-bs-toggle="pill" data-bs-target="#pills-branding" type="button" role="tab" aria-controls="pills-branding" aria-selected="false">Branding</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-ui-tab" data-bs-toggle="pill" data-bs-target="#pills-ui" type="button" role="tab" aria-controls="pills-ui" aria-selected="false">UI/UX</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-development-tab" data-bs-toggle="pill" data-bs-target="#pills-development" type="button" role="tab" aria-controls="pills-development" aria-selected="false">Development</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-ecommerce-tab" data-bs-toggle="pill" data-bs-target="#pills-ecommerce" type="button" role="tab" aria-controls="pills-ecommerce" aria-selected="false">Ecommerce</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                                    <ul className="interactive-list">
                                        <li className="interactive-item active">
                                            <Link href="/portfolio/details" className="interactive-link">Interactive Design.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Brand Amplifiers.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Digital Masterpieces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg4.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Engage360.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Seamless Interfaces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg2.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Creative Spheer</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-branding" role="tabpanel" aria-labelledby="pills-branding-tab">
                                    <ul className="interactive-list">
                                        <li className="interactive-item active">
                                            <Link href="/portfolio/details" className="interactive-link">Interactive Design.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Brand Amplifiers.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Digital Masterpieces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg4.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Engage360.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Seamless Interfaces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg2.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Creative Spheer</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-ui" role="tabpanel" aria-labelledby="pills-ui-tab">
                                    <ul className="interactive-list">
                                        <li className="interactive-item active">
                                            <Link href="/portfolio/details" className="interactive-link">Interactive Design.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Brand Amplifiers.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Digital Masterpieces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg4.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Engage360.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Seamless Interfaces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg2.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Creative Spheer</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">
                                    <ul className="interactive-list">
                                        <li className="interactive-item active">
                                            <Link href="/portfolio/details" className="interactive-link">Interactive Design.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Brand Amplifiers.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Digital Masterpieces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg4.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Engage360.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Seamless Interfaces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg2.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Creative Spheer</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="pills-ecommerce" role="tabpanel" aria-labelledby="pills-ecommerce-tab">
                                    <ul className="interactive-list">
                                        <li className="interactive-item active">
                                            <Link href="/portfolio/details" className="interactive-link">Interactive Design.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Brand Amplifiers.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Digital Masterpieces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-horizontal-bg4.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Engage360.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Seamless Interfaces.</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg2.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li className="interactive-item">
                                            <Link href="/portfolio/details" className="interactive-link">Creative Spheer</Link>
                                            <span>/</span>
                                            <div className="interactive-img">
                                                <img src="/assets/img/innerpages/portfolio-interactive-bg3.jpg" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="social-area">
                                <Link href="/portfolio/classic">Visit More Portfolio
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                                <ul className="social-list">
                                    <li><a href="https://dribbble.com/">Dribbble</a></li>
                                    <li><a href="https://www.behance.net/">Behance</a></li>
                                    <li><a href="https://www.pinterest.com/">Pinterest</a></li>
                                    <li><a href="https://www.producthunt.com/">Product Hunt</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InterActiveLinkPortfolioPage
