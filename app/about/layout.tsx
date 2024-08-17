import { subtitle, title } from "@/components/primitives";
export default function AboutLayout() {
  return (
    <>
      <head>
        <link href="/icons.tsx>" rel="icon" sizes="any" type="image" />
      </head>
      <section className=" items-start justify-start gap-4 py-8 md:py-10">
        <div className=" max-w-lg text-center justify-center">
          <h1 className={title()}> About Us </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            websquids is a fast growing software development house that was
            founded in 2015, we design and develop professional Business
            Solutions which are presented to our customers with the most
            friendly and easy to use interface.
          </h2>
        </div>
        <div className="flex flex-col items-end justify-end gap-4 py-0 md:py-o">
          <div className="inline-block max-w-lg text-center justify-center">
            photo
          </div>
        </div>
      </section>
      <div />
      <section className="flex flex-col items-end justify-end gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}> Our Mission </h1>
          <div className="inline-block max-w-lg text-center justify-center">
            <h2 className={subtitle({ class: "mt-4" })}>
              From Conceptualization to Realization,We Believe That Good Ideas
              Incite Perfect Execution.
            </h2>
          </div>
        </div>
      </section>
      <section className="max-w-lg text-start items-start justify-start gap-4 py-0 md:py-0">
        <div className="inline-block text-center justify-center">photo</div>
      </section>
      <div>
        <section className=" items-start justify-start gap-4 py-8 md:py-10">
          <div className=" max-w-lg text-center justify-center">
            <h1 className={title()}> Our Story </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              We never settle for less…Neither should you!
            </h2>
          </div>
          <div className="flex flex-col items-end justify-end gap-4 py-0 md:py-o">
            <div className="inline-block max-w-lg text-center justify-center">
              photo
            </div>
          </div>
        </section>
      </div>
      =
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}> Hubspot by The Numbers </h1>
          <h2 className={subtitle({ class: "mt-4" })}> </h2>
        </div>
      </section>
      <section className=" flex justify-center text-center items-center py-10 md:py-10 ">
        <div className="mb-32 grid lg:text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 ">
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href="page "
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              12 Global Offices{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn more&nbsp;!
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href="page"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              7600+ employees{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn more&nbsp;!
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href="page"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              205,000+ customers{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn more&nbsp;!
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
