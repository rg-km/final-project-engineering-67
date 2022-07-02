/* eslint-disable */
import React from "react";
import '../Carousel/style/CarouselStyle.css'

const CardsCarousel = ({ insider }) => {
    return (
        <div className="card text-center flex justify-center "><img className="max-w-[320px] flex justify-center" src={[insider]} /></div>
    )
}

export default CardsCarousel;