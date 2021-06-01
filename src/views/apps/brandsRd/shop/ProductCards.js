// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, Heart, Mail, User } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'

const ProductCards = props => {
  // ** Props
  const {
    store,
    products,
    activeView,
    addToCart,
    dispatch,
    getProducts,
    getCartItems,
    addToWishlist,
    deleteWishlistItem
  } = props

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getCartItems())
    dispatch(getProducts(store.params))
  }

  // ** Handle Wishlist item toggle
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getProducts(store.params))
  }

  // ** Renders products
  const renderProducts = () => {
    if (products.length) {
      return products.map(item => {
        const CartBtnTag = item.isInCart ? Link : 'button'

        return (
          <Card className='ecommerce-card' key={item.name}>
            <div className='item-img text-center mx-auto'>
              {/* <Link to={`/apps/brandsRd/product-detail/${item.slug}`}>
                <img className='img-fluid card-img-top' src={item.image} alt={item.name} />
              </Link> */}
              <Link to="#">
                <img className='img-fluid card-img-top' src={item.image} alt={item.name} />
              </Link>
            </div>
            <CardBody>
              <h6 className='item-name'>
                {/* <Link className='text-body' to={`/apps/brandsRd/product-detail/${item.slug}`}>
                  {item.name}
                </Link> */}
                <Link className='text-body' to="#">
                  {item.name}
                </Link>
              </h6>
              <CardText className='item-description'>{item.description}</CardText>
            </CardBody>
            <div className='item-options text-center'>
              <Button
                className='btn-wishlist'
                color='light'
                // onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
              >
                <Heart
                  className={classnames('mr-50', {
                    'text-danger': item.isInWishlist
                  })}
                  size={14}
                />
                <span>Wishlist</span>
              </Button>
              <Button tag={Link} to='#' color='primary' className="btn-cart move-cart">
        <User className="mr-50" size={14} />
        <span>View Profile</span>
      </Button>
            </div>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list'
      })}
    >
      {renderProducts()}
    </div>
  )
}

export default ProductCards
