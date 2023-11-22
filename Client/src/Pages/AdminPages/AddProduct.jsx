import React from 'react'
import Header from '../../Components/User/Header'
import { Container } from 'react-bootstrap'
import AddProductForm from '../../Components/Admin/ProductAddForm.jsx'

function AddProduct() {
  return (
   
    <div>
       <Header data={'admin'}/>
       <Container>
        <AddProductForm/>
       </Container>
      
    </div>
  )
}

export default AddProduct
