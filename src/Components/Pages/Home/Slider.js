import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full py-10">
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1627490631692-3eb501e21cd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-screen" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn-white bg-transparent text-slate-50 text-xl">❮</a>
                    <a href="#slide1" className="btn-white bg-transparent text-slate-50 text-xl">❯</a>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/h8nMFts/ujbegstan.jpg" className="w-screen h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn-white bg-transparent text-slate-50 text-xl">❮</a>
                    <a href="#slide2" className="btn-white bg-transparent text-slate-50 text-xl">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-screen h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn-white bg-transparent text-slate-50 text-xl">❮</a>
                    <a href="#slide3" className="btn-white bg-transparent text-slate-50 text-xl">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-screen h-auto" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn-white bg-transparent text-slate-50 text-xl">❮</a>
                    <a href="#slide4" className="btn-white bg-transparent text-slate-50 text-xl">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;