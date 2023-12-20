import EarlyAccess from "./components/EarlyAccess";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <article>
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </article>
  );
}
