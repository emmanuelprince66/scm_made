import Before from "../../_components/Before";
import BeforeFooter from "../../_components/BeforeFooter";
import Footer from "../../_components/Footer";
import Hero from "../../_components/Hero";
import Navbar from "../../_components/Navbar";
import Section from "../../_components/Section";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Navbar />
      <Hero />
      <Section />
      <Before />
      <BeforeFooter />
      <Footer />
    </main>
  );
}
