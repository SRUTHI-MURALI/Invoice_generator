import React, { useEffect, useState } from 'react'
import Header from '../../Components/User/Header'
import { Container } from 'react-bootstrap'
import InvoiceForm from '../../Components/User/InvoiceForm'

function Invoice() {
 
  return (
    <div>
      <Header data={''}/>
      <Container>
        <InvoiceForm/>
      </Container>
    </div>
  )
}

export default Invoice
