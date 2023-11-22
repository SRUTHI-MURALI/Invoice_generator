import axios from 'axios';
import React, { useState } from 'react';
import { Container, Card, Row, Col, Form, Button, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductAddForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [photo,setPhoto]= useState('')

  const navigate=useNavigate()

 

  const imageHandler = async () => {
    try {
      const formData = new FormData();
      if (image) {
       
       
        formData.append("file", image);
        formData.append("upload_preset", "tutorImage");
        formData.append("cloud_name", "dnkc0odiw");
   
        try {
          const response = await axios.post("https://api.cloudinary.com/v1_1/dnkc0odiw/image/upload", formData);
          console.log(response.data.public_id,'jjj');
          setPhoto(response.data.public_id);
         console.log(photo,'nunu');
          
          // Perform your desired action with formData (e.g., send it to the server)
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      } else {
        console.error('No image selected.');
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };
  console.log(photo,'nunu2');


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await imageHandler()
    if(!photo){
      console.log('no photo');
      
    }else{
      try {
        await axios.post("http://localhost:3001/admin/addProduct", {
         name,
         price,
         image:photo,
       });
   
       navigate('/adminproducts')
     } catch (error) {
       console.error("Error adding product:", error);
       // Handle error as needed
     }
    }
    
  };  
  
  const handleExit= async()=>{
    navigate('/adminproducts')
  }
  return (
    <div>
      <Container >
       
          <Row>
          <p style={{fontSize:'2rem'}}>
            <u>Add a Product</u>
            </p>
          <Card className="m-3 justify-content-center">
            <ToastContainer position="top-center" autoClose={3000}></ToastContainer>
            <Form className="mt-2 mb-2" onSubmit={handleSubmit} encType="multipart/form-data">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
                    
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
                <Form.Label>Allowed formats: JPEG, PNG</Form.Label>
              </Form.Group> */}
              <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);

                    }}
                  />
                  <Form.Label>Allowed formats: JPEG, PNG</Form.Label>
                </Form.Group>

              <Button variant="primary"  type="submit">
                Submit
              </Button>
              <Button onClick={handleExit} variant="primary" style={{float:'right'}} type="submit">
                Exit
              </Button>
            </Form>
            </Card>
          </Row>
        
      </Container>
    </div>
  );
}

export default ProductAddForm;

