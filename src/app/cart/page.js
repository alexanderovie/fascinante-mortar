"use client"
import { useState, useRef, useEffect } from "react";
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'

const CartPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Casual Outfit Set",
            sku: "D32-5H23",
            img: "assets/img/innerpages/cart-img1.png",
            price: 148.0,
            quantity: 1,
        },
        {
            id: 2,
            name: "Luxury Beauty Item",
            sku: "D32-5H23",
            img: "assets/img/innerpages/cart-img2.png",
            price: 200.0,
            quantity: 1,
        },
    ]);

    const tableRef = useRef(null);

    const handleToggle = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const handleClickOutside = (event) => {
        if (tableRef.current && !tableRef.current.contains(event.target)) {
            setActiveIndex(null);
        }
    };

    const handleIncrement = (index) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (index) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    const handleQuantityChange = (index, value) => {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed) && parsed > 0) {
            setCartItems((prevItems) =>
                prevItems.map((item, i) =>
                    i === index ? { ...item, quantity: parsed } : item
                )
            );
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const pickupFee = 10; // fixed fee
    const total = subTotal + pickupFee
    return (
        <>
            <Header3 />

            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h1>Cart Page</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Cart Page
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Cart Page Start */}
            <div className="cart-page mb-130">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cart-shopping-wrapper">
                                <div className="cart-widget-title">
                                    <h4>My Shopping</h4>
                                </div>
                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Product Info</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody ref={tableRef}>
                                        {cartItems.map((product, index) => (
                                            <tr key={product.id}>
                                                <td data-label="Product Info">
                                                    <div className="product-info-wrapper">
                                                        <div className="product-info-img">
                                                            <img src={product.img} alt={product.name} />
                                                        </div>
                                                        <div className="product-info-content">
                                                            <h6>{product.name}</h6>
                                                            <p><span>SKU: </span>{product.sku}</p>
                                                            <ul>
                                                                <li>remove</li>
                                                                <li>
                                                                    <div className="qty-btn" onClick={() => handleToggle(index)}>
                                                                        quantity
                                                                    </div>
                                                                    <div className={`quantity-area ${activeIndex === index ? "active" : ""}`}>
                                                                        <div className="quantity">
                                                                            <a className="quantity__minus" onClick={() => handleDecrement(index)}>
                                                                                <span><i className="bi bi-dash" /></span>
                                                                            </a>
                                                                            <input
                                                                                name="quantity"
                                                                                type="text"
                                                                                className="quantity__input"
                                                                                value={product.quantity}
                                                                                onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                                            />
                                                                            <a className="quantity__plus" onClick={() => handleIncrement(index)}>
                                                                                <span><i className="bi bi-plus" /></span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-label="Price"><span>${product.price.toFixed(2)}</span></td>
                                                <td data-label="Total">
                                                    ${(product.price * product.quantity).toFixed(2)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Link href="/shop" className="details-button">
                                    Continue Shoping
                                    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 ">
                            <div className="cart-order-sum-area">
                                <div className="cart-widget-title">
                                    <h4>Order Summary</h4>
                                </div>
                                <div className="order-summary-wrap">
                                    <ul className="order-summary-list">
                                        <li>
                                            <strong>Sub Total</strong>
                                            <strong>${subTotal.toFixed(2)}</strong>
                                        </li>
                                        <li>
                                            Shipping
                                            <div className="order-info">
                                                <p>Shipping Free*</p>
                                                <span>Pickup fee ${pickupFee.toFixed(2)}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="coupon-area">
                                                <span>Coupon Code</span>
                                                <form>
                                                    <div className="form-inner">
                                                        <input type="text" placeholder="Your code" />
                                                        <button type="submit" className="apply-btn">Apply</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <li>
                                            <strong>Total</strong>
                                            <strong>${total.toFixed(2)}</strong>
                                        </li>
                                    </ul>
                                    <Link href="/checkout" className="primary-btn3 two btn-hover mt-40">
                                        Processed Checkout
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cart Page End */}


            <Home3Footer />
        </>
    )
}

export default CartPage
