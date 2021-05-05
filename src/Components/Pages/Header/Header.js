import React from "react";
import './Header.css'
import {Link} from "react-router-dom";
import {allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart} from "../../Redux/Actions/Actions";
import {connect} from "react-redux";

const Header = ({ count, total}) => {
    return (
            <header className='shop-header row'>
                <Link to='/'>
                    <span className='logo text-red'>Книжный Магазин</span>
                </Link>
                <Link to="/cart">
                <span className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    <span> {count} item </span>
                    <span className="total-color">$ {total}</span>
                </span>
                </Link>
                <span className='authorization'>
                <a href="/login">Войти </a>
                <a href="/authorization"> Регистрация</a>
            </span>
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