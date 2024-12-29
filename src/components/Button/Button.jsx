import React from 'react'

const Button = ({value,className}) => {
  const AddToCards = () =>{
    
  }
  return (
    <button onClick={AddToCards} className={`add-to-cart-btn ${className}`}>
          {value}
    </button>
  )
}

export default Button