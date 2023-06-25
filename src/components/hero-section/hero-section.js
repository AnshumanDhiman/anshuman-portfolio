import Pic from '../../assets/image.png'
import {AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillMediumSquare} from "react-icons/ai";

export default function HeroSection() {
  return (
    <>
        <div className="px-32 py-16">
            <img src={Pic} alt="Anshuman" className='rounded-full w-[125px] p-4'/>
            <h1 className='text-5xl font-bold'>Anshuman Dhiman, founder <br/> developer and designer </h1>
            <br/>
            <p className='text-m pr-[18rem] text-light_black'>Anshuman is a skilled full-stack web developer and UI/UX designer pursuing B.Tech in Information & Technology at Inderprastha Engineering College. He has been an active Open Source contributor since 2021 and enjoys exploring and contributing to various organizations. Anshuman is also passionate about aviation, having experimented with drones and founding the Aviation Club at his college, where he serves as Vice President. His diverse skill set and dedication make him a well-rounded professional.</p>
        </div>
        <div className='px-28 text-light_black'>
            <a href ="https://github.com/AnshumanDhiman" target="_blank" rel="noreferrer"><AiFillGithub className='text-3xl inline mx-4'/></a>
            <a href ="https://www.instagram.com/anshuman.dhiman/" target="_blank" rel="noreferrer"><AiOutlineInstagram className='text-3xl inline mx-4'/></a>
            <a href ="https://www.linkedin.com/in/anshuman-dhiman-06a7341ab/" target="_blank" rel="noreferrer"><AiFillLinkedin className='text-3xl inline mx-4'/></a>
            <a href ="https://medium.com/@anshumandhiman30" target="_blank" rel="noreferrer"><AiFillMediumCircle className='text-3xl inline mx-4'/></a>
        </div>

    </>
  )
}
