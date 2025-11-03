"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
    activeMenu: "",
    activeSubMenu: "",
    isSidebarOpen: false
};

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,

                activeMenu: state.activeMenu === action.menu ? "" : action.menu,
                activeSubMenu: state.activeMenu === action.menu ? state.activeSubMenu : ""
            };
        case "TOGGLE_SUB_MENU":
            return {
                ...state,
                activeSubMenu: state.activeSubMenu === action.subMenu ? "" : action.subMenu
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            };
        case "setScrollY":
            return { ...state, scrollY: action.payload };
        default:
            return state;
    }
}

const SidebarMenu = ({ isMenuOpen, toggleMenu, style }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const pathName = usePathname()
    const collapseMenu = (menu) => {
        console.log();

        dispatch({ type: "TOGGLE_MENU", menu });
    };
    const toggleSubMenu = (subMenu) => {
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };
    return (
        <>
            <div className={` ${isMenuOpen ? 'active' : ''} sidebar-menu ${style}`}>
                <div className="sidebar-menu-top-area">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="sidebar-menu-logo">
                            <Link href="/"><img alt="image" className="img-fluid" src="/assets/img/header-logo.svg" /></Link>
                        </div>
                        <div className="sidebar-menu-close" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 18 18">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-lg-0 gy-5 align-items-center">
                        <div className="col-lg-4 order-lg-1 order-2">
                            <div className="sidebar-contact">
                                <div className="contact-area mb-40">
                                    <h4>Get in Touch
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                                        </svg>
                                    </h4>
                                    <ul className="contact-list">
                                        <li>
                                            <div className="single-contact">
                                                <div className="icon">
                                                    <svg width={33} height={33} viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M26.0808 20.4419C25.4052 19.7385 24.5903 19.3624 23.7267 19.3624C22.87 19.3624 22.0481 19.7315 21.3447 20.435L19.1438 22.6289C18.9627 22.5314 18.7816 22.4408 18.6075 22.3503C18.3568 22.2249 18.12 22.1065 17.918 21.9812C15.8564 20.6718 13.9828 18.9654 12.1859 16.7575C11.3153 15.6571 10.7302 14.7307 10.3054 13.7905C10.8765 13.2681 11.4058 12.7248 11.9212 12.2025C12.1162 12.0075 12.3113 11.8055 12.5063 11.6105C13.9689 10.1478 13.9689 8.25339 12.5063 6.79077L10.6049 4.88935C10.3889 4.67344 10.1661 4.45057 9.95713 4.22769C9.53923 3.79587 9.10045 3.35012 8.64773 2.93222C7.97214 2.26359 7.16421 1.90839 6.3145 1.90839C5.46478 1.90839 4.64293 2.26359 3.94644 2.93222C3.93947 2.93919 3.93947 2.93919 3.93251 2.94615L1.56445 5.33511C0.672947 6.22661 0.164512 7.31313 0.0530735 8.57377C-0.114084 10.6075 0.484896 12.502 0.944577 13.7417C2.07289 16.7854 3.75839 19.6061 6.27271 22.6289C9.32332 26.2715 12.9938 29.148 17.1867 31.1748C18.7886 31.934 20.9268 32.8324 23.3158 32.9857C23.462 32.9926 23.6152 32.9996 23.7545 32.9996C25.3634 32.9996 26.7146 32.4215 27.7733 31.2723C27.7802 31.2584 27.7942 31.2514 27.8011 31.2375C28.1633 30.7987 28.5812 30.4017 29.02 29.9768C29.3195 29.6913 29.6259 29.3918 29.9254 29.0784C30.6149 28.361 30.9771 27.5252 30.9771 26.6685C30.9771 25.8049 30.608 24.9761 29.9045 24.2796L26.0808 20.4419ZM28.5742 27.7759C28.5673 27.7759 28.5673 27.7829 28.5742 27.7759C28.3026 28.0685 28.024 28.3331 27.7245 28.6257C27.2718 29.0575 26.8121 29.5102 26.3803 30.0186C25.6768 30.7708 24.848 31.126 23.7615 31.126C23.657 31.126 23.5456 31.126 23.4411 31.1191C21.3726 30.9867 19.4503 30.1788 18.0085 29.4893C14.0664 27.5809 10.6049 24.8716 7.72837 21.4379C5.35334 18.5753 3.76535 15.9287 2.71366 13.087C2.06592 11.3528 1.82912 10.0016 1.93359 8.727C2.00324 7.91211 2.31666 7.23652 2.89474 6.65843L5.26976 4.28341C5.61104 3.96302 5.97322 3.7889 6.32843 3.7889C6.76721 3.7889 7.12242 4.05357 7.3453 4.27644C7.35226 4.28341 7.35923 4.29037 7.36619 4.29734C7.79105 4.69434 8.19501 5.10527 8.61987 5.54405C8.83578 5.76693 9.05866 5.9898 9.28153 6.21965L11.1829 8.12106C11.9212 8.85933 11.9212 9.54189 11.1829 10.2802C10.981 10.4822 10.7859 10.6841 10.584 10.8791C9.99891 11.4781 9.44173 12.0353 8.83578 12.5786C8.82185 12.5925 8.80792 12.5995 8.80096 12.6134C8.20198 13.2124 8.31342 13.7974 8.43878 14.1944C8.44575 14.2153 8.45271 14.2362 8.45968 14.2571C8.95418 15.4551 9.65067 16.5834 10.7093 17.9276L10.7163 17.9346C12.6386 20.3026 14.6654 22.1483 16.9011 23.5622C17.1867 23.7433 17.4792 23.8895 17.7578 24.0288C18.0085 24.1542 18.2453 24.2726 18.4473 24.398C18.4752 24.4119 18.503 24.4328 18.5309 24.4467C18.7677 24.5651 18.9906 24.6209 19.2204 24.6209C19.7985 24.6209 20.1607 24.2587 20.2791 24.1403L22.6611 21.7583C22.8979 21.5215 23.274 21.2359 23.7128 21.2359C24.1446 21.2359 24.4998 21.5075 24.7157 21.7444C24.7227 21.7513 24.7227 21.7513 24.7296 21.7583L28.5673 25.5959C29.2847 26.3064 29.2847 27.0377 28.5742 27.7759Z" />
                                                        <path d="M17.8345 7.8506C19.6593 8.15705 21.3169 9.0207 22.6403 10.344C23.9636 11.6673 24.8203 13.325 25.1337 15.1498C25.2103 15.6095 25.6073 15.9299 26.06 15.9299C26.1157 15.9299 26.1645 15.9229 26.2202 15.9159C26.7356 15.8323 27.0769 15.3448 26.9933 14.8294C26.6172 12.6215 25.5725 10.6087 23.9775 9.01373C22.3826 7.41877 20.3697 6.37404 18.1618 5.99794C17.6464 5.91436 17.1659 6.25564 17.0753 6.76408C16.9848 7.27251 17.3191 7.76702 17.8345 7.8506Z" />
                                                        <path d="M32.9619 14.557C32.3421 10.9213 30.6287 7.61301 27.996 4.98029C25.3633 2.34757 22.055 0.634209 18.4193 0.0143347C17.9108 -0.0762086 17.4303 0.272035 17.3397 0.780471C17.2562 1.29587 17.5974 1.77645 18.1128 1.86699C21.3585 2.41722 24.3185 3.95645 26.6727 6.30362C29.0268 8.65774 30.5591 11.6178 31.1093 14.8634C31.1859 15.3231 31.5829 15.6435 32.0356 15.6435C32.0913 15.6435 32.1401 15.6365 32.1958 15.6296C32.7042 15.553 33.0525 15.0654 32.9619 14.557Z" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <span>CALL ANY TIME</span>
                                                    <h6><a href="tel:29658718617">2-965-871-8617</a></h6>
                                                </div>
                                            </div>
                                            <svg className="arrow" width={8} height={29} viewBox="0 0 8 29" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.976311 24.2692 0.659728 24.2692 0.464466 24.4645C0.269204 24.6597 0.269204 24.9763 0.464466 25.1716L3.64645 28.3536ZM3.5 3V28H4.5V3H3.5Z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="icon">
                                                    <svg width={24} height={33} viewBox="0 0 24 33" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.5985 0H12.0991C16.0555 0.0837348 19.6147 2.19996 21.6112 5.64953C23.6581 9.17969 23.7215 13.4256 21.7672 16.9999C21.7672 16.9999 21.7672 16.9999 21.7672 16.9999L13.6385 31.8678V31.8796L13.5756 31.9928C13.5036 32.1223 13.4205 32.2313 13.3348 32.3293C12.9597 32.758 12.4324 33 11.8485 33C11.2631 33 10.7399 32.7572 10.358 32.3358L10.3521 32.3293C10.2664 32.2313 10.1833 32.1223 10.1114 31.9928L10.0485 31.8796V31.8678L1.91977 16.9999L1.91924 16.9989C-0.0239922 13.4258 0.0283349 9.18026 2.07594 5.64918C4.08208 2.20114 7.63071 0.083862 11.5879 0.000111938L11.5985 0ZM11.6038 1C8.00323 1.078 4.77383 3.0009 2.94082 6.15117C1.06871 9.37988 1.02102 13.2539 2.79749 16.5207C2.79741 16.5205 2.79757 16.5208 2.79749 16.5207L11.0271 31.5731C11.0477 31.6024 11.0721 31.6332 11.1018 31.6674C11.2995 31.884 11.5553 32 11.8485 32C12.1446 32 12.3973 31.882 12.5822 31.6707C12.6132 31.6353 12.6386 31.6034 12.6599 31.5731L20.8898 16.5201C22.6753 13.2546 22.6188 9.38058 20.7459 6.15082C18.9234 3.00192 15.6846 1.07801 12.0831 1H11.6038ZM11.8485 5.67C9.28526 5.67 7.20848 7.75551 7.20848 10.31C7.20848 12.8739 9.28462 14.95 11.8485 14.95C14.403 14.95 16.4885 12.8732 16.4885 10.31C16.4885 7.75614 14.4023 5.67 11.8485 5.67ZM6.20848 10.31C6.20848 7.20449 8.73171 4.67 11.8485 4.67C14.9546 4.67 17.4885 7.20386 17.4885 10.31C17.4885 13.4268 14.954 15.95 11.8485 15.95C8.73234 15.95 6.20848 13.4261 6.20848 10.31Z" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.33177 9.24333C6.74289 11.7373 8.28722 14.2364 10.7811 14.8253C13.2751 15.4141 15.7742 13.8698 16.3631 11.3759C16.952 8.88195 15.4076 6.38284 12.9137 5.79396C10.4198 5.20507 7.92066 6.74941 7.33177 9.24333ZM10.5513 15.7985C7.51994 15.0827 5.64277 12.0449 6.35857 9.01353C7.07437 5.98212 10.1121 4.10496 13.1435 4.82076C16.1749 5.53656 18.0521 8.57427 17.3363 11.6057C16.6205 14.6371 13.5828 16.5143 10.5513 15.7985Z" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <span>ADDRESS</span>
                                                    <h6><a href="#">Dhaka, Bangladesh</a></h6>
                                                </div>
                                            </div>
                                            <svg className="arrow" width={8} height={29} viewBox="0 0 8 29" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.33333 3C1.33333 4.47276 2.52724 5.66667 4 5.66667C5.47276 5.66667 6.66667 4.47276 6.66667 3C6.66667 1.52724 5.47276 0.333333 4 0.333333C2.52724 0.333333 1.33333 1.52724 1.33333 3ZM3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.976311 24.2692 0.659728 24.2692 0.464466 24.4645C0.269204 24.6597 0.269204 24.9763 0.464466 25.1716L3.64645 28.3536ZM3.5 3V28H4.5V3H3.5Z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="icon">
                                                    <svg width={33} height={32} viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M32.9896 1.18398C33.0176 0.995671 32.993 0.803292 32.9185 0.628097C32.844 0.452902 32.7225 0.301711 32.5675 0.191227C32.4126 0.0808885 32.2301 0.0155543 32.0404 0.00245033C31.8506 -0.0106536 31.6609 0.0289832 31.4923 0.116977L0.554753 16.2732C0.376749 16.3673 0.230082 16.5113 0.132753 16.6876C0.0354241 16.8638 -0.0083331 17.0646 0.00685184 17.2654C0.0220368 17.4662 0.0955032 17.6581 0.218235 17.8177C0.340966 17.9773 0.507624 18.0976 0.697753 18.1639L9.29838 21.1036L27.6148 5.44235L13.4413 22.5185L27.8554 27.4451C27.9984 27.4932 28.1502 27.5094 28.3002 27.4926C28.4501 27.4758 28.5946 27.4265 28.7235 27.348C28.8524 27.2696 28.9625 27.1639 29.0463 27.0384C29.1301 26.9129 29.1854 26.7706 29.2084 26.6215L32.9896 1.18398ZM28.2201 26.469C28.22 26.4693 28.2201 26.4688 28.2201 26.469L32.0005 1.03696C32.0014 1.03102 32.0006 1.02494 31.9982 1.0194M28.2201 26.469C28.2192 26.4738 28.2172 26.4792 28.2145 26.4833C28.2117 26.4876 28.2079 26.4912 28.2035 26.4939C28.1991 26.4965 28.1942 26.4982 28.189 26.4988C28.1842 26.4993 28.1793 26.4989 28.1746 26.4974C28.1744 26.4973 28.1749 26.4975 28.1746 26.4974L15.1369 22.0413L28.3842 6.08103L26.9649 4.68231L9.08205 19.9729L1.02672 17.2195C1.02644 17.2194 1.027 17.2196 1.02672 17.2195C1.02082 17.2173 1.01481 17.2131 1.01095 17.2081C1.00692 17.2029 1.0045 17.1966 1.004 17.19C1.0035 17.1834 1.00494 17.1768 1.00814 17.171C1.01122 17.1654 1.0158 17.1608 1.02135 17.1577C1.02113 17.1578 1.02157 17.1576 1.02135 17.1577L31.9549 1.00355C31.9548 1.00357 31.9549 1.00352 31.9549 1.00355C31.9599 1.00093 31.9658 0.999681 31.9715 1.00007M13.0319 30.5897C13.0321 30.5963 13.0342 30.6027 13.0381 30.6081C13.0421 30.6136 13.0478 30.6177 13.0543 30.6199C13.0608 30.622 13.0678 30.622 13.0744 30.6199C13.0807 30.6179 13.0862 30.6141 13.0902 30.6089C13.0901 30.6091 13.0904 30.6087 13.0902 30.6089L16.0115 26.6335L13.0319 25.6152V30.5897ZM12.0319 24.2166V30.5939C12.0329 30.8106 12.1021 31.0215 12.2297 31.1967C12.3573 31.3719 12.5368 31.5025 12.7427 31.5701C12.9487 31.6376 13.1707 31.6386 13.3772 31.573C13.5838 31.5073 13.7644 31.3784 13.8936 31.2044L17.624 26.1279L12.0319 24.2166Z" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                    <span>SAY HELLO</span>
                                                    <h6><a href="mailto:info@example.com">info@example.com</a></h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="address-area">
                                    <h4>Office Address
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                                        </svg>
                                    </h4>
                                    <ul className="address-list">
                                        <li className="single-address">
                                            <span>NEW YORK</span>
                                            <a href="#">8204 Glen Ridge DriveEndicott, NY 13760</a>
                                        </li>
                                        <li className="single-address">
                                            <span>WASHINGTON DC</span>
                                            <a href="#">8204 Glen Ridge DriveEndicott, NY 13760</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 order-lg-2 order-1">
                            <div className="sidebar-menu-wrap">
                                <ul className="main-menu">
                                    <li className={state.activeMenu === "home" ? "active" : ""}>
                                        <Link href="/">HOME</Link>
                                        <span className={`dropdown-icon2 ${state.activeMenu === "home" ? "active" : ""} `} onClick={() => collapseMenu("home")}><i className={`bi ${state.activeMenu === "home" ? "bi-dash" : "bi-plus"}`} /></span>

                                        <ul className={`submenu-list ${state.activeMenu === "home" ? "active" : ""}`}>
                                            <li >
                                                <Link href="/">Construction Home
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/real-estate">Real Estate Home
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li className={pathName === "/architecture" ? "active" : ""}>
                                                <Link href="/architecture">Architecture Home
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li className={pathName === "/rnovation" ? "active" : ""}>
                                                <Link href="/rnovation">Renovation Home
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/interior">Interior Design Home
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li className={pathName === "/architecture-project" ? "active" : ""}>
                                                <Link href="/architecture-project">Architecture Project
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/services">SOLUTIONS</Link>
                                        <span className={`dropdown-icon2 ${state.activeMenu === "solution" ? "active" : ""} `} onClick={() => collapseMenu("solution")}><i className={`bi ${state.activeMenu === "solution" ? "bi-dash" : "bi-plus"}`} /></span>
                                        <ul className={`submenu-list ${state.activeMenu === "solution" ? "active" : ""}`}>
                                            <li>
                                                <Link href="/services">Services
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="services/details">Service Details
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/project">Project</Link>
                                        <span className={`dropdown-icon2 ${state.activeMenu === "project" ? "active" : ""} `} onClick={() => collapseMenu("project")}><i className={`bi ${state.activeMenu === "project" ? "bi-dash" : "bi-plus"}`} /></span>
                                        <ul className={`submenu-list ${state.activeMenu === "project" ? "active" : ""}`}>
                                            <li>
                                                <Link href="/project">Project Grid
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/project/project-masonary">Project Masonary
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/project/project-info-flow">Project Info flow
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/project/project-single">Project Single
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/project/project-details">Project Details
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <span className={`dropdown-icon2 ${state.activeMenu === "pages" ? "active" : ""} `} onClick={() => collapseMenu("pages")}><i className={`bi ${state.activeMenu === "pages" ? "bi-dash" : "bi-plus"}`} /></span>
                                        <ul className={`submenu-list ${state.activeMenu === "pages" ? "active" : ""}`}>
                                            <li>
                                                <Link href="/team">Our Team
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/properties">Properties</Link>
                                                <span className="dropdown-icon2 two" onClick={() => toggleSubMenu("properties")}><i className={`bi ${state.activeSubMenu === "properties" ? "bi-dash" : "bi-plus"}`} /></span>
                                                <ul className={`submenu-list ${state.activeSubMenu === "properties" ? "active" : ""}`}>
                                                    <li>
                                                        <Link href="/properties">Properties
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/property-details">Property Details
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/team1">Blog</Link>
                                                <span className="dropdown-icon2 two" onClick={() => toggleSubMenu("blog")}><i className={`bi ${state.activeSubMenu === "blog" ? "bi-dash" : "bi-plus"}`} /></span>
                                                <ul className={`submenu-list ${state.activeSubMenu === "blog" ? "active" : ""}`}>
                                                    <li>
                                                        <Link href="/blog">Blog Grid
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/blog-sidebar">Blog Sidebar
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/blog-masonary">Blog Masonary
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/blog-details">Blog Details
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/shop">Shop</Link>
                                                <span className="dropdown-icon2 two" onClick={() => toggleSubMenu("shop")}><i className={`bi ${state.activeSubMenu === "shop" ? "bi-dash" : "bi-plus"}`} /></span>
                                                <ul className={`submenu-list ${state.activeSubMenu === "shop" ? "active" : ""}`}>
                                                    <li>
                                                        <Link href="/shop">Shop
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop/product-details">Product Details
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop/cart">Cart
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop/checkout">Checkout
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/brand">Brand
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">FAQs
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/error">Error 404
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                                                        <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarMenu