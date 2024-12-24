import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
            <hr/>
            <div className=" mx-auto w-[90%] flex lg:flex-row gap-10 justify-between flex-col my-10">
                <div className="basis-[70%] flex flex-col gap-5">
                    <div className="text-xl font-bold">STATES</div>
                    <div className="text-sm grid md:grid-cols-6 sm:grid-cols-3 sm:gap-10 grid-cols-2 gap-10 xl:gap-[7%] lg:gap-[4%]">
                        <div className="flex flex-col gap-3">
                            <Link to="/">Alabama</Link>
                            <Link to="/">Arizona</Link>
                            <Link to="/">California</Link>
                            <Link to="/">Connecticut</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to="/">Delaware</Link>
                            <Link to="/">Florida</Link>
                            <Link to="/">Georgia</Link>
                            <Link to="/">Indiana</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to="/">Kentucky</Link>
                            <Link to="/">Louisiana</Link>
                            <Link to="/">Maine</Link>
                            <Link to="/">Massachusetts</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to="/">Michigan</Link>
                            <Link to="/">New Hampshire</Link>
                            <Link to="/">New Jersey</Link>
                            <Link to="/">New York</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to="/">North Carolina</Link>
                            <Link to="/">Ohio</Link>
                            <Link to="/">Pennsylvania</Link>
                            <Link to="/">South Carolina</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to="/">Vermont</Link>
                            <Link to="/">Virginia</Link>
                            <Link to="/">West Virginia</Link>
                        </div>
                    </div>
                </div>
                <div className="basis-[15%] flex flex-col gap-5">
                    <div className="text-xl font-bold">Stock Scam</div>
                    <div className="flex flex-col gap-3 text-sm">
                        {/* <Link to="#aboutus">About Us</Link> */}
                        <Link to="/about">About Us</Link>
                        <Link to="/service">Terms</Link>
                        Phone Number : 646-470-5040
                    </div>
                    <div className="flex gap-5">
                        <a href="#" className="duration-200 cursor-pointer hover:scale-125">
                            <i className="text-2xl fa fa-facebook-f"></i>
                        </a>
                        <a href="#" className="duration-200 cursor-pointer hover:scale-125">
                            <i className="text-2xl fa fa-twitter"></i>
                        </a>
                        <a href="#" className="duration-200 cursor-pointer hover:scale-125">
                            <i className="text-2xl fa fa-linkedin-square"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-5 text-sm font-light leading-6 bg-color2">
                 <div className="flex justify-center"><div className="font-bold text-center w-[85px]">Disclosure: </div> <span className="text-left"> No agreement is created by the use of this website.  If we connect you with an attorney, you decide whether to retain that attorney or not.   Use of this site is subject to your agreement to these Terms and Conditions.</span></div>
                <div className="py-5 mx-auto text-center">Copyright 2024. All right reserved. a DRP, LLC Company.</div>
            </div>
        </>
    )
}
export default Footer;