import React from "react";
import './BookListItem.css'

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, name, price, coverImage } = book
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt="cover"/>
            </div>
            <div className='book-details'>
                <a href='/' className='book-title'>{title}</a>
                <div className='book-name'>{name}</div>
                <div className='book-price'>$ {price}</div>
                <button
                    onClick={onAddedToCart}
                    className='button'>Добавить</button>
            </div>
        </div>
    )
}

export default BookListItem