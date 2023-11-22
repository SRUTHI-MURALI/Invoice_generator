import React from "react";
import Header from "../../Components/User/Header.jsx";
import ProductTable from "../../Components/Admin/ProductTable.jsx";
import { Container } from "react-bootstrap";

function AllProducts() {
  return (
    <div>
      <Header data={"admin"} />
      <Container>
        <ProductTable />
      </Container>
    </div>
  );
}

export default AllProducts;
