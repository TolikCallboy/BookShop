const updateCartItems = (cartItem, item, idx) => {
    if(item.count === 0) {
        return [
            ...cartItem.slice(0, idx),
            ...cartItem.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItem,
            item
        ]
    }
    return [
        ...cartItem.slice(0, idx),
        item,
        ...cartItem.slice(idx + 1)
    ]
}

const updateCartItem = (book, item = {}, quantity ) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
        } = item

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateOrder = (state, bookId, quantity) => {
    const { shoppingCart:  { cartItem }, bookList: { books } } = state

    const book = books.find(( { id } ) => id === bookId)
    const itemIndex = cartItem.findIndex(({ id }) => id === bookId)
    const item = cartItem[itemIndex]

    const newItem = updateCartItem(book, item, quantity)
    let newTotal = 0;
    let newCount = 0;

    const cartItemList = updateCartItems(cartItem, newItem, itemIndex)

    cartItemList.forEach(item => newTotal+= item.total)
    cartItemList.forEach(item => newCount+= item.count)

    return {
        orderTotal: newTotal,
        cartItem: cartItemList,
        count: newCount
    }
}


export const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItem: [],
            orderTotal: 0,
            count: 0
        }}

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItem.find(({ id }) => id === action.payload)

            return updateOrder(state, action.payload, -item.count)


        default:
            return state.shoppingCart


    }
}