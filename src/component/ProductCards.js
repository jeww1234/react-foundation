import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCards = ({item}) => {
  const navigate = useNavigate()
  
  const showDetail = () =>{
    navigate(`/product/${item.id}`)
  }

  return (
    <div>
      <div className="product-cards" onClick={showDetail}>
        <img src={item?.img} alt="#" />
        <div>{item?.choice === true ? "Conscious":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true ? "신제품":""}</div>
      </div>
    </div>
  );
};

export default ProductCards;
