import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import i1 from "../assets/blogs/1.png";
import i2 from "../assets/blogs/2.png";
import i3 from "../assets/blogs/3.png";
import i4 from "../assets/blogs/4.png";
import i5 from "../assets/blogs/5.jpg";

export default function home() {
  return (
    <>
      <div className="bg-black px-0 lg:px-36">
        <div className="bg-new_black text-white  border-l border-[#29292C]">
          <br />
          <Navbar />
          <>
            <div class="max-w-screen-lg mx-auto">
              <main class="mt-12">
                <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
                  <div class="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
                    <img
                      src={i5}
                      class="rounded-md object-cover w-full h-[25rem]"
                    />
                    <br />
                    <h1 class="text-white text-left lg:text-center text-2xl lg:text-4xl font-bold mt-4 mb-8 leading-tight">
                      Unveiling My Learning Journey: A Compilation of Blogs
                    </h1>
                    <p class="text-gray-600 text-justify lg:text-center">
                      During my incredible journey of learning and personal
                      growth, I have dedicated countless hours to honing my
                      writing skills and exploring various topics that captivate
                      my curiosity. As a result, I am thrilled to present to you
                      a collection of thought-provoking blogs that I have
                      meticulously crafted along the way. These blogs
                      encapsulate my passion for knowledge, as well as my
                      commitment to providing valuable insights and engaging
                      content. Join me as I delve into a world of diverse
                      subjects, sharing my unique perspectives and experiences,
                      all born from a deep desire to learn and contribute.
                    </p>
                  </div>
                </div>
              </main>
            </div>
            <div className="pb-12 lg:px-32 lg:py-8">
              <section class="flex flex-col justify-center antialiased text-gray-200">
                <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <span class="relative block group" href="#0">
                      <div
                        class="absolute inset-0 bg-[#ECAD3B] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={i1}
                          width="540"
                          height="303"
                          alt="Blog post"
                        />
                      </figure>
                    </span>
                    <div>
                      <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-[#ECAD3B] hover:bg-[#b4852d] transition duration-150 ease-in-out cursor-default">
                              Google Summer of Code
                            </span>
                          </li>
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-default">
                              Full Stack Development
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <span class="hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                          A New Journey Begins.
                        </span>
                      </h3>

                      <p class="text-lg text-gray-400 flex-grow cursor-default">
                        Hello, my name is Anshuman Dhiman, a Pre-Final Year
                        Information Technology student from India. I will be
                        polishing & adding new features to EOS Icons Figma &
                        Adobe XD Plugins and also work on EOS Icons Website
                        during Google Summer of Code 2022.
                      </p>
                      <footer class="flex items-center mt-4">
                        <div>
                          <span
                            class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-default"
                            cursor-default
                          >
                            Anshuman Dhiman
                          </span>
                          <span class="text-gray-700 cursor-default"> - </span>
                          <span class="text-gray-500 cursor-default">
                            06/22/2022
                          </span>
                          <a
                            href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/weekly-blog-post-1-2/"
                            target="_blank"
                          >
                            <button class="inline-flex text-center text-gray-100 ml-8 text-[0.75rem] py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out ">
                              View Article
                            </button>
                          </a>
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              </section>
            </div>

            <div className="hidden lg:block  lg:px-32 lg:py-8">
              <section class="flex flex-col justify-center antialiased text-gray-200 p-8">
                <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <div>
                      <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <span
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-default"
                              href="#0"
                            >
                              UI/UX Designing
                            </span>
                          </li>
                          <li class="m-1">
                            <span
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out cursor-default"
                              href="#0"
                            >
                              Figma
                            </span>
                          </li>
                          <li class="m-1">
                            <span
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-150 ease-in-out cursor-default"
                              href="#0"
                            >
                              Plugins
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <span class="hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                          Finally EOS Icons Available on Figma !
                        </span>
                      </h3>

                      <p class="text-lg text-gray-400 flex-grow cursor-default">
                        This week was focused on to launch EOS Icons on Figma
                        platform. The cover arts and relevant data were made
                        final. Additionally, I asked for Figma Community
                        Profiles of mentors who had also contributed to the
                        plugin for the developers section.
                      </p>
                      <footer class="flex items-center mt-4">
                        <div>
                          <span class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                            Anshuman Dhiman
                          </span>
                          <span class="text-gray-700 cursor-default"> - </span>
                          <span class="text-gray-500 cursor-default">
                            08/11/2022
                          </span>
                          <a
                            href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/weekly-blog-post-6-8/"
                            target="_blank"
                          >
                            <button class="inline-flex text-center text-gray-100 ml-8 text-[0.75rem] py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out   ">
                              View Article
                            </button>
                          </a>
                        </div>
                      </footer>
                    </div>
                    <span class="relative block group" href="#0">
                      <div
                        class="absolute inset-0 bg-[#FF7262] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={i2}
                          width="540"
                          height="303"
                          alt="Blog post"
                        />
                      </figure>
                    </span>
                  </article>
                </div>
              </section>
            </div>


            <div className="block pb-12 lg:hidden">
              <section class="flex flex-col justify-center antialiased text-gray-200">
                <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <span class="relative block group" href="#0">
                      <div
                        class="absolute inset-0 bg-[#FF7262] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={i2}
                          width="540"
                          height="303"
                          alt="Blog post"
                        />
                      </figure>
                    </span>
                    <div>
                      <div class="mb-3">
                      <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <span
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-default"
                              href="#0"
                            >
                              UI/UX Designing
                            </span>
                          </li>
                          <li class="m-1">
                            <span
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out cursor-default"
                              href="#0"
                            >
                              Figma
                            </span>
                          </li>
                          <li class="m-1">
                            <span
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-150 ease-in-out cursor-default"
                              href="#0"
                            >
                              Plugins
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <span class="hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                        Finally EOS Icons Available on Figma !
                        </span>
                      </h3>

                      <p class="text-lg text-gray-400 flex-grow cursor-default">
                      This week was focused on to launch EOS Icons on Figma
                        platform. The cover arts and relevant data were made
                        final. Additionally, I asked for Figma Community
                        Profiles of mentors who had also contributed to the
                        plugin for the developers section.
                      </p>
                      <footer class="flex items-center mt-4">
                        <div>
                          <span
                            class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-default"
                            cursor-default
                          >
                            Anshuman Dhiman
                          </span>
                          <span class="text-gray-700 cursor-default"> - </span>
                          <span class="text-gray-500 cursor-default">
                          08/11/2022
                          </span>
                          <a
                            href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/weekly-blog-post-6-8/"
                            target="_blank"
                          >
                            <button class="inline-flex text-center text-gray-100 ml-8 text-[0.75rem] py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out ">
                              View Article
                            </button>
                          </a>
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              </section>
            </div>


            <div className="pb-12 lg:px-32 lg:py-8">
              <section class="flex flex-col justify-center antialiased text-gray-200">
                <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <span class="relative block group" href="#0">
                      <div
                        class="absolute inset-0 bg-[#470137] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={i3}
                          width="540"
                          height="303"
                          alt="Blog post"
                        />
                      </figure>
                    </span>
                    <div>
                      <div class="mb-3">
                      <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-default">
                              UI/UX Designing
                            </span>
                          </li>
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out cursor-default">
                              Adobe Xd
                            </span>
                          </li>
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-150 ease-in-out cursor-default">
                              Plugins
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <span class="hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                        EOS Icons Now Available on Creative Cloud
                        </span>
                      </h3>

                      <p class="text-lg text-gray-400 flex-grow cursor-default">
                      We submitted the plugin after the issues were resolved.
                        Once more, there were some problems that put the plugin
                        on hold. These issues included a truncated search bar
                        that appeared alongside the toolbar and a truncated tool
                        tip when the user hovered over the final item on the
                        right
                      </p>
                      <footer class="flex items-center mt-4">
                        <div>
                          <span
                            class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-default"
                            cursor-default
                          >
                            Anshuman Dhiman
                          </span>
                          <span class="text-gray-700 cursor-default"> - </span>
                          <span class="text-gray-500 cursor-default">
                            08/25/2022
                          </span>
                          <a
                            href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/weekly-blog-post-8-7/"
                            target="_blank"
                          >
                            <button class="inline-flex text-center text-gray-100 ml-8 text-[0.75rem] py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out ">
                              View Article
                            </button>
                          </a>
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              </section>
            </div>






            <div className="hidden lg:block px-32 pt-8 py-2">
              <section class="flex flex-col justify-center antialiased text-gray-200 p-8">
                <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <div>
                      <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-default">
                              Plugin
                            </span>
                          </li>
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out cursor-default">
                              Figma
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <span class="hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                          New UI for Figma
                        </span>
                      </h3>

                      <p class="text-lg text-gray-400 flex-grow cursor-default">
                        This week was focused on refactoring the Figma Plugin
                        and giving the UI a new look. The current Figma UI is
                        quite broad, icons appear crowded, and the overall look
                        is not professional. I started with a fresh repository
                        and also copied the modal changes which I implemented
                        last week. Designing the UI was not an easy task.
                      </p>
                      <footer class="flex items-center mt-4">
                        <div>
                          <span class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                            Anshuman Dhiman
                          </span>
                          <span class="text-gray-700 cursor-default"> - </span>
                          <span class="text-gray-500 cursor-default">
                            09/07/2022
                          </span>
                          <a
                            href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/weekly-blog-post-10-5/"
                            target="_blank"
                          >
                            <button class="inline-flex text-center text-gray-100 ml-8 text-[0.75rem] py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out ">
                              View Article
                            </button>
                          </a>
                        </div>
                      </footer>
                    </div>
                    <span class="relative block group" href="#0">
                      <div
                        class="absolute inset-0 bg-[#136C7C] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={i4}
                          width="540"
                          height="303"
                          alt="Blog post"
                        />
                      </figure>
                    </span>
                  </article>
                </div>
              </section>
            </div>

            <div className="pb-8 block lg:hidden">
              <section class="flex flex-col justify-center antialiased text-gray-200">
                <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                  <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <span class="relative block group" href="#0">
                      <div
                        class="absolute inset-0 bg-[#136C7C] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                        aria-hidden="true"
                      ></div>
                      <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={i4}
                          width="540"
                          height="303"
                          alt="Blog post"
                        />
                      </figure>
                    </span>
                    <div>
                      <div class="mb-3">
                      <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-default">
                              Plugin
                            </span>
                          </li>
                          <li class="m-1">
                            <span class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out cursor-default">
                              Figma
                            </span>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <span class="hover:text-gray-100 transition duration-150 ease-in-out cursor-default">
                        New UI for Figma
                        </span>
                      </h3>

                      <p class="text-lg text-gray-400 flex-grow cursor-default">
                      This week was focused on refactoring the Figma Plugin and giving the UI a new look. The current Figma UI is quite broad, icons appear crowded, and the overall look is not professional. I started with a fresh repository and also copied the modal changes which I implemented last week. Designing the UI was not an easy task.
                      </p>
                      <footer class="flex items-center mt-4">
                        <div>
                          <span
                            class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out cursor-default"
                            cursor-default
                          >
                            Anshuman Dhiman
                          </span>
                          <span class="text-gray-700 cursor-default"> - </span>
                          <span class="text-gray-500 cursor-default">
                          08/11/2022
                          </span>
                          <a
                            href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/weekly-blog-post-10-5/"
                            target="_blank"
                          >
                            <button class="inline-flex text-center text-gray-100 ml-8 text-[0.75rem] py-1 px-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out ">
                              View Article
                            </button>
                          </a>
                        </div>
                      </footer>
                    </div>
                  </article>
                </div>
              </section>
            </div>




            <div className="text-center pb-8">
              <a
                href="https://blogs.python-gsoc.org/en/anshumandhimans-blog/"
                target="_blank"
              >
                <button class="inline-flex text-center text-gray-100 text-[1rem] px-5 py-2 rounded-full bg-[#3f8c9f] hover:bg-[#2c606c] transition duration-150 ease-in-out">
                  View More
                </button>
              </a>
            </div>
          </>
          <Footer />
        </div>
      </div>
    </>
  );
}
