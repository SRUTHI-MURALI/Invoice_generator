import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";

function InvoiceForm() {
  const [Products, setProducts] = useState([]);

  const [amt, setAmt] = useState(0);
  const [Dates, setDates] = useState("");
  // const [items,setItems]= useState([])

  let newDate = new Date();
  let date = newDate.getDate();

  useEffect(() => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    setDates(date);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));

    const getProductData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/user/getaddeditems/${user._id}`
        );

        setProducts(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    getProductData();
  }, []);

  useEffect(() => {
    const totalAmount = Products?.items?.reduce((acc, item) => {
      const { product } = item;
      const { price } = product;

      return acc + price * item.count;
    }, 0);

    setAmt(totalAmount);
  }, [Products]);

  return (
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Invoice &gt; &gt; <strong>ID: #123-123</strong>
                </p>
              </MDBCol>
              <MDBCol xl="3" className="float-end">
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0"
                  onClick={() => window.print()} 
                >
                  Print
                  <span className="ms-1">
                    <i className="fas fa-print" style={{ float: "right" }}></i>
                  </span>
                </MDBBtn>

                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <MDBIcon
                fab
                icon="mdb"
                size="4x"
                className="ms-0 "
                style={{ color: "#5d9fc5" }}
              />
              <p>Ociuz Technology</p>
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  To: <span style={{ color: "#5d9fc5" }}>{Products.name}</span>
                </li>
                <li className="text-muted">{Products.email}</li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted">Invoice</p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">ID:</span>#123-456
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>
                  {Dates}
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {Products?.items?.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.product.name}</td>
                    <td>{item.count}</td>
                    <td>{item.product.price}</td>
                    <td>{item.product.price * item.count}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8"></MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span>SubTotal: </span> $ {amt}
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span>Tax(5%): </span>$ {(0.05 * amt).toFixed(2)}
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: "25px" }}>
                  ${amt - (0.05 * amt).toFixed(2)}
                </span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="4"></MDBCol>

            <MDBCol xl="4">
              <p>Thank you for your purchase</p>
            </MDBCol>
            <MDBCol xl="2"></MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default InvoiceForm;
