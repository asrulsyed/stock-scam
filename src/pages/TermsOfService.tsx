import { useNavigate } from "react-router";
import "./TermsOfService.css";

const TermsOfService = () => {
    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate("/");
    }
    return (
        <>
            <div className="w-full h-screen pb-10 bg-gray-300">
                <div className="terms ">
                    <div className="w-full flex flex-col py-16 items-center justify-center h-[200px] md:h-[400px] backdrop-blur-sm bg-black/30">
                        <div className="text-6xl md:text-[100pt] text-center text-[white] tracking-wide">Terms of Service</div>
                    </div>
                </div>
                <div className="flex justify-center w-full pt-16 bg-gray-300">
                    <div className="md:w-[56%] w-[90%] flex flex-col gap-6">
                        <p className="text-xl text-left">No agreement is created by the use of this website.  If we connect you with an attorney, you decide whether to retain that attorney or not.   Use of this site is subject to your agreement to these Terms and Conditions. </p>
                        <p className="text-xl text-left">Copyright 2024. All right reserved.</p>
                        <p className="text-xl text-left">Our Terms of Service outline the conditions under which users may access and utilize our website. By using our website, you agree to adhere to these terms, which include provisions regarding user conduct, intellectual property rights, and privacy protection. We are committed to safeguarding your privacy and have implemented measures to protect your personal information. However, users must also take responsibility for their own actions and understand the limitations of liability outlined in our terms. We reserve the right to modify these terms as needed and encourage users to review them periodically for updates. Any disputes arising from the use of our website will be governed by the laws of our jurisdiction. For further inquiries or concerns regarding our terms, please reach out to us using the provided contact information.</p>
                    </div>
                </div>
                <button className="px-5 py-3 text-black underline " onClick={handleClickBtn}>Go to Home</button>
            </div>
        </>
    )
}

export default TermsOfService;