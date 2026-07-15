import { useEffect, useRef, useState } from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { projectItems } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

function ArrowIcon({ direction = 'right' }) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function ProjectMotif({ shape }) {
    if (shape === 'research') {
        return (
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
                <circle cx="45" cy="45" r="23" stroke="currentColor" strokeWidth="2" />
                <path d="m62 62 25 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <circle cx="39" cy="39" r="4" fill="currentColor" />
                <circle cx="52" cy="36" r="3" fill="currentColor" />
                <circle cx="50" cy="51" r="3.5" fill="currentColor" />
            </svg>
        );
    }

    if (shape === 'cooperation') {
        return (
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
                <circle cx="36" cy="40" r="16" stroke="currentColor" strokeWidth="2" />
                <circle cx="74" cy="40" r="16" stroke="currentColor" strokeWidth="2" />
                <path d="M47 48c5 6 11 8 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M23 87c3-17 13-25 29-25s26 8 30 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }

    return (
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
            <path d="M55 94V47" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M55 62C35 61 24 50 24 29c20 0 31 11 31 33Z" stroke="currentColor" strokeWidth="2" />
            <path d="M55 51c20 0 31-11 31-31-20 0-31 11-31 31Z" stroke="currentColor" strokeWidth="2" />
            <path d="M34 82c7-7 14-10 21-10 8 0 15 3 22 10" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    );
}

// ESTILO DE SECCIÓN DE PROYECTOS - ESTILO HOJAS
function getProjectShape(shape) {
    const shapes = {
        research: {
            cardClip:
                'polygon(0 8%, 12% 0, 92% 0, 100% 10%, 100% 88%, 88% 100%, 10% 100%, 0 90%)',

            imageClip:
                'polygon(0 0, 100% 0, 100% 82%, 82% 100%, 12% 94%, 0 78%)',

            contentClip:
                'polygon(0 0, 14% 6%, 88% 0, 100% 12%, 100% 100%, 0 100%)',

            accent: '50%',
        },

        cooperation: {
            cardClip:
                'polygon(8% 0, 92% 0, 100% 12%, 94% 42%, 100% 88%, 88% 100%, 12% 100%, 0 88%, 6% 54%, 0 12%)',

            imageClip:
                'polygon(0 0, 100% 0, 94% 72%, 100% 100%, 54% 94%, 48% 100%, 0 88%)',

            contentClip:
                'polygon(0 10%, 14% 0, 48% 6%, 54% 0, 100% 12%, 100% 100%, 0 100%)',

            accent:
                '22px 58px 22px 58px',
        },

        seed: {
            cardClip:
                'polygon(50% 0, 76% 5%, 94% 22%, 100% 50%, 94% 78%, 76% 95%, 50% 100%, 24% 95%, 6% 78%, 0 50%, 6% 22%, 24% 5%)',

            imageClip:
                'polygon(50% 0, 82% 7%, 100% 28%, 96% 70%, 70% 100%, 28% 94%, 4% 72%, 0 30%, 18% 8%)',

            contentClip:
                'polygon(8% 0, 48% 6%, 88% 0, 100% 20%, 94% 82%, 76% 100%, 24% 100%, 6% 82%, 0 22%)',

            accent:
                '72% 28% 66% 34% / 72% 38% 62% 28%',
        },
    };

    return (
        shapes[shape] ||
        shapes.research
    );
}

function Carousel({ gallery, title }) {
    const [active, setActive] = useState(0);

    if (!gallery?.length) return null;

    const current = gallery[active];

    return (
        <div style={{ display: 'grid', gap: '12px' }}>
            <div
                style={{
                    position: 'relative',
                    minHeight: '360px',
                    borderRadius: '30px 12px 30px 12px',
                    overflow: 'hidden',
                    background: '#f7f3ea',
                    border: '1px solid rgba(73,99,77,0.14)',
                    boxShadow: '0 18px 34px rgba(49,52,42,0.08)',
                }}
            >
                <img
                    src={current.image}
                    alt={current.title}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: current.focal || 'center',
                    }}
                />

                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(23,31,23,0.04), rgba(23,31,23,0.64))',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        padding: '22px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)' }}>
                            {title}
                        </p>
                        <span style={{ padding: '8px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.14)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', backdropFilter: 'blur(10px)' }}>
                            {active + 1} / {gallery.length}
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                        <div style={{ maxWidth: '44ch' }}>
                            <p style={{ margin: 0, fontFamily: 'Playfair Display, serif', fontSize: '1.65rem', color: '#fff' }}>
                                {current.title}
                            </p>
                            {current.description && (
                                <p style={{ margin: '8px 0 0', fontFamily: 'Inter, sans-serif', fontSize: '0.92rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                                    {current.description}
                                </p>
                            )}
                        </div>

                        {gallery.length > 1 && (
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button type="button" onClick={() => setActive((value) => (value - 1 + gallery.length) % gallery.length)} style={navButtonStyle()} aria-label="Imagen anterior">
                                    ‹
                                </button>
                                <button type="button" onClick={() => setActive((value) => (value + 1) % gallery.length)} style={navButtonStyle()} aria-label="Imagen siguiente">
                                    ›
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {gallery.length > 1 && (
                <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: `repeat(${Math.min(gallery.length, 3)}, minmax(0, 1fr))` }}>
                    {gallery.map((slide, index) => (
                        <button
                            key={`${slide.title}-${index}`}
                            type="button"
                            onClick={() => setActive(index)}
                            style={{
                                border: index === active ? '1px solid rgba(73,99,77,0.34)' : '1px solid rgba(73,99,77,0.08)',
                                background: index === active ? 'rgba(73,99,77,0.10)' : 'rgba(255,255,255,0.82)',
                                borderRadius: index % 2 === 0 ? '18px 7px 18px 7px' : '7px 18px 7px 18px',
                                padding: '8px',
                                cursor: 'pointer',
                                overflow: 'hidden',
                            }}
                        >
                            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '80px' }}>
                                <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: slide.focal || 'center' }} />
                                <span style={{ position: 'absolute', left: '8px', bottom: '8px', padding: '5px 8px', borderRadius: '999px', background: 'rgba(255,255,255,0.16)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', backdropFilter: 'blur(8px)' }}>
                                    Foto {index + 1}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function navButtonStyle() {
    return {
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.28)',
        background: 'rgba(32,42,29,0.46)',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '1.5rem',
        lineHeight: 1,
        backdropFilter: 'blur(8px)',
    };
}

function ProjectDialog({ project, open, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    if (!project) return null;

    return (
        <dialog
            ref={dialogRef}
            onClick={(event) => {
                if (event.target === dialogRef.current) onClose();
            }}
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onClose={onClose}
            style={{
                width: 'min(1050px, calc(100vw - 32px))',
                maxHeight: 'calc(100vh - 32px)',
                padding: 0,
                border: 'none',
                borderRadius: '36px 14px 36px 14px',
                background: '#f9f8f3',
                color: 'var(--ink)',
                overflowY: 'auto',
                boxShadow: '0 30px 90px rgba(22,30,20,0.36)',
            }}
        >
            <div style={{ position: 'relative', padding: '30px' }}>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar proyecto"
                    style={{
                        position: 'sticky',
                        top: 0,
                        marginLeft: 'auto',
                        zIndex: 20,
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: '1px solid rgba(73,99,77,0.14)',
                        background: 'rgba(255,255,255,0.92)',
                        color: 'var(--ink)',
                        display: 'grid',
                        placeItems: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 8px 20px rgba(49,52,42,0.12)',
                    }}
                >
                    <CloseIcon />
                </button>

                <div style={{ marginTop: '-28px', marginBottom: '26px', paddingRight: '60px' }}>
                    <span style={{ display: 'inline-flex', marginBottom: '12px', padding: '7px 11px', borderRadius: '999px', background: 'rgba(73,99,77,0.08)', color: 'var(--green)', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        {project.category}
                    </span>
                    <h2 style={{ margin: 0, fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05, color: 'var(--ink)' }}>
                        {project.title}
                    </h2>
                    <p style={{ margin: '10px 0 0', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'var(--green)', fontWeight: 600 }}>
                        {project.subtitle}
                    </p>
                </div>

                <Carousel gallery={project.gallery} title={project.category} />

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(260px, 0.6fr)', gap: '24px', marginTop: '28px' }}>
                    <div style={{ padding: '24px', borderRadius: '28px 10px 28px 10px', background: 'rgba(255,255,255,0.68)', border: '1px solid rgba(73,99,77,0.10)' }}>
                        <p style={sectionLabelStyle}>Descripción del proyecto</p>
                        <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: '0.96rem', lineHeight: 1.85, color: 'var(--muted)' }}>
                            {project.description || project.summary}
                        </p>
                    </div>

                    <div style={{ padding: '24px', borderRadius: '10px 28px 10px 28px', background: 'rgba(73,99,77,0.06)', border: '1px solid rgba(73,99,77,0.10)' }}>
                        <p style={sectionLabelStyle}>Información</p>
                        <ul style={{ paddingLeft: '18px', margin: 0 }}>
                            {project.info.map((info) => (
                                <li key={info} style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)' }}>
                                    {info}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '22px', padding: '24px', borderRadius: '30px 12px 30px 12px', background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(73,99,77,0.10)' }}>
                    <p style={sectionLabelStyle}>Resultados principales</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {project.results.map((result) => (
                            <span key={result} style={{ padding: '9px 12px', borderRadius: '999px', background: 'rgba(73,99,77,0.08)', border: '1px solid rgba(73,99,77,0.1)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
                                {result}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </dialog>
    );
}

const sectionLabelStyle = {
    margin: '0 0 12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--green)',
};

function ProjectCard({ item, onOpen }) {
    const cover = item.gallery?.[0];
    const shape = getProjectShape(item.shape);

    return (
        <Card
            style={{
                position: 'relative',
                padding: 0,
                overflow: 'hidden',

                clipPath: shape.cardClip,
                WebkitClipPath: shape.cardClip,

                borderRadius: 0,

                cursor: 'pointer',
                minHeight: '100%',

                background: 'rgba(249,248,243,0.92)',

                border: '1px solid rgba(73,99,77,0.13)',

                boxShadow:
                    '0 18px 38px rgba(42,51,38,0.12)',

                transition:
                    'transform 0.28s ease, box-shadow 0.28s ease',
            }}
        >
            <button
                type="button"
                onClick={() => onOpen(item)}
                aria-label={`Ver proyecto ${item.title}`}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
                onMouseEnter={(event) => {
                    const card =
                        event.currentTarget.parentElement;

                    if (!card) return;

                    card.style.transform =
                        'translateY(-9px) rotate(-0.35deg)';

                    card.style.boxShadow =
                        '0 28px 52px rgba(42,51,38,0.18)';
                }}
                onMouseLeave={(event) => {
                    const card =
                        event.currentTarget.parentElement;

                    if (!card) return;

                    card.style.transform =
                        'translateY(0) rotate(0)';

                    card.style.boxShadow =
                        '0 18px 38px rgba(42,51,38,0.12)';
                }}
            >
                {/* IMAGEN DEL PROYECTO */}

                <div
                    style={{
                        position: 'relative',
                        height: '280px',
                        overflow: 'hidden',

                        clipPath: shape.imageClip,
                        WebkitClipPath: shape.imageClip,
                    }}
                >
                    {cover && (
                        <img
                            src={cover.image}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',

                                objectPosition:
                                    cover.focal || 'center',

                                display: 'block',

                                transition:
                                    'transform 0.45s ease',
                            }}
                        />
                    )}

                    {/* CAPA OSCURA */}

                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,

                            background:
                                'linear-gradient(180deg, rgba(23,31,23,0.03) 22%, rgba(23,31,23,0.72) 100%)',
                        }}
                    />

                    {/* MOTIVO DECORATIVO */}

                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',

                            top: '-24px',
                            right: '-18px',

                            width: '132px',
                            height: '132px',

                            borderRadius: shape.accent,

                            background:
                                'rgba(248,248,241,0.12)',

                            border:
                                '1px solid rgba(248,248,241,0.22)',

                            color:
                                'rgba(248,248,241,0.38)',

                            display: 'grid',
                            placeItems: 'center',

                            transform:
                                item.shape === 'seed'
                                    ? 'rotate(12deg)'
                                    : item.shape ===
                                        'cooperation'
                                        ? 'rotate(-8deg)'
                                        : 'rotate(4deg)',
                        }}
                    >
                        <ProjectMotif
                            shape={item.shape}
                        />
                    </div>

                    {/* CATEGORÍA */}

                    <span
                        style={{
                            position: 'absolute',

                            top: '18px',
                            left: '18px',

                            padding: '8px 12px',

                            borderRadius:
                                item.shape === 'seed'
                                    ? '16px 999px 999px 16px'
                                    : item.shape ===
                                        'cooperation'
                                        ? '999px 16px 999px 16px'
                                        : '999px',

                            background:
                                'rgba(255,255,255,0.9)',

                            color: 'var(--green)',

                            fontFamily:
                                'Inter, sans-serif',

                            fontSize: '0.7rem',

                            fontWeight: 700,

                            letterSpacing: '0.12em',

                            textTransform: 'uppercase',

                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        {item.category}
                    </span>

                    {/* TÍTULO SOBRE LA IMAGEN */}

                    <div
                        style={{
                            position: 'absolute',

                            left: '22px',
                            right: '22px',
                            bottom: '22px',

                            color: '#fff',
                        }}
                    >
                        <h3
                            style={{
                                margin: 0,

                                fontFamily:
                                    'Playfair Display, serif',

                                fontSize: '2rem',

                                lineHeight: 1.08,
                            }}
                        >
                            {item.title}
                        </h3>

                        <p
                            style={{
                                margin: '7px 0 0',

                                fontFamily:
                                    'Inter, sans-serif',

                                fontSize: '0.86rem',

                                lineHeight: 1.5,

                                color:
                                    'rgba(255,255,255,0.88)',
                            }}
                        >
                            {item.subtitle}
                        </p>
                    </div>
                </div>

                {/* INFORMACIÓN INFERIOR */}

                <div
                    style={{
                        position: 'relative',

                        minHeight: '190px',

                        padding: '34px 24px 26px',

                        clipPath: shape.contentClip,
                        WebkitClipPath:
                            shape.contentClip,

                        background:
                            item.shape === 'research'
                                ? 'radial-gradient(circle at 100% 100%, rgba(73,99,77,0.09), transparent 34%), rgba(249,248,243,0.96)'
                                : item.shape ===
                                    'cooperation'
                                    ? 'radial-gradient(circle at 0% 100%, rgba(166,162,143,0.12), transparent 34%), rgba(249,248,243,0.96)'
                                    : 'radial-gradient(circle at 100% 0%, rgba(127,138,111,0.13), transparent 38%), rgba(249,248,243,0.96)',
                    }}
                >
                    {/* MOTIVO INFERIOR */}

                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',

                            right: '8px',
                            bottom: '0',

                            color:
                                'rgba(73,99,77,0.08)',

                            transform: 'scale(0.65)',

                            transformOrigin:
                                'bottom right',
                        }}
                    >
                        <ProjectMotif
                            shape={item.shape}
                        />
                    </div>

                    {/* RESUMEN */}

                    <p
                        style={{
                            position: 'relative',

                            zIndex: 1,

                            margin: '0 0 18px',

                            fontFamily:
                                'Inter, sans-serif',

                            fontSize: '0.94rem',

                            lineHeight: 1.75,

                            color: 'var(--muted)',
                        }}
                    >
                        {item.summary}
                    </p>

                    {/* ENLACE */}

                    <span
                        style={{
                            position: 'relative',

                            zIndex: 1,

                            display: 'inline-flex',

                            alignItems: 'center',

                            gap: '8px',

                            color: 'var(--green)',

                            fontFamily:
                                'Inter, sans-serif',

                            fontSize: '0.76rem',

                            fontWeight: 700,

                            letterSpacing: '0.12em',

                            textTransform: 'uppercase',
                        }}
                    >
                        Ver proyecto

                        <ArrowIcon />
                    </span>
                </div>
            </button>
        </Card>
    );
}

export default function Projects() {
    const { copy } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section id="proyectos" style={{ padding: '18px 0 80px' }}>
                <Container>
                    <SectionTitle
                        titlePath="projects.title"
                        subtitlePath="projects.subtitle"
                    />

                    <div style={{ display: 'grid', gap: '26px', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', alignItems: 'stretch' }}>
                        {projectItems.map((item) => (
                            <ProjectCard
                                key={item.id || item.title}
                                item={item}
                                onOpen={setSelectedProject}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            <ProjectDialog
                project={selectedProject}
                open={Boolean(selectedProject)}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}