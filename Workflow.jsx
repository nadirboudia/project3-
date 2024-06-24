import React from 'react'
import codeImg from '../assets/code.jpg'
import { CheckCircle2 } from 'lucide-react';
export const checklistItems = [
    {
      title: "Code merge made easy",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Review code without worry",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "AI Assistance to reduce time",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Share work in minutes",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
  ];
  
const Workflow = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-6xl text-center  lg:text-6xl mt-6 tracking-wide '>Accelerate your
            <span className='bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to bg-orange-800  '>
            {''} coding Workflow
            </span>
             </h2>
             <div className='flex flex-wrap justify-center grid lg:grid-cols-2 grid-cols-1'>
                <div className=' mx-auto mt-10   '>
        <img src={codeImg} alt="" className='lg:w-[600px] lg:h-[600px] w-[400px] h-[400px]' />
                </div>
                <div className='mt-14'>
                {checklistItems.map((item, index) => (
                 <div key={index} className='flex mb-12 '>
                    <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                            <CheckCircle2/>
                    </div>
                    <div>
                            <h5  className='mt-1 mb-2 text-xl '>{item.title}</h5>
                            <p className='text-neutral-500'>{item.description}</p>
                    </div>
                
                 </div>







                ))}

                </div>

             </div>
      
    </div>
  )
}

export default Workflow
