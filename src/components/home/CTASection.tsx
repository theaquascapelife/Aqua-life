// components/common/CTASection.tsx
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20  text-white mb-9">
      <div className="container mx-auto px-4">

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
            Bring the Magic of Aquatic Life to Your Space
          </h2>

          <p className="mt-4 text-slate-900">
            Book your consultation today — our experts are ready
            to help you design, install, and maintain a stunning aquarium.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          <ContactCard
            icon={Phone}
            title="Call / WhatsApp"
            value="+91-88957 71074"
            href="tel:+918895771074"
          />

          <ContactCard
            icon={Mail}
            title="Email"
            value="info@theaqualifescape.in"
            href="mailto:info@theaqualifescape.in"
          />

          <ContactCard
            icon={MapPin}
            title="Location"
            value="Vasai, Mumbai, Maharashtra, India"
          />

          <ContactCard
            icon={Phone}
            title="Book Consultation"
            value="Get in touch today"
            href="/contact"
          />

        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact Card */
/* ------------------------------------------------------------------ */

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: any;
  title: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex flex-col items-center rounded-xl border border-slate-800 bg-black/85 p-6 text-center transition hover:bg-black/90"
    >
      <Icon className="h-6 w-6 text-blue-300" />
      <h3 className="mt-4 text-sm font-semibold">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-300">
        {value}
      </p>
    </Wrapper>
  );
}
