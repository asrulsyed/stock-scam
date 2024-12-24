import star from "/icons/star.svg";
import whitestar from "/icons/whitestar.svg";

type props = {
    index: number,
    itemId: string;
    item: any;
    className?: string;
}


const ReviewCard = ({ index, itemId, item, className = "" }: props) => {

    return (
        <>
            <div id={itemId} className={`flex md:gap-10 sm:gap-5 gap-0 w-full py-10 rounded-xl bg-[white] items-center ${className}`}>
                <a href={index <= 0 ? `#item0`: `#item${index-1}`} className="btn bg-transparent text-[black] text-xl">❮</a>
                <div className="flex flex-col">
                    <div className="flex items-center mx-7">
                        <img src={item.avatar} className="w-[60px] h-[60px] mr-3 rounded-[50%]" alt={item.name}></img>
                        <div>
                            <p className="font-semibold text-base text-[black]">{item.name}</p>
                            <p className="font-regular text-[14px] text-[black]">{item.address}</p>
                        </div>

                    </div>
                    <p className="mt-5 mx-7 mb-7 font-regular text-base text-[black]">{item.content}</p>
                    <div className="mx-7 flex gap-x-[5px]">
                        {
                            [0, 1, 2, 3, 4].map((items, index) => {
                                return items < item.rating ? <img key={index} src={star} className="w-[19px] h-[19px] float-right"></img> : <img key={index} src={whitestar} className="w-[19px] h-[19px] float-right"></img>
                            })
                        }
                    </div>
                </div>
                <a href={`#item${index > 3 ? "3" : index + 1}`} className="btn bg-transparent text-[black] text-xl">❯</a>
            </div>
        </>
    )
}

export default ReviewCard;