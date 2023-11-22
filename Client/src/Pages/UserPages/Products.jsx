import React from 'react'
import Header from '../../Components/User/Header.jsx'
import { Container } from 'react-bootstrap'
import ProductList from '../../Components/User/ProductList.jsx'

function Products() {
  return (
    <div>
    <Header data={'home'}/>
    <Container>
      <ProductList/>
    </Container>
    </div>
  )
}

export default Products
