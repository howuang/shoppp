import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import './PublicNavbar.css'
import { useNavigate } from "react-router-dom";
import productAction from '../../redux/actions/product.action'
import userActions from '../../redux/actions/user.action'
import authAction from '../../redux/actions/auth.action'

const PublicNavbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("")
  const [pageNum, setPageNum] = useState(1);
  const limit = 10;

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`)
  };

  const user = useSelector(state => state.users.currentUser)

  const navigate = useNavigate()
  
  const handleOnClick = (e) => {
    setQuery(e)
    navigate(`/products/categories/${e}`)
  }

  const handleLogOut = (e) => {
    dispatch(authAction.logout)
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
                    <Button onClick={handleSubmit} variant="outline-secondary">Search</Button>
            </Form>
            {!user && (
              <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
            )}
            {user && (
              <NavDropdown title={user.name} id="navbarScrollingDropdown">
          <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogOut}>Log out</NavDropdown.Item>
        </NavDropdown>
              // <Nav.Link as={NavLink} to="/profile">Logged in as {user.name}</Nav.Link>
            )}
        <Nav.Link style={{color: "white", cursor: "pointer"}} as={NavLink} to="/cart">
          <i class="fas fa-shopping-cart"></i>
        </Nav.Link>
  </Container>
</Navbar>
        </div>
    )
}

export default PublicNavbar
