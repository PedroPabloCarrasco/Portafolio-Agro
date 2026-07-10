import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import ExploreSection from "../components/hero/ExploreSection";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Publications from "../components/publications/Publications";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <ExploreSection />

            {/* Divisor botánico */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(69,99,75,0.2), transparent)', margin: '0 48px' }} />

            <About />

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(69,99,75,0.2), transparent)', margin: '0 48px' }} />

            <Education />

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(69,99,75,0.2), transparent)', margin: '0 48px' }} />

            <Experience />

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(69,99,75,0.2), transparent)', margin: '0 48px' }} />

            <Projects />

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(69,99,75,0.2), transparent)', margin: '0 48px' }} />

            <Publications />

            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(69,99,75,0.2), transparent)', margin: '0 48px' }} />

            <Contact />

            <Footer />
        </Layout>
    );
}