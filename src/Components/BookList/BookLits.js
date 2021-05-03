import React, { Component } from "react";
import BookListItem from "../BookListItem/BookListItem";

import  {connect} from "react-redux";
import { fetchBooks, bookAddedToCart } from '../Redux/Actions/Actions'
import { bindActionCreators } from "redux";

import './BookList.css'

import withBookStoreService from "../HOC/withBookStoreService";
import Spinner from "../Spinner/Spinner";
import Error from "../ErrorEndicator/Error";

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem
                            onAddedToCart={() => onAddedToCart(book.id)}
                            book={book} />
                    </li>
                )
            })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
       const { books, loading, error, onAddedToCart } = this.props
        if (loading) {
            return <Spinner/>
        }

        if(error) {
            return <Error/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>

        }
}


const mapStateToProps = ( {bookList: {books, loading, error }}) =>  {
    return { books, loading, error }
}


const mapDispatchToProps = (dispatch, { bookStoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookStoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch)
}


export default withBookStoreService()
               (connect(mapStateToProps, mapDispatchToProps)(BookListContainer))