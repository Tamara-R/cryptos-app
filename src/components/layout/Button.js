import React from 'react'

const Button = ({onClick, className, title, style }) => {
  return (
    <button onClick={onClick} className={className} style={style}>
        {title}
    </button>
  )
}

export default Button