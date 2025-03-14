import data from '../data.json'

function Stats() {
  return (
    <div className='flex flex-col gap-2 px-6 md:flex-row md:gap-3 md:px-13 lg:px-42 lg:gap-6'>
        <div className="border border-slate700 flex justify-between items-center px-5 py-3 md:flex-col md:gap-1.5 md:w-full md:items-start">
            <p className="text-[8px] text-slate700 tracking-[0.73px] leading-[11px] uppercase lg:text-hTiny">Rotation Time</p>
            <p className="text-white text-[20px] font-bold font-Antonio uppercase tracking-[-0.73px] md:text-2xl lg:text-hMedium">{data[0].rotation}</p>
        </div>
        <div className="border border-slate700 flex justify-between items-center px-5 py-3 md:flex-col md:gap-1.5 md:w-full md:items-start">
            <p className="text-[8px] text-slate700 tracking-[0.73px] leading-[11px] uppercase lg:text-hTiny">revolution time</p>
            <p className="text-white text-[20px] font-bold font-Antonio uppercase tracking-[-0.73px] md:text-2xl lg:text-hMedium">{data[0].revolution}</p>
        </div>
        <div className="border border-slate700 flex justify-between items-center px-5 py-3 md:flex-col md:gap-1.5 md:w-full md:items-start">
            <p className="text-[8px] text-slate700 tracking-[0.73px] leading-[11px] uppercase lg:text-hTiny">Radius</p>
            <p className="text-white text-[20px] font-bold font-Antonio uppercase tracking-[-0.73px] md:text-2xl lg:text-hMedium">{data[0].radius}</p>
        </div>
        <div className="border border-slate700 flex justify-between items-center px-5 py-3 md:flex-col md:gap-1.5 md:w-full md:items-start">
            <p className="text-[8px] text-slate700 tracking-[0.73px] leading-[11px] uppercase lg:text-hTiny">average temp.</p>
            <p className="text-white text-[20px] font-bold font-Antonio uppercase tracking-[-0.73px] md:text-2xl lg:text-hMedium">{data[0].temperature}</p>
        </div>
    </div>
  )
}

export default Stats