import Image from "next/image"
import React, { useState } from 'react';
import { carouselImages } from "@/helpers/carouselImages";

const Carousel = () => {
    const [ index, setIndex ] = useState(0)
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
        <div className="carousel">
            <Image className="carousel-img" src={carouselImages[index].image} width={1080} height={600} />
            <div className="carousel-navegation">
                <button className="btn-carousel" onClick={handlePrevious}>Previous</button>
                <button className="btn-carousel" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Carousel;
