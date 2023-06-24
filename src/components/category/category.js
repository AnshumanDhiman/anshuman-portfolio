/* eslint-disable jsx-a11y/no-redundant-roles */
import {AiOutlineCloudDownload} from 'react-icons/ai'
import {BiBriefcase} from 'react-icons/bi'
  
  export default function Example() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 className="text-2xl font-bold ">Collections</h2>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                    <div className="text-white">Hello</div>
                <div className="px-20 text-white">
                    <ul role="list" className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                    <div className="text-light_black font-medium">
                    <BiBriefcase className="inline mr-3 text-2xl text-light_black" />Work</div>
                        <li className="py-4 flex">
                        
                            <img src="https://pbs.twimg.com/profile_images/1580815768035332096/K0X6JuDy_400x400.jpg" alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Paytm</p>
                                <p className="text-sm text-gray-500">QA Manual Intern</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipO7wlhf3y4fX-c7R7odTIx3lJ2mvdJZscge93ct=s1360-w1360-h1020" alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Alp Media</p>
                                <p className="text-sm text-gray-500">Co-Founder & Director of Photography</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src="https://www.figma.com/community/plugin/1131638845835688020/icon" alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">EOS Design Systems</p>
                                <p className="text-sm text-gray-500">Full Stack Developer & Maintainer</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src="https://fossoverflow.dev/icon.png" alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Foss Overflow</p>
                                <p className="text-sm text-gray-500">Student Mentor & Maintainer</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Google_Summer_of_Code_sun_logo_2022.svg/1200px-Google_Summer_of_Code_sun_logo_2022.svg.png" alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Google Summer of Code</p>
                                <p className="text-sm text-gray-500">Full Stack Developer & Student Contributor</p>
                            </div>
                        </li>
                      
                        <li className="py-4 flex">
                            <button className="bg-[#303032] text-white px-4 py-2 rounded-lg w-full inline">Download CV  <AiOutlineCloudDownload className="text-white ml-2 text-xl inline"/></button>
                           
                        </li>
                       

                    </ul>
                </div>
                </div>
                </div>
            </div>
        </>
    )
  }
  