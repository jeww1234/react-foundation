import React, { useEffect, useState } from "react";
import ProductCards from "../component/ProductCards";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";



const ProductAll = (authenticate) => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    let searchQuery = query.get('q') || ""
    console.log("쿼리", searchQuery)
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data)
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query.get('q')]);

  
  return (
    <div>
      <Container>
        <Row>
        {productList.map((menu)=>(
          <Col lg={3}>
            <ProductCards item={menu}/>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
