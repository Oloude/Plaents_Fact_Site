import { useParams } from 'react-router'
import data from '../data.json'

type ImageProps ={
    imageOption : string
}

function Image({imageOption}: ImageProps) {
    const {planet} = useParams()
    const planetData = data.find(item => item.name === planet)

    let outerWidth = planet === 'Mercury' ? 'w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[290px] lg:h-[290px]':
    planet === 'Venus' ? 'w-[154px] h-[154px] md:w-[253px] md:h-[253px] lg:w-[400px] lg:h-[400px]' :
    planet === 'Earth' ? 'w-[173px] h-[173px] md:w-[285px] md:h-[285px] lg:w-[450px] lg:h-[450px]' : 
    planet === 'Mars' ? 'w-[129px] h-[129px] md:w-[213px] md:h-[213px] lg:w-[336px] lg:h-[336px]' : 
    planet === 'Jupiter' ? 'w-[224px] h-[224px] md:w-[369px] md:h-[369px] lg:w-[582px] lg:h-[582px]' :
    planet === 'Saturn' ? 'w-[256px] h-[256px] md:w-[422px] md:h-[422px] lg:w-[667px] lg:h-[667px]' :
    planet === 'Uranus' ? 'w-[176px] h-[176px] md:w-[290px] md:h-[290px] lg:w-[458px] lg:h-[458px]' : 
    planet === 'Neptune' ? 'w-[173px] h-[173px] md:w-[285px] md:h-[285px] lg:w-[450px] lg:h-[450px]' :
    'w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[290px] lg:h-[290px]'

    let bottomPosition = planet === 'Mercury' ? 'bottom-4':
    planet === 'Venus' ? 'bottom-10' :
    planet === 'Earth' ? 'bottom-10' : 
    planet === 'Mars' ? 'bottom-3' : 
    planet === 'Jupiter' ? 'bottom-24' :
    planet === 'Saturn' ? 'bottom-30' :
    planet === 'Uranus' ? 'bottom-10' : 
    planet === 'Neptune' ? 'bottom-10' :
    'bottom-10'

    
  return (
    <>
    {(imageOption === 'planet' || imageOption==='internal') && <div className='flex justify-center py-20 lg:basis-1/2 lg:py-0 lg:items-center'>
    <img src={planetData ?planetData?.images[imageOption] : data[0].images[imageOption]} alt="" className={`${outerWidth}`} /></div>}
    {imageOption ==='geology' && (
        <div className='relative flex justify-center py-30 lg:basis-1/2 lg:py-0 lg:items-center'>
            <div><img src={planetData?.images.planet} alt="" className={`${outerWidth}`}/></div>
            <div className={`absolute  left-auto right-auto ${bottomPosition}`}><img src={planetData?.images.geology} alt="" className='w-[93px] h-[129px] md:w-[113px] md:h-[149px] lg:w-[163px] lg:h-[199px]'/></div>
        </div>
    )}
    
    </>
  )
}

export default Image