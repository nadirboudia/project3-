import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const Hero = () => {
  return (
    <div >
      <h1 className=" text-center text-4xl sm:text-6xl lg:text-7xl tracking-wide">
        VirtualR build tools
        <span className=" bg-gradient-to-r from-red-500 to bg-red-800 text-transparent bg-clip-text">
        {" "} for developers 
        </span>
        </h1>
        <p className="text-lg text-center text-neutral-500 py-8">
        VirtualR is an innovative platform designed to enhance the virtual reality (VR) experience for users across various industries, including gaming, education, training, and more. Here's a comprehensive description of VirtualR:
        </p>
       <div className="flex justify-center my-10">
        <a href="#" className=" bg-gradient-to-r from-orange-500 to bg-orange-800 border rounded-md py-3 px-4 mx-3">Start for free</a>
        <a href="#" className="border rounded-md py-3 px-4 mx-3">Documentation</a>
       </div>
       <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
       </div>





        </div>
  )
}

export default Hero
