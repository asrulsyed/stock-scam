import { useNavigate } from "react-router";

const ConfirmAlert1 = () => {

    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate("/");
    }

    return(
        <>
            <div className="w-full h-[900px] flex flex-col items-center justify-center gap-20">
                <h1 className="font-bold text-4xl sm:text-5xl text-center">Successfully Sent Message to Top Lawyer</h1>
                <button className="bg-color1 text-[white] py-3 px-5" onClick={handleClickBtn}>Go to Dashboard</button>
            </div>
        </>
    )
}

export default ConfirmAlert1;