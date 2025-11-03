"use client"
import React, { useEffect, useReducer, useRef } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const initialState = {
    activeMenu: "",
    activeSubMenu: "",
    isSidebarOpen: false,
    isLeftSidebarOpen: false,
    isRightSidebar: false,
    isLang: false,
};
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,

                activeMenu: state.activeMenu === action.menu ? "" : action.menu,
                activeSubMenu:
                    state.activeMenu === action.menu ? state.activeSubMenu : "",
            };
        case "TOGGLE_SUB_MENU":
            return {
                ...state,
                activeSubMenu:
                    state.activeSubMenu === action.subMenu ? "" : action.subMenu,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        case "setScrollY":
            return { ...state, scrollY: action.payload };
        case "TOGGLE_LEFT_SIDEBAR":
            return {
                ...state,
                isLeftSidebarOpen: !state.isLeftSidebarOpen,
            };
        case "TOGGLE_LANG":
            return {
                ...state,
                isLang: !state.isLang,
            };
        case "TOGGLE_RIGHTSIDEBAR":
            return {
                ...state,
                isRightSidebar: !state.isRightSidebar,
            };
        default:
            return state;
    }
}


const Header3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const headerRef = useRef(null);
    const pathname = usePathname()
    const handleScroll = () => {
        const { scrollY } = window;
        dispatch({ type: "setScrollY", payload: scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleMenu = (menu) => {
        dispatch({ type: "TOGGLE_MENU", menu });
    };

    const toggleRightSidebar = () => {
        dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
    };
    const toggleSubMenu = (subMenu) => {
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };
    const toggleSidebar = () => {
        console.log("click");

        dispatch({ type: "TOGGLE_MENU", menu: "" });
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };
    const companyPaths = [
        '/about',
        '/team',
        '/team/style2',
        '/team/style3',
        '/team/details',
        '/award-recognitions',
        '/social-responsibility',
        '/service',
        '/service/style2',
        '/service/details',
        '/case-study',
        '/case-study/style2',
        '/case-study/details',
        '/news-insight-grid',
        '/news-insight-grid/style2',
        '/news-insight-grid/style3',
        '/news-insight-grid/details',
        '/pricing',
        '/career',
        '/career/details',
        '/shop',
        '/cart',
        '/checkout',
        '/product-details',
        '/faq',
        '/contact',
    ];
    const homePaths = [
        '/digital-agency',
        '/digital-agency-dark',
        '/startup-agency',
        '/startup-agency-dark',
        '/fintech',
        '/fintech-dark',
        '/marketing-agency',
        '/marketing-agency-dark',
        '/it-consulting',
        '/it-consulting-dark',
        '/saas-product',
        '/saas-product-dark',

    ]
    const portfolioPaths = [
        '/portfolio',
        '/portfolio/masonry',
        '/portfolio/slider', '/portfolio/classic',
        '/portfolio/creative',
        '/portfolio/caption',
        '/portfolio/horizontal',
        '/portfolio/carousel',
        '/portfolio/vertical',
        '/portfolio/interactive-link',
        '/portfolio/grid',
        '/portfolio/details']
    const isCompanyActive = companyPaths.some((path) => pathname.startsWith(path));
    const isPortfolioActive = portfolioPaths.some((path) => pathname.startsWith(path));
    const isHomeActive = homePaths.some((path) => pathname.startsWith(path));
    return (
        <>
            <div className={`right-sidebar-menu ${state.isRightSidebar ? "show-right-menu" : ""
                }`}>
                <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
                    <div className="sidebar-logo-wrap">
                        <Link href="/">
                            <img alt="image" src="/assets/img/right-sidebar-sm-logo.svg" className="light" />
                            <img alt="image" src="/assets/img/right-sidebar-sm-logo-white.svg" className="dark" />
                        </Link>
                    </div>
                    <div className="right-sidebar-close-btn" onClick={toggleRightSidebar}>
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6694 3.0106C14.8839 2.78848 15.0026 2.49099 15 2.18219C14.9973 1.8734 14.8734 1.57801 14.6551 1.35966C14.4367 1.1413 14.1413 1.01744 13.8325 1.01475C13.5237 1.01207 13.2262 1.13078 13.0041 1.34531L8.00706 6.34236L3.01119 1.34531C2.90184 1.23589 2.77202 1.14907 2.62912 1.08983C2.48623 1.03058 2.33306 1.00005 2.17837 1C2.02368 0.999945 1.87049 1.03036 1.72756 1.08951C1.58462 1.14865 1.45473 1.23538 1.34531 1.34472C1.23589 1.45407 1.14907 1.58389 1.08983 1.72679C1.03058 1.86968 1.00005 2.02285 1 2.17754C0.999945 2.33223 1.03036 2.48542 1.08951 2.62835C1.14865 2.77129 1.23538 2.90118 1.34472 3.0106L6.34177 8.00765L1.34472 13.0047C1.12389 13.2257 0.99989 13.5253 1 13.8378C1.00011 14.1502 1.12432 14.4497 1.34531 14.6706C1.5663 14.8914 1.86596 15.0154 2.17837 15.0153C2.49078 15.0152 2.79036 14.891 3.01119 14.67L8.00706 9.67294L13.0041 14.67C13.2262 14.8845 13.5237 15.0032 13.8325 15.0005C14.1413 14.9979 14.4367 14.874 14.6551 14.6556C14.8734 14.4373 14.9973 14.1419 15 13.8331C15.0026 13.5243 14.8839 13.2268 14.6694 13.0047L9.67235 8.00765L14.6694 3.0106Z" />
                        </svg>
                    </div>
                </div>
                <div className="sidebar-content-wrap">
                    <div className="sidebar-content">
                        <h3>We are Global Digital Brand Tech Agency.</h3>
                        <div className="address-area">
                            <h5>New York</h5>
                            <a href="https://www.google.com/maps">123 Business St, Suite 456, City, State, ZIP Code 3456, Country.</a>
                        </div>
                        <ul className="contact-area">
                            <li className="single-contact">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/contact-mail-icon.svg" alt="" />
                                </div>
                                <div className="content">
                                    <span>Send Us Mail</span>
                                    <h6><a href="mailto:info@example.com">info@example.com</a></h6>
                                </div>
                            </li>
                            <li className="single-contact">
                                <div className="icon">
                                    <img src="/assets/img/home1/icon/contact-call-icon.svg" alt="" />
                                </div>
                                <div className="content">
                                    <span>Call 24/7 Hours</span>
                                    <h6><a href="tel:+997636844563">+99-763 684 4563 </a></h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-bottom-area">
                        <div className="subscribe-area">
                            <h5>Subscribe To Get Free Update.</h5>
                            <form className="subscribe-form-wrap">
                                <div className="subscribe-form">
                                    <input type="email" placeholder="Enter Email" />
                                    <button type="submit">
                                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="form-inner2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                                        <label className="form-check-label" htmlFor="contactCheck">
                                            By subscribing, to get agree <strong>privacy policy.</strong>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <ul className="social-list">
                            <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                            <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                            <li><a href="https://www.youtube.com/"><i className="bx bxl-youtube" /></a></li>
                            <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <header className={`header-area style-3 ${pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "portfolio" : ""} ${pathname === "/portfolio/carousel" || pathname === "/digital-agency" || pathname === "/digital-agency-dark" ? "position-absolute" : ""} ${state.scrollY > 20 ? "sticky" : ""}`}>
                <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
                    <div className="company-logo">
                        {pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "" : <Link href="/" className="logo-dark"><img alt="image" className="img-fluid" src="/assets/img/header-logo.svg" /></Link>}
                        {/* {pathname} */}
                        <Link href="/" className={` ${pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "" : "logo-light"} `}><img alt="image" className="img-fluid" src="/assets/img/header-logo-white.svg" /></Link>
                    </div>
                    <div className="menu-wrap">
                        <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
                            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                                <Link href="/" className="mobile-logo-wrap">
                                    <img alt="image" className="img-fluid light" src="/assets/img/header-logo.svg" />
                                    <img alt="image" className="img-fluid dark" src="/assets/img/header-logo-white.svg" />
                                </Link>
                                <div className="menu-close-btn" onClick={toggleSidebar}>
                                    <i className="bi bi-x" />
                                </div>
                            </div>
                            <ul className="menu-list">
                                <li className={`menu-item-has-children position-inherit ${isHomeActive ? "active" : ""}`}>
                                    <Link href="/" className="drop-down">
                                        Home
                                    </Link>
                                    <i onClick={() => toggleMenu("HOME")} className={`bi bi-${state.activeMenu === "HOME" ? "dash" : "plus"} dropdown-icon`} />
                                    <ul className={`sub-menu d-lg-none ${state.activeMenu === "HOME" ? "d-block" : "none"}`} >
                                        <li className="">
                                            <a href="#">Light Version</a>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("light")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "light" ? "dash" : "plus"} dropdown-icon`} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "light" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/" ? "active" : ""}><Link href="/">Startup Agency</Link></li>
                                                <li className={pathname === "/fintech" ? "active" : ""}><Link href="/fintech">Fintech</Link></li>
                                                <li className={pathname === "/digital-agency" ? "active" : ""}><Link href="/digital-agency">Digital Agency</Link></li>
                                                <li className={pathname === "/marketing-agency" ? "active" : ""}><Link href="/marketing-agency">Marketing Agency</Link></li>
                                                <li className={pathname === "/it-consulting" ? "active" : ""}><Link href="/it-consulting">IT Consulting</Link></li>
                                                <li className={pathname === "/saas-product" ? "active" : ""}><Link href="/saas-product">SaaS Product</Link></li>
                                                <li className={pathname === "/portfolio" ? "active" : ""}><Link href="/portfolio">Portfolio</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Dark Version</a>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("dark")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "dark" ? "dash" : "plus"} dropdown-icon`} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "dark" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/" ? "active" : ""}><Link href="/startup-agency-dark">Startup Agency</Link></li>
                                                <li className={pathname === "/fintech-dark" ? "active" : ""}><Link href="/fintech-dark">Fintech</Link></li>
                                                <li className={pathname === "/digital-agency-dark" ? "active" : ""}><Link href="/digital-agency-dark">Digital Agency</Link></li>
                                                <li className={pathname === "/marketing-agency-dark" ? "active" : ""}><Link href="/marketing-agency-dark">Marketing Agency</Link></li>
                                                <li className={pathname === "/it-consulting-dark" ? "active" : ""}><Link href="/it-consulting-dark">IT Consulting</Link></li>
                                                <li className={pathname === "/saas-product-dark" ? "active" : ""}><Link href="/saas-product-dark">SaaS Product</Link></li>
                                                <li className={pathname === "/portfolio-dark" ? "active" : ""}><Link href="/portfolio-dark">Portfolio</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="mega-menu">
                                        <div className="container">
                                            <div className="row gy-5">
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/" || pathname === "/startup-agency-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img1.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/startup-agency-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/">Startup Agency</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/fintech" || pathname === "/fintech-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img2.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/fintech" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/fintech-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/fintech">Fintech</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/digital-agency" || pathname === "/digital-agency-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img3.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/digital-agency" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/digital-agency-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/digital-agency">Digital Agency</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/marketing-agency" || pathname === "/marketing-agency-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img4.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/marketing-agency" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/marketing-agency-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/marketing-agency">Marketing Agency</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/it-consulting" || pathname === "/it-consulting-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img5.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/it-consulting" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/it-consulting-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/it-consulting">IT Consulting</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/saas-product" || pathname === "/saas-product-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img6.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/saas-product" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/saas-product-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/saas-product">SaaS Product</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className={`single-menu-item ${pathname === "/portfolio" || pathname === "/portfolio-dark" ? "active" : ""}`}>
                                                        <div className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img7.jpg" alt="" />
                                                            <div className="home-version">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="/portfolio" className="light">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7 2.13828C7.22652 2.13828 7.41016 1.95464 7.41016 1.72812V0.410156C7.41016 0.183641 7.22652 0 7 0C6.77348 0 6.58984 0.183641 6.58984 0.410156V1.72812C6.58984 1.95464 6.77348 2.13828 7 2.13828ZM2.98225 3.56229C3.14243 3.72247 3.40211 3.72247 3.56229 3.56229C3.72247 3.40211 3.72247 3.14243 3.56229 2.98225L2.63036 2.05029C2.47018 1.89011 2.2105 1.89011 2.05032 2.05029C1.89014 2.21047 1.89014 2.47015 2.05032 2.63033L2.98225 3.56229ZM2.98208 10.4379L2.05015 11.3698C1.88997 11.53 1.88997 11.7897 2.05015 11.9498C2.21033 12.11 2.47002 12.11 2.6302 11.9498L3.56215 11.0179C3.72233 10.8577 3.72233 10.598 3.56215 10.4378C3.40197 10.2777 3.14226 10.2777 2.98208 10.4379ZM7 11.8617C6.77348 11.8617 6.58984 12.0454 6.58984 12.2719V13.5898C6.58984 13.8164 6.77348 14 7 14C7.22652 14 7.41016 13.8164 7.41016 13.5898V12.2719C7.41016 12.0454 7.22652 11.8617 7 11.8617ZM2.13828 7C2.13828 6.77348 1.95464 6.58984 1.72812 6.58984H0.410156C0.183641 6.58984 0 6.77348 0 7C0 7.22652 0.183641 7.41016 0.410156 7.41016H1.72812C1.95464 7.41016 2.13828 7.22652 2.13828 7ZM7 3.51457C5.07814 3.51457 3.51457 5.07814 3.51457 7C3.51457 8.92186 5.07814 10.4854 7 10.4854C8.92186 10.4854 10.4854 8.92186 10.4854 7C10.4854 5.07814 8.92186 3.51457 7 3.51457ZM11.0179 3.56213L11.9499 2.63017C12.1101 2.46999 12.1101 2.2103 11.9499 2.05012C11.7897 1.88995 11.53 1.88995 11.3698 2.05012L10.4379 2.98208C10.2777 3.14226 10.2777 3.40195 10.4379 3.56213C10.5981 3.7223 10.8577 3.7223 11.0179 3.56213ZM11.0178 10.4377C10.8576 10.2775 10.5979 10.2775 10.4377 10.4377C10.2775 10.5979 10.2775 10.8576 10.4377 11.0178L11.3697 11.9497C11.5298 12.1099 11.7895 12.1099 11.9497 11.9497C12.1099 11.7895 12.1099 11.5298 11.9497 11.3697L11.0178 10.4377ZM13.5898 6.58984H12.2719C12.0454 6.58984 11.8617 6.77348 11.8617 7C11.8617 7.22652 12.0454 7.41016 12.2719 7.41016H13.5898C13.8164 7.41016 14 7.22652 14 7C14 6.77348 13.8164 6.58984 13.5898 6.58984Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Light
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/portfolio-dark">
                                                                            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <path d="M7.24135 14C10.1123 13.998 12.6803 12.2445 13.7367 9.59536C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" />
                                                                                </g>
                                                                            </svg>
                                                                            Dark
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <h5><Link href="/portfolio">Personal Portfolio</Link></h5>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="single-menu-item">
                                                        <a href="#" className="home-img">
                                                            <img src="/assets/img/home1/mega-menu-home-img8.jpg" alt="" />
                                                        </a>
                                                        <h5><a href="#">SEO Agency</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={`menu-item-has-children position-inherit ${pathname === "/industry/details" || pathname === "/industry" ? "active" : ""}`}>
                                    <Link href="/service" className="drop-down">Solution
                                    </Link>
                                    <i onClick={() => toggleMenu("solution")} className={`bi bi-${state.activeMenu === "solution" ? "dash" : "plus"} dropdown-icon`} />
                                    <div className={`mega-menu2 ${state.activeMenu === "solution" ? "d-block" : "none"}`} >
                                        <div className="container">
                                            <div className="row align-items-lg-end justify-content-between">
                                                <div className="col-xl-7 col-lg-8">
                                                    <div className="title-area">
                                                        <h2>Challenge We Tackle</h2>
                                                        <div className="icon">
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <ul className="menu-row">
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Smart Solutions
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M19.25 1.375C19.6147 1.375 19.9644 1.51987 20.2223 1.77773C20.4801 2.03559 20.625 2.38533 20.625 2.75V19.25C20.625 19.6147 20.4801 19.9644 20.2223 20.2223C19.9644 20.4801 19.6147 20.625 19.25 20.625H2.75C2.38533 20.625 2.03559 20.4801 1.77773 20.2223C1.51987 19.9644 1.375 19.6147 1.375 19.25V2.75C1.375 2.38533 1.51987 2.03559 1.77773 1.77773C2.03559 1.51987 2.38533 1.375 2.75 1.375H19.25ZM2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75L0 19.25C0 19.9793 0.289731 20.6788 0.805456 21.1945C1.32118 21.7103 2.02065 22 2.75 22H19.25C19.9793 22 20.6788 21.7103 21.1945 21.1945C21.7103 20.6788 22 19.9793 22 19.25V2.75C22 2.02065 21.7103 1.32118 21.1945 0.805456C20.6788 0.289731 19.9793 0 19.25 0L2.75 0Z" />
                                                                                <path d="M9.42426 6.38826C9.48828 6.45212 9.53908 6.52799 9.57374 6.61151C9.6084 6.69504 9.62624 6.78458 9.62624 6.87501C9.62624 6.96544 9.6084 7.05498 9.57374 7.1385C9.53908 7.22203 9.48828 7.2979 9.42426 7.36176L5.78463 11L9.42426 14.6383C9.55335 14.7674 9.62588 14.9424 9.62588 15.125C9.62588 15.3076 9.55335 15.4827 9.42426 15.6118C9.29516 15.7409 9.12007 15.8134 8.93751 15.8134C8.75494 15.8134 8.57985 15.7409 8.45076 15.6118L4.32576 11.4868C4.26173 11.4229 4.21094 11.347 4.17628 11.2635C4.14162 11.18 4.12378 11.0904 4.12378 11C4.12378 10.9096 4.14162 10.82 4.17628 10.7365C4.21094 10.653 4.26173 10.5771 4.32576 10.5133L8.45076 6.38826C8.51462 6.32423 8.59049 6.27344 8.67401 6.23878C8.75754 6.20412 8.84708 6.18628 8.93751 6.18628C9.02794 6.18628 9.11748 6.20412 9.201 6.23878C9.28453 6.27344 9.3604 6.32423 9.42426 6.38826ZM12.5758 6.38826C12.5117 6.45212 12.4609 6.52799 12.4263 6.61151C12.3916 6.69504 12.3738 6.78458 12.3738 6.87501C12.3738 6.96544 12.3916 7.05498 12.4263 7.1385C12.4609 7.22203 12.5117 7.2979 12.5758 7.36176L16.2154 11L12.5758 14.6383C12.4467 14.7674 12.3741 14.9424 12.3741 15.125C12.3741 15.3076 12.4467 15.4827 12.5758 15.6118C12.7049 15.7409 12.8799 15.8134 13.0625 15.8134C13.2451 15.8134 13.4202 15.7409 13.5493 15.6118L17.6743 11.4868C17.7383 11.4229 17.7891 11.347 17.8237 11.2635C17.8584 11.18 17.8762 11.0904 17.8762 11C17.8762 10.9096 17.8584 10.82 17.8237 10.7365C17.7891 10.653 17.7383 10.5771 17.6743 10.5133L13.5493 6.38826C13.4854 6.32423 13.4095 6.27344 13.326 6.23878C13.2425 6.20412 13.1529 6.18628 13.0625 6.18628C12.9721 6.18628 12.8825 6.20412 12.799 6.23878C12.7155 6.27344 12.6396 6.32423 12.5758 6.38826Z" />
                                                                            </g>
                                                                        </svg>
                                                                        Product Development
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M11 1.36582e-07C11.1432 -9.00755e-05 11.2828 0.0445105 11.3994 0.127579C11.516 0.210647 11.6037 0.328039 11.6504 0.463375L12.4382 2.75H19.25C19.6147 2.75 19.9644 2.89487 20.2223 3.15273C20.4801 3.41059 20.625 3.76033 20.625 4.125V13.75C20.625 14.1147 20.4801 14.4644 20.2223 14.7223C19.9644 14.9801 19.6147 15.125 19.25 15.125H16.7062L18.5254 20.4009C18.5848 20.5734 18.5733 20.7624 18.4934 20.9264C18.4134 21.0904 18.2716 21.2159 18.0991 21.2754C17.9266 21.3348 17.7376 21.3233 17.5736 21.2434C17.4096 21.1634 17.2841 21.0216 17.2246 20.8491L15.2515 15.125H11.6875V19.25C11.6875 19.4323 11.6151 19.6072 11.4861 19.7361C11.3572 19.8651 11.1823 19.9375 11 19.9375C10.8177 19.9375 10.6428 19.8651 10.5139 19.7361C10.3849 19.6072 10.3125 19.4323 10.3125 19.25V15.125H6.7485L4.77538 20.8491C4.71593 21.0216 4.5904 21.1634 4.4264 21.2434C4.2624 21.3233 4.07336 21.3348 3.90087 21.2754C3.72838 21.2159 3.58657 21.0904 3.50664 20.9264C3.4267 20.7624 3.41518 20.5734 3.47462 20.4009L5.29375 15.125H2.75C2.38533 15.125 2.03559 14.9801 1.77773 14.7223C1.51987 14.4644 1.375 14.1147 1.375 13.75V4.125C1.375 3.76033 1.51987 3.41059 1.77773 3.15273C2.03559 2.89487 2.38533 2.75 2.75 2.75H9.56175L10.3496 0.463375C10.3963 0.328039 10.484 0.210647 10.6006 0.127579C10.7172 0.0445105 10.8568 -9.00755e-05 11 1.36582e-07ZM2.75 4.125V13.75H19.25V4.125H2.75Z" />
                                                                            </g>
                                                                        </svg>
                                                                        UI/UX Design
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M6.05825 4.59525C7.43254 3.41019 9.18534 2.75569 11 2.75C14.6988 2.75 17.7691 5.5 18.1033 9.04612C20.2922 9.3555 22 11.1884 22 13.4379C22 15.9074 19.9403 17.875 17.4446 17.875H5.19887C2.3485 17.875 0 15.6283 0 12.8123C0 10.3881 1.74075 8.38062 4.04525 7.87187C4.24187 6.68525 5.005 5.50275 6.05825 4.59525ZM6.95613 5.63613C5.91525 6.534 5.37075 7.61613 5.37075 8.46313V9.07913L4.75887 9.1465C2.838 9.35687 1.375 10.934 1.375 12.8123C1.375 14.8294 3.06625 16.5 5.19887 16.5H17.4446C19.2225 16.5 20.625 15.1085 20.625 13.4379C20.625 11.7659 19.2225 10.3744 17.4446 10.3744H16.7571V9.68688C16.7585 6.63438 14.201 4.125 11 4.125C9.51483 4.13093 8.08066 4.66597 6.95613 5.63613Z" />
                                                                        </svg>
                                                                        Cloud Solutions
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1.375V20.625H22V22H0V0ZM13.75 4.8125C13.75 4.63016 13.8224 4.4553 13.9514 4.32636C14.0803 4.19743 14.2552 4.125 14.4375 4.125H19.9375C20.1198 4.125 20.2947 4.19743 20.4236 4.32636C20.5526 4.4553 20.625 4.63016 20.625 4.8125V10.3125C20.625 10.4948 20.5526 10.6697 20.4236 10.7986C20.2947 10.9276 20.1198 11 19.9375 11C19.7552 11 19.5803 10.9276 19.4514 10.7986C19.3224 10.6697 19.25 10.4948 19.25 10.3125V6.7375L14.2821 12.8109C14.2213 12.8851 14.1456 12.9458 14.0599 12.989C13.9743 13.0322 13.8805 13.057 13.7846 13.0618C13.6888 13.0666 13.593 13.0513 13.5035 13.0168C13.4139 12.9824 13.3325 12.9295 13.2646 12.8617L9.7075 9.30463L4.6805 16.2167C4.57053 16.3566 4.41064 16.4483 4.23443 16.4728C4.05822 16.4972 3.8794 16.4523 3.73556 16.3476C3.59172 16.243 3.49406 16.0866 3.46309 15.9114C3.43212 15.7363 3.47026 15.5559 3.5695 15.4083L9.0695 7.84575C9.12788 7.76533 9.203 7.69853 9.28968 7.64993C9.37636 7.60134 9.47255 7.57212 9.57161 7.56427C9.67067 7.55643 9.77026 7.57016 9.86351 7.60451C9.95675 7.63886 10.0414 7.69302 10.1117 7.76325L13.6991 11.352L18.4869 5.5H14.4375C14.2552 5.5 14.0803 5.42757 13.9514 5.29864C13.8224 5.1697 13.75 4.99484 13.75 4.8125Z" />
                                                                            </g>
                                                                        </svg>
                                                                        Data &amp; Analytics
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4.8125 2.75C5.35951 2.75 5.88412 2.9673 6.27091 3.35409C6.6577 3.74089 6.875 4.26549 6.875 4.8125V6.875H4.8125C4.54165 6.875 4.27345 6.82165 4.02322 6.718C3.77298 6.61435 3.54561 6.46243 3.35409 6.27091C3.16257 6.07939 3.01065 5.85202 2.907 5.60179C2.80335 5.35155 2.75 5.08335 2.75 4.8125C2.75 4.54165 2.80335 4.27345 2.907 4.02322C3.01065 3.77298 3.16257 3.54561 3.35409 3.35409C3.54561 3.16257 3.77298 3.01065 4.02322 2.907C4.27345 2.80335 4.54165 2.75 4.8125 2.75ZM8.25 6.875V4.8125C8.25 4.13263 8.0484 3.46802 7.67068 2.90273C7.29296 2.33743 6.7561 1.89684 6.12798 1.63667C5.49985 1.37649 4.80869 1.30842 4.14188 1.44105C3.47507 1.57369 2.86257 1.90108 2.38182 2.38182C1.90108 2.86257 1.57369 3.47507 1.44105 4.14188C1.30842 4.80869 1.37649 5.49985 1.63667 6.12798C1.89684 6.7561 2.33743 7.29296 2.90273 7.67068C3.46802 8.0484 4.13263 8.25 4.8125 8.25H6.875V13.75H4.8125C4.13263 13.75 3.46802 13.9516 2.90273 14.3293C2.33743 14.707 1.89684 15.2439 1.63667 15.872C1.37649 16.5001 1.30842 17.1913 1.44105 17.8581C1.57369 18.5249 1.90108 19.1374 2.38182 19.6182C2.86257 20.0989 3.47507 20.4263 4.14188 20.559C4.80869 20.6916 5.49985 20.6235 6.12798 20.3633C6.7561 20.1032 7.29296 19.6626 7.67068 19.0973C8.0484 18.532 8.25 17.8674 8.25 17.1875V15.125H13.75V17.1875C13.75 17.8674 13.9516 18.532 14.3293 19.0973C14.707 19.6626 15.2439 20.1032 15.872 20.3633C16.5001 20.6235 17.1913 20.6916 17.8581 20.559C18.5249 20.4263 19.1374 20.0989 19.6182 19.6182C20.0989 19.1374 20.4263 18.5249 20.559 17.8581C20.6916 17.1913 20.6235 16.5001 20.3633 15.872C20.1032 15.2439 19.6626 14.707 19.0973 14.3293C18.532 13.9516 17.8674 13.75 17.1875 13.75H15.125V8.25H17.1875C17.8674 8.25 18.532 8.0484 19.0973 7.67068C19.6626 7.29296 20.1032 6.7561 20.3633 6.12798C20.6235 5.49985 20.6916 4.80869 20.559 4.14188C20.4263 3.47507 20.0989 2.86257 19.6182 2.38182C19.1374 1.90108 18.5249 1.57369 17.8581 1.44105C17.1913 1.30842 16.5001 1.37649 15.872 1.63667C15.2439 1.89684 14.707 2.33743 14.3293 2.90273C13.9516 3.46802 13.75 4.13263 13.75 4.8125V6.875H8.25ZM13.75 8.25V13.75H8.25V8.25H13.75ZM15.125 6.875V4.8125C15.125 4.40458 15.246 4.00581 15.4726 3.66664C15.6992 3.32746 16.0213 3.06311 16.3982 2.907C16.7751 2.75089 17.1898 2.71005 17.5899 2.78963C17.99 2.86921 18.3575 3.06565 18.6459 3.35409C18.9344 3.64254 19.1308 4.01004 19.2104 4.41013C19.29 4.81021 19.2491 5.22491 19.093 5.60179C18.9369 5.97866 18.6725 6.30078 18.3334 6.52741C17.9942 6.75404 17.5954 6.875 17.1875 6.875H15.125ZM15.125 15.125H17.1875C17.5954 15.125 17.9942 15.246 18.3334 15.4726C18.6725 15.6992 18.9369 16.0213 19.093 16.3982C19.2491 16.7751 19.29 17.1898 19.2104 17.5899C19.1308 17.99 18.9344 18.3575 18.6459 18.6459C18.3575 18.9344 17.99 19.1308 17.5899 19.2104C17.1898 19.29 16.7751 19.2491 16.3982 19.093C16.0213 18.9369 15.6992 18.6725 15.4726 18.3334C15.246 17.9942 15.125 17.5954 15.125 17.1875V15.125ZM6.875 15.125V17.1875C6.875 17.5954 6.75404 17.9942 6.52741 18.3334C6.30078 18.6725 5.97866 18.9369 5.60179 19.093C5.22491 19.2491 4.81021 19.29 4.41013 19.2104C4.01004 19.1308 3.64254 18.9344 3.35409 18.6459C3.06565 18.3575 2.86921 17.99 2.78963 17.5899C2.71005 17.1898 2.75089 16.7751 2.907 16.3982C3.06311 16.0213 3.32746 15.6992 3.66664 15.4726C4.00581 15.246 4.40458 15.125 4.8125 15.125H6.875Z" />
                                                                        </svg>
                                                                        AI &amp; Machine Learning
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0 2.0625C0 1.88016 0.0724328 1.7053 0.201364 1.57636C0.330295 1.44743 0.505164 1.375 0.6875 1.375H2.75C2.90336 1.37504 3.05229 1.42636 3.17313 1.52078C3.29397 1.61521 3.37976 1.74733 3.41687 1.89612L3.97375 4.125H19.9375C20.0384 4.12509 20.1381 4.14742 20.2295 4.19038C20.3208 4.23335 20.4016 4.2959 20.466 4.37361C20.5305 4.45131 20.577 4.54224 20.6024 4.63996C20.6277 4.73768 20.6312 4.83978 20.6126 4.939L18.5501 15.939C18.5206 16.0965 18.437 16.2388 18.3137 16.3413C18.1905 16.4437 18.0353 16.4999 17.875 16.5H5.5C5.33972 16.4999 5.18453 16.4437 5.06125 16.3413C4.93798 16.2388 4.85437 16.0965 4.82487 15.939L2.76375 4.95963L2.21375 2.75H0.6875C0.505164 2.75 0.330295 2.67757 0.201364 2.54864C0.0724328 2.4197 0 2.24484 0 2.0625ZM4.26525 5.5L6.07062 15.125H17.3044L19.1097 5.5H4.26525ZM6.875 16.5C6.14565 16.5 5.44618 16.7897 4.93046 17.3055C4.41473 17.8212 4.125 18.5207 4.125 19.25C4.125 19.9793 4.41473 20.6788 4.93046 21.1945C5.44618 21.7103 6.14565 22 6.875 22C7.60435 22 8.30382 21.7103 8.81954 21.1945C9.33527 20.6788 9.625 19.9793 9.625 19.25C9.625 18.5207 9.33527 17.8212 8.81954 17.3055C8.30382 16.7897 7.60435 16.5 6.875 16.5ZM16.5 16.5C15.7707 16.5 15.0712 16.7897 14.5555 17.3055C14.0397 17.8212 13.75 18.5207 13.75 19.25C13.75 19.9793 14.0397 20.6788 14.5555 21.1945C15.0712 21.7103 15.7707 22 16.5 22C17.2293 22 17.9288 21.7103 18.4445 21.1945C18.9603 20.6788 19.25 19.9793 19.25 19.25C19.25 18.5207 18.9603 17.8212 18.4445 17.3055C17.9288 16.7897 17.2293 16.5 16.5 16.5ZM6.875 17.875C7.23967 17.875 7.58941 18.0199 7.84727 18.2777C8.10513 18.5356 8.25 18.8853 8.25 19.25C8.25 19.6147 8.10513 19.9644 7.84727 20.2223C7.58941 20.4801 7.23967 20.625 6.875 20.625C6.51033 20.625 6.16059 20.4801 5.90273 20.2223C5.64487 19.9644 5.5 19.6147 5.5 19.25C5.5 18.8853 5.64487 18.5356 5.90273 18.2777C6.16059 18.0199 6.51033 17.875 6.875 17.875ZM16.5 17.875C16.8647 17.875 17.2144 18.0199 17.4723 18.2777C17.7301 18.5356 17.875 18.8853 17.875 19.25C17.875 19.6147 17.7301 19.9644 17.4723 20.2223C17.2144 20.4801 16.8647 20.625 16.5 20.625C16.1353 20.625 15.7856 20.4801 15.5277 20.2223C15.2699 19.9644 15.125 19.6147 15.125 19.25C15.125 18.8853 15.2699 18.5356 15.5277 18.2777C15.7856 18.0199 16.1353 17.875 16.5 17.875Z" />
                                                                        </svg>
                                                                        E-commerce Solutions
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M4.19366 4.19377C3.29979 5.08755 2.59073 6.14864 2.10697 7.31646C1.62321 8.48429 1.37422 9.73596 1.37422 11C1.37422 12.2641 1.62321 13.5158 2.10697 14.6836C2.59073 15.8514 3.29979 16.9125 4.19366 17.8063C4.3189 17.9359 4.38819 18.1096 4.38663 18.2899C4.38506 18.4701 4.31276 18.6426 4.18529 18.77C4.05782 18.8975 3.88539 18.9698 3.70513 18.9714C3.52487 18.9729 3.3512 18.9036 3.22154 18.7784C2.20003 17.7569 1.38973 16.5443 0.836891 15.2097C0.284054 13.875 -0.000488281 12.4446 -0.000488281 11C-0.000488281 9.55543 0.284054 8.12499 0.836891 6.79037C1.38973 5.45575 2.20003 4.2431 3.22154 3.22164C3.3512 3.09641 3.52487 3.02711 3.70513 3.02868C3.88539 3.03025 4.05782 3.10255 4.18529 3.23002C4.31276 3.35749 4.38506 3.52992 4.38663 3.71018C4.38819 3.89044 4.3189 4.06411 4.19366 4.19377ZM7.11141 7.11152C6.08032 8.14292 5.50109 9.54162 5.50109 11C5.50109 12.4584 6.08032 13.8571 7.11141 14.8885C7.17533 14.9524 7.22604 15.0283 7.26063 15.1118C7.29523 15.1954 7.31303 15.2849 7.31303 15.3753C7.31303 15.4657 7.29523 15.5552 7.26063 15.6387C7.22604 15.7222 7.17533 15.7981 7.11141 15.862C7.04749 15.9259 6.97161 15.9766 6.88809 16.0112C6.80457 16.0458 6.71506 16.0636 6.62466 16.0636C6.53426 16.0636 6.44475 16.0458 6.36124 16.0112C6.27772 15.9766 6.20183 15.9259 6.13791 15.862C5.49932 15.2236 4.99275 14.4656 4.64713 13.6314C4.30152 12.7972 4.12363 11.903 4.12363 11C4.12363 10.097 4.30152 9.20288 4.64713 8.36865C4.99275 7.53442 5.49932 6.77645 6.13791 6.13802C6.26701 6.00893 6.4421 5.9364 6.62466 5.9364C6.80723 5.9364 6.98232 6.00893 7.11141 6.13802C7.24051 6.26711 7.31303 6.4422 7.31303 6.62477C7.31303 6.80734 7.24051 6.98242 7.11141 7.11152ZM14.8884 6.13802C14.9523 6.074 15.0281 6.0232 15.1117 5.98854C15.1952 5.95388 15.2847 5.93604 15.3752 5.93604C15.4656 5.93604 15.5551 5.95388 15.6387 5.98854C15.7222 6.0232 15.7981 6.074 15.8619 6.13802C16.5005 6.77645 17.0071 7.53442 17.3527 8.36865C17.6983 9.20288 17.8762 10.097 17.8762 11C17.8762 11.903 17.6983 12.7972 17.3527 13.6314C17.0071 14.4656 16.5005 15.2236 15.8619 15.862C15.798 15.9259 15.7221 15.9766 15.6386 16.0112C15.5551 16.0458 15.4656 16.0636 15.3752 16.0636C15.2848 16.0636 15.1953 16.0458 15.1117 16.0112C15.0282 15.9766 14.9523 15.9259 14.8884 15.862C14.8245 15.7981 14.7738 15.7222 14.7392 15.6387C14.7046 15.5552 14.6868 15.4657 14.6868 15.3753C14.6868 15.2849 14.7046 15.1954 14.7392 15.1118C14.7738 15.0283 14.8245 14.9524 14.8884 14.8885C15.9195 13.8571 16.4987 12.4584 16.4987 11C16.4987 9.54162 15.9195 8.14292 14.8884 7.11152C14.8244 7.04766 14.7736 6.97179 14.7389 6.88827C14.7043 6.80474 14.6864 6.7152 14.6864 6.62477C14.6864 6.53434 14.7043 6.4448 14.7389 6.36127C14.7736 6.27775 14.8244 6.20188 14.8884 6.13802ZM17.8062 3.22302C17.9351 3.09413 18.1099 3.02173 18.2922 3.02173C18.4745 3.02173 18.6494 3.09413 18.7783 3.22302C20.8409 5.28588 21.9996 8.08356 21.9996 11.0007C21.9996 13.9178 20.8409 16.7155 18.7783 18.7784C18.6486 18.9036 18.475 18.9729 18.2947 18.9714C18.1144 18.9698 17.942 18.8975 17.8145 18.77C17.6871 18.6426 17.6148 18.4701 17.6132 18.2899C17.6116 18.1096 17.6809 17.9359 17.8062 17.8063C18.7 16.9125 19.4091 15.8514 19.8929 14.6836C20.3766 13.5158 20.6256 12.2641 20.6256 11C20.6256 9.73596 20.3766 8.48429 19.8929 7.31646C19.4091 6.14864 18.7 5.08755 17.8062 4.19377C17.6773 4.06484 17.6049 3.89001 17.6049 3.70771C17.6049 3.52541 17.6773 3.35057 17.8062 3.22164V3.22302ZM8.24991 11C8.25004 10.4857 8.3944 9.98174 8.66659 9.54535C8.93877 9.10897 9.32788 8.75766 9.78971 8.53132C10.2515 8.30499 10.7676 8.2127 11.2793 8.26494C11.7909 8.31719 12.2777 8.51186 12.6842 8.82687C13.0908 9.14187 13.4009 9.56457 13.5792 10.047C13.7576 10.5294 13.7971 11.0521 13.6933 11.5558C13.5895 12.0595 13.3465 12.5241 12.9919 12.8966C12.6373 13.2692 12.1854 13.5348 11.6874 13.6634V21.3125C11.6874 21.4949 11.615 21.6697 11.486 21.7987C11.3571 21.9276 11.1822 22 10.9999 22C10.8176 22 10.6427 21.9276 10.5138 21.7987C10.3848 21.6697 10.3124 21.4949 10.3124 21.3125V13.6634C9.72199 13.5109 9.19899 13.1666 8.82563 12.6845C8.45228 12.2023 8.24976 11.6098 8.24991 11Z" />
                                                                            </g>
                                                                        </svg>
                                                                        IoT Development
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/service/details">
                                                                        <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                                            <g>
                                                                                <path d="M11 20.625C8.44729 20.625 5.99913 19.6109 4.1941 17.8059C2.38906 16.0009 1.375 13.5527 1.375 11C1.375 8.44729 2.38906 5.99913 4.1941 4.1941C5.99913 2.38906 8.44729 1.375 11 1.375C13.5527 1.375 16.0009 2.38906 17.8059 4.1941C19.6109 5.99913 20.625 8.44729 20.625 11C20.625 13.5527 19.6109 16.0009 17.8059 17.8059C16.0009 19.6109 13.5527 20.625 11 20.625ZM11 22C13.9174 22 16.7153 20.8411 18.7782 18.7782C20.8411 16.7153 22 13.9174 22 11C22 8.08262 20.8411 5.28473 18.7782 3.22183C16.7153 1.15893 13.9174 0 11 0C8.08262 0 5.28473 1.15893 3.22183 3.22183C1.15893 5.28473 0 8.08262 0 11C0 13.9174 1.15893 16.7153 3.22183 18.7782C5.28473 20.8411 8.08262 22 11 22Z" />
                                                                                <path d="M7.22563 7.95575C7.22375 8.00015 7.23097 8.04447 7.24685 8.08598C7.26273 8.1275 7.28693 8.16532 7.31797 8.19713C7.34901 8.22894 7.38623 8.25407 7.42734 8.27096C7.46844 8.28786 7.51257 8.29616 7.55701 8.29537H8.69138C8.88113 8.29537 9.03238 8.14 9.05713 7.95162C9.18088 7.04962 9.79963 6.39238 10.9024 6.39238C11.8456 6.39238 12.7091 6.864 12.7091 7.99837C12.7091 8.8715 12.1949 9.273 11.3823 9.8835C10.4569 10.5559 9.72401 11.341 9.77626 12.6156L9.78038 12.914C9.78183 13.0042 9.81868 13.0902 9.88299 13.1535C9.9473 13.2168 10.0339 13.2523 10.1241 13.2522H11.2393C11.3304 13.2522 11.4179 13.216 11.4823 13.1516C11.5468 13.0871 11.583 12.9997 11.583 12.9085V12.7641C11.583 11.7769 11.9584 11.4895 12.9718 10.7209C13.8091 10.0842 14.6823 9.3775 14.6823 7.89388C14.6823 5.81625 12.9278 4.8125 11.0069 4.8125C9.26476 4.8125 7.35626 5.62375 7.22563 7.95575ZM9.36651 15.8799C9.36651 16.6128 9.95088 17.1545 10.7553 17.1545C11.5926 17.1545 12.1688 16.6128 12.1688 15.8799C12.1688 15.1209 11.5913 14.5874 10.7539 14.5874C9.95088 14.5874 9.36651 15.1209 9.36651 15.8799Z" />
                                                                            </g>
                                                                        </svg>
                                                                        Technical Support
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Industries Cover
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li><Link href="/industry/details">Finance &amp; Fintech</Link></li>
                                                                <li><Link href="/industry/details">Healthcare &amp; Life</Link></li>
                                                                <li><Link href="/industry/details">Retail &amp; E-commerce</Link></li>
                                                                <li><Link href="/industry/details">Education &amp; EdTech</Link></li>
                                                                <li><Link href="/industry/details">Government &amp; Public Sector</Link></li>
                                                                <li><Link href="/industry/details">Travel &amp; Hospitality</Link></li>
                                                                <li>
                                                                    <Link href="/industry" className="all-btn">
                                                                        View All Industries
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="solution-menu-banner">
                                                        <div className="banner-content">
                                                            <h3>We have Daynamic Team Members that Easily Problem Solve.</h3>
                                                            <Link href="/contact" className="primary-btn1">
                                                                <span>Let’s Talk
                                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <span>Let’s Talk
                                                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="banner-img">
                                                            <img src="/assets/img/home1/solution-menu-banner-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={`menu-item-has-children ${isCompanyActive ? "active" : ""}`}>
                                    <Link href="/case-study" className="drop-down">Company</Link>
                                    <i onClick={() => toggleMenu("company")} className={`bi bi-${state.activeMenu === "company" ? "dash" : "plus"} dropdown-icon`} />
                                    <ul className={`sub-menu ${state.activeMenu === "company" ? "d-block" : "none"}`} >
                                        <li className={pathname === "/about" ? "active" : ""}><Link href="/about">Company</Link></li>
                                        <li className={pathname.startsWith('/team') ? "active" : ""}>
                                            <Link href="/team">Our Team</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("team")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "team" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "team" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/team" ? "active" : ""}><Link href="/team">Team Style 01</Link></li>
                                                <li className={pathname === "/team/style2" ? "active" : ""}><Link href="/team/style2">Team Style 02</Link></li>
                                                <li className={pathname === "/team/style3" ? "active" : ""}><Link href="/team/style3">Team Style 03</Link></li>
                                                <li className={pathname === "/team/details" ? "active" : ""}><Link href="/team/details">Team Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname === "/award-recognitions" ? "active" : ""}><Link href="/award-recognitions">Award &amp; Recognitions</Link></li>
                                        <li className={pathname === "/social-responsibility" ? "active" : ""}><Link href="/social-responsibility">Social Responsibility</Link></li>
                                        <li className={pathname.startsWith('/service') ? "active" : ""}>
                                            <Link href="/service">Services</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("service")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "service" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "service" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/service" ? "active" : ""}><Link href="/service">Service Style 01</Link></li>
                                                <li className={pathname === "/service/style2" ? "active" : ""}><Link href="/service/style2">Service Style 02</Link></li>
                                                <li className={pathname === "/service/details" ? "active" : ""}><Link href="/service/details">Service Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname.startsWith('/case') ? "active" : ""}>
                                            <Link href="/case-study">Case Study</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("case-study")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "case-study" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "case-study" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/case-study" ? "active" : ""}><Link href="/case-study">Case Study Style 01</Link></li>
                                                <li className={pathname === "/case-study/style2" ? "active" : ""}><Link href="/case-study/style2">Case Study Style 02</Link></li>
                                                <li className={pathname === "/case-study/details" ? "active" : ""}><Link href="/case-study/details">Case Study Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname.startsWith('/news') ? "active" : ""}>
                                            <Link href="/news-insight-grid">News &amp; Insight</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("news")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "news" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "news" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/news-insight-grid" ? "active" : ""}><Link href="/news-insight-grid">News &amp; Insight 01</Link></li>
                                                <li className={pathname === "/news-insight-grid/style2" ? "active" : ""}><Link href="/news-insight-grid/style2">News &amp; Insight 02</Link></li>
                                                <li className={pathname === "/news-insight-grid/style3" ? "active" : ""}><Link href="/news-insight-grid/style3">News &amp; Insight 03</Link></li>
                                                <li className={pathname === "/news-insight-grid/details" ? "active" : ""}><Link href="/news-insight-grid/details">News &amp; Insight Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname === "/pricing" ? "active" : ""}><Link href="/pricing">Pricing Plan</Link></li>
                                        <li className={pathname.startsWith('/career') ? "active" : ""}>
                                            <Link href="/career">Career</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("carrer")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "carrer" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "carrer" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/career" ? "active" : ""} ><Link href="/career">Career</Link></li>
                                                <li className={pathname === "/career/details" ? "active" : ""}><Link href="/career/details">Career Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname.startsWith('/shop') ? "active" : ""}>
                                            <Link href="/shop">Shop</Link>
                                            <i className="d-lg-flex d-none bi-caret-right-fill dropdown-icon" />
                                            <i onClick={() => toggleSubMenu("shop")}
                                                className={`d-lg-none d-flex bi bi-${state.activeSubMenu === "shop" ? "dash" : "plus"} dropdown-icon `} />
                                            <ul className={`sub-menu ${state.activeSubMenu === "shop" ? "d-block" : "none"}`}>
                                                <li className={pathname === "/shop" ? "active" : ""} ><Link href="/shop">Shop</Link></li>
                                                <li className={pathname === "/cart" ? "active" : ""} ><Link href="/cart">Cart</Link></li>
                                                <li className={pathname === "/checkout" ? "active" : ""} ><Link href="/checkout">Checkout</Link></li>
                                                <li className={pathname === "/product-details" ? "active" : ""} ><Link href="/product-details">Product Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={pathname === "/faq" ? "active" : ""}><Link href="/faq">FAQ’s</Link></li>
                                        <li className={pathname === "/contact" ? "active" : ""}><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </li>
                                <li className={`menu-item-has-children ${isPortfolioActive ? "active" : ""}`}>
                                    <Link href="/news-insight-grid" className="drop-down">Portfolio </Link>
                                    <i onClick={() => toggleMenu("portfolio")} className={`bi bi-${state.activeMenu === "portfolio" ? "dash" : "plus"} dropdown-icon`} />
                                    <ul className={`sub-menu ${state.activeMenu === "portfolio" ? "d-block" : "none"}`}>
                                        <li className={pathname === "/portfolio/classic" ? "active" : ""} ><Link href="/portfolio/classic">Portfolio Classic</Link></li>
                                        <li className={pathname === "/portfolio/creative" ? "active" : ""}><Link href="/portfolio/creative">Portfolio Creative</Link></li>
                                        <li className={pathname === "/portfolio/caption" ? "active" : ""}><Link href="/portfolio/caption">Portfolio Caption</Link></li>
                                        <li className={pathname === "/portfolio/horizontal" ? "active" : ""}><Link href="/portfolio/horizontal">Portfolio Horizontal</Link></li>
                                        <li className={pathname === "/portfolio/carousel" ? "active" : ""}><Link href="/portfolio/carousel">Portfolio Carousel</Link></li>
                                        <li className={pathname === "/portfolio/vertical" ? "active" : ""}><Link href="/portfolio/vertical">Portfolio Vertical</Link></li>
                                        <li className={pathname === "/portfolio/interactive-link" ? "active" : ""}><Link href="/portfolio/interactive-link">Interactive Link</Link></li>
                                        <li className={pathname === "/portfolio/grid" ? "active" : ""}><Link href="/portfolio/grid">Portfolio Grid</Link></li>
                                        <li className={pathname === "/portfolio/details" ? "active" : ""}><Link href="/portfolio/details">Portfolio Details</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children position-inherit">
                                    <a href="#" className="drop-down">Resources
                                    </a>
                                    <i onClick={() => toggleMenu("resources")} className={`bi bi-${state.activeMenu === "resources" ? "dash" : "plus"} dropdown-icon`} />
                                    <div className={`mega-menu2 two ${state.activeMenu === "resources" ? "d-block" : "none"}`}>
                                        <div className="container">
                                            <div className="row align-items-lg-end justify-content-between">
                                                <div className="col-xl-6 col-lg-7 d-lg-block d-none">
                                                    <div className="title-area">
                                                        <h2>Innovative Thinking</h2>
                                                        <div className="icon">
                                                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="menu-blog-card">
                                                                <Link href="/news-insight-grid/details" className="blog-img">
                                                                    <img src="/assets/img/home1/menu-blog-img1.jpg" alt="" />
                                                                </Link>
                                                                <div className="blog-content">
                                                                    <ul className="blog-meta">
                                                                        <li>
                                                                            <Link href="/news-insight-grid">
                                                                                <svg width={8} height={8} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g>
                                                                                        <path d="M0.800781 8V0L7.20078 4L0.800781 8Z" />
                                                                                    </g>
                                                                                </svg>
                                                                                IT Strategy
                                                                            </Link>
                                                                        </li>
                                                                        <li className="blog-date">
                                                                            <Link href="/news-insight-grid">
                                                                                03 Nov, 2024
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                    <h5><Link href="/news-insight-grid/details">Revamping Brand Identity Success Story.</Link></h5>
                                                                    <Link href="/news-insight-grid/details" className="read-more-btn">
                                                                        Read More
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="menu-blog-card">
                                                                <Link href="/news-insight-grid/details" className="blog-img">
                                                                    <img src="/assets/img/home1/menu-blog-img2.jpg" alt="" />
                                                                </Link>
                                                                <div className="blog-content">
                                                                    <ul className="blog-meta">
                                                                        <li>
                                                                            <Link href="/news-insight-grid">
                                                                                <svg width={8} height={8} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g>
                                                                                        <path d="M0.800781 8V0L7.20078 4L0.800781 8Z" />
                                                                                    </g>
                                                                                </svg>
                                                                                Design Trends
                                                                            </Link>
                                                                        </li>
                                                                        <li className="blog-date">
                                                                            <Link href="/news-insight-grid">
                                                                                15 Nov, 2024
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                    <h5><Link href="/news-insight-grid/details">Cloud Infrastructure for Rapid Growth.</Link></h5>
                                                                    <Link href="/news-insight-grid/details" className="read-more-btn">
                                                                        Read More
                                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                                        </svg>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <ul className="menu-row">
                                                        <li className="menu-single-item">
                                                            <div className="menu-title">
                                                                <h6>
                                                                    <svg width={17} height={12} viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx={6} cy={6} r="5.5" />
                                                                        <circle cx={11} cy={6} r="5.5" />
                                                                    </svg>
                                                                    Innovative Case
                                                                </h6>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/news-insight-grid">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            News &amp; Insight
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/case-study">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Case Study
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Webinars &amp; Events
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span>
                                                                            <svg width={19} height={14} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM19 11L14 8.11325V13.8868L19 11ZM0.5 1V6H1.5V1H0.5ZM6 11.5H14.5V10.5H6V11.5ZM0.5 6C0.5 9.03757 2.96243 11.5 6 11.5V10.5C3.51472 10.5 1.5 8.48528 1.5 6H0.5Z" />
                                                                            </svg>
                                                                            Documentation
                                                                        </span>
                                                                        <div className="arrow">
                                                                            <svg width={7} height={9} viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M0 7.29015V1.70985C0 0.945021 0.823658 0.463308 1.49026 0.838272L6.45053 3.62842C7.13018 4.01073 7.13018 4.98927 6.45053 5.37158L1.49026 8.16173C0.823657 8.53669 0 8.05498 0 7.29015Z" />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <a href="#" className="conference-btn">
                                                        Conference Summit - 2024
                                                        <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="btn-and-contact-area d-lg-none d-block">
                                <Link href="/contact" className="primary-btn3 btn-hover">
                                    Let’s Talk
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-right">
                            <div className="right-sidebar-button" onClick={toggleRightSidebar}>
                                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M4.61426 0.138589C3.82642 -0.0461965 3.00651 -0.0461965 2.21867 0.138589C1.7127 0.257268 1.2499 0.514858 0.88241 0.882348C0.514919 1.24984 0.257329 1.71263 0.13865 2.21861C-0.0461354 3.00645 -0.0461354 3.82636 0.13865 4.6142C0.257329 5.12017 0.514919 5.58297 0.88241 5.95046C1.2499 6.31795 1.7127 6.57554 2.21867 6.69422C3.00651 6.87904 3.82642 6.87904 4.61426 6.69422C5.12024 6.57554 5.58303 6.31795 5.95052 5.95046C6.31801 5.58297 6.5756 5.12017 6.69428 4.6142C6.8791 3.82636 6.8791 3.00645 6.69428 2.21861C6.5756 1.71263 6.31801 1.24984 5.95052 0.882348C5.58303 0.514858 5.12024 0.257268 4.61426 0.138589ZM4.61426 9.3058C3.82642 9.12099 3.00651 9.12099 2.21867 9.3058C1.7127 9.42448 1.2499 9.68207 0.88241 10.0496C0.514919 10.4171 0.257329 10.8798 0.13865 11.3858C-0.0461354 12.1737 -0.0461354 12.9936 0.13865 13.7814C0.257329 14.2874 0.514919 14.7502 0.88241 15.1177C1.2499 15.4852 1.7127 15.7428 2.21867 15.8614C3.00651 16.0462 3.82642 16.0462 4.61426 15.8614C5.12024 15.7428 5.58303 15.4852 5.95052 15.1177C6.31801 14.7502 6.5756 14.2874 6.69428 13.7814C6.8791 12.9936 6.8791 12.1737 6.69428 11.3858C6.5756 10.8798 6.31801 10.4171 5.95052 10.0496C5.58303 9.68207 5.12024 9.42448 4.61426 9.3058ZM13.7815 0.138589C12.9936 -0.0461965 12.1737 -0.0461965 11.3859 0.138589C10.8799 0.257268 10.4171 0.514858 10.0496 0.882348C9.68213 1.24984 9.42454 1.71263 9.30587 2.21861C9.12105 3.00645 9.12105 3.82636 9.30587 4.6142C9.42454 5.12017 9.68213 5.58297 10.0496 5.95046C10.4171 6.31795 10.8799 6.57554 11.3859 6.69422C12.1737 6.87904 12.9936 6.87904 13.7815 6.69422C14.2875 6.57554 14.7502 6.31795 15.1177 5.95046C15.4852 5.58297 15.7428 5.12017 15.8615 4.6142C16.0462 3.82635 16.0462 3.00645 15.8615 2.21861C15.7428 1.71263 15.4852 1.24984 15.1177 0.882348C14.7502 0.514858 14.2875 0.257268 13.7815 0.138589ZM13.7815 9.3058C12.9936 9.12099 12.1737 9.12099 11.3859 9.3058C10.8799 9.42448 10.4171 9.68207 10.0496 10.0496C9.68213 10.4171 9.42454 10.8798 9.30587 11.3858C9.12105 12.1737 9.12105 12.9936 9.30587 13.7814C9.42454 14.2874 9.68213 14.7502 10.0496 15.1177C10.4171 15.4852 10.8799 15.7428 11.3859 15.8614C12.1737 16.0462 12.9936 16.0462 13.7815 15.8614C14.2875 15.7428 14.7502 15.4852 15.1177 15.1177C15.4852 14.7502 15.7428 14.2874 15.8615 13.7814C16.0462 12.9936 16.0462 12.1737 15.8615 11.3858C15.7428 10.8798 15.4852 10.4171 15.1177 10.0496C14.7502 9.68207 14.2875 9.42448 13.7815 9.3058Z" />
                                    </g>
                                </svg>
                            </div>
                            <Link href="/contact" className={`primary-btn3 btn-hover d-lg-flex d-none ${pathname === "/portfolio/horizontal" || pathname === "/portfolio/vertical" || pathname === "/portfolio/interactive-link" ? "white-bg" : ""}`}>
                                Let’s Talk
                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span />
                            </Link>
                            <div className="sidebar-button mobile-menu-btn" onClick={toggleSidebar}>
                                <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z" />
                                    <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z" />
                                    <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header3
