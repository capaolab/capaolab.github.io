import Image from "next/image"
import React, { useState } from 'react';
import { carouselImages } from "@/helpers/carouselImages";
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
        <div className="carousel relative backdrop-contrast-50">
            <CallActions index={index} />
            <Image
                className="carousel-img absolute top-0"
                alt="carousel"
                src={carouselImages[index].image}
                width={1920}
                height={1080}
            />
            <div className="carousel-navegation absolute top-72 2xl:top-96 z-30">
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
        </div>
    );
}

export default Carousel;



