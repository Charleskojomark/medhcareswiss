import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import PostTreatment from "./components/PostTreatment";
import ConsultationForm from "./components/ConsultationForm";
import Testimonials from "./components/Testimonials";
import LanguageSection from "./components/LanguageSection";
import Specialists from "./components/Specialists";
import EmergencyHotline from "./components/EmergencyHotline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <PostTreatment />
      <ConsultationForm />
      <Testimonials />
      <LanguageSection />
      <Specialists />
      <EmergencyHotline />
      <Contact />
      <Footer />
    </main>
  );
}
