import React from 'react'

const Box = (props) => {
  return (
    <div>
      <div className='box'>
      <h5>box{props.num}</h5>
      <p>{props.name}</p>
     </div>
    </div>
  )
}

export default Box
