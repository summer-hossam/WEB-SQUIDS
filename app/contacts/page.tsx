/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */

export default function ContactsPage() {
  return (
    <>
<div className=" py-1 relative bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden flex-row ">
  <div className="absolute inset-0     py-30 mx-auto max-h-screen pt-0 px-0 ">
    <img alt="Background Image" className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
    <div className="absolute inset-0 bg-black opacity-50" />
  </div>
  
  <div className="py-6 relative h-ful flex flex-col justify-center items-center w-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
    <p className="text-lg text-gray-300 mb-20">Discover amazing features and services that await you.</p>
    <a className="bg-slate-300 blue-500 text-gray-900 hover:bg-blue-300 py-2 px-2 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" href="#">Get Started</a>
  </div>
</div>

</>

  );
}
