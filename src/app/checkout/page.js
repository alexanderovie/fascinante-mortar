"use client"
import Home3Footer from '@/components/Footer/Home3Footer'
import Header3 from '@/components/header/Header3'
import Link from 'next/link'
import React, { useState } from 'react'
const initialCartItems = [
    {
        id: 1,
        name: 'Casual Outfit Set',
        sku: 'D32-5H23',
        price: 190,
        quantity: 1,
        image: '/assets/img/innerpages/cart-img1.png',
    },
    {
        id: 2,
        name: 'Luxury Beauty Item',
        sku: 'D32-5H23',
        price: 150,
        quantity: 1,
        image: '/assets/img/innerpages/cart-img2.png',
    },
];

const CheckoutPage = () => {
    const [activeOption, setActiveOption] = useState('paypal');
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id, change) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + change),
                    }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleOptionChange = (option) => {
        setActiveOption(option);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };


    return (
        <>
            <Header3 />
            {/* Breadcrumb Section Start */}
            <div className="breadcrumb-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h1>Checkout Page</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg width={25} height={6} viewBox="0 0 25 6" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                                        </svg>
                                        Checkout Page
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section End */}
            {/* Checkout Page Start */}
            <div className="checkout-page mb-130">
                <div className="container">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-lg-7">
                            <div className="checkout-form-wrapper">
                                <div className="checkout-form-title">
                                    <h4>Billing Information</h4>
                                </div>
                                <div className="checkout-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-inner two mb-25">
                                                    <label>Full Name*</label>
                                                    <input type="text" placeholder="Daniel Scoot" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner two mb-25">
                                                    <label>Phone Number*</label>
                                                    <input type="text" placeholder="(212)+ 455 645 678" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner two mb-25">
                                                    <label>Email Address <span>(Optional)</span></label>
                                                    <input type="email" placeholder="info@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner two mb-25">
                                                    <label>Your Location</label>
                                                    <input type="text" placeholder="Type Location" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner two mb-25">
                                                    <label>Street Address*</label>
                                                    <input type="text" placeholder="Street address" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-inner two mb-25">
                                                    <label>Postal Code*</label>
                                                    <input type="text" placeholder="Postal code" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-inner two mb-25">
                                                    <label>Short Notes*</label>
                                                    <textarea placeholder="Write Something..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-inner2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="contactCheck11" />
                                                        <label className="form-check-label" htmlFor="contactCheck11">
                                                            Save my information for next time when I purchased
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="checkout-form-wrapper">
                                <div className="checkout-form-title">
                                    <h4>Order Summary</h4>
                                </div>
                                <div className="order-sum-area">
                                    <form>
                                        <div className="cart-menu">
                                            <div className="cart-body">
                                                <ul>
                                                    {cartItems.map((item) => (
                                                        <li className="single-item" key={item.id}>
                                                            <div className="item-area">
                                                                <div className="main-item">
                                                                    <div className="item-img">
                                                                        <img src={item.image} alt={item.name} />
                                                                    </div>
                                                                    <div className="content-and-quantity">
                                                                        <div className="content">
                                                                            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                                                                            <h6>
                                                                                <Link href="/product-details">{item.name}</Link>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="quantity-area">
                                                                            <div className="quantity">
                                                                                <a
                                                                                    className="quantity__minus"
                                                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                                                >
                                                                                    <span>
                                                                                        <i className="bi bi-dash" />
                                                                                    </span>
                                                                                </a>
                                                                                <input
                                                                                    name="quantity"
                                                                                    type="text"
                                                                                    className="quantity__input"
                                                                                    readOnly
                                                                                    value={item.quantity}
                                                                                />
                                                                                <a
                                                                                    className="quantity__plus"
                                                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                                                >
                                                                                    <span>
                                                                                        <i className="bi bi-plus" />
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="close-btn"
                                                                    onClick={() => handleRemoveItem(item.id)}
                                                                >
                                                                    <i className="bi bi-x" />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="cart-footer">
                                                <div className="pricing-area mb-40">
                                                    <ul>
                                                        <li>
                                                            <strong>Sub Total</strong>
                                                            <strong>${calculateSubtotal().toFixed(2)}</strong>
                                                        </li>
                                                        <li>
                                                            Shipping
                                                            <div className="order-info">
                                                                <p>Shipping Free*</p>
                                                                <span>Pickup fee $10.00</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <strong>Total</strong>
                                                            <strong>${(cartItems.length > 0 ? calculateSubtotal() + 10 : 0).toFixed(2)}</strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="choose-payment-method">
                                                    <h6>Select Payment Method</h6>
                                                    <div className="payment-option">
                                                        <ul>
                                                            <li onClick={() => handleOptionChange('paypal')} className={`paypal ${activeOption === 'paypal' ? 'active' : ''}`}>
                                                                <img src="/assets/img/innerpages/icon/payPal.svg" alt="" />
                                                                <div className="checked">
                                                                    <i className="bi bi-check" />
                                                                </div>
                                                            </li>
                                                            <li className={`stripe ${activeOption === 'stripe' ? 'active' : ''}`} onClick={() => handleOptionChange('stripe')}>
                                                                <img src="/assets/img/innerpages/icon/stripe.svg" alt="" />
                                                                <div className="checked">
                                                                    <i className="bi bi-check" />
                                                                </div>
                                                            </li>
                                                            <li className={`offline ${activeOption === 'offline' ? 'active' : ''}`} onClick={() => handleOptionChange('offline')}>
                                                                <img src="/assets/img/innerpages/icon/offline.svg" alt="" />
                                                                <div className="checked">
                                                                    <i className="bi bi-check" />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="pt-25" id="StripePayment" style={{ display: activeOption === 'stripe' ? 'block' : 'none' }}>
                                                        <div className="row g-4">
                                                            <div className="col-md-12">
                                                                <div className="form-inner two">
                                                                    <label>Card Number</label>
                                                                    <input type="text" placeholder="1234 1234 1234 1234" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-inner two">
                                                                    <label>Expiry</label>
                                                                    <input type="text" placeholder="MM/YY" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-inner two">
                                                                    <label>CVC</label>
                                                                    <input type="text" placeholder="CVC" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="primary-btn3 two btn-hover">
                                                    Place Your Order
                                                    <span />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout Page End */}
            <Home3Footer />
        </>
    )
}

export default CheckoutPage
