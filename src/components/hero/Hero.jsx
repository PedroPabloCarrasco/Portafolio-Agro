import { useEffect, useRef, useState } from 'react';
import heroImg from '../../assets/hero.png';
import useReveal from '../../hooks/useReveal';

const icons = {
    leaf: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
            <path d="M12 22V10" />
        </svg>
    ),
    edu: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
        </svg>
    ),
    brief: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
    ),
    project: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14,2 14,8 20,8" />
        </svg>
    ),
    pub: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
        </svg>
    ),
    contact: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
        </svg>
    ),
};

const bookPages = [
    {
        tab: 'Perfil',
        color: '#5C7A50',
        icon: icons.leaf,
        leftTitle: ['Claudia', 'Barrera Salas'],
        leftSubtitle: 'Ingeniera Agrónoma',
        leftTagline: 'Ciencia, naturaleza y territorio para un futuro sostenible.',
        leftHighlights: [
            'Máster en Agricultura y Ganadería Ecológica (UPO, España).',
            'Doctora en Territorio, Patrimonio y Medio Ambiente (UGR).',
            'Especialista en agroecología aplicada y sistemas alimentarios locales.',
        ],
        quote: 'La agroecología no es solo una ciencia, es una forma de cuidar la vida y el territorio.',
        rightFacts: ['10+ años de experiencia', '6 proyectos internacionales', '4 líneas de investigación activas'],
        overlay: 'linear-gradient(135deg, rgba(30,46,34,0.58) 0%, rgba(30,46,34,0.25) 60%, rgba(30,46,34,0.45) 100%)',
    },
    {
        tab: 'Formación',
        color: '#7A8C5C',
        icon: icons.edu,
        leftTitle: ['Formación', 'Académica'],
        leftSubtitle: 'Trayectoria universitaria y especialización',
        leftTagline: 'Formación sólida para diseñar soluciones agrícolas con base científica.',
        leftHighlights: [
            'Doctorado con Mención Internacional en Agroecología (UGR).',
            'Máster oficial en Agricultura y Ganadería Ecológica (UPO).',
            'Ingeniería Agronómica con enfoque en medio natural.',
        ],
        quote: 'La ciencia tiene sentido cuando se traduce en soluciones reales para quienes trabajan la tierra.',
        rightFacts: ['4 titulaciones clave', '2 universidades españolas', '1 curso internacional (CATIE)'],
        overlay: 'linear-gradient(135deg, rgba(58,70,38,0.62) 0%, rgba(58,70,38,0.26) 60%, rgba(58,70,38,0.45) 100%)',
    },
    {
        tab: 'Experiencia',
        color: '#A07050',
        icon: icons.brief,
        leftTitle: ['Experiencia', 'Profesional'],
        leftSubtitle: 'Investigación, consultoría y cooperación',
        leftTagline: 'Conectar academia y territorio para generar impacto medible.',
        leftHighlights: [
            'Investigadora postdoctoral en agroecología y territorio.',
            'Consultora para organismos internacionales (FAO).',
            'Coordinación de proyectos con equipos interdisciplinares.',
        ],
        quote: 'El impacto ocurre cuando el conocimiento científico dialoga con la experiencia campesina.',
        rightFacts: ['15+ iniciativas acompañadas', '3 continentes de trabajo', '100+ actores locales vinculados'],
        overlay: 'linear-gradient(135deg, rgba(91,58,35,0.64) 0%, rgba(91,58,35,0.26) 60%, rgba(91,58,35,0.45) 100%)',
    },
    {
        tab: 'Proyectos',
        color: '#4E8080',
        icon: icons.project,
        leftTitle: ['Proyectos', 'Estratégicos'],
        leftSubtitle: 'Agroecología territorial y soberanía alimentaria',
        leftTagline: 'De la idea al campo: proyectos con enfoque territorial y participación social.',
        leftHighlights: [
            'Diseño de redes alimentarias alternativas en Andalucía.',
            'Diagnósticos participativos en comunidades rurales de Guatemala.',
            'Conservación de semillas locales y biodiversidad cultivada.',
        ],
        quote: 'Cada proyecto debe fortalecer el ecosistema, la comunidad y la economía local al mismo tiempo.',
        rightFacts: ['6 proyectos destacados', '24 comunidades involucradas', '3 metodologías transferibles'],
        overlay: 'linear-gradient(135deg, rgba(32,74,74,0.62) 0%, rgba(32,74,74,0.25) 60%, rgba(32,74,74,0.45) 100%)',
    },
    {
        tab: 'Publicaciones',
        color: '#6E7F8C',
        icon: icons.pub,
        leftTitle: ['Publicaciones', 'Científicas'],
        leftSubtitle: 'Producción académica con enfoque aplicado',
        leftTagline: 'Publicar para transferir conocimiento y mejorar prácticas reales.',
        leftHighlights: [
            'Artículos indexados sobre transición agroecológica y resiliencia.',
            'Capítulos de libro en sistemas alimentarios sostenibles.',
            'Informes técnicos para políticas públicas y cooperación.',
        ],
        quote: 'La investigación útil es la que puede ser leída, discutida y aplicada en el territorio.',
        rightFacts: ['8 publicaciones clave', 'Revistas JCR Q1/Q2', '1 tesis doctoral publicada'],
        overlay: 'linear-gradient(135deg, rgba(49,61,72,0.64) 0%, rgba(49,61,72,0.24) 60%, rgba(49,61,72,0.45) 100%)',
    },
    {
        tab: 'Contacto',
        color: '#7A9070',
        icon: icons.contact,
        leftTitle: ['Colaboración', '& Contacto'],
        leftSubtitle: 'Investigación aplicada y consultoría agroecológica',
        leftTagline: 'Las mejores ideas nacen cuando conectamos disciplinas, comunidades y territorio.',
        leftHighlights: [
            'Consultoría para proyectos de transición agroecológica.',
            'Diseño metodológico de investigación participativa.',
            'Formación técnica para equipos e instituciones.',
        ],
        quote: 'Toda colaboración comienza con una conversación honesta sobre el territorio y sus necesidades.',
        rightFacts: ['Email académico activo', 'Disponibilidad para alianzas', 'Respuesta en 48 horas'],
        overlay: 'linear-gradient(135deg, rgba(52,72,48,0.62) 0%, rgba(52,72,48,0.24) 60%, rgba(52,72,48,0.45) 100%)',
    },
];

