import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import cartActions from '../../redux/actions/cart.action'

const CartPage = () => {
    const [cartProductId, setCartProductId] = useState("");
    const navigate = useNavigate()
    const params = useParams()

    const handleClickProduct = (productId) => {
    navigate(`/products/${productId}`);
    };

    const removeCart = (cartProductId) => {
    dispatch(cartActions.deleteCart({cartProductId}))
    };

    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts.cart)
    const loading = useSelector(state => state.carts.loading)

    useEffect(() => {
    if (cartProductId) return;
    dispatch(cartActions.getCart())
    }, [cartProductId]);


    return (
         <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Shopping Cart</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="secondary" size={100} loading={true} />
            </div>
          ) : (
            <ul className="list-unstyled d-flex flex-wrap justify-content-between">
              {carts.map((product) => (
                <li key={product.productId._id}>
                  <Card className="d-flex flex-direction-row"
                    style={{
                     width: "12rem",
                      height: "27rem",
                      marginBottom: "2rem",
                      position: "relative",
                    }}
                  >
                          <Card.Img
                              variant="top"
                      src={product.productId.imageUrls[0]}
                      onClick={() => handleClickProduct(product._id)}
                    />
                    <Card.Body>
                      <Card.Title>{product.productId.name}</Card.Title>
                      <Card.Text>{product.productId.price.toLocaleString()}</Card.Text>
                      <Button
                        className="position-absolute btn-danger"
                        style={{ top: "5px", right: "5px" }}
                        size="sm"
                        onClick={() => removeCart(product.productId._id)}
                      >
                        &times;
                      </Button>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col md={6}>
          <Button style={{marginBottom: "5rem"}}>Checkout</Button>
        </Col>
      </Row>
    </Container>
    )
}

export default CartPage
