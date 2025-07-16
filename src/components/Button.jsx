import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`relative text-lg text-white font-medium font-jost bg-secondary py-[26px] px-11 w-[198px] h-[64px] flex justify-center items-center  after:absolute after:top-[4px] after:left-[5px] after:w-[188px] after:h-[54px] after:border after:border-white after:content-[""] ${className}`}>{text}</button>
  )
}

export default Button