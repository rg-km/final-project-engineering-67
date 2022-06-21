import React from "react";
import Carousel from 'react-elastic-carousel';
import '../Carousel/style/CarouselStyle.css';
import CardsCarousel from "./Cards";
import p1 from '../Carousel/images/p1.png';
import p2 from '../Carousel/images/p2.png';
import p3 from '../Carousel/images/p3.png';
import p4 from '../Carousel/images/p4.png';

export const InsiderCarousel = () => {

    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 760, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
    ];

    return(
        <div className="pt-9 bg-[#1d1f23] py-10">
            <div className="carousel mb-8 ">
                <h1 className="text-white text-center mt-5 mb-9 pb-8 text-3xl font-sans font-bold">Our Documentation</h1>
                <Carousel breakPoints={breakPoints}>
                    <CardsCarousel insider={p4}/>
                    <CardsCarousel insider={p1}/>
                    <CardsCarousel insider={p2}/>
                    <CardsCarousel insider={p3}/>
                </Carousel>
            </div>
        </div>
    )
};