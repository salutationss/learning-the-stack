import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

export interface INavbar {
  navActive: boolean;
  setNavActive: (value: boolean) => void;
}


//export function Navbar(props: INavbar) {
const Navbar: React.FC<INavbar> = ({ navActive, setNavActive }) => {


  const [activeIdx, setActiveIdx] = useState(-1);
  
const MENU_LIST :{ text: string, href: string}[] = [
    { text: "Home", href: "/" },
    { text: "Products", href: "/productView" },
    { text: "Cart", href: "/cartView" },
  ];
 
  return (

    
    <header className="flex items-center justify-between flex-wrap bg-teal-700 p-6" >
    
      <nav className={`nav`}>
        <Link href={"/"}>
          <>
          <h1 className="logo text-5xl p-7 font-extrabold tracking-tight text-grey-600">
                New <span className="text-purple-300">T3ST</span> Build
              </h1>
          </>
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
       
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>  
    );
}

export default Navbar;