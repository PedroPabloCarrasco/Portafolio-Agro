import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import SectionTitle from '../common/SectionTitle';

const publications = [
    {
        type: 'Artículo',
        color: '#2d4a35',
        year: '2024',
        title: 'Agroecological transition pathways in peri-urban systems: lessons from southern Spain',
        authors: 'Barrera Salas, C., Guzmán Casado, G., Sánchez-Hernández, R.',
        journal: 'Agroecology and Sustainable Food Systems',
        details: 'Vol. 48(3), pp. 312–338. DOI: 10.1080/21683565.2024.001234',
        doi: 'https://doi.org/',
        indexed: 'JCR Q1',
    },
    {
        type: 'Artículo',
        color: '#2d4a35',
        year: '2023',
        title: 'Local food networks and territorial resilience: a comparative study in Andalusia',
        authors: 'Barrera Salas, C., Delgado Cabeza, M.',
        journal: 'Journal of Rural Studies',
        details: 'Vol. 101, pp. 58–72. DOI: 10.1016/j.jrurstud.2023.05.012',
        doi: 'https://doi.org/',
        indexed: 'JCR Q1',
    },
    {
        type: 'Artículo',
        color: '#2d4a35',
        year: '2022',
        title: 'Seed sovereignty and agrobiodiversity governance in smallholder systems',
        authors: 'Barrera Salas, C., Nazarea, V., López García, D.',
        journal: 'Ecology and Society',
        details: 'Vol. 27(4), art. 18. DOI: 10.5751/ES-13542-270418',
        doi: 'https://doi.org/',
        indexed: 'JCR Q1',
    },
    {
        type: 'Artículo',
        color: '#2d4a35',
        year: '2021',
        title: 'Participatory assessment of agroecological sustainability indicators in indigenous communities',
        authors: 'Barrera Salas, C., Altieri, M.A., Nicholls, C.',
        journal: 'International Journal of Agricultural Sustainability',
        details: 'Vol. 19(2), pp. 145–162.',
        doi: 'https://doi.org/',
        indexed: 'JCR Q2',
    },
    {
        type: 'Capítulo',
        color: '#45634B',
        year: '2023',
        title: 'Mercados campesinos y soberanía alimentaria: experiencias en el sur global',
        authors: 'Barrera Salas, C.',
        journal: 'En: Sistemas Alimentarios Sostenibles. Ed. Universitat de Barcelona',
        details: 'Cap. 7, pp. 183–210. ISBN: 978-84-9168-XXX-X',
        doi: null,
        indexed: 'Libro académico',
    },
    {
        type: 'Capítulo',
        color: '#45634B',
        year: '2022',
        title: 'Agroecología y territorio: construyendo autonomía desde los márgenes',
        authors: 'Barrera Salas, C., Cuéllar Padilla, M.',
        journal: 'En: Territorios en Disputa. Perspectivas críticas sobre el desarrollo rural. Ed. Icaria',
        details: 'Cap. 4, pp. 89–124. ISBN: 978-84-9888-XXX-X',
        doi: null,
        indexed: 'Libro académico',
    },
    {
        type: 'Informe',
        color: '#4E8080',
        year: '2022',
        title: 'Diagnóstico participativo de los sistemas agrícolas del Altiplano guatemalteco',
        authors: 'Barrera Salas, C., et al.',
        journal: 'FAO Technical Report. Roma: Organización de las Naciones Unidas para la Alimentación',
        details: '128 pp.',
        doi: null,
        indexed: 'Informe técnico',
    },
    {
        type: 'Tesis',
        color: '#8B6D4D',
        year: '2023',
        title: 'Sistemas agroecológicos periurbanos y redes alimentarias alternativas: análisis multidimensional en el área metropolitana de Granada',
        authors: 'Barrera Salas, C. — Directores: Dr. G. Guzmán Casado y Dra. M. Cuéllar Padilla',
        journal: 'Tesis doctoral. Universidad de Granada. Mención Internacional',
        details: '342 pp. Calificación: Sobresaliente Cum Laude.',
        doi: 'https://digibug.ugr.es/',
        indexed: 'Doctorado',
    },
];

