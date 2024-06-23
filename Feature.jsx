import React from 'react'
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";





export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

const Feature = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className='text-center'>
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-center font-medium px-2 py-1 uppercase  '>
            feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
            Easily build
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
            {" "} your code
        </span>

        </h2>
       </div>
       <div className='flex flex-wrap mx-8 mt-10 lg:mt-20'>
       {
          features.map((feature , index) => (
            <div key={index} className='w-full sm:1/2 lg:w-1/3'>
              <div className=' flex justify-center   '>
                <div className='   h-10 w-10 p-2 bg-neutral-900 text-orange-700  rounded-full  '>
                  {feature.icon}
                 </div>
                 <h5 className=" pl-3 mt-1 mb-3 text-xl">       {feature.text}</h5>
               
                 

             </div >
             <p className=" translate-x-24 text-md p- mb-20 text-neutral-500 container text-center max-w-[300px] "> {feature.description }</p>
             
              
            </div>


          ))
        }

       </div>




































    </div>
  )
}

export default Feature
