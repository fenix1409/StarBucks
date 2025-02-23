import React from 'react'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Have from '../sections/Have'
import Delecious from '../sections/Delecious'

const Carousel = () => {
    return (
        <div className='px-[130px] max-sm:px-[25px]'>
            <Header />
            <Hero />
            <Have />
            <Delecious />
        </div>
    )
}

export default Carousel