/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
"use client";
import { useState } from "react";

import { title } from "@/components/primitives";
export default function ContactLayout() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}> Contact Us </h1>
        </div>
        <div className="inline-block max-w-lg text-start justify-center" />
    </section>

    <section>
        <div>
        <h1 className="flex flex-col text-large font-bold text-center">
            {" "}
            Get In Touch{" "}
        </h1>
        </div>

        <form className="py-4 mt-4 border-t flex flex-col gap-5 ">
        <div>
            <label htmlFor="fullname"> Full Name</label>
            <input
            id="full name="
            placeholder=" john doe "
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="email"> Email </label>
            <input
            id="email"
            placeholder=" john@gmail.com "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="message"> Your Message</label>
        </div>
        <div>
            <textarea
              className="h-32"
            id="Message"
            placeholder="Type Your Message Here.. "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        </form>
        <section className="justify-end  flex-col items-end inline-flex">
        <button className=" bg-gradient-to-b from-blue-400  p-3 text-end  text-black justify-end"   type="submit">
        Send Message{" "}
        </button>
        </section>
        <div className="bg-slate-100 flex flex-col "/>
    </section>
    </>
);
}
