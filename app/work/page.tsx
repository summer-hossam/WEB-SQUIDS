/* eslint-disable react/jsx-sort-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */

export default function WorkPage() {
  return (
<>


<section className="py-0 z-10 font-serif">

  <div className="flex flex-col  md:flex-row  max-w-3xl px-0 py-0 mx-auto">
    <div className="items-start text-center w-full md:w-1/2 py-6">
      <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
        Welcome to <span className="text-blue-500">our Portfolio, </span> Iam Web Developer.</h1>
    </div>
    <div className="w-full md:w-1/2 py-0">
      <img className="g-image" src="https://www.svgrepo.com/show/493509/person-who-invests.svg"/>
    </div>
  </div>
</section>


    <div className="mb-29  bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <p className=" justify-center text-center items-center hidden  text-gray-500 dark:text-gray-300 md:block">
                Samples from our projects
                </p>
            </div>

            <a className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                href="#">
                More
            </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            
            <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                href="#">
                <img alt="Photo by Min " className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">ui/ux </span>
            </a>
  

            
            <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                href="#">
                <img alt="Photo by Magical" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Mobile</span>
            </a>
      

        
            <a className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                href="#">
                <img alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" loading="lazy" src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
        </div>
    </div>
</div>



<section className="relative md:py-40">
<div className=" mb-1 flex flex-col re bg-violet-950 p-2 w-full">
  <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
    <div className="md:w-2/3 lg:w-1/2">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-100">
        <path fillRule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clipRule="evenodd" />
      </svg>
      <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">How we work?</h2>
      <p className="text-gray-300">We follow our process to get you started as quickly as possible</p>
    </div>
    <div
      className="mt-16 grid divide-x divide-y  divide-gray- overflow-hidden rounded-3xl border text-gray-600 border-l-purple-950 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div className="group relative bg-violet-950 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white white height=50 width=50
            xmlns=http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
            <path d="M10 10l2 -2v8" />
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition">Initial Discussion</h5>
            <p className="text-gray-300">We will have discussions on the requirements to ensure your MVP (Minimum Viable
              Product) is ready for the initial launch</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-violet-950 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
            <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Deal Finalized</h5>
            <p className="text-gray-300">Once we agree on what to build, We will start working on it right away.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-violet-950 hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
            <path
              d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1" />
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Product Delivery</h5>
            <p className="text-gray-300">We will develop your product MVP in 15 days (more time required depending on the
              complexity of the project)</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-violet-950 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
            strokeLinejoin="round" color="white" height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
            <path d="M10 8v3a1 1 0 0 0 1 1h3" />
            <path d="M14 8v8" />
          </svg>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Celebrate your Launch
            </h5>
            <p className="text-gray-300">We love Celebrations. We will celebrate your launch on our Social Profiles.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<footer className="bg-gray-800 text-white py-0 px-0 mt-0">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p className="text-xs text-gray-400 md:text-sm">Copyright 2020 &copy; All Rights Reserved</p>
        </div>
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li><a className="text-gray-400 hover:text-white" href="/contacts">Contacts</a></li>
                <li className="mx-4"><a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a></li>
                <li><a className="text-gray-400 hover:text-white" href="#">Terms of Use</a></li>
            </ul>
        </div>
    </div>
</footer>




    </>
  );
}
