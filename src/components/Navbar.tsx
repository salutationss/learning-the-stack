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
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];
 
  return (

    
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">KT</h1>
          </a>
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