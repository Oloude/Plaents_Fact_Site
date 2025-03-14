import data from '../data.json'
import linkIcon from '../assets/icon-source.svg'
import { useParams } from 'react-router'


type ContentProps ={
    menuOption : string
}

function Content({menuOption} : ContentProps) {
  const {planet} =  useParams()
  const planetData = data.find(item => item.name === planet)
  const desc = planetData ? planetData[menuOption].content : data[0][menuOption].content
  const source = planetData ? planetData[menuOption].source : data[0][menuOption].source
   
  return (
    
   <article className='flex flex-col items-center px-6 mb-7 md:px-0 md:basis-1/2 md:items-start lg:basis-1'>
    <h1 className='text-[40px] font-Antonio text-white text-center font-medium uppercase mb-6 md:text-left lg:text-hLarge'>{planetData ? planetData?.name : data[0].name}</h1>
    <p className='text-[11px] leading-[22px] text-center text-slate700 mb-8 md:text-left lg:text-body'>{desc}</p>
    <a href={source} target="_blank" rel="noopener noreferrer"
    className='flex gap-2 text-slate700 text-xs lg:text-body'>Source: <span className='font-semibold underline'> Wikipedia </span>
        <img src={linkIcon} alt="" className='w-3 h-3'/></a>
   </article>

  
  )
}

export default Content