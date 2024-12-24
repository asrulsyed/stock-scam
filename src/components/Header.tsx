import { NavLink } from "react-router-dom";
import logo from "/icons/logo.svg";
import NavItem from "./NavItem";
import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMobileMenu(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenu])

  return (
    <header className="flex items-center justify-center bg-color2 ">
      <div className="flex w-full max-w-[1200px] items-center justify-between py-5 mx-5">
        <div className="flex items-center gap-5">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Stock Scam"
              title="Stock Scam"
              className="w-12 h-auto mr-4 toleft"
            />
            <span className="mr-1 text-2xl font-bold -translate-y-1/2 text-color1">
              STOCK
            </span>
            <span className="ml-1 text-2xl font-bold -translate-x-10 translate-y-1/2 text-color1">
              SCAM
            </span>
          </NavLink>
        </div>
        <div className="hidden gap-5 md:flex">
          <NavLink to="/">
            {({ isActive }) => <NavItem text="Home" isActive={isActive} />}
          </NavLink>
          <NavLink to="/blogs">
            {({ isActive }) => <NavItem text="Blogs" isActive={isActive} />}
          </NavLink>
          <NavLink to="/about">
            {({ isActive }) => <NavItem text="About Us" isActive={isActive} />}
          </NavLink>
          <NavLink to="/service">
            {({ isActive }) => <NavItem text="Services" isActive={isActive} />}
          </NavLink>
          <NavLink to="/contact">
            {({ isActive }) => (
              <NavItem text="Contact Us" isActive={isActive} />
            )}
          </NavLink>
        </div>
        <div
          ref={dropdownRef}
          className="relative md:hidden"
        >
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className={
              `${mobileMenu ? 'text-indigo-600 shadow-[0_0_10px]' : 'hover:text-indigo-600 hover:shadow-[0_0_10px]'}
            flex rounded-full transition-all duration-300 ease-in-out`
            }
          >
            <span className="sr-only">Open menu</span>
            <HiBars3 className="w-8 h-8 text-color1" />
          </button>
          <div
            className={`${mobileMenu ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-95'} absolute right-0 z-20 origin-top bg-white w-48 mt-1 divide-y border transition-all duration-300 ease-in-out px-5 py-2`}
          >
            <NavLink to="/">
              {({ isActive }) => <NavItem text="Home" isActive={isActive} />}
            </NavLink>
            <NavLink to="/blogs">
              {({ isActive }) => <NavItem text="Blogs" isActive={isActive} />}
            </NavLink>
            <NavLink to="/about">
              {({ isActive }) => <NavItem text="About Us" isActive={isActive} />}
            </NavLink>
            <NavLink to="/service">
              {({ isActive }) => <NavItem text="Services" isActive={isActive} />}
            </NavLink>
            <NavLink to="/contact">
              {({ isActive }) => (
                <NavItem text="Contact Us" isActive={isActive} />
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
