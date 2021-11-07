import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const SearchForm = ({
  loading,
  searchInput,
  handleSearchChange,
  handleSubmit,
}) => {
    return (
        <div className="search-form">
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchChange}
                />
                <Button type="submit">Search</Button>
            </Form>
      </div>
  );
};

export default SearchForm;
