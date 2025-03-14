import { useParams } from "react-router"

type Contentmenuprops ={
    handleMenuoption : (menuValue: string, imageValue:string)=> void,
    menuOption : string
}

function Menu({handleMenuoption, menuOption} : Contentmenuprops) {
  
    const {planet} =  useParams()

    let color = planet === 'Mercury' ? 'bg-green border-green':
    planet === 'Venus' ? 'bg-yellow border-yellow' :
    planet === 'Earth' ? 'bg-earthLine border-eathLine' : 
    planet === 'Mars' ? 'bg-orange500 border-orange500' : 
    planet === 'Jupiter' ? 'bg-red border-red' :
    planet === 'Saturn' ? 'bg-orange400 border-orange400' :
    planet === 'Uranus' ? 'bg-cyan border-cyan' : 
    planet === 'Neptune' ? 'bg-blue border-blue' :'bg-green border-green'

  return (
    <article className=" flex-col gap-2 hidden md:flex md:gap-4 md:self-center md:basis-1/2 lg:basis-1 lg:w-full">
        <div onClick={()=>handleMenuoption('overview', 'planet')} className={`${
            menuOption === 'overview' ? `${color}` : 'bg-transparent border-slate700'
        } text-[9px] font-bold tracking-[1.93px] uppercase border p-3 flex gap-2 lg:text-hSmall`}>
          <p className="text-slate700">01</p> <p className="text-white ">overview</p> 
        </div>
        <div onClick={()=>handleMenuoption('structure', 'internal')} className={`${
            menuOption === 'structure' ? `${color}` : 'bg-transparent border-slate700'
        } text-[9px] font-bold tracking-[1.93px] uppercase border p-3 flex gap-2 lg:text-hSmall`}>
          <p className="text-slate700">02</p> <p className="text-white">internal structure</p> 
        </div>
        <div onClick={()=>handleMenuoption('geology', 'geology')} className={`${
            menuOption === 'geology' ? `${color}` : 'bg-transparent border-slate700'
        } text-[9px] font-bold tracking-[1.93px] uppercase border p-3 flex gap-2 lg:text-hSmall`}>
          <p className="text-slate700">03</p> <p className="text-white">surface geology</p> 
        </div>


       
    </article>
  )
}

export default Menu