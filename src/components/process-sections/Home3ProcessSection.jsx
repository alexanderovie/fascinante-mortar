import React from 'react'

const Home3ProcessSection = () => {
    return (
        <div className="home3-process-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="process-wrapper">
                            <div className="section-title three white mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <span>Working Step</span>
                                <h2>Solution of Process.</h2>
                            </div>
                            <div className="process-card-area">
                                <div className="row gy-md-5 gy-4 justify-content-between">
                                    <div className="col-xl-5 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="process-card2">
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>01</strong>
                                            </div>
                                            <h4>Initial <br /> Consultation</h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6 wow animate fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                                        <div className="process-card2 two">
                                            <h4>Strategy <br /> Development</h4>
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>02</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="process-card2 three">
                                            <h4>Execution &amp; <br /> Launch</h4>
                                            <div className="step-no">
                                                <span>Step</span>
                                                <strong>03</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <svg className="vector" width={204} height={650} viewBox="0 0 204 650" xmlns="http://www.w3.org/2000/svg">
                                    <path id="theMotionPath11" d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H183C194.046 300 203 308.954 203 320V629C203 640.046 194.046 649 183 649H110" />
                                    <circle cx={0} cy={0} r={3}>
                                        <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto">
                                            <mpath href="#theMotionPath11" />
                                        </animateMotion>
                                    </circle>
                                </svg>
                                {/* <svg class="vector" width="203" height="650" viewBox="0 0 203 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="theMo1tionPath11"
                              d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H182C193.046 300 202 308.954 202 320V629C202 640.046 193.046 649 182 649H110"
                              stroke="white" stroke-opacity="0.2" />
                          <circle cx="99" cy="179" r="3" fill="url(#paint0_linear_6561_16)">
                              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="">
                                  <mpath xlink:href="#theMo1tionPath11"></mpath>
                              </animateMotion>
                          </circle>
                          <defs>
                              <linearGradient id="paint0_linear_6561_16" x1="99" y1="176" x2="99" y2="182" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="white" />
                                  <stop offset="1" stop-color="#5956E9" />
                              </linearGradient>
                          </defs>
                      </svg> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0">
                        <div className="founder-area">
                            <svg className="quote" width={136} height={152} viewBox="0 0 136 152" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M99.6484 20.2667C78.5409 20.2667 63.3017 37.5566 63.3017 63.1602C63.4339 100.356 91.6191 126.655 132.281 131.703C136.048 132.175 137.502 126.982 134.032 125.455C118.436 118.57 110.552 109.837 109.535 101.195C108.775 94.7369 112.31 89.0785 116.758 88.0164C128.276 85.2691 135.995 71.0347 135.995 56.3282C135.995 46.7641 132.166 37.5917 125.349 30.8289C118.533 24.066 109.288 20.2667 99.6484 20.2667ZM20.3466 20.2667C-0.760849 20.2667 -16 37.5566 -16 63.1602C-15.8678 100.356 12.3173 126.655 52.9793 131.703C56.7461 132.175 58.2 126.982 54.7305 125.455C39.1345 118.57 31.2506 109.837 30.2329 101.195C29.4729 94.7369 33.0085 89.0785 37.456 88.0164C48.9746 85.2691 56.6933 71.0347 56.6933 56.3282C56.6933 46.7641 52.8639 37.5917 46.0476 30.8289C39.2313 24.066 29.9864 20.2667 20.3466 20.2667Z" />
                                </g>
                            </svg>
                            <div className="founder-content">
                                <svg width={200} height={6} viewBox="0 0 200 6" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM200 3L195 0.113249V5.88675L200 3ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                                    </g>
                                </svg>
                                <p>We specializes in providing a range of services aimed at helping companies establish and enhance their presence in the digital world.</p>
                                <div className="founder-name-and-desig">
                                    <h5>Mr. David Milar</h5>
                                    <span>CEO &amp; Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3ProcessSection
