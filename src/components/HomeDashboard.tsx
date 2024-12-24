import { useState } from "react";
import { useNavigate } from "react-router";
import { message } from "antd";
import { accident_style } from "@/stack/stack";

const HomeDashboard = () => {
  const [accidentId, setAccidentId] = useState<number>(0);
  const [zipCode, setZipCode] = useState<string>("");
  const navigate = useNavigate();

  const handleZipCodeChange = (e: any) => {
    setZipCode(e.target.value);
  };

  const handleFindLawyer = () => {
    let index = 0;
    for (index = 0; index < zipCode.length; index++) {
      const element = zipCode[index];
      if (element >= "0" && element <= "9") continue;
      else break;
    }
    if (index === zipCode.length && index === 5) {
      navigate(
        `/formInput?accidentId=${accident_style[accidentId].name}&zipCode=${zipCode}`,
      );
    } else message.warning("Please input valid Zip Code");
  };

  return (
    <>
      <div id="aboutus" className="home-1 ">
        <div className="flex min-h-[1000px] w-full flex-col items-center justify-between pb-10 pt-16 text-center md:min-h-[800px] backdrop-blur-none bg-black/30">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold text-[white]">
              STOCK SCAM
            </h1>
            <p className="pt-3 text-2xl font-bold text-[white]">
            Referral Portal for Stock Scam
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mb-5 text-[40px] font-bold text-[white]">
              Free No Cost Consultation
            </h1>
            <h2 className="text-[26px] text-[white]">
            Stock Law Expertise. Find a Top Lawyer Today.
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="mt-4 flex flex-col gap-5 rounded-[6px] bg-transparent xl:h-[245px] xl:w-[940px]">
              <h2 className="mb-3 pl-5 text-4xl text-[white]">
                What Happened?
              </h2>
              <div className="grid w-full grid-cols-2 mx-auto md:grid-cols-4">
                {accident_style.map((item, index) => {
                  return (
                    <div
                      key={item.name + index}
                      className={`${
                        accidentId === index ? "grayscale-0" : "grayscale"
                      } flex cursor-pointer flex-col items-center hover:scale-125 hover:grayscale-0`}
                      onClick={() => setAccidentId(index)}
                    >
                      <img
                        className="w-[70px]"
                        src={`/icons/${item.picture_id}`}
                      ></img>
                      <div className="text-[14px] text-[white]">
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex px-5">
                <select
                  value={accidentId}
                  name="Find Lawyer"
                  id="find_lawyer"
                  className="h-[50px] w-[40%] rounded-l-[5px] bg-[white] px-2 outline-none"
                  onChange={(e) => setAccidentId(Number(e.target.value))}
                >
                  {accident_style.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className="w-[40%] bg-[white] px-2 outline-none"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                ></input>
                <button
                  className="w-[20%] rounded-r-[5px] bg-color1 text-[white]"
                  onClick={handleFindLawyer}
                >
                  Find Lawyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
