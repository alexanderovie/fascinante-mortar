"use client"
import React, { useRef } from 'react'
import Counter from '../common/Counter'

const Home6IntegrationSection = () => {
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    return (
        <>
            <div className="home6-counter-section mb-130">
                <img src="/assets/img/home6/home6-counter-section-vector.svg" alt="" className="vector light" />
                <img src="/assets/img/home6/home6-counter-section-vector-dark.svg" alt="" className="vector dark" />
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 divider">
                            <div className="single-counter">
                                <div className="icon">
                                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M15.9375 7.96875C15.9375 7.72011 15.8387 7.48165 15.6629 7.30584C15.4871 7.13002 15.2486 7.03125 15 7.03125C14.7514 7.03125 14.5129 7.13002 14.3371 7.30584C14.1613 7.48165 14.0625 7.72011 14.0625 7.96875V16.4025L12.0502 14.3691C11.9635 14.2816 11.8605 14.212 11.747 14.1643C11.6335 14.1166 11.5118 14.0917 11.3886 14.0911C11.2655 14.0904 11.1435 14.1141 11.0295 14.1606C10.9155 14.2071 10.8118 14.2757 10.7243 14.3623C10.6368 14.4489 10.5672 14.5519 10.5195 14.6654C10.4718 14.7789 10.4469 14.9007 10.4463 15.0238C10.4457 15.1469 10.4693 15.2689 10.5158 15.3829C10.5624 15.4969 10.6309 15.6006 10.7175 15.6881L14.3334 19.3425C14.4206 19.4307 14.5244 19.5006 14.6388 19.5484C14.7533 19.5962 14.876 19.6208 15 19.6208C15.124 19.6208 15.2467 19.5962 15.3612 19.5484C15.4756 19.5006 15.5794 19.4307 15.6666 19.3425L19.2825 15.6881C19.3691 15.6006 19.4376 15.4969 19.4842 15.3829C19.5307 15.2689 19.5543 15.1469 19.5537 15.0238C19.5531 14.9007 19.5282 14.7789 19.4805 14.6654C19.4328 14.5519 19.3632 14.4489 19.2757 14.3623C19.1882 14.2757 19.0845 14.2071 18.9705 14.1606C18.8565 14.1141 18.7345 14.0904 18.6114 14.0911C18.4882 14.0917 18.3665 14.1166 18.253 14.1643C18.1395 14.212 18.0365 14.2816 17.9498 14.3691L15.9375 16.4025V7.96875ZM6.5625 21.0938C6.31386 21.0938 6.0754 21.1925 5.89959 21.3683C5.72377 21.5442 5.625 21.7826 5.625 22.0312C5.625 22.2799 5.72377 22.5183 5.89959 22.6942C6.0754 22.87 6.31386 22.9688 6.5625 22.9688H23.4375C23.6861 22.9688 23.9246 22.87 24.1004 22.6942C24.2762 22.5183 24.375 22.2799 24.375 22.0312C24.375 21.7826 24.2762 21.5442 24.1004 21.3683C23.9246 21.1925 23.6861 21.0938 23.4375 21.0938H6.5625Z" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.375 0.9375C4.71516 0.9375 0.9375 4.71516 0.9375 9.375V20.625C0.9375 25.2848 4.71516 29.0625 9.375 29.0625H20.625C25.2848 29.0625 29.0625 25.2848 29.0625 20.625V9.375C29.0625 4.71516 25.2848 0.9375 20.625 0.9375H9.375ZM2.8125 9.375C2.8125 5.75063 5.75063 2.8125 9.375 2.8125H20.625C24.2494 2.8125 27.1875 5.75063 27.1875 9.375V20.625C27.1875 24.2494 24.2494 27.1875 20.625 27.1875H9.375C5.75063 27.1875 2.8125 24.2494 2.8125 20.625V9.375Z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={4}
                                            speed={50}
                                            forwardedRef={ref3}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>M+</span>
                                    </div>
                                    <span>Total Download</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 divider d-flex justify-content-lg-center">
                            <div className="single-counter">
                                <div className="icon">
                                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1285 28.1233C22.726 28.1212 22.3349 27.9898 22.0129 27.7483L15.0004 22.4983L7.98789 27.7201C7.66923 27.9494 7.28665 28.0728 6.8941 28.073C6.50155 28.0733 6.11883 27.9503 5.79989 27.7214C5.48095 27.4926 5.24188 27.1694 5.11638 26.7975C4.99089 26.4255 4.98529 26.0235 5.10039 25.6483L7.80977 17.3139L2.43789 12.1201C2.1778 11.8585 2.00065 11.526 1.92864 11.1642C1.85664 10.8023 1.89296 10.4273 2.03307 10.0861C2.17318 9.74479 2.41085 9.45244 2.71632 9.2456C3.0218 9.03876 3.3815 8.92663 3.75039 8.92325H10.6316L13.3035 2.99825C13.4549 2.67613 13.6949 2.40377 13.9954 2.21299C14.2959 2.02221 14.6445 1.9209 15.0004 1.9209C15.3563 1.9209 15.7049 2.02221 16.0054 2.21299C16.3059 2.40377 16.5458 2.67613 16.6973 2.99825L19.3879 8.93263H26.2504C26.6185 8.93782 26.9769 9.05126 27.281 9.25879C27.585 9.46633 27.8213 9.75878 27.9602 10.0997C28.0992 10.4406 28.1347 10.8149 28.0624 11.1758C27.9901 11.5368 27.8131 11.8685 27.5535 12.1295L22.1816 17.342L24.891 25.6576C24.9841 25.938 25.0096 26.2365 24.9654 26.5286C24.9213 26.8208 24.8087 27.0983 24.6369 27.3387C24.465 27.5791 24.2388 27.7754 23.9767 27.9118C23.7146 28.0481 23.424 28.1206 23.1285 28.1233ZM3.75039 10.7983L9.12227 15.9826C9.36491 16.2222 9.53764 16.5233 9.62189 16.8537C9.70614 17.1841 9.6987 17.5312 9.60039 17.8576L6.88164 26.2483L13.8848 20.9983C14.2076 20.7592 14.5987 20.6302 15.0004 20.6302C15.4021 20.6302 15.7932 20.7592 16.116 20.9983L23.1379 26.2483L20.4098 17.9233C20.3115 17.5968 20.304 17.2497 20.3883 16.9193C20.4725 16.5889 20.6453 16.2878 20.8879 16.0483L26.2504 10.7795H19.3785C19.0215 10.7786 18.6721 10.6758 18.3715 10.4831C18.0709 10.2905 17.8316 10.016 17.6816 9.692L15.0004 3.74825L12.3379 9.692C12.1879 10.016 11.9486 10.2905 11.648 10.4831C11.3474 10.6758 10.998 10.7786 10.641 10.7795L3.75039 10.7983Z" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={6}
                                            speed={50}
                                            forwardedRef={ref4}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <span>User Ratings</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 divider d-flex justify-content-lg-center">
                            <div className="single-counter">
                                <div className="icon">
                                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1285 28.1233C22.726 28.1212 22.3349 27.9898 22.0129 27.7483L15.0004 22.4983L7.98789 27.7201C7.66923 27.9494 7.28665 28.0728 6.8941 28.073C6.50155 28.0733 6.11883 27.9503 5.79989 27.7214C5.48095 27.4926 5.24188 27.1694 5.11638 26.7975C4.99089 26.4255 4.98529 26.0235 5.10039 25.6483L7.80977 17.3139L2.43789 12.1201C2.1778 11.8585 2.00065 11.526 1.92864 11.1642C1.85664 10.8023 1.89296 10.4273 2.03307 10.0861C2.17318 9.74479 2.41085 9.45244 2.71632 9.2456C3.0218 9.03876 3.3815 8.92663 3.75039 8.92325H10.6316L13.3035 2.99825C13.4549 2.67613 13.6949 2.40377 13.9954 2.21299C14.2959 2.02221 14.6445 1.9209 15.0004 1.9209C15.3563 1.9209 15.7049 2.02221 16.0054 2.21299C16.3059 2.40377 16.5458 2.67613 16.6973 2.99825L19.3879 8.93263H26.2504C26.6185 8.93782 26.9769 9.05126 27.281 9.25879C27.585 9.46633 27.8213 9.75878 27.9602 10.0997C28.0992 10.4406 28.1347 10.8149 28.0624 11.1758C27.9901 11.5368 27.8131 11.8685 27.5535 12.1295L22.1816 17.342L24.891 25.6576C24.9841 25.938 25.0096 26.2365 24.9654 26.5286C24.9213 26.8208 24.8087 27.0983 24.6369 27.3387C24.465 27.5791 24.2388 27.7754 23.9767 27.9118C23.7146 28.0481 23.424 28.1206 23.1285 28.1233ZM3.75039 10.7983L9.12227 15.9826C9.36491 16.2222 9.53764 16.5233 9.62189 16.8537C9.70614 17.1841 9.6987 17.5312 9.60039 17.8576L6.88164 26.2483L13.8848 20.9983C14.2076 20.7592 14.5987 20.6302 15.0004 20.6302C15.4021 20.6302 15.7932 20.7592 16.116 20.9983L23.1379 26.2483L20.4098 17.9233C20.3115 17.5968 20.304 17.2497 20.3883 16.9193C20.4725 16.5889 20.6453 16.2878 20.8879 16.0483L26.2504 10.7795H19.3785C19.0215 10.7786 18.6721 10.6758 18.3715 10.4831C18.0709 10.2905 17.8316 10.016 17.6816 9.692L15.0004 3.74825L12.3379 9.692C12.1879 10.016 11.9486 10.2905 11.648 10.4831C11.3474 10.6758 10.998 10.7786 10.641 10.7795L3.75039 10.7983Z" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={10}
                                            speed={50}
                                            forwardedRef={ref5}
                                            as="h2"
                                            className="counter"
                                        />
                                    </div>
                                    <span>Years of Service</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                            <div className="single-counter">
                                <div className="icon">
                                    <svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15 1.87305C11.3784 1.87305 8.4375 4.81398 8.4375 8.43555C8.4375 12.0571 11.3784 14.998 15 14.998C18.6216 14.998 21.5625 12.0571 21.5625 8.43555C21.5625 4.81398 18.6216 1.87305 15 1.87305ZM15 3.74805C17.5875 3.74805 19.6875 5.84805 19.6875 8.43555C19.6875 11.023 17.5875 13.123 15 13.123C12.4125 13.123 10.3125 11.023 10.3125 8.43555C10.3125 5.84805 12.4125 3.74805 15 3.74805ZM3.75 26.248H15C15.2486 26.248 15.4871 26.3468 15.6629 26.5226C15.8387 26.6984 15.9375 26.9369 15.9375 27.1855C15.9375 27.4342 15.8387 27.6726 15.6629 27.8485C15.4871 28.0243 15.2486 28.123 15 28.123H2.8125C2.56386 28.123 2.3254 28.0243 2.14959 27.8485C1.97377 27.6726 1.875 27.4342 1.875 27.1855V25.3105C1.875 23.0728 2.76395 20.9267 4.34629 19.3443C5.92862 17.762 8.07474 16.873 10.3125 16.873H15C15.2486 16.873 15.4871 16.9718 15.6629 17.1476C15.8387 17.3234 15.9375 17.5619 15.9375 17.8105C15.9375 18.0592 15.8387 18.2976 15.6629 18.4735C15.4871 18.6493 15.2486 18.748 15 18.748H10.3125C8.57202 18.748 6.90282 19.4395 5.67211 20.6702C4.4414 21.9009 3.75 23.5701 3.75 25.3105V26.248ZM22.9697 16.873C19.6069 16.873 16.8769 19.603 16.8769 22.9659C16.8769 26.3287 19.6069 29.0587 22.9697 29.0587C26.3325 29.0587 29.0625 26.3287 29.0625 22.9659C29.0625 19.603 26.3325 16.873 22.9697 16.873ZM22.9697 18.748C25.2975 18.748 27.1875 20.638 27.1875 22.9659C27.1875 25.2937 25.2975 27.1837 22.9697 27.1837C20.6419 27.1837 18.7519 25.2937 18.7519 22.9659C18.7519 20.638 20.6419 18.748 22.9697 18.748Z" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M22.5797 23.0268L24.6412 20.9071C24.7267 20.8174 24.8291 20.7455 24.9425 20.6956C25.056 20.6457 25.1781 20.6188 25.302 20.6164C25.4259 20.6141 25.549 20.6363 25.6643 20.6818C25.7796 20.7273 25.8846 20.7952 25.9735 20.8816C26.0623 20.9679 26.1332 21.071 26.1819 21.185C26.2307 21.2989 26.2564 21.4213 26.2575 21.5452C26.2586 21.6692 26.2352 21.7921 26.1885 21.9068C26.1418 22.0216 26.0729 22.126 25.9856 22.214L23.2519 25.0246C23.1646 25.1147 23.0602 25.1864 22.9447 25.2353C22.8292 25.2842 22.7051 25.3094 22.5797 25.3094C22.4543 25.3094 22.3301 25.2842 22.2147 25.2353C22.0992 25.1864 21.9947 25.1147 21.9075 25.0246L19.9537 23.0156C19.8665 22.9276 19.7975 22.8232 19.7508 22.7084C19.7042 22.5936 19.6807 22.4707 19.6819 22.3468C19.683 22.2229 19.7087 22.1004 19.7574 21.9865C19.8062 21.8726 19.877 21.7695 19.9659 21.6831C20.0547 21.5967 20.1598 21.5288 20.275 21.4833C20.3903 21.4378 20.5134 21.4156 20.6373 21.418C20.7612 21.4204 20.8834 21.4473 20.9968 21.4972C21.1102 21.5471 21.2126 21.619 21.2981 21.7087L22.5797 23.0268Z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="content">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={2}
                                            speed={50}
                                            forwardedRef={ref6}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>M+</span>
                                    </div>
                                    <span>Years of Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home6-integration-section mb-130">
                <div className="container">
                    <div className="row justify-content-center mb-65 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xxl-4 col-lg-5 col-md-7">
                            <div className="section-title text-center">
                                <h2>Integrations</h2>
                                <p>Seamless integration with popular tools like Google,Calendar, Dropbox, &amp; Slack etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-50">
                        <div className="col-lg-12">
                            <div className="company-logo">
                                <img src="/assets/img/home6/company-logo.svg" alt="" />
                            </div>
                            <div className="arrow-vec-wrap">
                                <svg className="awrrow-vec" height={125} viewBox="0 0 1102 125" xmlns="http://www.w3.org/2000/svg">
                                    <path id="theMo1tionPath1" d="M551 0V14C551 30.5685 537.569 44 521 44H31C21.5 44.5 3.5 53 3 72V124" />
                                    <path d="M6 120H0L3 125L6 120Z" />
                                    <circle cx={0} cy={0} r="2.5" className="sm-circle2">
                                        <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                                            <mpath xlinkHref="#theMo1tionPath1" />
                                        </animateMotion>
                                    </circle>
                                    <path id="theMo1tionPath2" d="M551 0V14C551 30.5685 537.569 44 521 44H180C172 44 163 50.2 163 59C163 67.8 163 104.333 163 124" />
                                    <path d="M166 120H160L163 125L166 120Z" />
                                    <circle cx={0} cy={0} r="2.5" className="sm-circle2">
                                        <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                                            <mpath xlinkHref="#theMo1tionPath2" />
                                        </animateMotion>
                                    </circle>
                                    <path id="theMo1tionPath3" d="M551 0V14C551 30.5685 564.431 44 581 44H922C930 44 939 50.2 939 59C939 67.8 939 104.333 939 124" />
                                    <path d="M936 120H942L939 125L936 120Z" />
                                    <circle cx={0} cy={0} r="2.5" className="sm-circle2">
                                        <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                                            <mpath xlinkHref="#theMo1tionPath3" />
                                        </animateMotion>
                                    </circle>
                                    <path id="theMo1tionPath4" d="M551 0V14C551 30.5685 564.431 44 581 44H1071C1080.5 44.5 1098.5 53 1099 72V124" />
                                    <path d="M1096 120H1102L1099 125L1096 120Z" />
                                    <circle cx={0} cy={0} r="2.5" className="sm-circle2">
                                        <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate>
                                            <mpath xlinkHref="#theMo1tionPath4" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="integration-wrap">
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-04.svg" alt="" />
                                            <h6>Google Drive</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-02.svg" alt="" />
                                            <h6>Slack</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-03.svg" alt="" />
                                            <h6>Hubspot</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/megento.svg" alt="" />
                                            <h6>Magento</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-05.svg" alt="" />
                                            <h6>Zoom</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-06.svg" alt="" />
                                            <h6>WhatsApp</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-07.svg" alt="" className="light" />
                                            <img src="/assets/img/home6/icon/integration-07-dark.svg" alt="" className="dark" />
                                            <h6>GitHub</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-08.svg" alt="" />
                                            <h6>Spotify</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-09.svg" alt="" />
                                            <h6>Gmail</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/flatter.svg" alt="" />
                                            <h6>Flutter</h6>
                                        </div>
                                        <div className="single-integration">
                                            <img src="/assets/img/home6/icon/integration-11.svg" alt="" />
                                            <h6>Google Ads</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <a href="#" className="view-all-btn">
                                View All Integrations
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home6IntegrationSection
