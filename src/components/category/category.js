
import clapp from '../../assets/work/1clapp.jpg'
import swc from '../../assets/work/swc.png'
import layer5 from '../../assets/work/layer5.png'
import eos from '../../assets/work/eos.png'
import gsoc from '../../assets/work/gsoc.png'
import ivrrm from '../../assets/work/ivrrm.png'
import meshery from '../../assets/work/meshery.png'
import alp from '../../assets/work/alp.png'
import paytm from '../../assets/work/paytm.jpg'
import foss from '../../assets/work/foss.png'
import {AiOutlineLink, AiFillFolderOpen, AiOutlineCloudDownload} from 'react-icons/ai'
import {BiBriefcase} from 'react-icons/bi'
import {MdExpandMore} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import resume from '../../assets/resume.pdf'

  export default function Category() {

    const handleResumeOpen = () => {
        window.open(resume, '_blank')
    }



    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                {/* <h2 className="text-2xl font-bold ">Collections</h2> */}
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                    <div className="text-white">
                    <ul role="list" className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                        <div className="text-light_black font-medium">
                            <AiFillFolderOpen className="inline mr-3 text-2xl text-light_black" />Projects</div>
                            <li className="py-4 flex">
                               <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    Rollin Studios
                                    <p className="text-sm text-gray-500">A Figma extension to use all of the EOS Icons from within the application. Open source, customizable, including all the Material icons.</p>
                                    <a href="https://www.figma.com/community/plugin/1131638845835688020/EOS-Icons" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />figma.com</button></a>
                                    <div className="inline ml-[21rem] ">
                                    <a href="https://github.com/EOS-uiux-Solutions/eos-icons-figma" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li>
                            <li className="py-4 flex">
                               <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    Alp Media
                                    <p className="text-sm text-gray-500">A Figma extension to use all of the EOS Icons from within the application. Open source, customizable, including all the Material icons.</p>
                                    <a href="https://www.figma.com/community/plugin/1131638845835688020/EOS-Icons" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />figma.com</button></a>
                                    <div className="inline ml-[21rem] ">
                                    <a href="https://github.com/EOS-uiux-Solutions/eos-icons-figma" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li>
                            <li className="py-4 flex">
                               <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    EOS Icons for Figma
                                    <p className="text-sm text-gray-500">A Figma extension to use all of the EOS Icons from within the application. Open source, customizable, including all the Material icons.</p>
                                    <a href="https://www.figma.com/community/plugin/1131638845835688020/EOS-Icons" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />figma.com</button></a>
                                    <div className="inline ml-[21rem] ">
                                    <a href="https://github.com/EOS-uiux-Solutions/eos-icons-figma" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li>
                            {/* <li className="py-4 flex">
                            <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    EOS Icons for Adobe Xd
                                    <p className="text-sm text-gray-500">Extension for Adobe Xd to use all of the EOS-icons from within the application. Open source, customizable, including all the Material icons.</p>
                                    <a href="https://exchange.adobe.com/apps/cc/f7ecf6b5?pluginId=f7ecf6b5" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />adobe.com</button></a>
                                    <div className="inline ml-[21rem] ">
                                    <a href="https://github.com/EOS-uiux-Solutions/eos-icons-adobe-xd" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li> */}
                            <li className="py-4 flex">
                            <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    Knowledge for Everyone
                                    <p className="text-sm text-gray-500">An interactive website that aims to empower students and learners by providing comprehensive and accessible educational resources. With a diverse range of e-learning topics covered, the platform offers an extensive collection of notes designed to facilitate the learning process.</p>
                                    <a href="https://exchange.adobe.com/apps/cc/f7ecf6b5?pluginId=f7ecf6b5" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />kfe.vercel.app</button></a>
                                    <div className="inline ml-[19.5rem] ">
                                    <a href="https://github.com/AnshumanDhiman/Knowledge-For-Everyone" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li>
                            <li className="py-4 flex">
                            <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    IPEC Connect
                                    <p className="text-sm text-gray-500">A Social Media platform for the students of Inderprastha Engineering College.</p>
                                    <a href="https://exchange.adobe.com/apps/cc/f7ecf6b5?pluginId=f7ecf6b5" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />ipc.vercel.app</button></a>
                                    <div className="inline ml-[19.5rem] ">
                                    <a href="https://github.com/AnshumanDhiman/ipec-connect" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li>
                            <li className="py-4 flex">
                            <div className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                                    Phoenix Hostel Management System
                                    <p className="text-sm text-gray-500">Developed a solution for hostel managementproviding features for allocation of room to the, Reallocation of room, no of rooms empty, no of students from a particular institute in a particular hostel building etc.</p>
                                    <a href="" target="_blank" rel="noreferrer"><button className="text-white mt-2"> <AiOutlineLink className="inline mr-2 text-xl" />ipc.vercel.app</button></a>
                                    <div className="inline ml-[19.5rem] ">
                                    <a href="https://github.com/AnshumanDhiman/Phoenix-Hostel-Management-System" target="_blank" rel="noreferrer"><FaGithub className="text-xl inline" /></a>
                                    </div>
                               </div>
                            </li>
                            <li className="py-4 flex">
                            <a href='/projects'><button className="bg-[#303032] text-white px-4 py-2 rounded-lg w-full inline">View More  <MdExpandMore className="text-white ml-2 text-xl inline"/></button>
                            </a></li>
                            
                    </ul>
                    </div>
                    <div className="px-20 text-white">
                        <ul role="list" className="p-6 rounded-3xl border-[1.5px] border-[#303032]">
                        <div className="text-light_black font-medium">
                            <BiBriefcase className="inline mr-3 text-2xl text-light_black" />Work</div>
                            <li className="py-4 flex">
                                <img src={paytm} alt="" className="w-10 h-10 rounded-full"/>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-white">Paytm</p>
                                        <p className="text-sm text-gray-500">SDET-1</p>
                                    </div>
                            </li>
                            <li className="py-4 flex">
                            <img src={alp} alt="" className="w-10 h-10 rounded-full"/>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">Alp Media</p>
                                    <p className="text-sm text-gray-500">Cinematographer & Professional Editor</p>
                                </div>
                            </li>
                            <li className="py-4 flex">
                                <img src={eos} alt="" className="w-10 h-10 rounded-full"/>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">EOS Design Systems</p>
                                    <p className="text-sm text-gray-500">Full Stack Developer & Maintainer</p>
                                </div>
                            </li>
                            <li className="py-4 flex">
                                <img src={foss} alt="" className="w-10 h-10 rounded-full"/>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">Foss Overflow, IIT Bhilai</p>
                                    <p className="text-sm text-gray-500">Student Mentor & Maintainer</p>
                                </div>
                            </li>
                        <li className="py-4 flex">
                            <img src={gsoc} alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Google Summer of Code</p>
                                <p className="text-sm text-gray-500">Full Stack Developer & Student Contributor</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src={swc} alt="" className="w-10 h-10 rounded-full" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Swastik Classes</p>
                                <p className="text-sm text-gray-500">MERN Stack Developer</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src={clapp} alt="" className="w-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">1Clapp</p>
                                <p className="text-sm text-gray-500">Full Stack Developer</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src={layer5} alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Layer5</p>
                                <p className="text-sm text-gray-500">Open Source Contributor</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src={meshery} alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Meshery</p>
                                <p className="text-sm text-gray-500">Open Source Contributor</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <img src={ivrrm} alt="" className="w-10 h-10 rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">IVRRM Private Limited</p>
                                <p className="text-sm text-gray-500">Frontend Developer</p>
                            </div>
                        </li>
                        <li className="py-4 flex">
                            <button className="bg-[#303032] text-white px-4 py-2 rounded-lg w-full inline" onClick={() => handleResumeOpen()}>Download CV  <AiOutlineCloudDownload className="text-white ml-2 text-xl inline"/></button>
                           
                        </li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </>
    )
  }
  