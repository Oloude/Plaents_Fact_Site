import { useParams } from "react-router"

type Contentmenuprops ={
    handleMenuoption : (menuValue:  "overview" | "structure" | "geology", imageValue:string)=> void,
    menuOption : string
}

function ContentMenu({handleMenuoption, menuOption} : Contentmenuprops) {
  const {planet} =  useParams()

  let color = planet === 'Mercury' ? 'after:bg-green':
  planet === 'Venus' ? 'after:bg-yellow' :
  planet === 'Earth' ? 'after:bg-earthLine' : 
  planet === 'Mars' ? 'after:bg-orange500' : 
  planet === 'Jupiter' ? 'after:bg-red' :
  planet === 'Saturn' ? 'after:bg-orange400' :
  planet === 'Uranus' ? 'after:bg-cyan' : 
  planet === 'Neptune' ? 'after:bg-blue' :'after:bg-green'
  
  return (
    <article className="border-b border-b-slate700 py-4 px-6 flex justify-between md:hidden">
        <div onClick={()=>handleMenuoption('overview', 'planet')} className={`${
            menuOption === 'overview' ? `text-white relative after:content-[] after:absolute after:w-full after:h-1  after:-bottom-4 after:left-0 ${color}` : 'text-slate700'
        } text-[9px] font-bold tracking-[1.93px] uppercase`}>
            overview
        </div>
        <div onClick={()=>handleMenuoption('structure', 'internal')} className={`${
            menuOption === 'structure' ? `text-white relative after:content-[] after:absolute after:w-full after:h-1  after:-bottom-4 after:left-0 ${color}` : 'text-slate700'
        } text-[9px] font-bold tracking-[1.93px] uppercase`}>
            stucture
        </div>
        <div onClick={()=>handleMenuoption('geology', 'geology')} className={`${
            menuOption === 'geology' ? `text-white relative after:content-[] after:absolute after:w-full after:h-1  after:-bottom-4 after:left-0 ${color}` : 'text-slate700'
        } text-[9px] font-bold tracking-[1.93px] uppercase`}>
            surface
        </div>
    </article>
  )
}

export default ContentMenu