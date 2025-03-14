import { Link } from 'react-router'
import arrow from '../assets/icon-chevron.svg'
import data from '../data.json'

type Navigationprops = {
    menuActive : boolean
}

function Navigation({menuActive} : Navigationprops) {
  return (
    <nav className={`${menuActive ? 'absolute top-25 left-0 bg-black z-10 right-0 flex w-full h-screen px-6 md:h-auto md:static md:bg-transparent md:z-0' : 'hidden'} md:static md:flex  `}>
        <ul className='flex flex-col gap-5 w-full md:flex-row md:justify-between lg:gap-8.5'>
            {data.map((planet, idx) => <li key={planet.name} className={`${
                    idx != 7 ? 'border-b border-b-slate700 pb-5 md:border-none md:pb-0' : ''
                } flex justify-between items-center w-full`}>
                <div className={` flex gap-6 items-center`}>
                <div className={`${
                    idx === 0 ? 'bg-mercury' : 
                    idx === 1 ? 'bg-venus' : 
                    idx === 2 ? 'bg-earth' : 
                    idx === 3 ? 'bg-mars' : 
                    idx === 4 ? 'bg-jupiter' : 
                    idx === 5 ? 'bg-saturn' : 
                    idx === 6 ? 'bg-uranus' : 
                    idx === 7 ? 'bg-neptune' : 
                    ''
                } w-5 h-5 rounded-full md:hidden`}></div>
                <Link to={`/${planet.name}`} className='text-white text-[15px] font-bold tracking-[1.36px] uppercase leading-[25px] lg:text-[11px]'>{planet.name}</Link>
                </div>
                <Link to={`/${planet.name}`}><img src={arrow} alt="" className='w-1 h-2 md:hidden'/></Link>
                </li>

             )}
            
        </ul>
    </nav>
  )
}

export default Navigation