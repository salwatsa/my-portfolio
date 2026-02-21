import About from "../components/About";
import Certificates from "../components/Certificates";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Works from "../components/Works";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 xl:px-0 py-2 md:px-12 xl:py-0">
      <div className="xl:flex xl:justify-between xl:gap-4">
        {/* Left Side - Sticky */}
        <Header />

        {/* Right Side - Scrollable */}
        <main className="xl:pt-24 xl:w-3/5 xl:py-16">
          <section id="about" className="mb-32 scroll-mt-24">
            <About />
          </section>
          <section id="experience" className="mb-32 scroll-mt-24">
            <Works />
          </section>
          <section id="projects" className="mb-32 scroll-mt-24">
            <Projects />
          </section>
          <section id="certificates" className="mb-32 scroll-mt-24">
            <Certificates />
          </section>
        </main>
      </div>
    </div>
  );
}
