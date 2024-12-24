import ReviewCard from "./ReviewCard";
import { reviews } from "@/stack/stack";

const Review = () => {
    const randomIndices = Array.from({ length: 4 }, () => Math.floor(Math.random() * reviews.length));

    const randomReviews = randomIndices.map(index => reviews[index]);

    return (
        <>
            <div className="w-full py-[100px] bg-[white] flex flex-col items-center">
                <p className="px-2 py-1 text-sm font-bold tracking-widest border-l-4 bg-color2 border-l-color1">Reviews</p>
                <h1 className="pt-5 mb-16 text-5xl font-bold text-center text-color3">Our Customer's Say</h1>
                <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%] mx-auto">
                    <div className="w-full carousel">
                        {
                            randomReviews.map((item, index) => {
                                return <ReviewCard index={index} itemId={`item` + index} key={item.name} item={item} className="ml-2 mr-2 carousel-item rounded-box bg-color2" />  
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;