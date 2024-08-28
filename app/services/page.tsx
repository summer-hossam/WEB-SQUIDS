/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { title } from "@/components/primitives";

export default function ServicesPage() {
  return (
    <>
      <div>
        <h1 className={title()}>Services</h1>
        <p>
          Become the leader in your industry by implementing top tech solutions
        </p>
  </div>



  <div className="w-screen  mx-auto p-6 lg:px-30 sm:px-8 bg-slate-200 dark:bg-slate-800">
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h3 className="mx-4 mb-0 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue">our services</h3>
    </div>
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 my-16">
        
        <div
            className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4">web
                        development</h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. </p>
                </div>
                <a className="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                    href="#">view details</a>
            </div>
        </div>
  
        <div
            className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 ">graphic
                        design</h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
        , dolores  voluptatum nesciunt?</p>
                </div>
                <a className="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                    href="#">view details</a>
            </div>
        </div>
    

        <div
            className="group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 ">UI/UX
                        design</h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                     voluptatum nesciunt?</p>
                </div>
                <a className="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                    href="#">view details</a>
            </div>
        </div>
        </div>
</div>











    </>
 );
}
