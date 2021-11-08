import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import ProductPagination from '../../components/ProductPagination';
import productAction from '../../redux/actions/product.action';

const CategoriesPage = () => {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")

    const params = useParams;
    const categoriesName = params.id;
    const navigate = useNavigate()

    const handleClickProduct = (productId) => {
    navigate(`/products/${productId}`);
    };

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const errorMessage = useSelector(state => state.products.errorMessage)


    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(categoriesName)
    })
    console.log("result", filteredProducts)

    const limit = filteredProducts.length;
    const totalPage = 1;
    
    useEffect(() => {
        dispatch(productAction.getAllProducts({page, limit, query}))
    }, [page, limit, query])
    
    return (
        <div>
            <Container>
            <Row>
                    <Col>
                    {loading ? (
                        <div className="text-center">
                        <Spinner animation="border" variant="secondary" size={100} loading={true} />
                        </div>
                    ) : (
                        <ul className="list-unstyled d-flex flex-wrap justify-content-between">
                        {filteredProducts.map((product) => (
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

export default CategoriesPage
