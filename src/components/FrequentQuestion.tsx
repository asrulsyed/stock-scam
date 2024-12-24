import { useState } from "react";
import Collapsible from "react-collapsible";

import { btnName, faqs } from "@/stack/stack";

const FrequentQuestion = () => {

    const [btnId, setBtnId] = useState<number>(0);

    return (
        <>
            <div className="flex flex-col  py-[100px] items-center gap-[100px]">
                <div className="font-bold text-color3 text-5xl text-center">
                    Frequently Asked Questions
                    {/* <div className="w-[150px] h-[2px] bg-color1 my-1 mx-auto"></div> */}
                </div>

                <div className="flex flex-col gap-16">
                    <div className="flex mx-auto w-[600px] sm:flex-row flex-col">
                        {
                            btnName.map((item, index) => {
                                return <div key={index} className={
                                    `${index === btnId ? "bg-color3 text-[white]" : "bg-[white] text-black"} 
                                   mx-auto border border-color3 text-2xl w-[300px] text-center rounded-[5px] p-3 cursor-pointer`}
                                    onClick={() => setBtnId(index)}
                                >
                                    {item}
                                </div>
                            })
                        }
                    </div>
                    <div className="w-full">
                        {
                            btnId === 0 && <div className="flex flex-col xl:w-[50%] md:w-[80%] sm:w-[90%] w-[50%] mx-auto">
                                <Collapsible trigger={<div className="sm:text-2xl text-base text-color3 flex jutify-center items-center gap-3 cursor-pointer">
                                    
                                    <h2>
                                        {
                                            faqs[1][0].subject
                                        }
                                    </h2>
                                </div>}>
                                    <div className={`ml-8 mt-4 text-xl flex flex-col gap-4 font-light`}>
                                        <p>
                                            {
                                                faqs[1][0].content1
                                            }
                                        </p>
                                    </div>
                                </Collapsible>
                                <hr className="my-3" />
                                <Collapsible trigger={<div className="sm:text-2xl text-base  text-color3 flex jutify-center items-center gap-3 cursor-pointer">
                                    
                                    <h2>
                                        {
                                            faqs[1][1].subject
                                        }
                                    </h2>
                                </div>}>
                                    <div className="ml-8 mt-4 text-xl flex flex-col gap-4 font-light">
                                        <p>
                                            {
                                                faqs[1][1].content1
                                            }
                                        </p>
                                        <p>
                                            {
                                                faqs[1][1].content2
                                            }
                                        </p>
                                    </div>
                                </Collapsible>
                                <hr className="my-3" />
                                <Collapsible trigger={<div className="sm:text-2xl text-base  text-color3 flex jutify-center items-center gap-3 cursor-pointer">
                                    <h2>
                                        {
                                            faqs[1][2].subject
                                        }
                                    </h2>
                                </div>}>
                                    <div className="ml-8 mt-4 text-xl flex flex-col gap-4 font-light">
                                        <p>
                                            {
                                                faqs[1][2].subtitle1
                                            }
                                        </p>
                                        <div>
                                            <p>
                                                {
                                                    faqs[1][2].content1
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </Collapsible>
                                <hr className="my-3" />
                            </div>
                        }
                        {
                            btnId === 1 && <div className="flex flex-col w-[50%] mx-auto">
                                <Collapsible trigger={<div className="text-2xl text-color3 flex jutify-center items-center gap-3 cursor-pointer">
                                    
                                    <h2>
                                        {
                                            faqs[2][0].subject
                                        }
                                    </h2>
                                </div>}>
                                    <div className={`ml-8 mt-4 text-xl flex flex-col gap-4 font-light`}>
                                        <p>
                                            {
                                                faqs[2][0].content1
                                            }
                                        </p>
                                        <p>
                                            {
                                                faqs[2][0].content2
                                            }
                                        </p>
                                    </div>
                                </Collapsible>
                                <hr className="my-3" />
                                <Collapsible trigger={<div className="text-2xl text-color3 flex jutify-center items-center gap-3 cursor-pointer">
                                    
                                    <h2>
                                        {
                                            faqs[2][1].subject
                                        }
                                    </h2>
                                </div>}>
                                    <ul className="flex flex-col gap-4 mt-4 ml-8 text-xl font-light list-disc">
                                        <li className="font-bold ">

                                            {
                                                faqs[2][1].content1
                                            }
                                            <p className="font-normal">
                                                {
                                                    faqs[2][1].content2
                                                }
                                            </p>
                                        </li>
                                        <li className="font-bold ">
                                            {
                                                faqs[2][1].content3
                                            }
                                            <p className="font-normal">
                                                {
                                                    faqs[2][1].content4
                                                }
                                            </p>
                                        </li>
                                        <li className="font-bold ">
                                            {
                                                faqs[2][1].content5
                                            }
                                            <p className="font-normal">
                                                {
                                                    faqs[2][1].content6
                                                }
                                            </p>
                                        </li>
                                        <li className="font-bold ">
                                            {
                                                faqs[2][1].content7
                                            }
                                            <p className="font-normal">
                                                {
                                                    faqs[2][1].content8
                                                }
                                            </p>
                                        </li>
                                    </ul>
                                </Collapsible>
                                <hr className="my-3" />
                                <Collapsible trigger={<div className="text-2xl text-color3 flex jutify-center items-center gap-3 cursor-pointer">
                                    
                                    <h2>
                                        {
                                            faqs[2][2].subject
                                        }
                                    </h2>
                                </div>}>
                                    <div className="ml-8 mt-4 text-xl flex flex-col gap-4 font-light">

                                        <div>
                                            <p>
                                                {
                                                    faqs[2][2].content1
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </Collapsible>
                                <hr className="my-3" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrequentQuestion;