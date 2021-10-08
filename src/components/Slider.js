import { IconLeft } from '../icons/IconLeft';
import { IconRight } from '../icons/IconRight';
import React, { useState } from 'react';
import Fancybox from './Fancybox';

export const Slider = (props) => {
    const [activeClass, setActiveClass] = useState(1);

    const smallItemClick = (e) => {
        setActiveClass(e);
    };

    const leftClick = () => {
        slideSettings(activeClass - 1);
    };

    const rightClick = () => {
        slideSettings(activeClass + 1);
    };

    const slideSettings = (e) => {
        setActiveClass(e);
        if (e > props.slides.length) {
            setActiveClass(1);
        }
        if (e < 1) {
            setActiveClass(props.slides.length);
        }
    };

    return (
        <section className="section__slider h-screen grid items-center justify-center bg-gray-800 text-white">
            <div className="container mx-auto">
                <div className="slider__wrapper inline-block relative">
                    <div className="slider__arrows absolute flex items-center right-0 gap-1">
                        <a className="cursor-pointer p-2 bg-gray-600 hover:bg-gray-900 transition-colors text-white mt-2" onClick={leftClick}>
                            <IconLeft />
                        </a>
                        <a className="cursor-pointer p-2 bg-gray-600 hover:bg-gray-900 transition-colors text-white ml-1 mt-2 mr-2" onClick={rightClick}>
                            <IconRight />
                        </a>
                    </div>
                    <Fancybox options={{ zoomFriction: 0.25 }}>
                        <ul className="slider__big">
                            {props.slides.map((item) => {
                                return (
                                    <li key={item.id} className={`slider__big-item w-600 h-450 ${activeClass === item.id ? 'show' : 'hidden'}`}>
                                        <a data-fancybox="gallery" href={item.bigImg}>
                                            <img className="w-full object-cover" src={item.bigImg} alt={`slider ${item.id}`} />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </Fancybox>
                    <ul className="slider__small w-600 flex flex-wrap">
                        {props.slides.map((item) => {
                            return (
                                <li key={item.id} className={`slider__small-item w-150 ${activeClass === item.id ? 'active' : 'deactive'}`}>
                                    <img
                                        className="w-full object-cover"
                                        src={item.smallImg}
                                        alt={`Slider ${item.id}`}
                                        onClick={() => smallItemClick(item.id)}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};
