import MainLayout from "@/components/layout/MainLayout";
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/About";
import ProjectPreview from "@/components/sections/Project";
import ContactPreview from "@/components/sections/Contact";

export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <AboutPreview />
      <ProjectPreview />
      <ContactPreview />
    </MainLayout>
  );
}