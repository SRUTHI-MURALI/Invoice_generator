import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductList() {
    const [products,setProducts]= useState([])
     useEffect(()=>{
      const  getProducts= async ()=>{
        try {
            const res= await axios.get("http://localhost:3001/user/getproducts")
            setProducts(res.data.allProducts)
           
        } catch (error) {
            console.log(error);
        }
      }
      getProducts()
    },[])

    const handleAdd=async (id)=>{
        
        const user= JSON.parse(localStorage.getItem("userData"));

      console.log(user._id,'kkkkk');

        try {
            
            const res = await axios.post(`http://localhost:3001/user/additem/${user._id}`,{product:id})

           console.log(res.data.user);
            toast.success("Product added  successfully");
        }
        catch (error) {
            toast.error("error adding product")
        }
       
       
    }
    
    return (
        <>
         <ToastContainer position="top-center"></ToastContainer>
          <Row >
          {products.map((item) => (
          
              <Col className='m-3' key={item.id} xs={12} md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`https://res.cloudinary.com/dnkc0odiw/image/upload/${item?.photo}`} alt="sample"
                      style={{ width: "18rem",height:'15rem' }}/>
                  <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    Amount :   {item.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>handleAdd(item._id)}>Add</Button>
                  </Card.Body>
                </Card>
              </Col>
           
          ))}
           </Row>
        </>
      );
      
}

export default ProductList
