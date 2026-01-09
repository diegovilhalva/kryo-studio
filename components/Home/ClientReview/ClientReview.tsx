"use client"
import { userReviewData } from "@/constant/constant";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ReviewCard from "./ReviewCard";



const ClientReview = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1324 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1324, min: 764 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className="py-20">
            <div className="w-[80%] mx-auto">
                <div>
                    <h1 className="text-red-500 dark:text-red-300 font-medium">
                        Client Reviews
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">Don't Just Take Our Words For It</h1>
                </div>
                <div className="mt-14 ">
                    <Carousel
                        arrows={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}

                    >
                        {userReviewData.map((user) => (
                            <div className="" key={user.id}>
                                <ReviewCard user={user} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ClientReview