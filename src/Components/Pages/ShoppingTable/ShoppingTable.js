import React from "react";
import './ShoppingTable.css'
import {connect} from "react-redux";

import {bookRemovedFromCart, allBooksRemovedFromCart, bookAddedToCart} from '../../Redux/Actions/Actions'

const ShoppingTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {

        const { id, count, total, title} = item;

        return (
            <tr key={id} className="string">
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}

                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>

                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>

                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <h2 className="order">Ваш список</h2>
            <table className="table">
                <thead>
                <tr >
                    <th >№</th>
                    <th >Название</th>
                    <th >Количество</th>
                    <th >Цена</th>
                </tr>
                </thead>

                <tbody >
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>

            <div className="total">
                <span>Общая цена: </span>
                <span className="total-color">$ {total}</span>

            </div>
        </div>
    );
};


const mapStateToProps = ({shoppingCart: { cartItem, orderTotal}}) => {
    return {
        items: cartItem,
        total: orderTotal,
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTable)



