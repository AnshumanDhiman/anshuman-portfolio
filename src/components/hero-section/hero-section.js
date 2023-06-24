import Pic from '../../assets/image.png'
import {AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillMediumSquare} from "react-icons/ai";

export default function HeroSection() {
  return (
    <>
        <div className="px-32 py-16">
            <img src={Pic} alt="Anshuman" className='rounded-full w-[125px] p-4'/>
            <h1 className='text-5xl font-bold'>Anshuman Dhiman, founder <br/> developer and designer </h1>
            <br/>
            <p className='text-m pr-[18rem] text-light_black'>I’m Anshuman, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
        </div>
        <div className='px-28 text-light_black'>
            <AiFillGithub className='text-3xl inline mx-4'/>
            <AiOutlineInstagram className='text-3xl inline mx-4'/>
            <AiFillLinkedin className='text-3xl inline mx-4'/>
            <AiFillMediumCircle className='text-3xl inline mx-4'/>
        </div>

    </>
  )
}
