import { legalCategories } from "@/stack/stack";
import MostCommonCard from "./MostCommonCard";

const MostCommon = () => {
    return(
        <>
            <div className="w-full py-[100px] flex flex-col items-center bg-color2 text-center">
                <p className="text-sm tracking-widest font-bold py-1 px-2 bg-[white] border-l-4 border-l-color1">LEGAL AREAS</p>
                <h1 className="font-bold text-5xl pt-5 text-color3">What is your legal issue?</h1>
                <p className="mt-3 font-light">Choose a common legal issue below to find top attorneys with relevant experience in your area.</p>
                <div className="mt-[100px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2">
                    {
                        legalCategories.map((item, index) => {
                            return <div  key={index}> <MostCommonCard item={item}/></div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MostCommon;