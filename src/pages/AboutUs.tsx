import { useNavigate } from "react-router";
import "./AboutUs.css";

const AboutUs = () => {
    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate("/");
    }
    return (
        <>
            <div className="w-full h-screen bg-gray-300 pb-10">
                <div className="aboutus ">
                    <div className="w-full flex flex-col py-16 items-center justify-center md:h-[400px] h-[200px] backdrop-blur-sm bg-black/30">
                    <div className="md:text-[100pt] text-6xl text-center text-[white] tracking-widest">ABOUT US</div>
                    </div>
                </div>
                <div className="w-full bg-gray-300 flex justify-center pt-20">
                    <div className="xl:w-[56%] md:w-[80%] w-[90%] flex flex-col gap-10">
                        <div className="flex flex-col md:flex-row">
                            <p className="font-bold md:text-3xl text-2xl md:min-w-[230px] min-w-[180px]">Who We Are : </p>
                            <p className="md:text-xl text-[18px] text-left w-full"> We are a referral portal for the seriously injured.  At no cost to you, we connect the injured with experienced personal injury attorneys. Our decades of experience make us the perfect partners for those who have been seriously injured.</p>
                        </div>
                        <div className="flex  flex-col md:flex-row">
                            <div className="font-bold md:text-3xl text-2xl md:min-w-[230px] min-w-[180px]">Our Service : </div>
                            <span className="md:text-xl text-[18px] text-left w-full"> Our referral portal is dedicated to assisting the seriously injured by connecting individuals with seasoned personal injury lawyers. Our service is free of charge, emphasizing our commitment to providing accessible assistance during challenging times.</span>
                        </div>
                        <div className="flex  flex-col md:flex-row">
                            <div className="font-bold md:text-3xl text-2xl md:min-w-[230px] min-w-[180px]">Our Mission : </div>
                            <span className="md:text-xl text-[18px] text-left w-full"> Our mission is to connect you with experienced lawyers to fight to get you the compensation you deserve for your injuries.  We strive to make this process as easy and stress-free as possible.</span>
                        </div>
                    </div>
                </div>
                <button className=" text-black underline py-3 px-5" onClick={handleClickBtn}>Go to Home</button>
            </div>
        </>
    )
}

export default AboutUs;