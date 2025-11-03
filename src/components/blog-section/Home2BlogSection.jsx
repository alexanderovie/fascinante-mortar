import Link from 'next/link'
import React from 'react'

const Home2BlogSection = () => {
  return (
    <div className="home2-blog-section mb-130">
      <div className="container">
        <div className="row mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-lg-12">
            <div className="section-title two text-center">
              <span>Latest Article</span>
              <h2>News &amp; Insight</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="blog-card magnetic-item">
              <Link href="/news-insight-grid/details" className="blog-img">
                <img src="/assets/img/home2/blog-img1.jpg" alt="" />
              </Link>
              <div className="blog-content">
                <div className="blog-category">
                  <Link href="/news-insight-grid">Tax Payment</Link>
                </div>
                <h4><Link href="/news-insight-grid/details">The Role of Fintech in the Post-Pandemic Economy.</Link></h4>
                <ul className="date-and-time">
                  <li><Link href="/news-insight-grid">02 Semtepber, 2024</Link></li>
                  <li>4 min read</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="blog-card magnetic-item">
              <Link href="/news-insight-grid/details" className="blog-img">
                <img src="/assets/img/home2/blog-img2.jpg" alt="" />
              </Link>
              <div className="blog-content">
                <div className="blog-category">
                  <Link href="/news-insight-grid">Business Growth</Link>
                </div>
                <h4><Link href="/news-insight-grid/details">The Intersection of Fintech and Insurance.</Link></h4>
                <ul className="date-and-time">
                  <li><Link href="/news-insight-grid">02 August, 2024</Link></li>
                  <li>2 min read</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="blog-card magnetic-item">
              <Link href="/news-insight-grid/details" className="blog-img">
                <img src="/assets/img/home2/blog-img3.jpg" alt="" />
              </Link>
              <div className="blog-content">
                <div className="blog-category">
                  <Link href="/news-insight-grid">Digital Payment</Link>
                </div>
                <h4><Link href="/news-insight-grid/details">Supporting Small Businesses in Digital Age.</Link></h4>
                <ul className="date-and-time">
                  <li><Link href="/news-insight-grid">02 Semtepber, 2024</Link></li>
                  <li>5 min read</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home2BlogSection
