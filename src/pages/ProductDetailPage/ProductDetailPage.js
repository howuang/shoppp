import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { ClipLoader } from 'react-spinners';
import cartActions from '../../redux/actions/cart.action';
import productAction from '../../redux/actions/product.action';
import userActions from '../../redux/actions/user.action';
import productReducer from '../../redux/reducers/product.reducer';
import "./ProductDetailPage.css"

const ProductDetailPage = () => {
    const params = useParams();
    const productId = params.id;
    const [cartProduct, setCartProduct] = useState(false);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    })
    const rating = 5;
    const [review, setReview] = useState("")
    

    const addToCart = (productId) => {
        setCartProduct(productId)
    };

     useEffect(() => {
    if (cartProduct) {
      dispatch(cartActions.addToCart({cartProduct}))
    }
    }, [cartProduct])

    const dispatch = useDispatch();
    const loading = useSelector(state => state.products.loading)
    const product = useSelector(state => state.products.singleProduct)

    useEffect(() => {
        dispatch(productAction.getDetail({productId}))
    }, [productId])

    const handleReviewInput = (e) => {
        e.preventDefault();
        setReview(e.target.value);
    }

    const handleReviewSubmit = () => {
        dispatch(userActions.postReview({ review, productId, rating }));
    };

    return (
        <div className="wrapper">
            <Container className="container">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="secondary" size={100} loading={true} />
        </div>
                ) : (      
        <Row>
            <Col className="product-img">
                <div >
                   {product && (
                    <img
                        className="w-100"
                        src={product?.imageUrls[0]}
                        alt="Product Image"
                    />
                    )}
                </div>
                    {product && (
                                    
              <img
                className="w-100"
                // src={product.}`}
                alt=""
              />
            )}
          </Col>
          <Col className="product-detail">
            {product && (
              <>
                <h4>{product.name}</h4>
                <div>
                    <h2>{formatter.format(product.price)}</h2>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
                    <Button onClick={() => addToCart(product._id)}>Add to Cart</Button>{" "}
                    <div>
                        <strong>Write us your review</strong>
                        <br />
                        <textarea key="review" rows="5" cols="50" onChange={handleReviewInput}></textarea>
                        </div>
                        <br />
                        <div>
                        <Button onClick={handleReviewSubmit}>Send review</Button>
                        </div>
              </>
            )}
          </Col>
        </Row>
        
      )}
    </Container>
        </div>
    )
}

export default ProductDetailPage
