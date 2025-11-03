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

const Header7 = () => {
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
        '/portfolio',
        '/portfolio-dark',
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
            <div className={`right-sidebar-menu two ${state.isRightSidebar ? "show-right-menu" : ""
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
                    <div className="main-menu">
                        <ul className="menu-list">
                            <li className={`menu-item-has-children ${isHomeActive ? "active" : ""}`} >
                                <a onClick={() => toggleMenu("HOME")} className="portfolio-drop-down">Home</a>
                                <i onClick={() => toggleMenu("HOME")} className="bi-caret-down-fill dropdown-icon" />
                                <ul className={`sub-menu ${state.activeMenu === "HOME" ? "d-block" : "none"}`}>
                                    <li className={isHomeActive ? "active" : ""} >
                                        <a className="portfolio-drop-down" onClick={() => toggleSubMenu("Light")}>Light Version</a>
                                        <i onClick={() => toggleSubMenu("Light")} className="bi-caret-down-fill dropdown-icon" />
                                        <ul className={`sub-menu ${state.activeSubMenu === "Light" ? "d-block" : "none"}`}>
                                            <li><Link href="/">Startup Agency</Link></li>
                                            <li><Link href="/fintech">Fintech</Link></li>
                                            <li><Link href="/digital-agency">Digital Agency</Link></li>
                                            <li><Link href="/marketing-agency">Marketing Agency</Link></li>
                                            <li><Link href="/it-consulting">IT Consulting</Link></li>
                                            <li><Link href="/saas-product">SaaS Product</Link></li>
                                            <li className="active"><Link href="/portfolio">Portfolio</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="portfolio-drop-down" onClick={() => toggleSubMenu("Dark")}>Dark Version</a>
                                        <i onClick={() => toggleSubMenu("Dark")} className="bi-caret-down-fill dropdown-icon" />
                                        <ul className={`sub-menu ${state.activeSubMenu === "Dark" ? "d-block" : "none"}`}>
                                            <li><Link href="/startup-agency-dark">Startup Agency</Link></li>
                                            <li><Link href="/fintech-dark">Fintech</Link></li>
                                            <li><Link href="/digital-agency-dark">Digital Agency</Link></li>
                                            <li><Link href="/marketing-agency-dark">Marketing Agency</Link></li>
                                            <li><Link href="/it-consulting-dark">IT Consulting</Link></li>
                                            <li><Link href="/saas-product-dark">SaaS Product</Link></li>
                                            <li><Link href="/portfolio-dark">Portfolio</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a onClick={() => toggleMenu("Solutions")} className="portfolio-drop-down">Solutions</a>
                                <i onClick={() => toggleMenu("Solutions")} className="bi-caret-down-fill dropdown-icon" />
                                <ul className={`sub-menu ${state.activeMenu === "Solutions" ? "d-block" : "none"}`}>
                                    <li><Link href="/service/details">Product Design</Link></li>
                                    <li><Link href="/service/details">Branding Design</Link></li>
                                    <li><Link href="/service/details">Webflow</Link></li>
                                    <li><Link href="/service/details">Digital Marekting</Link></li>
                                    <li><Link href="/service/details">Video Editing</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a onClick={() => toggleMenu("portfolio")} className="portfolio-drop-down">Portfolio </a>
                                <i onClick={() => toggleMenu("portfolio")} className="bi-caret-down-fill dropdown-icon" />
                                <ul className={`sub-menu ${state.activeMenu === "portfolio" ? "d-block" : "none"}`}>
                                    <li><Link href="/portfolio/classic">Portfolio Classic</Link></li>
                                    <li><Link href="/portfolio/creative">Portfolio Creative</Link></li>
                                    <li><Link href="/portfolio/caption">Portfolio Caption</Link></li>
                                    <li><Link href="/portfolio/horizontal">Portfolio Horizontal</Link></li>
                                    <li><Link href="/portfolio/carousel">Portfolio Carousel</Link></li>
                                    <li><Link href="/portfolio/vertical">Portfolio Vertical</Link></li>
                                    <li><Link href="/portfolio/interactive-link">Interactive Link</Link></li>
                                    <li><Link href="/portfolio/grid">Portfolio Grid</Link></li>
                                    <li><Link href="/portfolio/details">Portfolio Details</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a onClick={() => toggleMenu("resource")} className="portfolio-drop-down">Resources</a>
                                <i onClick={() => toggleMenu("resource")} className="bi-caret-down-fill dropdown-icon" />
                                <ul className={`sub-menu ${state.activeMenu === "resource" ? "d-block" : "none"}`}>
                                    <li>
                                        <a onClick={() => toggleSubMenu("case-study")} className="portfolio-drop-down">Case Study</a>
                                        <i onClick={() => toggleSubMenu("case-study")} className="bi-caret-down-fill dropdown-icon" />
                                        <ul className={`sub-menu ${state.activeSubMenu === "case-study" ? "d-block" : "none"}`}>
                                            <li><Link href="/case-study">Case Study 01</Link></li>
                                            <li><Link href="/case-study/style2">Case Study 02</Link></li>
                                            <li><Link href="/case-study/details">Case Study Details</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a onClick={() => toggleSubMenu("news")} className="portfolio-drop-down">News &amp; Insight</a>
                                        <i onClick={() => toggleSubMenu("news")} className="bi-caret-down-fill dropdown-icon" />
                                        <ul className={`sub-menu ${state.activeSubMenu === "news" ? "d-block" : "none"}`}>
                                            <li><Link href="/news-insight-grid">News &amp; Insight</Link></li>
                                            <li><Link href="/news-insight-grid/details">News &amp; Insight Details</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <Link href="/contact" className="primary-btn3 four btn-hover">
                            Let’s Talk
                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span />
                        </Link>
                    </div>
                    <div className="menu-contact-area d-lg-none d-flex">
                        <div className="location">
                            <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M8.99997 17.4727C4.32818 17.4727 0.527344 13.6718 0.527344 9.00003C0.527344 4.32823 4.32818 0.527396 8.99997 0.527396C13.6718 0.527396 17.4726 4.32823 17.4726 9.00003C17.4726 13.6718 13.6718 17.4727 8.99997 17.4727Z" strokeMiterlimit={10} />
                                    <path d="M8.99999 17.4727C11.0578 17.4727 13.3593 13.6718 13.3593 9.00003C13.3593 4.32823 11.0578 0.527396 8.99999 0.527396M8.99999 17.4727C6.94216 17.4727 4.64062 13.6718 4.64062 9.00003C4.64062 4.32823 6.94216 0.527396 8.99999 0.527396" strokeMiterlimit={10} />
                                    <path d="M0.527344 9H17.4726" strokeMiterlimit={10} />
                                    <path d="M2.77045 3.26377C4.31978 4.25658 6.53905 4.95703 8.99998 4.95703C11.461 4.95703 13.6803 4.25654 15.2296 3.2637" strokeMiterlimit={10} />
                                    <path d="M15.2295 14.7367C13.6802 13.7439 11.4609 13.0435 8.99999 13.0435C6.53899 13.0435 4.31969 13.7439 2.77032 14.7368" strokeMiterlimit={10} />
                                    <path d="M9 0.527396V17.4727" strokeMiterlimit={10} />
                                </g>
                            </svg>
                            <p>Product Designer, Based on Birmingham, UK.</p>
                        </div>
                        <ul className="contact-list">
                            <li className="single-contact">
                                <span>Email:</span>
                                <a href="mailto:info@examplegmail.com">info@examplegmail.com</a>
                            </li>
                            <li className="single-contact">
                                <span>Phone:</span>
                                <a href="tel:9937676828">+99-376 768 28</a>
                            </li>
                        </ul>
                    </div>
                    <div className="social-area">
                        <h6>Connect with Me!</h6>
                        <ul className="social-list">
                            <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                            <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                            <li><a href="https://www.youtube.com/"><i className="bx bxl-youtube" /></a></li>
                            <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <header className={`header-area style-7 ${state.scrollY > 20 ? "sticky" : ""}`}>
                <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">
                    <div className="company-logo">
                        <Link href="/"><img alt="image" className="img-fluid" src="/assets/img/header-logo-white.svg" /></Link>
                    </div>
                    <div className="location d-lg-flex d-none">
                        <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M8.99997 17.4727C4.32818 17.4727 0.527344 13.6718 0.527344 9.00003C0.527344 4.32823 4.32818 0.527396 8.99997 0.527396C13.6718 0.527396 17.4726 4.32823 17.4726 9.00003C17.4726 13.6718 13.6718 17.4727 8.99997 17.4727Z" strokeMiterlimit={10} />
                                <path d="M8.99999 17.4727C11.0578 17.4727 13.3593 13.6718 13.3593 9.00003C13.3593 4.32823 11.0578 0.527396 8.99999 0.527396M8.99999 17.4727C6.94216 17.4727 4.64062 13.6718 4.64062 9.00003C4.64062 4.32823 6.94216 0.527396 8.99999 0.527396" strokeMiterlimit={10} />
                                <path d="M0.527344 9H17.4726" strokeMiterlimit={10} />
                                <path d="M2.77045 3.26377C4.31978 4.25658 6.53905 4.95703 8.99998 4.95703C11.461 4.95703 13.6803 4.25654 15.2296 3.2637" strokeMiterlimit={10} />
                                <path d="M15.2295 14.7367C13.6802 13.7439 11.4609 13.0435 8.99999 13.0435C6.53899 13.0435 4.31969 13.7439 2.77032 14.7368" strokeMiterlimit={10} />
                                <path d="M9 0.527396V17.4727" strokeMiterlimit={10} />
                            </g>
                        </svg>
                        <p>Product Designer, Based on Birmingham, UK.</p>
                    </div>
                    <ul className="contact-list d-lg-block d-none">
                        <li className="single-contact">
                            <span>Email:</span>
                            <a href="mailto:info@examplegmail.com">info@examplegmail.com</a>
                        </li>
                        <li className="single-contact">
                            <span>Phone:</span>
                            <a href="tel:9937676828">+99-376 768 28</a>
                        </li>
                    </ul>
                    <div className="nav-right">
                        <div className="right-sidebar-button" onClick={toggleRightSidebar}>
                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M4.61426 0.138589C3.82642 -0.0461965 3.00651 -0.0461965 2.21867 0.138589C1.7127 0.257268 1.2499 0.514858 0.88241 0.882348C0.514919 1.24984 0.257329 1.71263 0.13865 2.21861C-0.0461354 3.00645 -0.0461354 3.82636 0.13865 4.6142C0.257329 5.12017 0.514919 5.58297 0.88241 5.95046C1.2499 6.31795 1.7127 6.57554 2.21867 6.69422C3.00651 6.87904 3.82642 6.87904 4.61426 6.69422C5.12024 6.57554 5.58303 6.31795 5.95052 5.95046C6.31801 5.58297 6.5756 5.12017 6.69428 4.6142C6.8791 3.82636 6.8791 3.00645 6.69428 2.21861C6.5756 1.71263 6.31801 1.24984 5.95052 0.882348C5.58303 0.514858 5.12024 0.257268 4.61426 0.138589ZM4.61426 9.3058C3.82642 9.12099 3.00651 9.12099 2.21867 9.3058C1.7127 9.42448 1.2499 9.68207 0.88241 10.0496C0.514919 10.4171 0.257329 10.8798 0.13865 11.3858C-0.0461354 12.1737 -0.0461354 12.9936 0.13865 13.7814C0.257329 14.2874 0.514919 14.7502 0.88241 15.1177C1.2499 15.4852 1.7127 15.7428 2.21867 15.8614C3.00651 16.0462 3.82642 16.0462 4.61426 15.8614C5.12024 15.7428 5.58303 15.4852 5.95052 15.1177C6.31801 14.7502 6.5756 14.2874 6.69428 13.7814C6.8791 12.9936 6.8791 12.1737 6.69428 11.3858C6.5756 10.8798 6.31801 10.4171 5.95052 10.0496C5.58303 9.68207 5.12024 9.42448 4.61426 9.3058ZM13.7815 0.138589C12.9936 -0.0461965 12.1737 -0.0461965 11.3859 0.138589C10.8799 0.257268 10.4171 0.514858 10.0496 0.882348C9.68213 1.24984 9.42454 1.71263 9.30587 2.21861C9.12105 3.00645 9.12105 3.82636 9.30587 4.6142C9.42454 5.12017 9.68213 5.58297 10.0496 5.95046C10.4171 6.31795 10.8799 6.57554 11.3859 6.69422C12.1737 6.87904 12.9936 6.87904 13.7815 6.69422C14.2875 6.57554 14.7502 6.31795 15.1177 5.95046C15.4852 5.58297 15.7428 5.12017 15.8615 4.6142C16.0462 3.82635 16.0462 3.00645 15.8615 2.21861C15.7428 1.71263 15.4852 1.24984 15.1177 0.882348C14.7502 0.514858 14.2875 0.257268 13.7815 0.138589ZM13.7815 9.3058C12.9936 9.12099 12.1737 9.12099 11.3859 9.3058C10.8799 9.42448 10.4171 9.68207 10.0496 10.0496C9.68213 10.4171 9.42454 10.8798 9.30587 11.3858C9.12105 12.1737 9.12105 12.9936 9.30587 13.7814C9.42454 14.2874 9.68213 14.7502 10.0496 15.1177C10.4171 15.4852 10.8799 15.7428 11.3859 15.8614C12.1737 16.0462 12.9936 16.0462 13.7815 15.8614C14.2875 15.7428 14.7502 15.4852 15.1177 15.1177C15.4852 14.7502 15.7428 14.2874 15.8615 13.7814C16.0462 12.9936 16.0462 12.1737 15.8615 11.3858C15.7428 10.8798 15.4852 10.4171 15.1177 10.0496C14.7502 9.68207 14.2875 9.42448 13.7815 9.3058Z" />
                                </g>
                            </svg>
                        </div>
                        <Link href="/contact" className="primary-btn3 four btn-hover d-lg-flex d-none">
                            Let’s Talk
                            <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header7
