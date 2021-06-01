import axios from 'axios'

// ** GET Products
export const getProducts = params => {
  return dispatch => {
    return axios.get('/apps/brandsRd/products', { params }).then(res => {
      dispatch({ type: 'GET_PRODUCTS', data: res.data, params })
    })
  }
}

// ** Add Item to Cart
export const addToCart = id => {
  return (dispatch, getState) => {
    return axios.post('/apps/brandsRd/cart', { productId: id }).then(res => {
      dispatch({ type: 'ADD_TO_CART', data: res.data })
      dispatch(getProducts(getState().ecommerce.params))
    })
  }
}

// ** GET Wishlist Items
export const getWishlistItems = () => {
  return dispatch => {
    return axios.get('/apps/brandsRd/wishlist').then(res => {
      dispatch({ type: 'GET_WISHLIST', data: res.data })
    })
  }
}

// ** DELETE Wishlist Item
export const deleteWishlistItem = id => {
  return dispatch => {
    return axios.delete(`/apps/brandsRd/wishlist/${id}`).then(res => {
      dispatch({ type: 'DELETE_WISHLIST_ITEM', data: res.data })
      dispatch(getWishlistItems())
    })
  }
}

// ** GET Cart Items
export const getCartItems = () => {
  return dispatch => {
    return axios.get('/apps/brandsRd/cart').then(res => {
      dispatch({ type: 'GET_CART', data: res.data })
    })
  }
}

// ** GET Single Product
export const getProduct = slug => {
  return dispatch => {
    return axios.get(`/apps/brandsRd/products/${slug}`).then(res => {
      dispatch({ type: 'GET_PRODUCT', data: res.data })
    })
  }
}

// ** Add Item to Wishlist
export const addToWishlist = id => {
  return dispatch => {
    return axios.post('/apps/brandsRd/wishlist', { productId: id }).then(() => {
      dispatch({ type: 'ADD_TO_WISHLIST' })
    })
  }
}

// ** DELETE Cart Items
export const deleteCartItem = id => {
  return dispatch => {
    return axios.delete(`/apps/brandsRd/cart/${id}`).then(res => {
      dispatch({ type: 'DELETE_CART_ITEM', data: res.data })
      dispatch(getCartItems())
    })
  }
}
