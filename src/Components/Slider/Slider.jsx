import React, { useState, useEffect } from 'react'
import './Slider.scss'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import Navbar from "../Navbar"

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    // AUTOMATIC SLIDE  
    useEffect(() => {
        console.log(slideIndex)
        console.log(dataSlider.length)
        const interval = setInterval(() => {
            if (slideIndex < dataSlider.length) {
                setSlideIndex(slideIndex + 1);
                // wrong setSlideIndex(prevCount => prevCount + 1);
            }
            else {
                setSlideIndex(1);
            }

        }, 4000);
        // mustable because // her defe clear etmesi vacibibdir her interval sonrasi clear edib yeniden interval baslayacaq
        return () => clearInterval(interval);
    }, [slideIndex]);

    // dataSlider.length = 4
    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }



    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt=""
                        />
                    </div>
                )
            })}
            <Navbar />
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />


        </div>
    )
}
