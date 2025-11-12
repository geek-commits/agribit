import ContentSection from "@/components/content-4";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <Testimonial />
      <Pricing />
      <FooterSection />
    </>
  );
}