export default function Hero() {
    const bookRef = useReveal();
    const tabsRef = useReveal({ threshold: 0.2 });
    const [activePage, setActivePage] = useState(0);
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

    const current = bookPages[activePage];

    function handlePageChange(nextIndex) {
        if (nextIndex === activePage) return;

        setPreviousPage(activePage);
        setTargetPage(nextIndex);
        setFlipLayerDirection(nextIndex > activePage ? 'next' : 'prev');
        setFlipLayerActive(false);
        setFlipKey(k => k + 1);
        setActivePage(nextIndex);

        raf1.current = requestAnimationFrame(() => {
            raf2.current = requestAnimationFrame(() => setFlipLayerActive(true));
        });
    }

    return (
        <section
            id="inicio"
            style={{
                minHeight: '100vh',
                background: 'var(--bg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 32px',
                position: 'relative',
            }}
        >
            <div className="float-slow" style={{ position: 'absolute', top: '20px', right: '80px', opacity: 0.3, pointerEvents: 'none' }}>
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                    <path d="M30 75C30 75 5 55 5 35C5 20 15 5 30 5C45 5 55 20 55 35C55 55 30 75 30 75Z" fill="#5C7A50" opacity="0.6" />
                    <path d="M30 75V20" stroke="#3d5e3f" strokeWidth="1.5" />
                </svg>
            </div>
            <div className="float-slow" style={{ position: 'absolute', bottom: '60px', left: '20px', opacity: 0.25, pointerEvents: 'none', transform: 'rotate(-20deg)', animationDelay: '2s' }}>
                <svg width="50" height="65" viewBox="0 0 60 80" fill="none">
                    <path d="M30 75C30 75 5 55 5 35C5 20 15 5 30 5C45 5 55 20 55 35C55 55 30 75 30 75Z" fill="#5C7A50" />
                    <path d="M30 75V20" stroke="#3d5e3f" strokeWidth="1.5" />
                </svg>
            </div>

            <div style={{ display: 'flex', alignItems: 'stretch', gap: '0', maxWidth: '920px', width: '100%' }}>
                <div className="book-stage" style={{ flex: 1 }}>
                    <div
                        ref={bookRef}
                        className="reveal book-shell"
                        style={{
                            display: 'flex',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 70px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.12)',
                            border: '8px solid #1E2E22',
                            minHeight: '500px',
                            background: '#FDFAF4',
                        }}
                    >
                        <div
                            className={`book-page-shadow ${flipLayerDirection === 'next' ? 'book-page-shadow-next' : 'book-page-shadow-prev'} ${flipLayerActive ? 'book-page-shadow-active' : ''}`}
                            aria-hidden="true"
                        />

                        <div
                            className={`book-spine-press ${flipLayerActive ? 'book-spine-press-active' : ''}`}
                            aria-hidden="true"
                        />

                        <div
                            key={flipKey}
                            className={`book-flip-layer ${flipLayerDirection === 'next' ? 'book-flip-layer-next' : 'book-flip-layer-prev'} ${flipLayerActive ? 'book-flip-layer-active' : ''}`}
                            aria-hidden="true"
                            onAnimationEnd={() => setFlipLayerActive(false)}
                        >
                            <div className="book-flip-curvature" />
                            <div className="book-flip-face book-flip-face-front">
                                <span className="book-flip-label" style={{ color: bookPages[previousPage].color }}>{bookPages[previousPage].tab}</span>
                                <p className="book-flip-mini">{bookPages[previousPage].leftSubtitle}</p>
                                <div className="book-flip-line" style={{ background: `linear-gradient(90deg, ${bookPages[previousPage].color}, #8B6D4D)` }} />
                            </div>
                            <div className="book-flip-face book-flip-face-back">
                                <span className="book-flip-label" style={{ color: bookPages[targetPage].color }}>{bookPages[targetPage].tab}</span>
                                <p className="book-flip-mini">{bookPages[targetPage].leftSubtitle}</p>
                                <div className="book-flip-line" style={{ background: `linear-gradient(90deg, ${bookPages[targetPage].color}, #8B6D4D)` }} />
                            </div>
                            <div className="book-flip-edge" />
                        </div>

                        <div
                            style={{
                                flex: '0 0 52%',
                                background: '#FDFAF4',
                                padding: '40px 36px 34px 40px',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                            }}
                        >
                            <span style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '10px',
                                letterSpacing: '0.2em',
                                fontWeight: '600',
                                color: current.color,
                                textTransform: 'uppercase',
                                marginBottom: '10px',
                            }}>
                                {current.tab}
                            </span>

                            <h1 style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: activePage === 0 ? '50px' : '42px',
                                fontWeight: '700',
                                lineHeight: '1.08',
                                color: '#1E2E22',
                                marginBottom: '12px',
                            }}>
                                {current.leftTitle[0]}<br />{current.leftTitle[1]}
                            </h1>

                            <p style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '11px',
                                letterSpacing: '0.18em',
                                fontWeight: '600',
                                color: '#45634B',
                                textTransform: 'uppercase',
                                marginBottom: '8px',
                            }}>
                                {current.leftSubtitle}
                            </p>

                            <div style={{ width: '52px', height: '2.5px', background: `linear-gradient(90deg, ${current.color}, #8B6D4D)`, borderRadius: '2px', marginBottom: '20px' }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                                {current.leftHighlights.map((item) => (
                                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                        <span style={{
                                            width: '7px',
                                            height: '7px',
                                            borderRadius: '50%',
                                            background: current.color,
                                            marginTop: '6px',
                                            flexShrink: 0,
                                        }} />
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '1.55', color: '#38533d' }}>{item}</p>
                                    </div>
                                ))}
                            </div>

                            <p style={{
                                fontFamily: 'Dancing Script, cursive',
                                fontSize: '17px',
                                color: '#45634B',
                                lineHeight: '1.5',
                                marginTop: 'auto',
                            }}>
                                {current.leftTagline}
                            </p>

                            <div style={{ position: 'absolute', bottom: '22px', right: '16px', opacity: 0.16 }}>
                                <svg width="38" height="55" viewBox="0 0 60 80" fill="none">
                                    <path d="M30 75C30 75 5 55 5 35C5 20 15 5 30 5C45 5 55 20 55 35C55 55 30 75 30 75Z" fill={current.color} />
                                    <path d="M30 75V20" stroke="#2d4a35" strokeWidth="1.5" />
                                </svg>
                            </div>

                            <div
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '10%',
                                    height: '80%',
                                    width: '1px',
                                    background: 'linear-gradient(180deg, transparent, rgba(69,99,75,0.2) 20%, rgba(69,99,75,0.2) 80%, transparent)',
                                }}
                            />
                        </div>

                        <div
                            style={{
                                flex: '0 0 48%',
                                position: 'relative',
                                overflow: 'hidden',
                                background: '#2d4a35',
                            }}
                        >
                            <img
                                src={heroImg}
                                alt="Paisaje agrícola"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: current.overlay }} />

                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    padding: '34px 30px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div>
                                    <span style={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontSize: '64px',
                                        lineHeight: '0.6',
                                        color: 'rgba(255,255,255,0.68)',
                                        marginBottom: '8px',
                                        display: 'block',
                                    }}>"</span>
                                    <p style={{
                                        fontFamily: 'Playfair Display, serif',
                                        fontStyle: 'italic',
                                        fontSize: '15px',
                                        lineHeight: '1.65',
                                        color: 'rgba(255,255,255,0.92)',
                                        maxWidth: '230px',
                                    }}>
                                        {current.quote}
                                    </p>
                                </div>

                                <div style={{
                                    background: 'rgba(0,0,0,0.18)',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '10px',
                                    padding: '14px 14px 10px',
                                }}>
                                    <p style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '10px',
                                        letterSpacing: '0.14em',
                                        textTransform: 'uppercase',
                                        color: 'rgba(255,255,255,0.72)',
                                        marginBottom: '8px',
                                    }}>Datos relevantes</p>
                                    {current.rightFacts.map((fact) => (
                                        <p key={fact} style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'white', marginBottom: '5px', lineHeight: '1.35' }}>
                                            • {fact}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={tabsRef}
                    className="reveal-right reveal-delay-2"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        marginLeft: '10px',
                        justifyContent: 'center',
                    }}
                >
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.08em',
                        color: 'rgba(45,45,45,0.55)',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginBottom: '4px',
                    }}>
                        {activePage + 1}/{bookPages.length}
                    </span>
                    {bookPages.map((tab, i) => (
                        <button
                            key={tab.tab}
                            aria-label={`Ir a página ${tab.tab}`}
                            onClick={() => handlePageChange(i)}
                            style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '8px',
                                background: tab.color,
                                border: i === activePage ? '2px solid rgba(255,255,255,0.9)' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                opacity: i === activePage ? 1 : 0.82,
                                transform: i === activePage ? 'scale(1.06)' : 'scale(1)',
                                transition: 'opacity 0.2s, transform 0.2s, border 0.2s',
                            }}
                            onMouseEnter={e => {
                                if (i !== activePage) {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.08)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (i !== activePage) {
                                    e.currentTarget.style.opacity = '0.82';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                            }}
                        >
                            {tab.icon}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}