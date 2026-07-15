import { useEffect, useRef, useState } from 'react';
import heroImg from '../../assets/hero.png';
import useReveal from '../../hooks/useReveal';
import { useLanguage } from '../../context/LanguageContext';

const colors = ['#7f8a6f', '#a6a28f', '#d5d0c2', '#7f8a6f', '#a6a28f', '#d5d0c2'];

const icons = {
    leaf: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
            <path d="M12 22V10" />
        </svg>
    ),
    edu: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
        </svg>
    ),
    brief: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
    ),
    project: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14,2 14,8 20,8" />
        </svg>
    ),
    pub: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
        </svg>
    ),
    contact: (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
        </svg>
    ),
};

const tabIcons = [icons.leaf, icons.edu, icons.brief, icons.project, icons.pub, icons.contact];


const contentIcons = {
    research: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.2-3.2" />
            <path d="M8 11h6M11 8v6" />
        </svg>
    ),
    teaching: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </svg>
    ),
    consulting: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
        </svg>
    ),
    collaboration: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="3" />
            <circle cx="16" cy="8" r="3" />
            <path d="M2.5 20c.6-4 2.6-6 5.5-6s4.9 2 5.5 6M10.5 20c.5-3.4 2.3-5.2 5.5-5.2s5 1.8 5.5 5.2" />
        </svg>
    ),
    project: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
            <path d="M14 3v6h6M8 14h8M8 18h5" />
        </svg>
    ),
    impact: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 20h18" />
            <path d="m5 16 4-5 4 3 6-8" />
            <path d="M16 6h3v3" />
        </svg>
    ),
    sustainability: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V10" />
            <path d="M12 15c-5 0-8-3-8-8 5 0 8 3 8 8Z" />
            <path d="M12 12c5 0 8-3 8-8-5 0-8 3-8 8Z" />
        </svg>
    ),
};

function getHighlightIcon(pageIndex, item, itemIndex) {
    const normalized = item.toLowerCase();

    if (pageIndex === 2) {
        if (normalized.includes('investig')) return contentIcons.research;
        if (normalized.includes('docen') || normalized.includes('académ')) return contentIcons.teaching;
        if (normalized.includes('consult') || normalized.includes('asesor')) return contentIcons.consulting;
        if (normalized.includes('equipo') || normalized.includes('colabor')) return contentIcons.collaboration;

        return [contentIcons.research, contentIcons.teaching, contentIcons.consulting, contentIcons.collaboration][itemIndex % 4];
    }

    if (pageIndex === 3) {
        if (normalized.includes('sosten') || normalized.includes('agroec')) return contentIcons.sustainability;
        if (normalized.includes('impact') || normalized.includes('resultado')) return contentIcons.impact;
        return contentIcons.project;
    }

    return contentIcons.sustainability;
}

const projectCatalog = [
    {
        id: 'agroecologia-territorial',
        title: 'Agroecología y desarrollo territorial',
        category: 'Investigación aplicada',
        description:
            'Proyecto orientado al diseño de estrategias agroecológicas para fortalecer sistemas productivos locales, mejorar la resiliencia territorial y vincular conocimiento académico con prácticas de campo.',
        location: 'Territorios rurales y comunidades agrícolas',
        period: '2022 — Actualidad',
        role: 'Investigadora y coordinadora técnica',
        results: ['Diagnóstico participativo', 'Diseño de estrategias sostenibles', 'Transferencia de conocimiento'],
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1400&q=85',
        ],
    },
    {
        id: 'ganaderia-ecologica',
        title: 'Ganadería ecológica y bienestar animal',
        category: 'Producción sostenible',
        description:
            'Evaluación de prácticas ganaderas de bajo impacto, integrando criterios de bienestar animal, manejo eficiente de recursos y adaptación de los sistemas productivos a escenarios de cambio climático.',
        location: 'Predios ganaderos y centros experimentales',
        period: '2021 — 2024',
        role: 'Especialista agroecológica',
        results: ['Protocolos de manejo', 'Indicadores de bienestar', 'Recomendaciones productivas'],
        images: [
            'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1545468258-576dbac5faa9?auto=format&fit=crop&w=1400&q=85',
        ],
    },
    {
        id: 'biodiversidad-productiva',
        title: 'Biodiversidad en sistemas productivos',
        category: 'Conservación y territorio',
        description:
            'Estudio de la biodiversidad funcional presente en paisajes agrícolas y su relación con la productividad, la salud del suelo y la conservación de servicios ecosistémicos.',
        location: 'Paisajes agrícolas mediterráneos',
        period: '2020 — 2023',
        role: 'Investigadora asociada',
        results: ['Monitoreo de biodiversidad', 'Cartografía territorial', 'Buenas prácticas agrícolas'],
        images: [
            'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=1400&q=85',
        ],
    },
    {
        id: 'transferencia-rural',
        title: 'Transferencia y capacitación rural',
        category: 'Vinculación con el medio',
        description:
            'Programa de formación dirigido a agricultores, equipos técnicos y comunidades, enfocado en producción sustentable, gestión territorial y adopción de herramientas agroecológicas.',
        location: 'Comunidades y organizaciones rurales',
        period: '2019 — Actualidad',
        role: 'Docente y asesora',
        results: ['Talleres participativos', 'Material educativo', 'Acompañamiento técnico'],
        images: [
            'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=85',
            'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1400&q=85',
        ],
    },
];

