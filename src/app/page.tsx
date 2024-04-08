import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/faq";
import Video from "@/components/Video";
import { Metadata } from "next";
import FaqSection from "@/components/faq";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Pricing />
      <Video />
      <Brands />
      {/* <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials /> 
      <Blog /> */}
      <FaqSection></FaqSection>
      <Contact />
    </>
  );
}
