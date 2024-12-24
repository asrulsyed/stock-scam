import { useNavigate } from "react-router";

const ConfirmAlert = () => {

    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate("/");
    }

    return(
        <>
            <div className="w-full h-[900px] flex flex-col items-center justify-center gap-20">
                <h1 className="font-bold text-4xl sm:text-5xl text-center">A Top Lawyer will be in contact soon</h1>
                <button className="bg-color1 text-[white] py-3 px-5" onClick={handleClickBtn}>Go to Home</button>
            </div>
        </>
    )
}

export default ConfirmAlert;