function ProjectCarousel({ projects, activeColor }) {
    const [projectIndex, setProjectIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const project = projects[projectIndex];

    function selectProject(index) {
        setProjectIndex(index);
        setImageIndex(0);
    }

    function previousProject() {
        const previousIndex =
            projectIndex === 0
                ? projects.length - 1
                : projectIndex - 1;

        selectProject(previousIndex);
    }

    function nextProject() {
        const nextIndex =
            projectIndex === projects.length - 1
                ? 0
                : projectIndex + 1;

        selectProject(nextIndex);
    }

    function previousImage() {
        setImageIndex((currentIndex) =>
            currentIndex === 0 ? project.images.length - 1 : currentIndex - 1
        );
    }

    function nextImage() {
        setImageIndex((currentIndex) =>
            currentIndex === project.images.length - 1 ? 0 : currentIndex + 1
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '18px',
            }}
        >
            <article
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '34px 12px 34px 12px',
                    background: 'rgba(255,255,255,0.48)',
                    border: `1px solid ${activeColor}38`,
                    boxShadow: '0 18px 36px rgba(42,51,38,0.13)',
                    backdropFilter: 'blur(7px)',
                    WebkitBackdropFilter: 'blur(7px)',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        height: '190px',
                        overflow: 'hidden',
                        background: '#d5d0c2',
                    }}
                >
                    <img
                        src={project.images[imageIndex]}
                        alt={`${project.title} — imagen ${imageIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'opacity 0.25s ease',
                        }}
                    />

                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(180deg, rgba(28,38,26,0.04), rgba(28,38,26,0.58))',
                        }}
                    />

                    <span
                        style={{
                            position: 'absolute',
                            top: '14px',
                            left: '14px',
                            padding: '7px 11px',
                            borderRadius: '999px',
                            background: 'rgba(249,249,243,0.88)',
                            color: '#44503f',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '9px',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            backdropFilter: 'blur(7px)',
                        }}
                    >
                        {project.category}
                    </span>

                    <div
                        style={{
                            position: 'absolute',
                            right: '12px',
                            bottom: '12px',
                            display: 'flex',
                            gap: '8px',
                        }}
                    >
                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Ver imagen anterior del proyecto"
                            style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.42)',
                                background: 'rgba(36,45,32,0.54)',
                                color: '#fff',
                                cursor: 'pointer',
                                fontSize: '18px',
                                lineHeight: 1,
                                backdropFilter: 'blur(6px)',
                            }}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Ver siguiente imagen del proyecto"
                            style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.42)',
                                background: 'rgba(36,45,32,0.54)',
                                color: '#fff',
                                cursor: 'pointer',
                                fontSize: '18px',
                                lineHeight: 1,
                                backdropFilter: 'blur(6px)',
                            }}
                        >
                            ›
                        </button>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            left: '14px',
                            bottom: '14px',
                            display: 'flex',
                            gap: '5px',
                        }}
                    >
                        {project.images.map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                onClick={() => setImageIndex(index)}
                                aria-label={`Ver imagen ${index + 1}`}
                                style={{
                                    width: index === imageIndex ? '22px' : '7px',
                                    height: '7px',
                                    padding: 0,
                                    border: 0,
                                    borderRadius: '999px',
                                    background:
                                        index === imageIndex
                                            ? '#f8f8f2'
                                            : 'rgba(248,248,242,0.48)',
                                    cursor: 'pointer',
                                    transition: 'width 0.2s ease',
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div style={{ padding: '17px 18px 18px' }}>
                    <h3
                        style={{
                            margin: '0 0 8px',
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '22px',
                            lineHeight: '1.16',
                            color: '#2e352b',
                        }}
                    >
                        {project.title}
                    </h3>

                    <p
                        style={{
                            margin: '0 0 13px',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '11.5px',
                            lineHeight: '1.62',
                            color: '#505b4b',
                        }}
                    >
                        {project.description}
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                            gap: '8px',
                            marginBottom: '13px',
                        }}
                    >
                        <div
                            style={{
                                padding: '9px 10px',
                                borderRadius: '14px 5px 14px 5px',
                                background: `${activeColor}12`,
                            }}
                        >
                            <span
                                style={{
                                    display: 'block',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '8px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#777f70',
                                    marginBottom: '3px',
                                }}
                            >
                                Periodo
                            </span>
                            <strong
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '10px',
                                    color: '#414b3d',
                                }}
                            >
                                {project.period}
                            </strong>
                        </div>

                        <div
                            style={{
                                padding: '9px 10px',
                                borderRadius: '5px 14px 5px 14px',
                                background: `${activeColor}12`,
                            }}
                        >
                            <span
                                style={{
                                    display: 'block',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '8px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#777f70',
                                    marginBottom: '3px',
                                }}
                            >
                                Rol
                            </span>
                            <strong
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '10px',
                                    color: '#414b3d',
                                }}
                            >
                                {project.role}
                            </strong>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                        }}
                    >
                        {project.results.map((result) => (
                            <span
                                key={result}
                                style={{
                                    padding: '6px 8px',
                                    borderRadius: '999px',
                                    background: 'rgba(127,138,111,0.12)',
                                    border: '1px solid rgba(127,138,111,0.18)',
                                    color: '#505b4b',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '9px',
                                }}
                            >
                                {result}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '42px 1fr 42px',
                    alignItems: 'center',
                    gap: '9px',
                }}
            >
                <button
                    type="button"
                    onClick={previousProject}
                    aria-label="Ver proyecto anterior"
                    style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '16px 6px 16px 6px',
                        border: `1px solid ${activeColor}35`,
                        background: 'rgba(255,255,255,0.52)',
                        color: '#45503f',
                        cursor: 'pointer',
                        fontSize: '22px',
                        boxShadow: '0 7px 16px rgba(42,51,38,0.08)',
                    }}
                >
                    ‹
                </button>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '7px',
                    }}
                >
                    {projects.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => selectProject(index)}
                            aria-label={`Abrir proyecto ${item.title}`}
                            style={{
                                width: index === projectIndex ? '30px' : '8px',
                                height: '8px',
                                padding: 0,
                                border: 0,
                                borderRadius: '999px',
                                background:
                                    index === projectIndex
                                        ? activeColor
                                        : `${activeColor}45`,
                                cursor: 'pointer',
                                transition: 'width 0.22s ease',
                            }}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={nextProject}
                    aria-label="Ver siguiente proyecto"
                    style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '6px 16px 6px 16px',
                        border: `1px solid ${activeColor}35`,
                        background: 'rgba(255,255,255,0.52)',
                        color: '#45503f',
                        cursor: 'pointer',
                        fontSize: '22px',
                        boxShadow: '0 7px 16px rgba(42,51,38,0.08)',
                    }}
                >
                    ›
                </button>
            </div>

            <p
                style={{
                    margin: 0,
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#737b6e',
                }}
            >
                Proyecto {projectIndex + 1} de {projects.length}
            </p>
        </div>
    );
}


function BotanicalSprig({ color = '#8f957f', mirrored = false, scale = 1, style = {} }) {
    return (
        <svg
            width={scale > 1 ? '120' : '90'}
            height={scale > 1 ? '120' : '90'}
            viewBox="0 0 120 120"
            fill="none"
            style={{ transform: `${mirrored ? 'scaleX(-1)' : 'none'} scale(${scale})`, transformOrigin: 'center', ...style }}
            aria-hidden="true"
        >
            <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" opacity="0.72">
                <path d="M18 102C26 84 39 63 56 39C64 29 75 20 89 12" />
                <path d="M45 80c-9-2-18-9-25-20" />
                <path d="M54 63c-10-3-18-10-24-21" />
                <path d="M67 47c-10-3-18-10-24-21" />
                <path d="M82 31c-8-3-15-8-20-15" />
                <path d="M34 90c8-6 15-10 23-12" />
                <path d="M58 60c6 8 13 13 21 16" />
                <path d="M79 37c6 7 13 12 21 15" />
            </g>
            <g fill={color} opacity="0.34">
                <path d="M36 84c7-11 18-17 28-18-3 11-10 20-20 26-6-1-10-3-8-8z" />
                <path d="M58 57c8-10 19-15 31-15-3 11-10 20-21 27-6-1-10-4-10-12z" />
                <path d="M74 35c6-8 15-12 25-13-2 9-7 16-16 22-5-1-9-4-9-9z" />
            </g>
            <g fill={color} opacity="0.55">
                <circle cx="42" cy="79" r="2.8" />
                <circle cx="64" cy="53" r="2.8" />
                <circle cx="83" cy="33" r="2.8" />
            </g>
        </svg>
    );
}

function BotanicalFlower({ color = '#aaa899', style = {} }) {
    return (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" style={style} aria-hidden="true">
            <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" opacity="0.84">
                <path d="M35 60c0-8 0-16 0-24" />
                <path d="M35 36c-7-3-13-8-16-15" />
                <path d="M35 36c7-3 13-8 16-15" />
                <path d="M35 40c-8 2-15 7-20 14" />
                <path d="M35 40c8 2 15 7 20 14" />
            </g>
            <g fill={color} opacity="0.4">
                <path d="M35 20c5 0 9 4 9 9 0 7-6 12-9 14-3-2-9-7-9-14 0-5 4-9 9-9z" />
                <path d="M35 24c4 0 7 3 7 7 0 5-4 9-7 11-3-2-7-6-7-11 0-4 3-7 7-7z" />
            </g>
            <circle cx="35" cy="35" r="3.4" fill={color} opacity="0.58" />
        </svg>
    );
}

function BookPageImage() {
    return (
        <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', height: '100%', minHeight: '200px', background: 'linear-gradient(180deg, #dfe1d1, #c1c5b5 48%, #a6ab97 100%)', boxShadow: '0 14px 28px rgba(31,46,34,0.16)' }}>
            <img src={heroImg} alt="Paisaje agrícola" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(249,247,241,0.10), rgba(28,40,26,0.18))' }} />
            <div style={{ position: 'absolute', right: '10px', bottom: '10px', opacity: 0.18 }}>
                <BotanicalFlower color="#8f957f" />
            </div>
        </div>
    );
}

export default function Hero() {
    const { copy } = useLanguage();
    const bookRef = useReveal();
    const tabsRef = useReveal({ threshold: 0.2 });
    const [activePage, setActivePage] = useState(0);
    const [displayedPage, setDisplayedPage] = useState(0);
    const [previousPage, setPreviousPage] = useState(0);
    const [targetPage, setTargetPage] = useState(0);
    const [flipLayerDirection, setFlipLayerDirection] = useState('next');
    const [flipLayerActive, setFlipLayerActive] = useState(false);
    const [flipKey, setFlipKey] = useState(0);
    const raf1 = useRef(null);
    const raf2 = useRef(null);

    useEffect(() => {
        return () => {
            if (raf1.current) cancelAnimationFrame(raf1.current);
            if (raf2.current) cancelAnimationFrame(raf2.current);
        };
    }, []);

    const current = copy.hero.pages[displayedPage];
    const activeColor = colors[displayedPage];

    function handlePageChange(nextIndex) {
        if (nextIndex === activePage) return;

        setPreviousPage(activePage);
        setTargetPage(nextIndex);
        setFlipLayerDirection(nextIndex > activePage ? 'next' : 'prev');
        setFlipLayerActive(false);
        setFlipKey((value) => value + 1);
        setActivePage(nextIndex);

        raf1.current = requestAnimationFrame(() => {
            raf2.current = requestAnimationFrame(() => setFlipLayerActive(true));
        });
    }

    return (
        <section id="inicio" style={{ minHeight: '100vh', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 32px', position: 'relative' }}>
            <div className="float-slow" style={{ position: 'absolute', top: '20px', right: '80px', opacity: 0.3, pointerEvents: 'none' }}>
                <BotanicalSprig color="#8f957f" mirrored scale={1.1} />
            </div>
            <div className="float-slow" style={{ position: 'absolute', bottom: '60px', left: '20px', opacity: 0.24, pointerEvents: 'none', transform: 'rotate(-20deg)', animationDelay: '2s' }}>
                <BotanicalSprig color="#aaa899" scale={0.9} />
            </div>

            <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, maxWidth: '920px', width: '100%' }}>
                <div className="book-stage" style={{ flex: 1 }}>
                    <div
                        ref={bookRef}
                        className="reveal book-shell"
                        style={{
                            display: 'flex',
                            borderRadius: '30px',
                            overflow: 'visible',
                            boxShadow: '0 30px 70px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.10)',
                            border: '10px solid #8f957f',
                            minHeight: '500px',
                            background: 'transparent',
                            position: 'relative'
                        }}
                    >
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-48px', top: '-34px', opacity: 0.58 }}>
                            <BotanicalSprig color="#8f957f" mirrored scale={1.18} />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-22px', top: '96px', opacity: 0.42, transform: 'rotate(-12deg)' }}>
                            <BotanicalFlower color="#cccdbf" />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', right: '-50px', top: '-28px', opacity: 0.5, transform: 'scaleX(-1)' }}>
                            <BotanicalSprig color="#aaa899" scale={1.14} />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', right: '-24px', top: '102px', opacity: 0.4, transform: 'rotate(8deg) scaleX(-1)' }}>
                            <BotanicalFlower color="#8f957f" />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-48px', bottom: '-34px', opacity: 0.5, transform: 'rotate(180deg)' }}>
                            <BotanicalSprig color="#aaa899" scale={1.1} />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '26px', bottom: '-26px', opacity: 0.34, transform: 'rotate(12deg)' }}>
                            <BotanicalSprig color="#cccdbf" scale={0.92} />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', right: '-48px', bottom: '-34px', opacity: 0.5, transform: 'rotate(180deg) scaleX(-1)' }}>
                            <BotanicalSprig color="#8f957f" scale={1.1} />
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', right: '28px', bottom: '-26px', opacity: 0.34, transform: 'rotate(180deg) scaleX(-1)' }}>
                            <BotanicalSprig color="#cccdbf" scale={0.92} />
                        </div>

                        <div className={`book-page-shadow ${flipLayerDirection === 'next' ? 'book-page-shadow-next' : 'book-page-shadow-prev'} ${flipLayerActive ? 'book-page-shadow-active' : ''}`} aria-hidden="true" />
                        <div className={`book-spine-press ${flipLayerActive ? 'book-spine-press-active' : ''}`} aria-hidden="true" />

                        <div
                            key={flipKey}
                            className={`book-flip-layer ${flipLayerDirection === 'next' ? 'book-flip-layer-next' : 'book-flip-layer-prev'} ${flipLayerActive ? 'book-flip-layer-active' : ''}`}
                            aria-hidden="true"
                            onAnimationEnd={() => {
                                setDisplayedPage(targetPage);
                                setFlipLayerActive(false);
                            }}
                        >
                            <div className="book-flip-curvature" />
                            <div className="book-flip-face book-flip-face-front">
                                <span className="book-flip-label" style={{ color: colors[previousPage] }}>{copy.hero.pages[previousPage].label}</span>
                                <p className="book-flip-mini">{copy.hero.pages[previousPage].subtitle}</p>
                                <div className="book-flip-line" style={{ background: `linear-gradient(90deg, ${colors[previousPage]}, #aaa899)` }} />
                            </div>
                            <div className="book-flip-face book-flip-face-back">
                                <span className="book-flip-label" style={{ color: colors[targetPage] }}>{copy.hero.pages[targetPage].label}</span>
                                <p className="book-flip-mini">{copy.hero.pages[targetPage].subtitle}</p>
                                <div className="book-flip-line" style={{ background: `linear-gradient(90deg, ${colors[targetPage]}, #aaa899)` }} />
                            </div>
                            <div className="book-flip-edge" />
                        </div>

                        <div style={{ flex: '0 0 52%', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', padding: '40px 36px 34px 40px', display: 'flex', flexDirection: 'column', position: 'relative', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>
                            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 100% 0%, rgba(143,149,127,0.18), transparent 32%), radial-gradient(circle at 16% 14%, rgba(170,168,153,0.16), transparent 26%), radial-gradient(circle at 58% 88%, rgba(143,149,127,0.12), transparent 30%)', pointerEvents: 'none' }} />
                            <div aria-hidden="true" style={{ position: 'absolute', top: '8px', right: '6px', opacity: 0.28 }}>
                                <BotanicalSprig color="#8f957f" mirrored scale={0.75} />
                            </div>
                            <div aria-hidden="true" style={{ position: 'absolute', top: '70px', left: '-6px', opacity: 0.24, transform: 'rotate(-12deg)' }}>
                                <BotanicalFlower color="#aaa899" />
                            </div>
                            <div aria-hidden="true" style={{ position: 'absolute', bottom: '10px', left: '10px', opacity: 0.22, transform: 'rotate(180deg)' }}>
                                <BotanicalFlower color="#aaa899" />
                            </div>
                            <div aria-hidden="true" style={{ position: 'absolute', right: '-10px', top: '42%', opacity: 0.26, transform: 'scaleX(-1)' }}>
                                <BotanicalSprig color="#cccdbf" scale={0.72} />
                            </div>
                            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.2em', fontWeight: '600', color: activeColor, textTransform: 'uppercase', marginBottom: '10px' }}>{current.label}</span>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: activePage === 0 ? '50px' : '42px', fontWeight: '700', lineHeight: '1.08', color: '#2e3028', marginBottom: '12px', textAlign: activePage === 0 ? 'center' : 'left' }}>
                                {activePage === 0 ? (
                                    copy.hero.title
                                ) : (
                                    <>
                                        {current.title[0]}
                                        <br />
                                        {current.title[1]}
                                    </>
                                )}
                            </h1>

                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.18em', fontWeight: '600', color: '#6f7463', textTransform: 'uppercase', marginBottom: '8px' }}>{current.subtitle}</p>

                            <div style={{ width: '52px', height: '2.5px', background: `linear-gradient(90deg, ${activeColor}, #aaa899)`, borderRadius: '2px', marginBottom: '20px' }} />

                            {activePage === 0 ? (
                                <div style={{ display: 'grid', gap: '14px', marginBottom: '20px' }}>
                                    <BookPageImage />
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '1.7', color: '#4a5344' }}>{copy.hero.intro}</p>
                                </div>
                            ) : activePage === 3 ? (
                                <ProjectCarousel projects={projectCatalog} activeColor={activeColor} />
                            ) : (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '11px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {current.highlights.map((item, itemIndex) => (
                                        <div
                                            key={item}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '11px',
                                                padding: '10px 12px',
                                                borderRadius: '18px 8px 18px 8px',
                                                background: 'rgba(255,255,255,0.34)',
                                                border: `1px solid ${activeColor}30`,
                                                boxShadow: '0 7px 16px rgba(49,57,43,0.07)',
                                                backdropFilter: 'blur(4px)',
                                                WebkitBackdropFilter: 'blur(4px)',
                                            }}
                                        >
                                            <span
                                                aria-hidden="true"
                                                style={{
                                                    width: '34px',
                                                    height: '34px',
                                                    borderRadius: '50%',
                                                    background: `linear-gradient(145deg, ${activeColor}, #6f7863)`,
                                                    color: '#fff',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    boxShadow: `0 7px 14px ${activeColor}35`,
                                                }}
                                            >
                                                {getHighlightIcon(activePage, item, itemIndex)}
                                            </span>

                                            <p
                                                style={{
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontSize: '12px',
                                                    lineHeight: '1.55',
                                                    color: '#3f493c',
                                                    margin: 0,
                                                }}
                                            >
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p style={{ fontFamily: 'Dancing Script, cursive', fontSize: '17px', color: '#6f7463', lineHeight: '1.5', marginTop: 'auto' }}>{current.tagline}</p>

                            <div style={{ position: 'absolute', bottom: '18px', right: '12px', opacity: 0.18 }}>
                                <BotanicalFlower color="#8f957f" />
                            </div>

                            <div style={{ position: 'absolute', right: 0, top: '10%', height: '80%', width: '1px', background: 'linear-gradient(180deg, transparent, rgba(143,149,127,0.22) 20%, rgba(143,149,127,0.22) 80%, transparent)' }} />
                        </div>

                        <div style={{ flex: '0 0 48%', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #a9ada1 0%, #8f957f 100%)', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                            <img src={heroImg} alt="Paisaje agrícola" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(143,149,127,0.22) 0%, rgba(170,168,153,0.06) 60%, rgba(143,149,127,0.16) 100%)' }} />

                            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 16% 14%, rgba(255,255,255,0.18), transparent 44%), radial-gradient(circle at 82% 16%, rgba(255,255,255,0.12), transparent 36%), linear-gradient(180deg, rgba(250,255,246,0.03), rgba(17,22,16,0.16))' }} />
                                <div style={{ position: 'absolute', inset: 0, opacity: 0.34 }}>
                                    <BotanicalSprig color="#cccdbf" mirrored scale={1.25} style={{ position: 'absolute', top: '10%', left: '-18px' }} />
                                    <BotanicalSprig color="#aaa899" scale={1.16} style={{ position: 'absolute', top: '16%', right: '-20px' }} />
                                    <BotanicalFlower color="#8f957f" style={{ position: 'absolute', bottom: '16%', left: '12%' }} />
                                    <BotanicalFlower color="#cccdbf" style={{ position: 'absolute', top: '20%', right: '14%' }} />
                                    <BotanicalSprig color="#cccdbf" scale={0.9} style={{ position: 'absolute', left: '20%', bottom: '-14px', transform: 'rotate(-8deg)' }} />
                                    <BotanicalSprig color="#8f957f" mirrored scale={0.92} style={{ position: 'absolute', right: '20%', top: '-12px', transform: 'rotate(8deg)' }} />
                                    <BotanicalSprig color="#d5d0c2" scale={0.8} style={{ position: 'absolute', left: '8%', top: '52%', transform: 'rotate(-6deg)' }} />
                                    <BotanicalFlower color="#d5d0c2" style={{ position: 'absolute', right: '8%', bottom: '22%', transform: 'scale(0.85)' }} />
                                </div>
                                <div className="float-slow" style={{ position: 'absolute', left: '0', right: '0', bottom: '0', opacity: 0.42, animationDelay: '0.7s' }}>
                                    <svg width="100%" height="132" viewBox="0 0 520 132" preserveAspectRatio="none" fill="none">
                                        <path d="M0 102C46 90 88 83 134 85C180 87 216 99 262 102C306 105 344 94 389 86C435 78 474 80 520 91V132H0V102Z" fill="rgba(143,149,127,0.32)" />
                                        <path d="M42 103C42 103 44 78 42 58" stroke="rgba(250,250,244,0.58)" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M42 67C51 61 59 53 65 44" stroke="rgba(250,250,244,0.52)" strokeWidth="1.3" strokeLinecap="round" />
                                        <path d="M126 97C126 97 127 73 126 47" stroke="rgba(250,250,244,0.62)" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M126 58C136 50 146 40 154 29" stroke="rgba(250,250,244,0.56)" strokeWidth="1.35" strokeLinecap="round" />
                                        <path d="M214 104C214 104 214 80 214 60" stroke="rgba(250,250,244,0.58)" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M214 71C223 64 231 57 238 49" stroke="rgba(250,250,244,0.51)" strokeWidth="1.3" strokeLinecap="round" />
                                        <path d="M302 106C302 106 303 79 302 51" stroke="rgba(250,250,244,0.62)" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M302 62C313 53 323 43 331 31" stroke="rgba(250,250,244,0.56)" strokeWidth="1.35" strokeLinecap="round" />
                                        <path d="M390 99C390 99 390 76 390 58" stroke="rgba(250,250,244,0.58)" strokeWidth="1.6" strokeLinecap="round" />
                                        <path d="M390 67C399 60 407 53 413 46" stroke="rgba(250,250,244,0.51)" strokeWidth="1.3" strokeLinecap="round" />
                                        <path d="M476 95C476 95 477 70 476 43" stroke="rgba(250,250,244,0.62)" strokeWidth="1.7" strokeLinecap="round" />
                                        <path d="M476 54C486 46 495 36 503 26" stroke="rgba(250,250,244,0.56)" strokeWidth="1.35" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            <div style={{ position: 'relative', zIndex: 1, padding: '34px 30px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '64px', lineHeight: '0.6', color: 'rgba(248,248,241,0.88)', marginBottom: '8px', display: 'block' }}>"</span>
                                    <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '15px', lineHeight: '1.65', color: 'rgba(248,248,241,0.99)', maxWidth: '230px' }}>{current.quote}</p>
                                </div>

                                <div style={{ background: 'rgba(127,138,111,0.26)', border: '1px solid rgba(248,248,241,0.24)', borderRadius: '20px', padding: '14px 14px 10px', backdropFilter: 'blur(6px)' }}>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(248,248,241,0.9)', marginBottom: '8px' }}>Datos relevantes</p>
                                    {current.facts.map((fact) => (
                                        <p key={fact} style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(248,248,241,1)', marginBottom: '5px', lineHeight: '1.35' }}>• {fact}</p>
                                    ))}
                                </div>

                                <div aria-hidden="true" style={{ position: 'absolute', right: '-2px', top: '34%', opacity: 0.24 }}>
                                    <BotanicalFlower color="#cccdbf" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={tabsRef} className="reveal-right reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '-6px', justifyContent: 'center', zIndex: 4 }}>
                    {copy.hero.pages.map((tab, i) => (
                        <button
                            key={tab.label}
                            aria-label={`Ir a página ${tab.label}`}
                            onClick={() => handlePageChange(i)}
                            style={{
                                width: i === activePage ? '62px' : '56px',
                                height: i === activePage ? '62px' : '56px',
                                borderRadius: '999px',
                                background: colors[i],
                                border: i === activePage ? '1px solid rgba(255,255,255,0.32)' : '1px solid rgba(20,34,25,0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                opacity: i === activePage ? 1 : 0.88,
                                transform: i === activePage ? 'translateX(10px) scale(1.03)' : 'translateX(0)',
                                boxShadow: i === activePage
                                    ? `0 0 0 2px rgba(255,255,255,0.22), 0 0 0 6px ${colors[i]}35, 0 12px 22px rgba(20,34,25,0.3), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.22)`
                                    : '0 7px 14px rgba(20,34,25,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.18)',
                                filter: i === activePage ? 'none' : 'saturate(0.78) brightness(0.92)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'opacity 0.2s, transform 0.2s, width 0.2s, box-shadow 0.2s, border 0.2s, filter 0.2s',
                            }}
                            onMouseEnter={(event) => {
                                if (i !== activePage) {
                                    event.currentTarget.style.opacity = '1';
                                    event.currentTarget.style.transform = 'translateX(3px)';
                                    event.currentTarget.style.filter = 'saturate(0.92) brightness(0.98)';
                                }
                            }}
                            onMouseLeave={(event) => {
                                if (i !== activePage) {
                                    event.currentTarget.style.opacity = '0.88';
                                    event.currentTarget.style.transform = 'translateX(0)';
                                    event.currentTarget.style.filter = 'saturate(0.78) brightness(0.92)';
                                }
                            }}
                        >
                            <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0) 40%, rgba(0,0,0,0.12))' }} />
                            <span style={{ position: 'relative', zIndex: 1, width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22)' }}>{tabIcons[i] || icons.leaf}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}