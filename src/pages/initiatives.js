import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import in1 from "../assets/initiatives/1.png";
import in2 from "../assets/initiatives/2.png";
import in3 from "../assets/initiatives/3.jpg";

export default function Initiatives() {
  return (
    <>
      <div className="bg-black lg:px-36">
        <div className="bg-new_black text-white  border-l border-[#29292C]">
          <br />
          <Navbar />
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
                <h1 className="text-center text-4xl font-lighter">
                  Initiatives
                </h1>

                <p className="font-thin pt-8 lg:pl-8 lg:pr-8 text-justify lg:text-center">
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
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                  <div className="text-white">
                    <ul role="list" className="p-6 rounded-3xl ">
                      <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                        <img
                          src={in1}
                          alt="in1"
                          className="w-[20rem] mt-4 mb-8 rounded-lg"
                        />
                        <h1 className="text-2xl font-bold text-center">
                          Kaleido UX
                        </h1>

                        <h4 className="text-sm text-center">Founder</h4>
                        <p className="font-thin pt-4  text-justify">
                          KaleidoUX is an open source UI/UX organization that
                          aims to bring vibrant and diverse design experiences
                          to the digital world. Inspired by the concept of a
                          kaleidoscope, the organization focuses on creating
                          visually captivating and ever-changing user
                          experiences. KaleidoUX believes that design should be
                          a dynamic, constantly adapting & transforming to meet
                          the evolving needs and preferences of users.With a
                          multidisciplinary approach, the organization
                          encourages collaboration between designers &
                          developers to create innovative and engaging user
                          interfaces that are aesthetically pleasing.
                        </p>
                      </div>
                    </ul>
                  </div>
                  <div className=" text-white">
                    <ul role="list" className="p-6 rounded-3xl ">
                      <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                        <img
                          src={in2}
                          alt="in1"
                          className="w-[20rem] mt-4 mb-8 rounded-lg"
                        />
                        <h1 className="text-2xl font-bold text-center">
                          Alp Media
                        </h1>
                        <h4 className="text-sm text-center">Developer</h4>
                        <p className="font-thin pt-4  text-justify">
                          Alp Media, a powerhouse in the world of media, stands
                          tall as one of the fastest-growing networks today.
                          With a relentless drive to redefine entertainment, we
                          pride ourselves in crafting iconic media content that
                          resonates deeply with audiences worldwide. Our
                          dedication lies in capturing the essence of emotions
                          and experiences, presenting them through captivating
                          frames that leave a lasting impact. From gripping
                          narratives to visually stunning productions, we strive
                          to create moments that stir hearts and spark
                          conversations. With our commitment to excellence in
                          all that we do, we are proud to be a leading name in
                          the world of media.
                        </p>
                      </div>
                    </ul>
                  </div>
                  <div className=" text-white">
                    <ul role="list" className="p-6 rounded-3xl ">
                      <div className="p-6 rounded-3xl border-[1.5px] border-[#303032] trnasition duration-300 hover:border-[#365B64] hover: ease-in-out">
                        <img
                          src={in3}
                          alt="in1"
                          className="w-[20rem] mt-4 mb-8 rounded-lg"
                        />
                        <h1 className="text-2xl font-bold text-center">
                          Aeronautica IPEC
                        </h1>
                        <h4 className="text-sm text-center">
                          Co-founder & Vice-President
                        </h4>
                        <p className="font-thin pt-4  text-justify">
                          During my transformative learning period, I had the
                          privilege of founding Aerounatica IPEC, a dynamic
                          drone society within my college. Committed to
                          empowering students with knowledge and practical
                          skills, our society is dedicated to fostering a deep
                          understanding of drones and their applications.
                          Through workshops, seminars, and hands-on experiences,
                          we aim to equip students with the expertise needed to
                          excel in this rapidly evolving field. Join us as we
                          soar to new heights, igniting a passion for drones and
                          unleashing the limitless possibilities we offer in
                          Inderprastha Engineering College.
                        </p>
                      </div>
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
