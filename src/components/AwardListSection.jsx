"use client"
import React, { useState } from 'react'

const AwardListSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const awards = [
        { title: 'Digital Innovation', platform: 'Digigo Platform', year: '2024' },
        { title: 'InnovateXcel Award', platform: 'Microsoft Platform', year: '2023' },
        { title: 'Digital Vanguard', platform: 'Adobe Platform', year: '2022' },
        { title: 'Mastermind', platform: 'Behance Platform', year: '2021' },
        { title: 'Digital Dynamo', platform: 'Linkedin Platform', year: '2020' },];
    return (
        <div className="award-list-section mb-130">
            <div className="container">
                <div className="row justify-content-center mb-70">
                    <div className="col-lg-5">
                        <div className="section-title three">
                            <h2>Our Achievements</h2>
                            <p>We’re the greatest part on the digital platform &amp; to achieve many awards.</p>
                        </div>
                    </div>
                </div>
                <div className="award-wrap">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="award-img-group">
                                {awards.map((_, index) => (
                                    <li key={index} className={index === activeIndex ? 'active' : ''}>
                                        <div className="award-img">
                                            <img src={`/assets/img/innerpages/award-img-0${index + 1}.png`} alt="" className="light" />
                                            <img src={`/assets/img/innerpages/award-img-0${index + 1}-dark.png`} alt="" className="dark" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-8">
                            <table className="award-table two">
                                <tbody>
                                    {awards.map((award, index) => (
                                        <tr
                                            key={index}
                                            className="wow animate fadeInLeft"
                                            data-wow-delay={`${200 + index * 200}ms`}
                                            data-wow-duration="1500ms"
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <td><a href="#">{award.title}</a></td>
                                            <td>{award.platform}</td>
                                            <td><span>{award.year}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardListSection
