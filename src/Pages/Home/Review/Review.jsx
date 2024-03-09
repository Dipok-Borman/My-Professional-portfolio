import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react';

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    },[])

    return (
        <div className='my-20 h-fit'>
            <div>
                <h5 className="text-center uppercase russo bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Reviews</h5>
            </div>
            <div className='flex place-content-center mb-5' data-aos="flip-down">
                <h1 className="text-center py-5 border-y-2 w-fit text-4xl ops uppercase">our client review</h1>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(item => <SwiperSlide key={item._id}>
                        <div className="px-20">
                            <div className="flex justify-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                />
                            </div>
                            <p className="text-center">{item.review}</p>
                            <h1 className="text-yellow-500 text-3xl text-center russo">{item.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;