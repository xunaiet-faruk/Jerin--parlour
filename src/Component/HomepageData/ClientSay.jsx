import { useState } from "react";


const ClientSay = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/XzWDxrf/image.png", }, { img: "https://i.ibb.co/wdQywG7/image.png", }, { img: "https://i.ibb.co/kgJQ8Gw/image.png", }, { img: "https://i.ibb.co/D7Pc1zb/image.png", }, { img: "https://i.ibb.co/W3hhpbW/image.png", }, { img: "https://i.ibb.co/2nt58T6/image.png", }, { img: "https://i.ibb.co/ww3KKLT/image.png", },];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);

    return (
        <div className="max-w-screen-2xl mx-auto  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-12  justify-between items-center mt-20 lg:mt-12">
            <div className="lg:text-start text-center">
                <h1 className="text-5xl font-bold  ">Why Our Clients<br />
                    <span className="text-[#F63E7B] "> Choose Us</span></h1>
                <p className="pt-5 pb-5 text-black">We are the leading beauty salon in LA providing high-quality <br /> hairdressing, makeup, and skin care services to everyone.</p>
                <p className="text-gray-400 ">Our clients appreciate and value our level of customer service,<br /> the skills of our stylists and estheticians as well as our professional approach to everything we do.</p>
                <button type="button" className="relative font-semibold mt-5 inline-block overflow-hidden border-[#F63E7B] px-7 py-2 rounded-full  shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#F63E7B] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#F63E7B]  after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Learn More</button>


            </div>

            <div>

                <div className="max-w-4xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
                    <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">

                        <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                        </button>

                        <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                        </button>
                    </div>

                    <div className="h-[540px] md:h-[670px] w-2/3 ml-auto mt-28 relative ease-linear duration-300 flex items-center"
                        style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
                        {sliders.map((slide, inx) => (
                            <div key={inx}
                                className={`${currentSlider === inx ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]" : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
                                style={{ perspective: "200px" }}>
                                <img src={slide.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={slide.tags} style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ClientSay;