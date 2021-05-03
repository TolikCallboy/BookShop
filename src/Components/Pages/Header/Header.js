import React from "react";
import './Header.css'
import {Link} from "react-router-dom";
import {allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart} from "../../Redux/Actions/Actions";
import {connect} from "react-redux";

const Header = ({ count, total}) => {
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div className='logo text-red'>Книжный Магазин</div>
            </Link>
            <Link to="/cart">
                <div className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    <span>{count} item </span>
                    <span className="total-color">$ {total}</span>

                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({shoppingCart: { cartItem, orderTotal, count}}) => {
    return {
        items: cartItem,
        total: orderTotal,
        count
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default  connect(mapStateToProps, mapDispatchToProps)(Header)