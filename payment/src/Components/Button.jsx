import React from 'react'

const Button = ({onClick,text,className}) => {
  return (
    <div>
        <button onClick={onClick} className={className}>{text}</button>
    </div>
  )
}

export default Button