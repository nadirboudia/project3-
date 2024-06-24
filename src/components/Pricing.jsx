import { CheckCircle2 } from "lucide-react"
import {pricingOptions } from '../constants';
import { features } from "./Feature";
const Pricing = () => {
  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide ">Pricing</h2>
      <div className="flex flex-wrap">
        {
        pricingOptions.map((option ,index ) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
                <div className="p-10 border border-neutral-700 rounded-xl">
                    <p className="text-4xl mb-8">{option.title}

                    {option.title === "Pro" && ( <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2 ">
                        (Most popular) </span>
                        )  }
                    
                    
                    </p>
                  <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2" >
                        {option.price}
                      
                    </span>
                    <span className="text-neutral-400 tracking-wide">
                            /month
                        </span>

                  </p>
                            <ul>
                                {       
                                option.features.map((feature, index)=>(
                            <li key={index} className="mt-6 items-center flex  spae-y-2 gap-4">
                                <CheckCircle2 className=" gap-2 "/>
                                {feature}

                            </li>




                                ))
                                }
                            </ul>
                            <button className="mt-10 translate-x-20  ">
                                <a href="#" className="  rounded-full hover:bg-orange-400 duration-300 hover:scale-105 border border-orange-700 py-4 px-20 "> Subscribe</a>
                            </button>

                </div>
                





                    </div>



        ))


        }

      </div>
    </div>

  )
}

export default Pricing
