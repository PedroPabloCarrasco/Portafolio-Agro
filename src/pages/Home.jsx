import Layout from '../components/layout/Layout';

import Hero from '../components/hero/Hero';
import ExploreSection from '../components/hero/ExploreSection';

import About from '../components/about/About';
import Education from '../components/education/Education';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Publications from '../components/publications/Publications';
import Contact from '../components/contact/Contact';

import Footer from '../components/layout/Footer';

function SectionDivider() {
    return (
        <div
            aria-hidden="true"
            style={{
                padding: '0 clamp(20px, 3vw, 48px)',
            }}
        >
            <div
                style={{
                    height: '1px',

                    background:
                        'linear-gradient(' +
                        '90deg,' +
                        'transparent,' +
                        'rgba(73, 99, 77, 0.14),' +
                        'rgba(145, 166, 122, 0.22),' +
                        'rgba(73, 99, 77, 0.14),' +
                        'transparent' +
                        ')',

                    borderRadius: '999px',
                }}
            />
        </div>
    );
}

export default function Home() {
    return (
        <Layout>
            {/* Hero principal */}
            <Hero />

            {/* Navegación visual / explorar trabajo */}
            <ExploreSection />

            <SectionDivider />

            {/* Sobre mí */}
            <About />

            <SectionDivider />

            {/* Formación académica */}
            <Education />

            <SectionDivider />

            {/* Experiencia profesional */}
            <Experience />

            <SectionDivider />

            {/* Proyectos */}
            <Projects />

            <SectionDivider />

            {/* Publicaciones */}
            <Publications />

            <SectionDivider />

            {/* Contacto */}
            <Contact />

            {/* Pie de página */}
            <Footer />
        </Layout>
    );
}