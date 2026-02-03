import CareGuides from "@/components/home/CareGuides";
import CategoryGrid from "@/components/home/CategoryGrid";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import FeaturedProducts from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
   <div>
    <Hero/>
    <CategoryGrid/>
    <FeaturedProducts/>
    {/* <WhyChooseUs/> */}
    <ServicesPreview/>
    <TestimonialsCarousel/>
    <CareGuides/>
    <FAQSection/>
    <CTASection/>
    {/* <NewsletterCTA/> */}
   </div>
  );
}
