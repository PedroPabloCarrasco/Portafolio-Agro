import useReveal from '../../hooks/useReveal';
import SectionTitle from '../common/SectionTitle';

const experiences = [
    {
        role: 'Investigadora Postdoctoral',
        org: 'Instituto de Sociología y Estudios Campesinos – Universidad de Córdoba',
        location: 'Córdoba, España',
        period: '2023 – Actualidad',
        type: 'Investigación',
        color: '#2d4a35',
        tasks: [
            'Coordinación de proyectos de investigación en agroecología y desarrollo territorial.',
            'Dirección de trabajos de fin de máster y colaboración con redes internacionales.',
            'Publicación de artículos científicos en revistas indexadas JCR.',
            'Transferencia de conocimiento con comunidades rurales en Andalucía.',
        ],
    },
    {
        role: 'Consultora en Agroecología y Desarrollo Rural',
        org: 'FAO – Organización de las Naciones Unidas para la Alimentación',
        location: 'Roma, Italia / trabajo remoto',
        period: '2021 – 2023',
        type: 'Consultoría',
        color: '#45634B',
        tasks: [
            'Diseño de metodologías participativas para diagnóstico de sistemas alimentarios locales.',
            'Elaboración de informes técnicos sobre transición agroecológica en el sur global.',
            'Facilitación de talleres con agricultores en Guatemala, Senegal y Etiopía.',
            'Asesoramiento en políticas de soberanía alimentaria para gobiernos nacionales.',
        ],
    },
    {
        role: 'Técnica de Cooperación Internacional',
        org: 'Agencia Española de Cooperación Internacional para el Desarrollo (AECID)',
        location: 'Madrid, España / Guatemala',
        period: '2018 – 2021',
        type: 'Cooperación',
        color: '#4E8080',
        tasks: [
            'Gestión de proyectos de seguridad alimentaria en comunidades indígenas mayas.',
            'Implementación de sistemas agroforestales y huertos comunitarios.',
            'Formación a técnicos locales en agricultura ecológica y manejo de semillas.',
            'Elaboración de materiales de divulgación en español y lenguas indígenas.',
        ],
    },
    {
        role: 'Investigadora en Formación (FPU)',
        org: 'Universidad de Granada – Grupo de investigación GAIA',
        location: 'Granada, España',
        period: '2015 – 2018',
        type: 'Investigación',
        color: '#7A8C5C',
        tasks: [
            'Trabajo de campo en fincas agroecológicas del cinturón periurbano de Granada.',
            'Análisis de sistemas de comercialización alternativa (mercados de proximidad, CSA).',
            'Diseño y aplicación de encuestas y entrevistas a agricultores y consumidores.',
            'Participación en congresos nacionales e internacionales de agroecología.',
        ],
    },
];

function ExperienceCard({ item, index }) {
    const ref = useReveal({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className="reveal"
            style={{ display: 'flex', gap: '0', marginBottom: '28px', animationDelay: `${index * 0.12}s` }}
        >
            <div style={{ width: '4px', borderRadius: '4px 0 0 4px', background: item.color, flexShrink: 0 }} />
            <div
                style={{
                    flex: 1,
                    background: 'var(--paper)',
                    border: '1px solid rgba(69,99,75,0.1)',
                    borderLeft: 'none',
                    borderRadius: '0 14px 14px 0',
                    padding: '24px 28px',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(45,74,53,0.1)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                    <div>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', background: item.color, padding: '3px 10px', borderRadius: '20px', marginBottom: '8px', display: 'inline-block' }}>{item.type}</span>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '19px', color: '#1E2E22', lineHeight: '1.3', marginTop: '6px' }}>{item.role}</h3>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: item.color, fontWeight: '500', marginTop: '3px' }}>{item.org}</p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(45,45,45,0.5)', marginTop: '2px' }}>📍 {item.location}</p>
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30`, padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap', height: 'fit-content', marginTop: '4px' }}>{item.period}</span>
                </div>
                <ul style={{ paddingLeft: '18px', marginTop: '14px' }}>
                    {item.tasks.map((t, i) => (
                        <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(45,45,45,0.7)', lineHeight: '1.7', marginBottom: '6px' }}>{t}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Experience() {
    const titleRef = useReveal({ threshold: 0.2 });
    return (
        <section id="experiencia" style={{ padding: '80px 48px', background: 'transparent', position: 'relative' }}>
            <div ref={titleRef} className="reveal">
                <SectionTitle
                    title="Experiencia profesional"
                    subtitle="Más de diez años combinando investigación, cooperación y consultoría en agroecología y desarrollo territorial."
                />
            </div>
            <div style={{ maxWidth: '860px' }}>
                {experiences.map((item, i) => (
                    <ExperienceCard key={i} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}
