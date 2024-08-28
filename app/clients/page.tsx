/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import { title } from "@/components/primitives";

export default function ClientsPage() {
  return (
    <>
      <div>
        <h2 className=" text-blue-500 text-3xl font-bold text-center sm:text-5xl">
          Our Clients
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500 ">
          Meet The PeoLpe We Are Working With{" "}
        </p>
      </div>

      <section>
        <div className="text-center py-4">
          <h1 className={title()}>Testimonials</h1>
          <h2>What Our Clients Say About Us</h2>
          </div>
    </section>

        
      <section className="flex  container items-start py-8 md:py-10 ">
            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <a
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                href="http "
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  hyundai{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  learn more&nbsp;
                </p>
              </a>

              <a
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                href="http"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  nutella{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  learn more&nbsp;
                </p>
              </a>

              <a
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                href="http "
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  web{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  learn more&nbsp;
                </p>
              </a>

              <a
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                href="http"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  march{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  learn more&nbsp;
                </p>
              </a>
            </div>
          </section>






          <section className="py-20 bg-slate-900" id="testimonies">
    <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    its not just us.
                </h1>
                <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                    what others have to say about us.
                </p>
            </div>
        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">


            <ul className="space-y-8">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/kanyewest">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                        <img alt="West"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white"> West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/tim_cook">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Tim Cook"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam .</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/kanyewest">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt=" West"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white"> West</h3>
                                        <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/tim_cook">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Tim Cook"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul className="hidden space-y-8 sm:block">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/paraga">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Peace "
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white"> </h3>
                                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md"> star</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/tim_cook">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Tim Cook"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam </p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/paraga">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                    alt="Pare"
                                     className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white"> </h3>
                                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md"> 
                                    semper. vitae tempus quam
                                .</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/tim_cook">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Tim Cook"
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p className="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Diam .</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul className="hidden space-y-8 lg:block">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/satyanadella">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Stay "
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white"> </h3>
                                        <p className="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md"> out</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/dan_schulman">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Dan "
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Dan </h3>
                                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Quam .</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/satyanadella">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Stay "
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white"> </h3>
                                        <p className="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md" />
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" /><a className="cursor-pointer" href="https://twitter.com/dan_schulman">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        alt="Dan "
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Dan </h3>
                                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Quam quam sem
                                .</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


        </div>
    </div>
</section>













    </>
  );
}
