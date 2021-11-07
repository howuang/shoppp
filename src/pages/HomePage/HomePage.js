import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Carousel, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import ProductPagination from '../../components/ProductPagination';
import SearchForm from '../../components/SearchForm/SearchForm';
import productAction from '../../redux/actions/product.action';
import './HomePage.css'

const HomePage = () => {
    const [page, setPage] = useState(1)
    // const totalPage = 10;
    const limit = 10;

    const [searchInput, setSearchInput] = useState("");
    const [query, setQuery] = useState("");

    const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    };
    console.log(query)

    const navigate = useNavigate();

    const handleClickProduct = (productId) => {
    navigate(`/products/${productId}`);
    };

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)

    const loading = useSelector(state => state.products.loading)
    const totalPage = useSelector(state => state.products.totalPages)
    const errorMessage = useSelector(state => state.products.errorMessage)


    useEffect(() => {
        dispatch(productAction.getAllProducts({page, limit, query}))
    }, [page, limit, query])
    
    return (
        <div className="wrapper">
            <Container>
                <Row>
                    <Carousel fade variant="dark">
                        {products.map((e) => (            
                            <Carousel.Item className="carousel-item">
                                <img
                                    src={e.imageUrls[0]}
                                    alt="First slide"
                                />
                                <Carousel.Caption className="carousel-text">
                                    <h4>{e.name}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>    
                </Row>
                <Row className="justify-content-center">
                    <Col md={6}>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
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
                        {products.map((product) => (
                            <li key={product._id} onClick={() => handleClickProduct(product._id)}>
                            <Card className="product-card">
                                <Card.Img
                                variant="top"
                                src={product.imageUrls[0]}
                                />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                            </li>
                        ))}
                        </ul>
                    )}
                    </Col>
                </Row>
                <Row>
                    <ProductPagination
                        page={page}
                        setPage={setPage}
                        totalPage={totalPage}
                    />

                </Row>
            </Container>
        </div>
    )
}

export default HomePage
