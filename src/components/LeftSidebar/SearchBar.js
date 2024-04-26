import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchBar({ searchChange }) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <i className="fa fa-search"></i>
        </InputGroup.Text>
        <Form.Control
          style={styles.input}
          placeholder="Search for name..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={searchChange}
        />
      </InputGroup>
    </>
  );
}
const styles = {
  input: {
    backgroundColor: "#fff",
    outline: "none",
    margin: "auto",
    padding: "10px",
    border: "1px solid #cccccc",
  },
};
export default SearchBar;
