// components/common/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you install aquariums at residential properties?",
    answer:
      "Yes! We design, install, and maintain aquariums for homes, apartments, bungalows, and other residential spaces.",
  },
  {
    question: "Do you work with saltwater tanks?",
    answer:
      "Absolutely! We specialize in both freshwater aquariums and saltwater reef systems, including live coral setups.",
  },
  {
    question: "What maintenance plans do you offer?",
    answer:
      "We provide flexible weekly, biweekly, and monthly maintenance plans tailored to the specific needs of each aquarium.",
  },
  {
    question: "Do you provide warranty on equipment?",
    answer:
      "Yes — all major equipment comes with manufacturer warranty, along with installation and support from our team.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know before getting started
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
