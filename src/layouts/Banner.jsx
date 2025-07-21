import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'



const Banner = () => {
  return (
    <section className='group bg-primary py-[221px] w-full relative overflow-hidden'>
        <div className=' group-hover:right-0 duration-500 bg-banner bg-no-repeat bg-center bg-cover w-[43%] h-[920px]   absolute top-0 -right-[43%] '>
            

        </div>
        
        <Container>
            <h1 className='text-[100px] text-white font-bold font-voll pb-[14px] z-10 relative'>Hello! <br /> I’m Zarror Nibors</h1>
            <p className='w-[670px] text-xl text-[#ffffff80] font-normal font-jost pb-10'>I’am freelance <span className='text-white font-bold'>UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>
            <Button text="Contact Me"/>
        </Container>
        
    </section>
  )
}

export default Banner