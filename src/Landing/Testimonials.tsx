import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import './testimonials.css'; // Add your custom styles

// Import required modules
import { Autoplay } from 'swiper/modules';

const Testimonials: React.FC = () => {
    const testimonials = [
        { name: "John Doe", text: "Amazing service! The project was delivered quickly and exceeded expectations. Highly recommend!" },
        { name: "Jane Smith", text: "The quality of work is unmatched. I am extremely satisfied with the final product. A pleasure to work with!" },
        { name: "Alex Johnson", text: "Fantastic experience! The team was professional and the results were just what I was looking for." },
        { name: "Emily Davis", text: "Excellent communication and great attention to detail. Would definitely work with them again." }
    ];

    return (
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-gray-50 dark:bg-gray-800">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-webred mb-8">
                What Our Clients Say
            </h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000, // Auto-slide every 5 seconds
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper bg-gray-2 dark:bg-gray-800"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card dark:bg-gray-700">
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                "{testimonial.text}"
                            </p>
                            <h3 className="text-xl font-semibold text-webred">
                                - {testimonial.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
