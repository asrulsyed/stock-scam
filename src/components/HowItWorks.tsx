import { work_style } from "@/stack/stack";

const HowItWorks = () => {
    return(
        <>
            <div className="flex flex-col items-center bg-color2 py-16 gap-3">
                <p className="font-bold tracking-widest text-sm bg-[white] py-1 px-2 border-l-4 border-l-color1">PROCESS</p>
                <div className="font-bold text-5xl text-color3">How it Works</div>
                <div className="flex w-[100%] flex-col items-center md:items-start gap-10 mt-12">
                {
                    work_style.map((item, index) => {
                        return <div key={index} className="w-full text-center flex flex-col items-center gap-2">
                            <div className="w-[60px] h-[60px] rounded-[10px] border border-gray-300 flex items-center justify-center mb-5">
                                <img className="w-[40px] h-[40px]" src={`/icons/${item.icon}`}></img>
                            </div>
                            <div className="flex items-center">
                                <h2 className="font-bold text-3xl">{item.name}</h2>
                            </div>
                            <p className=" text-gray-600 text-xl">{item.content}</p>
                        </div>
                    })
                }
                </div>
            </div>
        </>
    )
}

export default HowItWorks;