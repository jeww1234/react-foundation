import React from 'react'

const Box = (props) => {
    console.log("123123",props)
  return (
    <div className={`box-${props.box}`}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img}></img>
      {/* props.item && 왜 하는걸까? */}
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
