type props = {
    item: any,
    className?: string,
}

const MostCommonCard = ({ item, className = "" }: props) => {
    return (
        <>
            <div className={`rounded-[2px] border shadow-sm flex flex-col items-center h-full gap-10 p-16 ${className}`}>
                <img src={item.icon} className="w-[120px] h-[150px]"></img>
                <h2 className="text-2xl font-bold text-color3">{item.name}</h2>
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-xl font-light">{item.category1}</p>
                    <p className="text-xl font-light">{item.category2}</p>
                    <p className="text-xl font-light">{item.category3}</p>
                    <p className="text-xl font-light">{item.category4}</p>
                </div>
            </div>
        </>
    )
}

export default MostCommonCard;