import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import { AiOutlineLink, AiFillFolderOpen } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";
import resume from "../assets/resume.pdf";

import x from "../assets/projects/x.png";
import y from "../assets/projects/y.png";

import proj1 from "../assets/projects/1.png";
import proj2 from "../assets/projects/2.png";
import proj3 from "../assets/projects/3.png";
import proj4 from "../assets/projects/4.png";
import proj5 from "../assets/projects/5.png";
import proj6 from "../assets/projects/6.png";
import proj7 from "../assets/projects/7.jpeg";
import proj8 from "../assets/projects/8.png";
import proj9 from "../assets/projects/9.png";
import proj10 from "../assets/projects/10.png";
import proj11 from "../assets/projects/11.png";
import proj12 from "../assets/projects/12.png";
import proj13 from "../assets/projects/13.png";
import proj14 from "../assets/projects/14.png";

export default function Projects() {
  const handleResumeOpen = () => {
    window.open(resume, "_blank");
  };

  return (
    <>
      <div className="bg-black px-36">
        <div className="bg-new_black text-white  border-l border-[#29292C]">
          <br />
          <Navbar />
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
                <h1 className="text-center text-4xl font-lighter">Projects</h1>
                <div class="grid grid-cols-2 gap-4 px-64 py-4">
                  <div>
                    {" "}
                    <img
                      src={x}
                      alt="x"
                      className="w-[20rem] mt-4 rounded-lg"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      src={y}
                      alt="y"
                      className="w-[20rem] mt-4 rounded-lg"
                    />
                  </div>
                </div>

                <p className="font-thin pt-8 pl-8 pr-8 text-center">
                  Throughout my professional journey, I have embarked on a
                  multitude of projects that have not only showcased my
                  expertise but also allowed me to further refine and enhance my
                  skill set. These projects have served as invaluable learning
                  experiences, enabling me to tackle complex challenges and
                  develop innovative solutions. With each endeavor, I have
                  pushed the boundaries of my abilities, acquiring new knowledge
                  and honing existing skills along the way. By immersing myself
                  in diverse projects, I have broadened my understanding of
                  different industries, technologies, and methodologies. This
                  continuous growth has empowered me to approach future
                  endeavors with confidence, ready to tackle & obstacle that
                  comes my way. I am proud of the progress I have made and eager
                  to continue my journey of personal & professional development,
                  always seeking new opportunities to expand my skill set and
                  contribute to meaningful projects.
                </p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                  <div className="text-white">
                    <ul role="list" className="p-6 rounded-3xl ">
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Rollin Studios
                          <p className="text-sm text-gray-500">
                            Created and managed Rollin Studios, a dynamic media
                            production house specializing in delivering
                            captivating multimedia experiences.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="http://rollinstudios.in/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  rollinstudios.in
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/AnshumanDhiman/rollin"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj1}
                            alt="rproj"
                            className="mt-4 rounded "
                          />
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Alp Media
                          <p className="text-sm text-gray-500">
                            Established and managed Alp Media, a dynamic media
                            production house, specializing in delivering
                            captivating and impactful multimedia experiences.
                          </p>
                          <a
                            href="https://alpmedia.in/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="text-white mt-2">
                              {" "}
                              <AiOutlineLink className="inline mr-2 text-xl" />
                              alpmedia.in
                            </button>
                          </a>
                          {/* <div className="inline ml-[21rem] ">
                            <a
                              href="https://github.com/EOS-uiux-Solutions/eos-icons-figma"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub className="text-xl inline" />
                            </a>
                          </div> */}
                          <img
                            src={proj2}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          IPEC Connect
                          <p className="text-sm text-gray-500">
                            {" "}
                            Developed IPEC Connect, a social media platform
                            designed for college students, facilitating seamless
                            connectivity, within the campus community.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a href="/" target="_blank" rel="noreferrer">
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  ipec-connect.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/AnshumanDhiman/ipec-connect"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj6}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          EOS Icons for Figma
                          <p className="text-sm text-gray-500">
                            A Figma extension to use all of the EOS Icons from
                            within the application. Open source, customizable,
                            including all the Material icons.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="https://www.figma.com/community/plugin/1131638845835688020/EOS-Icons"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  figma.com
                                </button>
                              </a>
                            </div>
                            <div className="inline ml">
                              <a
                                href="https://github.com/EOS-uiux-Solutions/eos-icons-figma"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj3}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>

                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Knowledge for Everyone
                          <p className="text-sm text-gray-500">
                            An interactive website that aims to empower students
                            and learners by providing comprehensive and
                            accessible educational resources.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a href="/" target="_blank" rel="noreferrer">
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  kfe.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/AnshumanDhiman/Knowledge-For-Everyone"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj5}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Arcacia
                          <p className="text-sm text-gray-500">
                            Developed a distinctive interior design website for
                            Arcacia, incorporating innovative design elements
                            and user-friendly functionality.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a href="/" target="_blank" rel="noreferrer">
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  arcacia.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/RishabhXD/arcacia"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj9}
                            alt="rproj"
                            className="mt-4 rounded  opacity-75"
                          />
                        </div>
                      </li>

                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Phoenix Hostel Management System
                          <p className="text-sm text-gray-500">
                            Developed a solution for hostel management providing
                            features for allocation of rooms, Reallocation of
                            room, etc in a particular hostel building etc.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a href="" target="_blank" rel="noreferrer">
                                <button className="text-white ">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  phoenix-hms.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline ">
                              <a
                                href="https://github.com/AnshumanDhiman/Phoenix-Hostel-Management-System"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj7}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className=" text-white">
                    <ul role="list" className="p-6 rounded-3xl ">
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Zen Solutions
                          <p className="text-sm text-gray-500">
                            Developed Zen Solutions, a consultancy website,
                            providing different IT services to clients including
                            website designing, testing & etc.
                          </p>
                          <a
                            href="https://zensolutions.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="text-white mt-2">
                              {" "}
                              <AiOutlineLink className="inline mr-2 text-xl" />
                              zensolutions.vercel.app
                            </button>
                          </a>
                          <div className="inline ml-[15.5rem] ">
                            {/* <a
                              href="https://github.com/AnshumanDhiman/Knowledge-For-Everyone"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub className="text-xl inline" />
                            </a> */}
                            <img
                              src={proj12}
                              alt="rproj"
                              className="mt-4 rounded opacity-75"
                            />
                          </div>
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Swastik Classes
                          <p className="text-sm text-gray-500">
                            Successfully managed and executed the migration of
                            Swastik Classes' website from WordPress to React,
                            leveraging my expertise in full development.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="https://swastikclasses.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  swastikclasses.com
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/SwastikClasses/Swastik-Classes-Main"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj10}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>

                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Dhruverse
                          <p className="text-sm text-gray-500">
                            Designed and developed Dhruverse, a captivating
                            portfolio website showcasing the skills and
                            expertise of a client.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="https://dhruverse.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  dhruverse.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/AnshumanDhiman/dhruverse"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj13}
                            alt="rproj"
                            className="mt-4 rounded"
                          />
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          EOS Icons for Adobe Xd
                          <p className="text-sm text-gray-500">
                            Extension for Adobe Xd to use all of the EOS-icons
                            from within the application. Open source,
                            customizable, including all the Material icons.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="https://exchange.adobe.com/apps/cc/f7ecf6b5?pluginId=f7ecf6b5"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white mt-2">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  adobe.com
                                </button>
                              </a>
                            </div>
                            <div className="inline ">
                              <a
                                href="https://github.com/EOS-uiux-Solutions/eos-icons-adobe-xd"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj4}
                            alt="rproj"
                            className="mt-4 rounded  opacity-75"
                          />
                        </div>
                      </li>

                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          My Portfolio
                          <p className="text-sm text-gray-500">
                            Developed a personalized portfolio website,
                            leveraging my expertise, to showcase my skillset,
                            professional accomplishments, and creative projects.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="https://anshuman-portfolio-woad.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  anshuman.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/EOS-uiux-Solutions/eos-icons-adobe-xd"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj11}
                            alt="rproj"
                            className="mt-4 rounded"
                          />
                        </div>
                      </li>
                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Kaleido UX
                          <p className="text-sm text-gray-500">
                            {" "}
                            Founded Kaleido UX, an open-source organization
                            dedicated to developing Tailwind components, and
                            innovation within the web design community.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a
                                href="https://kaleido-ux-taupe.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  kaleido-ux.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline ">
                              <a
                                href="https://github.com/AnshumanDhiman/kaleido-ux"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj8}
                            alt="rproj"
                            className="mt-4 rounded opacity-75"
                          />
                        </div>
                      </li>

                      <li className="py-4 flex cursor-pointer">
                        <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                          Blood Bank
                          <p className="text-sm text-gray-500">
                            Developed Rudhir, a purpose-driven website aimed at
                            connecting blood donors with those in need,
                            providing a seamless platform for blood donation.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mt-2">
                            <div className="inline-block">
                              <a href="/" target="_blank" rel="noreferrer">
                                <button className="text-white">
                                  {" "}
                                  <AiOutlineLink className="inline mr-2 text-xl" />
                                  blood-bank.vercel.app
                                </button>
                              </a>
                            </div>
                            <div className="inline">
                              <a
                                href="https://github.com/AnshumanDhiman/Blood-Bank"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub className="text-xl inline" />
                              </a>
                            </div>
                          </div>
                          <img
                            src={proj14}
                            alt="rproj"
                            className="mt-4 rounded  opacity-75"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
          <Footer />
        </div>
      </div>
    </>
  );
}
