"use client"
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Home5ProcessSection = () => {
    const [state, setState] = React.useState({
        series: [
            {
                name: 'Retention Rate',
                color: "#028D61",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            },
            {
                name: 'Setisfaction Rate',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                labels: {
                    style: {
                        colors: '#FFFFFF', // <-- white category label text
                        fontSize: '14px'
                    }
                }
            },
            yaxis: {

                labels: {
                    style: {
                        colors: '#FFFFFF', // <-- white y-axis text
                        fontSize: '14px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                theme: 'dark', // use 'light' or 'dark' based on background
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            legend: {
                position: 'top',
                labels: {
                    colors: '#FFFFFF' // <-- legend label text color
                }
            }
        }
    });


    return (
        <>
            <div className="home5-process-section">
                <div className="container">
                    <div className="row g-4 align-items-center justify-content-between mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-5 col-md-7">
                            <div className="section-title four">
                                <h2>How to Solve the Problems.</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 d-flex justify-content-lg-end">
                            <div className="result-area">
                                <span>100%</span>
                                <p>Client Satisfaction of Our First Priority.</p>
                                <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="process-wrapper mb-50 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="row gy-md-5 gy-4">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="process-card3">
                                    <div className="step-no">
                                        <span>Step</span>
                                        <strong>01</strong>
                                    </div>
                                    <h5>Strategic Planning &amp; Solution.</h5>
                                    <p>Included <strong>meetings</strong> and <strong>questionnaires</strong> to gather key information.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                <div className="process-card3">
                                    <div className="step-no">
                                        <span>Step</span>
                                        <strong>02</strong>
                                    </div>
                                    <h5>Monitoring &amp; Optimization</h5>
                                    <p>Included <strong>meetings</strong> and <strong>questionnaires</strong> to gather key information.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                <div className="process-card3">
                                    <div className="step-no">
                                        <span>Step</span>
                                        <strong>03</strong>
                                    </div>
                                    <h5>Training &amp; Knowledge Transfer</h5>
                                    <p>A comprehensive report is delivered, outlining the results, <strong>ROI.</strong></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end">
                                <div className="process-card3">
                                    <div className="step-no">
                                        <span>Step</span>
                                        <strong>04</strong>
                                    </div>
                                    <h5>Final Documentation</h5>
                                    <p>Included <strong>meetings</strong> and <strong>questionnaires</strong> to gather key information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-connection-wrap">
                            <svg width={366} height={78} viewBox="0 0 366 78" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 78L5.95144 73.0379L0.178422 72.9629L3 78ZM362.5 73L360.113 78H365.887L363.5 73H362.5ZM3.55839 73.5069L4.24359 20.7468L3.24368 20.7338L2.55848 73.4939L3.55839 73.5069ZM23.7419 1.5H343V0.5H23.7419V1.5ZM362.5 21V73.5H363.5V21H362.5ZM343 1.5C353.77 1.5 362.5 10.2304 362.5 21H363.5C363.5 9.67816 354.322 0.5 343 0.5V1.5ZM4.24359 20.7468C4.38216 10.0769 13.0712 1.5 23.7419 1.5V0.5C12.5239 0.5 3.38935 9.51671 3.24368 20.7338L4.24359 20.7468Z" />
                            </svg>
                            <div className="icon">
                                <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.1426 7.71472C18.8865 7.71472 16.0699 11.1945 13.585 14.2654C11.462 16.8887 9.45714 19.3658 7.01537 19.3658C4.47734 19.3658 2.91906 16.7573 2.91906 14.8873C2.91906 13.1534 4.62852 10.6338 7.30773 10.6338C9.90747 10.6338 11.2619 12.7145 11.3302 12.8211C11.5329 13.1488 11.857 13.383 12.2318 13.4726C12.6065 13.5622 13.0015 13.5 13.3306 13.2994C13.4943 13.1997 13.6367 13.0687 13.7497 12.9139C13.8628 12.7591 13.9443 12.5836 13.9895 12.3974C14.0347 12.2111 14.0428 12.0178 14.0132 11.8284C13.9837 11.639 13.9172 11.4573 13.8175 11.2936C13.7284 11.1478 11.5874 7.71492 7.30773 7.71492C3.00134 7.71492 0 11.4953 0 14.8875C0 18.3865 2.88112 22.2851 7.01517 22.2851C10.8493 22.2851 13.3937 19.1417 15.8538 16.1017C18.1296 13.2902 20.2795 10.634 23.1426 10.634C24.8461 10.634 25.9654 11.2119 26.5637 12.3994C27.0821 13.4298 27.0817 14.5959 27.0813 14.9999C27.0813 15.2315 26.9589 16.3934 26.3922 17.4397C25.7459 18.6315 24.8285 19.1863 23.5027 19.1863C20.8328 19.1863 19.3904 17.4508 18.8472 16.7972C18.706 16.6271 18.6043 16.5047 18.4685 16.3884C18.1745 16.1367 17.7925 16.012 17.4066 16.0418C17.0207 16.0716 16.6624 16.2533 16.4104 16.5472C16.1682 16.8298 16.0432 17.1943 16.0609 17.5661C16.0787 17.9378 16.2378 18.2888 16.5059 18.547C16.5322 18.577 16.564 18.6163 16.6017 18.662C17.3097 19.514 19.4623 22.1049 23.5021 22.1049C28.412 22.1049 29.9998 17.3174 29.9998 14.9799C30.0002 13.4911 29.7214 12.1815 29.1702 11.0865C28.3964 9.54879 26.7221 7.71472 23.1426 7.71472Z" />
                                </svg>
                            </div>
                        </div>
                        <svg className="line" width={1320} height={6} viewBox="0 0 1320 6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                        </svg>
                    </div>
                    <div className="contact-area">
                        <p>To More Furthure Information Get to Click on the Button</p>
                        <Link href="/contact">
                            Contact Us
                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home5-graph-section mb-130">
                <div className="row g-0">
                    <div className="col-xl-6 col-lg-5 d-lg-block d-none">
                        <div className="graph-section-img">
                            <img src="/assets/img/home5/graph-section-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="grap-wrapper">
                            <h4>Client Satisfaction Rate</h4>
                            <div className="graph-chart">
                                <h6>Consulting Rate (in percentage)</h6>
                                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home5ProcessSection
