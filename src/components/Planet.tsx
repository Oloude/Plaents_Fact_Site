import { useState } from "react"
import ContentMenu from "./ContentMenu"
import Header from "./Header"
import Image from "./Image"
import Content from "./Content"
import Stats from "./Stats"
import Menu from "./Menu"


function Planet() {
    const [menuoption, setMenuoption] = useState< "overview" | "structure" | "geology">('overview')
    const [imageOption, setImageOption] = useState('planet')

    function handleMenuoption(menuValue:  "overview" | "structure" | "geology", imageValue:string){
        setMenuoption(menuValue)
        setImageOption(imageValue)
    }
  return (
    <main className="bg-black bg-[url('./src/assets/background-stars.svg')] min-h-screen font-League-Spartan pb-16">
    <section className="flex flex-col">
        <Header/>
        <div className="w-full h-[1px] bg-slate700"></div>
        <ContentMenu handleMenuoption={handleMenuoption} menuOption={menuoption}/>
        <div className="lg:flex lg:px-32 lg:gap-20 lg:py-20">
                <Image imageOption={imageOption}/>
                <div className="md:flex md:gap-10 md:px-13 lg:flex-col lg:basis-[350px] md:ml-auto">
                    <Content menuOption={menuoption}/>
                    <Menu handleMenuoption={handleMenuoption} menuOption={menuoption}/>
                </div>
        </div>
        <Stats/>
    </section>
    </main>
  )
}

export default Planet