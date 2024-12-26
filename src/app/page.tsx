import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialCards from "@/components/TestimonialCards";
import Webniers from "@/components/Webiners";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <HeroSection/>
          <FeaturedCourses/>
          <TestimonialCards/>
          <Webniers/>
          <Instructors/>
          <Footer/>
      </main>
  );
}