const typeOrder = ['Artículo', 'Capítulo', 'Informe', 'Tesis'];
const typeLabels = { 'Artículo': 'Artículos científicos', 'Capítulo': 'Capítulos de libro', 'Informe': 'Informes técnicos', 'Tesis': 'Tesis doctoral' };

function PubItem({ pub, index }) {
    const ref = useReveal({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className="reveal"
            style={{
                display: 'flex',
                gap: '16px',
                padding: '18px 20px',
                background: 'var(--paper)',
                border: '1px solid rgba(69,99,75,0.1)',
                borderRadius: '12px',
                marginBottom: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.2s, transform 0.2s',
                animationDelay: `${index * 0.08}s`,
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 22px rgba(45,74,53,0.1)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateX(0)'; }}
        >
            {/* Año */}
            <div style={{ flexShrink: 0, width: '44px', textAlign: 'center' }}>
                <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: pub.color,
                    display: 'block',
                    lineHeight: '1',
                    marginTop: '3px',
                }}>{pub.year}</span>
            </div>

            {/* Línea vertical */}
            <div style={{ width: '2px', background: `${pub.color}30`, borderRadius: '2px', flexShrink: 0 }} />

            {/* Contenido */}
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '15px', color: '#1E2E22', lineHeight: '1.4', marginBottom: '6px', flex: 1 }}>
                        {pub.title}
                    </p>
                    {pub.indexed && (
                        <span style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                            fontWeight: '600',
                            color: 'white',
                            background: pub.color,
                            padding: '2px 8px',
                            borderRadius: '10px',
                            flexShrink: 0,
                            height: 'fit-content',
                        }}>{pub.indexed}</span>
                    )}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(45,45,45,0.6)', marginBottom: '3px' }}>{pub.authors}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: pub.color, fontWeight: '500', marginBottom: '3px' }}>{pub.journal}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(45,45,45,0.45)' }}>{pub.details}</p>
                {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noreferrer" style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: pub.color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        Acceder al documento
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Publications() {
    const titleRef = useReveal({ threshold: 0.2 });
    const [activeType, setActiveType] = useState('Artículo');

    const filtered = publications.filter(p => p.type === activeType);

    return (
        <section id="publicaciones" style={{ padding: '80px 48px', background: 'transparent', position: 'relative' }}>
            <div ref={titleRef} className="reveal">
                <SectionTitle
                    title="Publicaciones"
                    subtitle="Artículos científicos, capítulos de libro, informes técnicos y tesis doctoral sobre agroecología, sistemas alimentarios y desarrollo territorial."
                />
            </div>

            {/* Filtros */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
                {typeOrder.map((t) => (
                    <button
                        key={t}
                        onClick={() => setActiveType(t)}
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '12px',
                            fontWeight: '500',
                            padding: '7px 18px',
                            borderRadius: '20px',
                            border: activeType === t ? 'none' : '1px solid rgba(69,99,75,0.25)',
                            background: activeType === t ? 'var(--green)' : 'transparent',
                            color: activeType === t ? 'white' : 'var(--green)',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                        }}
                    >
                        {t === 'Artículo' ? `Artículos (${publications.filter(p => p.type === 'Artículo').length})` :
                            t === 'Capítulo' ? `Capítulos (${publications.filter(p => p.type === 'Capítulo').length})` :
                                t === 'Informe' ? `Informes (${publications.filter(p => p.type === 'Informe').length})` :
                                    'Tesis'}
                    </button>
                ))}
            </div>

            {/* Lista */}
            <div style={{ maxWidth: '860px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#2d4a35', marginBottom: '20px', opacity: 0.7 }}>
                    {typeLabels[activeType]}
                </h3>
                {filtered.map((pub, i) => (
                    <PubItem key={i} pub={pub} index={i} />
                ))}
            </div>
        </section>
    );
}
