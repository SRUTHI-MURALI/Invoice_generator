import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Form,Container, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'



function Register() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


const navigate = useNavigate()
    const handleRegister= async (e)=>{
        e.preventDefault();
        try {
         
            const res = await axios.post(`http://localhost:3001/user/register`, { name, email, password });
            if(res.data){
             
              navigate('/')
            }
           
        } catch (error) {
            toast.error("Registration error");
            return;
        }
    }


  return (
    <Container style={{width:'25rem',marginTop:'13rem'}}>
        <ToastContainer position="top-center"></ToastContainer>
    <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
                    placeholder="123@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
      </Form.Group>
     
      <Row>
          <Col xs={12} md={6}>
            <h6 className="mt-3 ">
              <Button onClick={handleRegister}>Register</Button>
            </h6>
          </Col>
          <Col xs={12} md={6}>
            <h6 className="mt-3 float-end">
              <Link to="/">Login</Link>
            </h6>
          </Col>
        </Row>
    </Form>
    </Container>
  )
}

export default Register
