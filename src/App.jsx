import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import { data } from "./assets/data";
import Footer from './component/Footer';



function App() {
  return (
    <>
      <div className='justify-center text-center mt-4 mb-12 '>
      <h1 className='text-4xl rounded-full text-white font-medium  shadow-[0px_5px_40px_5px] shadow-[#b3b3b3] bg-transparent p-6 lg:w-[30%] w-[60%] mx-auto'>Projects <span className='lg-block hidden'>Showcase</span></h1>
     </div>
     <div className=" w-11/12 mx-auto">

   
    
        <div className='grid place-items-center grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-[100px] p-4'>
          {data.map((item, index) => (
            <Card 
              key={index}
              name={item.name}
              description={item.description}
              img={item.image}
              code={item.code}
              live={item.live}
            />
          ))}
        </div>

       
      </div>

      <div className="">
        <Footer />
        </div>
    </>
  );
}

export default App;
