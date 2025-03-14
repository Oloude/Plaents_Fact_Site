import { useState } from "react";
import Navigation from "./Navigation"
import { IoMdMenu } from "react-icons/io";
<IoMdMenu />


function Header() {
  const [menuActive, setMenuActive] =  useState(false)

  function handleMenuToggle(){
    setMenuActive(prev => !prev)
  }
  return (
    <header className="px-6 py-5 md:px-13 md:flex md:flex-col md:gap-8 lg:flex-row lg:justify-between">
        <div className="flex justify-between items-center md:justify-center">
            <h2 className="text-white font-medium font-Antonio text-[28px] uppercase ">The planets</h2>
            <button  onClick={handleMenuToggle} className="md:hidden">
                <IoMdMenu className={`${menuActive ? 'text-slate700' : 'text-white'} w-10 h-6`}/></button>
        </div>
        <Navigation menuActive={menuActive}/>
    </header>
  )
}

export default Header