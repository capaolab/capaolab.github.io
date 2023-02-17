import Image from "next/image"
import React, { useState, useEffect } from 'react';
import { carouselImages } from "@/helpers/dataHelper";
import CallActions from "./CallActions";

const Carousel = () => {
    const [index, setIndex] = useState(0)
    const carouselLength = carouselImages.length

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? carouselLength - 1 : newIndex)
    }

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= carouselLength ? 0 : newIndex);
    }

    return (
        <div id="carousel" className="carousel">
            <CallActions title={carouselImages[index].content.title} description={carouselImages[index].content.description} />
            <Image
                className="carousel-img absolute top-0"
                alt="carousel"
                src={carouselImages[index].image}
                width={1280}
                height={720}
            />
            <div className="carousel-navegation">
                <button className="btn-carousel" onClick={handleNext}>
                    <p>Next</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </button>
                <button className="btn-carousel" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                    <p>Previous</p>
                </button>
            </div>
            <div className="md:hidden w-full h-full absolute top-[700px] z-20 flex justify-center items-start">
                <button className="w-40 h-auto px-4 py-2 space-x-4 flex justify-center items-center text-white  hover:text-green-500" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                    <p>Previous</p>
                </button>
                <button className="w-40 h-auto px-4 py-2 space-x-4 flex justify-center items-center text-white  hover:text-green-500" onClick={handleNext}>
                    <p>Next</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </button>
            </div>
            
        </div>
    );
}

export default Carousel;



