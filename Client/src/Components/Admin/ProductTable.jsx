import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductTable() {
  const [productList, setProductList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/admin/product");
      
        setProductList(response.data.allProducts);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const handleAddProduct = async () => {
    navigate("/adminaddproducts");
  };

  return (
    <div>
      <div>
        <ToastContainer position="top-center" autoClose={3000}></ToastContainer>

        <>
          <p style={{ fontSize: "2rem" }}>
            <u>ProductTable</u>
          </p>

          <Button
            style={{ float: "right", marginBottom: "2rem" }}
            onClick={handleAddProduct}
          >
            Add Product
          </Button>

          <Table className="mt-5 ms-0" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>

                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>

                  <td>{item?.price}</td>
                  <td>
                    <img
                       src={`https://res.cloudinary.com/dnkc0odiw/image/upload/${item?.photo}`}
                      alt="sample"
                      style={{ width: "40px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      </div>
    </div>
  );
}

export default ProductTable;
