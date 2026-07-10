import useReveal from '../../hooks/useReveal';
import SectionTitle from '../common/SectionTitle';

const projects = [
    {
        title: 'AgroRed Sur – Redes alimentarias alternativas en Andalucía',
        period: '2023 – 2025',
        role: 'Investigadora Principal',
        funder: 'Junta de Andalucía – Plan Andaluz de Investigación',
        tags: ['Sistemas alimentarios', 'Mercados locales', 'Participación social'],
        desc: 'Análisis de las redes de comercialización alternativa en zonas periurbanas andaluzas. El proyecto estudia cómo los mercados de productores, grupos de consumo y CSA (Community Supported Agriculture) contribuyen a la resiliencia territorial y la soberanía alimentaria.',
        color: '#2d4a35',
        icon: '🌱',
    },
    {
        title: 'TerritoriViu – Diagnóstico agroecológico del Altiplano guatemalteco',
        period: '2021 – 2023',
        role: 'Consultora principal / Diseño metodológico',
        funder: 'FAO – Trust Fund UNJP/GUA',
        tags: ['Cooperación internacional', 'Diagnóstico participativo', 'Guatemala'],
        desc: 'Evaluación participativa de los sistemas agrícolas de 24 comunidades indígenas Q\'eqchi\' en Alta Verapaz. Se desarrollaron indicadores locales de sostenibilidad agroecológica y se propusieron rutas de transición con enfoque de género.',
        color: '#45634B',
        icon: '🗺️',
    },
    {
        title: 'SemillasVivas – Conservación de la agrobiodiversidad en la Sierra Nevada',
        period: '2019 – 2022',
        role: 'Co-investigadora / Responsable de trabajo de campo',
        funder: 'Ministerio de Ciencia e Innovación – Proyecto I+D',
        tags: ['Semillas locales', 'Agrobiodiversidad', 'Sierra Nevada'],
        desc: 'Inventario y caracterización de variedades locales de cereales, leguminosas y hortalizas en el área de influencia del Parque Nacional de Sierra Nevada. Se estableció un banco de semillas comunitario en colaboración con agricultores custodios.',
        color: '#5C7A50',
        icon: '🌾',
    },
    {
        title: 'PastoreoVivo – Sistemas ganaderos extensivos y paisaje',
        period: '2018 – 2020',
        role: 'Investigadora colaboradora',
        funder: 'INIA – Instituto Nacional de Investigación Agraria',
        tags: ['Ganadería extensiva', 'Paisaje', 'Patrimonio cultural'],
        desc: 'Estudio del papel del pastoreo extensivo en el mantenimiento de la diversidad florística y la estructura del paisaje en dehesas y pastizales mediterráneos. Se elaboró un protocolo de evaluación para políticas de la PAC.',
        color: '#4E8080',
        icon: '🐑',
    },
    {
        title: 'HuertoEscuela – Educación agroecológica en centros educativos',
        period: '2016 – 2019',
        role: 'Diseño curricular y formación docente',
        funder: 'Consejería de Educación – Junta de Andalucía',
        tags: ['Educación ambiental', 'Huertos escolares', 'Infancia'],
        desc: 'Programa de introducción de huertos agroecológicos en 18 centros de primaria de Granada capital. Se desarrollaron materiales didácticos, se formó al profesorado y se evaluó el impacto en hábitos alimentarios del alumnado.',
        color: '#8B6D4D',
        icon: '🏫',
    },
    {
        title: 'África Verde – Agroforestería para la seguridad alimentaria en el Sahel',
        period: '2021 – 2022',
        role: 'Experta técnica (misiones de campo)',
        funder: 'Unión Europea – DeSIRA Initiative',
        tags: ['África subsahariana', 'Agroforestería', 'Seguridad alimentaria'],
        desc: 'Misiones de asistencia técnica en Senegal y Burkina Faso para la implementación de sistemas agroforestales de parkland en contextos de cambio climático. Trabajo con comunidades rurales y organizaciones de mujeres agricultoras.',
        color: '#6E7F8C',
        icon: '🌍',
    },
];

function ProjectCard({ item, index }) {
    const ref = useReveal({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className="reveal-scale"
            style={{ animationDelay: `${(index % 3) * 0.12}s` }}
        >
            <div
                style={{
                    background: 'var(--paper)',
                    border: '1px solid rgba(69,99,75,0.12)',
                    borderTop: `3px solid ${item.color}`,
                    borderRadius: '14px',
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.25s, transform 0.25s',
                    cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 35px rgba(45,74,53,0.13)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
                {/* Cabecera */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px', lineHeight: 1 }}>{item.icon}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30`, padding: '3px 10px', borderRadius: '20px' }}>{item.period}</span>
                </div>

                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#1E2E22', lineHeight: '1.4', marginBottom: '6px', flex: 0 }}>
                    {item.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: item.color, fontWeight: '600', marginBottom: '4px' }}>{item.role}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(45,45,45,0.45)', marginBottom: '14px' }}>{item.funder}</p>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(45,45,45,0.68)', lineHeight: '1.7', flex: 1, marginBottom: '16px' }}>
                    {item.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.tags.map((t) => (
                        <span key={t} style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                            padding: '3px 9px',
                            borderRadius: '20px',
                            background: `${item.color}12`,
                            border: `1px solid ${item.color}28`,
                            color: item.color,
                        }}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const titleRef = useReveal({ threshold: 0.2 });
    return (
        <section id="proyectos" style={{ padding: '80px 48px', background: 'transparent', position: 'relative' }}>
            <div ref={titleRef} className="reveal">
                <SectionTitle
                    title="Proyectos"
                    subtitle="Iniciativas de investigación, cooperación y desarrollo en agroecología, biodiversidad y sistemas alimentarios sostenibles."
                />
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
                maxWidth: '1100px',
            }}>
                {projects.map((item, i) => (
                    <ProjectCard key={i} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}
