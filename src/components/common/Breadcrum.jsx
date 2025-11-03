import Link from 'next/link'
import React from 'react'

const Breadcrum = ({ pageTitle, pagename,content="" }) => {
    return (
       
        <div className="breadcrumb-section" style={{backgroundImage: 'linear-gradient(91.45deg, #000000 17.96%, rgba(0, 0, 0, 0.9) 44.49%, rgba(0, 0, 0, 0.8) 67.58%, rgba(0, 0, 0, 0.5) 98.52%), url(/assets/img/inner-pages/breadcrumb-bg1.jpg)'}}>  
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content">
                <span>{content}</span>
                <h1>{pageTitle}</h1>
                <ul className="breadcrumb-list">
                  <li><Link href="/">Home</Link></li>
                  <li>{pagename}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    )
}

export default Breadcrum