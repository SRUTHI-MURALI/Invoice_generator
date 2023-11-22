import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header({ data }) {
  const navigate = useNavigate();

  const handleGenerate = async () => {
    navigate("/invoice");
  };

  const handleHome=async()=>{
    navigate("/products")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ backgroundColor: "rgb(146, 199, 195)" }} fluid>
        <Navbar.Brand href="#">
          <img alt="Your Logo" style={{ height: "5rem" }} />
        </Navbar.Brand>
        {/* <Nav.Item className="nav-heading  ">{data}</Nav.Item> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {data === "home" ? (
            <>
              <Button onClick={handleGenerate}>
                {" "}
                <Nav.Item className="nav-heading m-2">
                  {" "}
                  Generate Invoice{" "}
                </Nav.Item>
              </Button>
            </>
          ) : data ==='admin'?(
            <>
              
                {" "}
                <Nav.Item className="nav-heading m-2"> Admin </Nav.Item>
              
            </>
          ): (
            <>
              <Button onClick={handleHome}>
                {" "}
                <Nav.Item className="nav-heading m-2"> Home </Nav.Item>
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
    