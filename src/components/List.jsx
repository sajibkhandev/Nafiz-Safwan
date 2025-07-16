import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-lg text-primary font-normal font-jost list-none cursor-pointer hover:text-secondary duration-500 ${className}`}>{text}</li>
  )
}

export default List