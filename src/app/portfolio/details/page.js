"use client";
import Home3Footer from '@/components/Footer/Home3Footer';
import Header3 from '@/components/header/Header3';
import Link from 'next/link';
import { useEffect, useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioDetailsPage = () => {
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
    }, []);
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".post-slider-next",
        prevEl: ".post-slider-prev",
      },
    };
  }, []);
  return (
    <>
      <Header3 />

      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>Portfolio Details</h1>
                <ul className="breadcrumb-list">
                  <li><a href="/">Home</a></li>
                  <li>
                    <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>
                    Portfolio Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Portfolio Details Page Start */}
      <div className="portfolio-details-page mb-130">
        <div className="container">
          <div className="details-content-wrap portfolio-details mb-130">
            <div className="post-title-and-tag">
              <h2>Smart Digital Strategies.</h2>
              <ul className="tag-list">
                <li><Link href="/portfolio/classic">Branding</Link></li>
                <li><Link href="/portfolio/classic">UI/UX Design</Link></li>
                <li><Link href="/portfolio/classic">Typhography</Link></li>
                <li><Link href="/portfolio/classic">Hierarchy</Link></li>
              </ul>
            </div>
            <div className="post-thumb mb-70">
              <Swiper {...settings} className="swiper service-details-post-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <img src="/assets/img/innerpages/service-details-thumb-img1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src="/assets/img/innerpages/service-details-thumb-img2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <img src="/assets/img/innerpages/service-details-thumb-img3.jpg" alt="" />
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="portfolio-details-info-area">
                    <ul className="info-box">
                      <li className="info-item"><strong>Industry:</strong> Technology</li>
                      <li className="info-item"><strong>Clients:</strong> Mr. Marko Paul</li>
                      <li className="info-item"><strong>Solution:</strong> Digital Marketing</li>
                      <li className="info-item"><strong>Date:</strong> 12/22/2023</li>
                    </ul>
                    <div className="btn-area">
                      <Link href="/" className="primary-btn3 btn-hover">
                        mortar.com
                        <span />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-btn-grp">
                <div style={{ cursor: "pointer" }} className="slider-btn post-slider-prev">
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
                <div style={{ cursor: "pointer" }} className="slider-btn post-slider-next">
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <h2>Projects Summary</h2>
            <span className="line-break" />
            <div className="row g-4 justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <h5>Client Needs:</h5>
                <span className="line-break two" />
                <p>This milestone is a testament to the hard work, creativity, and dedication of our incredible team and the unwavering support from our clients and partners. We are grateful for the trust placed in us and the collaborative efforts that have fueled our success.</p>
              </div>
              <div className="col-xl-5 col-lg-6">
                <h5>Our Approche:</h5>
                <span className="line-break two" />
                <p>This project focused on helping Marko Paul enhance their online presence through a <span>complete website redesign</span> and <span>SEO optimization strategy.</span></p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row gy-5 justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <h2>Service Provide</h2>
                <span className="line-break" />
                <p>A list of the specific services we delivered for the project, such as:</p>
                <span className="line-break" />
                <ul className="listing four">
                  <li>
                    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M15.75 1.125C16.0484 1.125 16.3345 1.24353 16.5455 1.4545C16.7565 1.66548 16.875 1.95163 16.875 2.25V15.75C16.875 16.0484 16.7565 16.3345 16.5455 16.5455C16.3345 16.7565 16.0484 16.875 15.75 16.875H2.25C1.95163 16.875 1.66548 16.7565 1.4545 16.5455C1.24353 16.3345 1.125 16.0484 1.125 15.75V2.25C1.125 1.95163 1.24353 1.66548 1.4545 1.4545C1.66548 1.24353 1.95163 1.125 2.25 1.125H15.75ZM2.25 0C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 15.75C0 16.3467 0.237053 16.919 0.65901 17.341C1.08097 17.7629 1.65326 18 2.25 18H15.75C16.3467 18 16.919 17.7629 17.341 17.341C17.7629 16.919 18 16.3467 18 15.75V2.25C18 1.65326 17.7629 1.08097 17.341 0.65901C16.919 0.237053 16.3467 0 15.75 0L2.25 0Z" />
                        <path d="M7.71176 5.22678C7.76414 5.27903 7.8057 5.3411 7.83406 5.40944C7.86242 5.47778 7.87701 5.55104 7.87701 5.62503C7.87701 5.69902 7.86242 5.77228 7.83406 5.84062C7.8057 5.90895 7.76414 5.97103 7.71176 6.02328L4.73388 9.00003L7.71176 11.9768C7.81738 12.0824 7.87672 12.2257 7.87672 12.375C7.87672 12.5244 7.81738 12.6677 7.71176 12.7733C7.60613 12.8789 7.46288 12.9382 7.31351 12.9382C7.16413 12.9382 7.02088 12.8789 6.91526 12.7733L3.54026 9.39828C3.48787 9.34603 3.44631 9.28395 3.41795 9.21562C3.3896 9.14728 3.375 9.07402 3.375 9.00003C3.375 8.92604 3.3896 8.85278 3.41795 8.78444C3.44631 8.7161 3.48787 8.65403 3.54026 8.60178L6.91526 5.22678C6.96751 5.17439 7.02958 5.13283 7.09792 5.10448C7.16626 5.07612 7.23952 5.06152 7.31351 5.06152C7.38749 5.06152 7.46076 5.07612 7.52909 5.10448C7.59743 5.13283 7.6595 5.17439 7.71176 5.22678ZM10.2903 5.22678C10.2379 5.27903 10.1963 5.3411 10.168 5.40944C10.1396 5.47778 10.125 5.55104 10.125 5.62503C10.125 5.69902 10.1396 5.77228 10.168 5.84062C10.1963 5.90895 10.2379 5.97103 10.2903 6.02328L13.2681 9.00003L10.2903 11.9768C10.1846 12.0824 10.1253 12.2257 10.1253 12.375C10.1253 12.5244 10.1846 12.6677 10.2903 12.7733C10.3959 12.8789 10.5391 12.9382 10.6885 12.9382C10.8379 12.9382 10.9811 12.8789 11.0868 12.7733L14.4618 9.39828C14.5141 9.34603 14.5557 9.28395 14.5841 9.21562C14.6124 9.14728 14.627 9.07402 14.627 9.00003C14.627 8.92604 14.6124 8.85278 14.5841 8.78444C14.5557 8.7161 14.5141 8.65403 14.4618 8.60178L11.0868 5.22678C11.0345 5.17439 10.9724 5.13283 10.9041 5.10448C10.8358 5.07612 10.7625 5.06152 10.6885 5.06152C10.6145 5.06152 10.5413 5.07612 10.4729 5.10448C10.4046 5.13283 10.3425 5.17439 10.2903 5.22678Z" />
                      </g>
                    </svg>
                    Web Development
                  </li>
                  <li>
                    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.6875C0 1.53832 0.0592632 1.39524 0.164752 1.28975C0.270242 1.18426 0.413316 1.125 0.5625 1.125H2.25C2.37547 1.12503 2.49733 1.16702 2.5962 1.24428C2.69506 1.32154 2.76526 1.42963 2.79562 1.55137L3.25125 3.375H16.3125C16.3951 3.37508 16.4767 3.39334 16.5514 3.42849C16.6261 3.46365 16.6922 3.51483 16.7449 3.5784C16.7977 3.64198 16.8357 3.71638 16.8565 3.79633C16.8772 3.87628 16.8801 3.95982 16.8649 4.041L15.1774 13.041C15.1532 13.1699 15.0848 13.2863 14.984 13.3701C14.8831 13.4539 14.7561 13.4999 14.625 13.5H4.5C4.36886 13.4999 4.24189 13.4539 4.14102 13.3701C4.04016 13.2863 3.97175 13.1699 3.94762 13.041L2.26125 4.05788L1.81125 2.25H0.5625C0.413316 2.25 0.270242 2.19074 0.164752 2.08525C0.0592632 1.97976 0 1.83668 0 1.6875ZM3.48975 4.5L4.96687 12.375H14.1581L15.6352 4.5H3.48975ZM5.625 13.5C5.02826 13.5 4.45597 13.7371 4.03401 14.159C3.61205 14.581 3.375 15.1533 3.375 15.75C3.375 16.3467 3.61205 16.919 4.03401 17.341C4.45597 17.7629 5.02826 18 5.625 18C6.22174 18 6.79403 17.7629 7.21599 17.341C7.63795 16.919 7.875 16.3467 7.875 15.75C7.875 15.1533 7.63795 14.581 7.21599 14.159C6.79403 13.7371 6.22174 13.5 5.625 13.5ZM13.5 13.5C12.9033 13.5 12.331 13.7371 11.909 14.159C11.4871 14.581 11.25 15.1533 11.25 15.75C11.25 16.3467 11.4871 16.919 11.909 17.341C12.331 17.7629 12.9033 18 13.5 18C14.0967 18 14.669 17.7629 15.091 17.341C15.5129 16.919 15.75 16.3467 15.75 15.75C15.75 15.1533 15.5129 14.581 15.091 14.159C14.669 13.7371 14.0967 13.5 13.5 13.5ZM5.625 14.625C5.92337 14.625 6.20952 14.7435 6.42049 14.9545C6.63147 15.1655 6.75 15.4516 6.75 15.75C6.75 16.0484 6.63147 16.3345 6.42049 16.5455C6.20952 16.7565 5.92337 16.875 5.625 16.875C5.32663 16.875 5.04048 16.7565 4.8295 16.5455C4.61853 16.3345 4.5 16.0484 4.5 15.75C4.5 15.4516 4.61853 15.1655 4.8295 14.9545C5.04048 14.7435 5.32663 14.625 5.625 14.625ZM13.5 14.625C13.7984 14.625 14.0845 14.7435 14.2955 14.9545C14.5065 15.1655 14.625 15.4516 14.625 15.75C14.625 16.0484 14.5065 16.3345 14.2955 16.5455C14.0845 16.7565 13.7984 16.875 13.5 16.875C13.2016 16.875 12.9155 16.7565 12.7045 16.5455C12.4935 16.3345 12.375 16.0484 12.375 15.75C12.375 15.4516 12.4935 15.1655 12.7045 14.9545C12.9155 14.7435 13.2016 14.625 13.5 14.625Z" />
                    </svg>
                    UI/UX Design
                  </li>
                  <li>
                    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M9 1.11749e-07C9.11713 -7.36981e-05 9.23136 0.0364177 9.32675 0.104383C9.42214 0.172348 9.49394 0.268396 9.53212 0.379125L10.1767 2.25H15.75C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375V11.25C16.875 11.5484 16.7565 11.8345 16.5455 12.0455C16.3345 12.2565 16.0484 12.375 15.75 12.375H13.6687L15.1571 16.6916C15.2058 16.8328 15.1963 16.9874 15.1309 17.1216C15.0655 17.2558 14.9495 17.3585 14.8084 17.4071C14.6672 17.4558 14.5126 17.4463 14.3784 17.3809C14.2442 17.3155 14.1415 17.1995 14.0929 17.0584L12.4785 12.375H9.5625V15.75C9.5625 15.8992 9.50324 16.0423 9.39775 16.1477C9.29226 16.2532 9.14918 16.3125 9 16.3125C8.85082 16.3125 8.70774 16.2532 8.60225 16.1477C8.49676 16.0423 8.4375 15.8992 8.4375 15.75V12.375H5.5215L3.90712 17.0584C3.85849 17.1995 3.75579 17.3155 3.6216 17.3809C3.48742 17.4463 3.33275 17.4558 3.19162 17.4071C3.0505 17.3585 2.93447 17.2558 2.86907 17.1216C2.80366 16.9874 2.79424 16.8328 2.84288 16.6916L4.33125 12.375H2.25C1.95163 12.375 1.66548 12.2565 1.4545 12.0455C1.24353 11.8345 1.125 11.5484 1.125 11.25V3.375C1.125 3.07663 1.24353 2.79048 1.4545 2.5795C1.66548 2.36853 1.95163 2.25 2.25 2.25H7.82325L8.46788 0.379125C8.50606 0.268396 8.57786 0.172348 8.67325 0.104383C8.76864 0.0364177 8.88287 -7.36981e-05 9 1.11749e-07ZM2.25 3.375V11.25H15.75V3.375H2.25Z" />
                      </g>
                    </svg>
                    Digital Marketing
                  </li>
                  <li>
                    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M3.43158 3.4316C2.70023 4.16287 2.12009 5.03104 1.72429 5.98653C1.32848 6.94202 1.12476 7.96612 1.12476 9.00035C1.12476 10.0346 1.32848 11.0587 1.72429 12.0142C2.12009 12.9697 2.70023 13.8378 3.43158 14.5691C3.53404 14.6752 3.59074 14.8173 3.58946 14.9648C3.58818 15.1122 3.52902 15.2533 3.42473 15.3576C3.32043 15.4619 3.17935 15.5211 3.03187 15.5224C2.88438 15.5236 2.74229 15.4669 2.6362 15.3645C1.80043 14.5287 1.13745 13.5366 0.685129 12.4446C0.232807 11.3526 0 10.1823 0 9.00035C0 7.81841 0.232807 6.64805 0.685129 5.55609C1.13745 4.46413 1.80043 3.47196 2.6362 2.63622C2.74229 2.53376 2.88438 2.47706 3.03187 2.47834C3.17935 2.47963 3.32043 2.53878 3.42473 2.64308C3.52902 2.74737 3.58818 2.88845 3.58946 3.03594C3.59074 3.18342 3.53404 3.32551 3.43158 3.4316ZM5.81883 5.81885C4.97521 6.66272 4.50129 7.80711 4.50129 9.00035C4.50129 10.1936 4.97521 11.338 5.81883 12.1818C5.87113 12.2341 5.91261 12.2962 5.94092 12.3646C5.96922 12.4329 5.98379 12.5061 5.98379 12.5801C5.98379 12.6541 5.96922 12.7273 5.94092 12.7956C5.91261 12.864 5.87113 12.926 5.81883 12.9783C5.76653 13.0306 5.70444 13.0721 5.63611 13.1004C5.56778 13.1287 5.49454 13.1433 5.42058 13.1433C5.34662 13.1433 5.27338 13.1287 5.20505 13.1004C5.13671 13.0721 5.07463 13.0306 5.02233 12.9783C4.49984 12.456 4.08537 11.8358 3.8026 11.1533C3.51982 10.4707 3.37428 9.73916 3.37428 9.00035C3.37428 8.26154 3.51982 7.52996 3.8026 6.84741C4.08537 6.16486 4.49984 5.5447 5.02233 5.02235C5.12795 4.91673 5.2712 4.85739 5.42058 4.85739C5.56995 4.85739 5.7132 4.91673 5.81883 5.02235C5.92445 5.12797 5.98379 5.27123 5.98379 5.4206C5.98379 5.56997 5.92445 5.71323 5.81883 5.81885ZM12.1818 5.02235C12.2341 4.96996 12.2962 4.9284 12.3645 4.90005C12.4328 4.87169 12.5061 4.85709 12.5801 4.85709C12.6541 4.85709 12.7273 4.87169 12.7957 4.90005C12.864 4.9284 12.9261 4.96996 12.9783 5.02235C13.5008 5.5447 13.9153 6.16486 14.1981 6.84741C14.4808 7.52996 14.6264 8.26154 14.6264 9.00035C14.6264 9.73916 14.4808 10.4707 14.1981 11.1533C13.9153 11.8358 13.5008 12.456 12.9783 12.9783C12.926 13.0306 12.8639 13.0721 12.7956 13.1004C12.7273 13.1287 12.654 13.1433 12.5801 13.1433C12.5061 13.1433 12.4329 13.1287 12.3645 13.1004C12.2962 13.0721 12.2341 13.0306 12.1818 12.9783C12.1295 12.926 12.088 12.864 12.0597 12.7956C12.0314 12.7273 12.0169 12.6541 12.0169 12.5801C12.0169 12.5061 12.0314 12.4329 12.0597 12.3646C12.088 12.2962 12.1295 12.2341 12.1818 12.1818C13.0254 11.338 13.4994 10.1936 13.4994 9.00035C13.4994 7.80711 13.0254 6.66272 12.1818 5.81885C12.1294 5.7666 12.0879 5.70452 12.0595 5.63619C12.0312 5.56785 12.0166 5.49459 12.0166 5.4206C12.0166 5.34661 12.0312 5.27335 12.0595 5.20501C12.0879 5.13667 12.1294 5.0746 12.1818 5.02235ZM14.5691 2.63735C14.6746 2.5319 14.8176 2.47266 14.9668 2.47266C15.1159 2.47266 15.259 2.5319 15.3645 2.63735C17.052 4.32514 18.0001 6.61416 18.0001 9.00091C18.0001 11.3877 17.052 13.6767 15.3645 15.3645C15.2584 15.4669 15.1163 15.5236 14.9688 15.5224C14.8213 15.5211 14.6802 15.4619 14.5759 15.3576C14.4716 15.2533 14.4125 15.1122 14.4112 14.9648C14.4099 14.8173 14.4666 14.6752 14.5691 14.5691C15.3004 13.8378 15.8806 12.9697 16.2764 12.0142C16.6722 11.0587 16.8759 10.0346 16.8759 9.00035C16.8759 7.96612 16.6722 6.94202 16.2764 5.98653C15.8806 5.03104 15.3004 4.16287 14.5691 3.4316C14.4636 3.32611 14.4044 3.18307 14.4044 3.03391C14.4044 2.88476 14.4636 2.74171 14.5691 2.63622V2.63735ZM6.75033 9.00035C6.75043 8.57955 6.86854 8.16721 7.09124 7.81017C7.31394 7.45312 7.6323 7.16569 8.01017 6.9805C8.38803 6.79532 8.81025 6.71981 9.22888 6.76256C9.6475 6.8053 10.0458 6.96458 10.3784 7.22231C10.711 7.48004 10.9647 7.82589 11.1107 8.22057C11.2566 8.61526 11.289 9.04296 11.204 9.45509C11.1191 9.86723 10.9203 10.2473 10.6301 10.5521C10.34 10.8569 9.97027 11.0743 9.56283 11.1795V17.4378C9.56283 17.587 9.50356 17.7301 9.39808 17.8356C9.29259 17.9411 9.14951 18.0003 9.00033 18.0003C8.85114 18.0003 8.70807 17.9411 8.60258 17.8356C8.49709 17.7301 8.43783 17.587 8.43783 17.4378V11.1795C7.95476 11.0547 7.52684 10.773 7.22137 10.3785C6.9159 9.98407 6.7502 9.49926 6.75033 9.00035Z" />
                      </g>
                    </svg>
                    Video &amp; Content Production
                  </li>
                </ul>
              </div>
              <div className="col-xl-5 col-lg-6">
                <h2>Challenges</h2>
                <span className="line-break" />
                <p>The primary challenge was creating a user-friendly website that <span>improved navigation while increasing conversion rates in a highly competitive industry.</span></p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="img-grp">
              <div className="row g-lg-4 g-md-3 g-4">
                <div className="col-lg-4 col-md-4">
                  <img src="/assets/img/innerpages/portfolio-details-img1.jpg" alt="" />
                </div>
                <div className="col-lg-5 col-md-5">
                  <img src="/assets/img/innerpages/portfolio-details-img2.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-3">
                  <img src="/assets/img/innerpages/portfolio-details-img3.jpg" alt="" />
                </div>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row gy-5 justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <h2>Results / Success Metrics</h2>
                <span className="line-break" />
                <p>Present measurable results achieved after the project launch. This section should be data-driven to show the impact of your work, such as:</p>
                <span className="line-break" />
                <ul className="listing two">
                  <li>
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                    </svg>
                    35% increase in organic traffic
                  </li>
                  <li>
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                    </svg>
                    50% boost in lead generation
                  </li>
                  <li>
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                    </svg>
                    20% improvement in user engagement
                  </li>
                  <li>
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                    </svg>
                    Higher search rankings for targeted keywords
                  </li>
                  <li>
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5236 9.35783L6.0516 11.5708C6.99992 10.2009 11.2151 3.50919 13.6388 0.400391C11.1287 5.14183 8.94664 10.0882 6.98408 15.0588C6.70248 15.7717 5.69832 15.7839 5.40264 15.0767C4.46776 12.8415 3.46264 10.6202 2.36328 8.46199C3.15368 8.30391 3.99656 8.56743 4.52344 9.35783H4.5236Z" />
                    </svg>
                    ROI on digital ad spend
                  </li>
                </ul>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="testimonial-area">
                  <p>Working with Mortar was a game-changer for our business. Their team helped us achieve our digital goals beyond expectations.</p>
                  <span>Mr. Marko Paul.</span>
                  <svg className="quote" width={106} height={96} viewBox="0 0 106 96" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.9098 0.333984C56.8573 0.333984 43.8239 15.1213 43.8239 37.0192C43.9369 68.8313 68.0426 91.3236 102.819 95.6415C106.041 96.0452 107.284 91.604 104.317 90.2974C90.9784 84.4094 84.2356 76.94 83.3652 69.5491C82.7152 64.0256 85.739 59.1862 89.5428 58.2778C99.3942 55.9282 105.996 43.754 105.996 31.176C105.996 22.9962 102.721 15.1514 96.8909 9.36741C91.0611 3.5834 83.1543 0.333984 74.9098 0.333984ZM7.08593 0.333984C-10.9665 0.333984 -24 15.1213 -24 37.0192C-23.887 68.8313 0.218765 91.3236 34.9954 95.6415C38.2171 96.0452 39.4605 91.604 36.4932 90.2974C23.1545 84.4094 16.4117 76.94 15.5413 69.5491C14.8913 64.0256 17.9151 59.1862 21.7189 58.2778C31.5703 55.9282 38.1719 43.754 38.1719 31.176C38.1719 22.9962 34.8968 15.1514 29.067 9.36741C23.2373 3.5834 15.3304 0.333984 7.08593 0.333984Z" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <img src="/assets/img/innerpages/portfolio-details-img4.jpg" alt="" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="social-area">
              <h6>Share:</h6>
              <ul className="social-link">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>

                <li><a href="https://www.pinterest.com/"><i className="bx bxl-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="details-pagination two">
                <div className="single-pagination">
                  <Link className="pagination-btn" href="/service/details">
                    <img src="/assets/img/innerpages/details-pagination-btn-bg1.png" alt="" />
                    <div className="btn-content">
                      <svg width={7} height={14} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                      </svg>
                      Prev
                    </div>
                  </Link>
                  <div className="content">
                    <h2><Link href="/service/details">Interactive <br /> Design.</Link></h2>
                  </div>
                </div>
                <div className="single-pagination two text-end">
                  <div className="content">
                    <h2><Link href="/service/details">E-commerce <br />Excellence</Link></h2>
                  </div>
                  <Link className="pagination-btn" href="/service/details">
                    <img src="/assets/img/innerpages/details-pagination-btn-bg2.png" alt="" />
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
      {/* Portfolio Details Page End */}


      <Home3Footer />
    </>
  )
}

export default PortfolioDetailsPage
