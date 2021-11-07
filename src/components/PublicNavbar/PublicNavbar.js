import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import './PublicNavbar.css'
import { useNavigate } from "react-router-dom";
import productAction from '../../redux/actions/product.action'

const PublicNavbar = () => {
  const [query, setQuery] = useState("");
    const [pageNum, setPageNum] = useState(1);
    const limit = 10;

    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(productAction.getAllProducts({pageNum, limit, query}));
  }

  const handleOnClick = (e) => {
    navigate(`/products/categories/${e}`)
  }

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="navbar" expand="lg">
  <Container fluid >
            <Navbar.Brand style={{ color: "white" }} className="navbar-brand" as={Link} to="/">Shoppp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" variant="light">
               <Nav className="me-auto">
            <Nav.Link style={{color: "white"}} value="macbook" onClick={()=> handleOnClick("macbook")}>
          Macbook
            </Nav.Link>
            <Nav.Link style={{color: "white"}} value="imac" onClick={()=> handleOnClick("imac")}>
          iMac
            </Nav.Link>
            <Nav.Link style={{color: "white"}} value="iphone" onClick={()=> handleOnClick("iphone")}>
          iPhone
            </Nav.Link>
             <Nav.Link style={{color: "white"}} value="ipad" onClick={()=> handleOnClick("ipad")}>
          iPad
        </Nav.Link>
        </Nav>
            </Navbar.Collapse>
            <Form className="d-flex" onSubmit={handleSubmit}>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearchChange}
                    style={{backgroundColor:"lightgrey"}}
                    />
                    <Button as={NavLink} to="/product" onClick={handleSubmit} variant="outline-secondary">Search</Button>
                </Form>
            <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
        <Nav.Link style={{color: "white", cursor: "pointer"}} as={NavLink} to="/cart">
          <i class="fas fa-shopping-cart"></i>
        </Nav.Link>
  </Container>
</Navbar>
        </div>
    )
}

export default PublicNavbar
