import React from 'react'


const Card = ({name, img,technology, live , code}) => {

 console.log(img)
  return (
    <div>
       <div className="max-w-sm rounded-2xl  bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700  shadow-[0px_-5px_40px_-5px] shadow-[#b3b3b3]  hover:scale-110 transition-all duration-200 hover:shadow-[0px_-5px_50px_-5px] hover:shadow-[#118AB2] w-[320px] h-[520px] ">
    <a href="#">
        <img className="rounded-t-2xl object-fit w-full h-[300px]" src={img} alt="Image" />
    </a>
    <div className="p-5 flex flex-col justify-between items-center gap-y-2">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 justify-center text-center sm:text-balance dark:text-gray-400">{technology}</p>

        <div className='flex flex-row gap-x-6'>

        <a href={code} className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Code
            
        </a>
        <a href={live} className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Live
          
        </a>
        </div>
       
    </div>
       </div>
    </div>
  )
}

export default Card
