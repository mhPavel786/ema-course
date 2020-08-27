import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum,courses) => sum + courses.price,0);
    return (
        <div className="cart-style">
            <h2 className='text-center'><FontAwesomeIcon icon={faShoppingCart} />Cart</h2>
            <h4>Course Enrolled: {cart.length}</h4> 
            <h4>Total Price: {totalPrice}৳</h4>
        </div>
    );
};

export default Cart;