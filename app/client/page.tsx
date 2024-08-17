import { title } from "@/components/primitives";

export default function ClientPage() {
  return (
    <>
      <section>
        <div>
          <h1 className={title()}>Clients</h1>
        </div>
      </section>

      <section>
        <div>
          <h1 className={title()}>Testimonials</h1>
          <h2>What Our Clients Say About Us</h2>
        </div>
      </section>
    </>
  );
}
