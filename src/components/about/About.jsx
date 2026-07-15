import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { defaultEditableContent } from '../../data/editableContent';
import { useEditor } from '../../context/EditorContext';

function FieldPortrait() {
    return (
        <div
            style={{
                position: 'relative',
                width: 'min(100%, 420px)',
                aspectRatio: '1 / 1',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '8px solid rgba(204, 205, 191, 0.72)',
                boxShadow:
                    '0 24px 54px rgba(52, 54, 47, 0.16)',
                background: 'var(--sage)',
            }}
        >
            <img
                src="/images/claudia-profile.jpeg"
                alt="Claudia Paz Barrera Salas"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                }}
            />

            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(180deg, transparent 62%, rgba(52,54,47,0.12) 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}

function BotanicalDecoration() {
    return (
        <svg
            viewBox="0 0 180 240"
            fill="none"
            aria-hidden="true"
            style={{
                position: 'absolute',
                right: '-32px',
                bottom: '-58px',
                width: '180px',
                height: '240px',
                opacity: 0.1,
                pointerEvents: 'none',
            }}
        >
            <path
                d="M84 230C81 181 89 125 123 42"
                stroke="var(--green)"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M101 103C132 96 149 75 151 47C123 49 104 70 101 103Z"
                fill="var(--green)"
            />

            <path
                d="M91 145C57 140 38 119 36 88C68 92 89 112 91 145Z"
                fill="var(--sage)"
            />

            <path
                d="M87 184C115 179 132 162 134 137C108 139 90 157 87 184Z"
                fill="var(--green-light)"
            />
        </svg>
    );
}

export default function About() {
    const { content } = useEditor();

    const defaultAbout =
        defaultEditableContent?.about ?? {};

    const savedAbout =
        content?.about ?? {};

    /*
     * Combina los datos predeterminados con los datos
     * guardados por el editor.
     */
    const about = {
        ...defaultAbout,
        ...savedAbout,
    };

    /*
     * Validación segura de arreglos.
     * Evita el error "Cannot read properties of undefined (reading 'map')".
     */
    const values = Array.isArray(savedAbout.values)
        ? savedAbout.values
        : Array.isArray(defaultAbout.values)
            ? defaultAbout.values
            : [];

    const paragraphs = Array.isArray(savedAbout.paragraphs)
        ? savedAbout.paragraphs
        : Array.isArray(defaultAbout.paragraphs)
            ? defaultAbout.paragraphs
            : [];

    const areas = Array.isArray(savedAbout.areas)
        ? savedAbout.areas
        : Array.isArray(defaultAbout.areas)
            ? defaultAbout.areas
            : [];

    return (
        <section
            id="sobre-mi"
            style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '28px 0 88px',
            }}
        >
            <Container>
                <SectionTitle
                    titlePath="about.title"
                    subtitlePath="about.description"
                    align="center"
                />

                <div
                    className="about-main-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'minmax(300px, 0.88fr) minmax(0, 1.12fr)',
                        gap: '22px',
                        alignItems: 'stretch',
                    }}
                >
                    {/* Columna izquierda */}
                    <Card
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            padding: '26px',
                            background:
                                'linear-gradient(145deg, rgba(255,255,255,0.78), rgba(204,205,191,0.48))',
                            border:
                                '1px solid rgba(143,149,127,0.22)',
                        }}
                    >
                        <BotanicalDecoration />

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            <FieldPortrait />

                            <div
                                style={{
                                    display: 'grid',
                                    gap: '12px',
                                    marginTop: '22px',
                                }}
                            >
                                {values.map((_, index) => (
                                    <div
                                        key={`about-value-${index}`}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '13px 14px',
                                            borderRadius:
                                                index % 2 === 0
                                                    ? '18px 8px 18px 8px'
                                                    : '8px 18px 8px 18px',
                                            background:
                                                index % 2 === 0
                                                    ? 'rgba(143,149,127,0.1)'
                                                    : 'rgba(170,168,153,0.1)',
                                            border:
                                                '1px solid rgba(143,149,127,0.14)',
                                        }}
                                    >
                                        <span
                                            aria-hidden="true"
                                            style={{
                                                width: '11px',
                                                height: '11px',
                                                flexShrink: 0,
                                                borderRadius:
                                                    index % 2 === 0
                                                        ? '50% 50% 50% 12%'
                                                        : '50% 12% 50% 50%',
                                                background:
                                                    'linear-gradient(135deg, var(--green), var(--sage))',
                                                transform:
                                                    index % 2 === 0
                                                        ? 'rotate(35deg)'
                                                        : 'rotate(-35deg)',
                                                boxShadow:
                                                    '0 0 0 5px rgba(143,149,127,0.09)',
                                            }}
                                        />

                                        <EditableText
                                            as="span"
                                            path={`about.values.${index}`}
                                            style={{
                                                flex: 1,
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.92rem',
                                                lineHeight: 1.5,
                                                color: 'var(--ink)',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Columna derecha */}
                    <div
                        style={{
                            display: 'grid',
                            gap: '22px',
                            alignContent: 'start',
                        }}
                    >
                        {/* Resumen profesional */}
                        <Card
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '28px',
                                background:
                                    'linear-gradient(145deg, rgba(255,255,255,0.82), rgba(204,205,191,0.35))',
                                border:
                                    '1px solid rgba(143,149,127,0.2)',
                            }}
                        >
                            <div
                                aria-hidden="true"
                                style={{
                                    position: 'absolute',
                                    top: '-48px',
                                    right: '-48px',
                                    width: '150px',
                                    height: '150px',
                                    borderRadius:
                                        '62% 38% 68% 32% / 42% 62% 38% 58%',
                                    background:
                                        'rgba(143,149,127,0.08)',
                                    transform: 'rotate(20deg)',
                                }}
                            />

                            <div
                                style={{
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <EditableText
                                    as="p"
                                    path="about.label"
                                    style={{
                                        margin: 0,
                                        fontFamily:
                                            'Inter, system-ui, sans-serif',
                                        fontSize: '0.72rem',
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'var(--green)',
                                    }}
                                />

                                <EditableText
                                    as="h3"
                                    path={
                                        about.professionalTitle !==
                                            undefined
                                            ? 'about.professionalTitle'
                                            : 'about.title'
                                    }
                                    multiline
                                    style={{
                                        margin: '10px 0 0',
                                        fontFamily:
                                            'Playfair Display, Georgia, serif',
                                        fontSize:
                                            'clamp(1.55rem, 2.7vw, 2rem)',
                                        lineHeight: 1.28,
                                        color: 'var(--ink)',
                                    }}
                                />

                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '14px',
                                        marginTop: '18px',
                                    }}
                                >
                                    {paragraphs.map(
                                        (_, index) => (
                                            <EditableText
                                                key={`about-paragraph-${index}`}
                                                as="p"
                                                path={`about.paragraphs.${index}`}
                                                multiline
                                                style={{
                                                    margin: 0,
                                                    fontFamily:
                                                        'Inter, system-ui, sans-serif',
                                                    fontSize:
                                                        '0.96rem',
                                                    lineHeight:
                                                        1.82,
                                                    color:
                                                        'var(--muted)',
                                                    whiteSpace:
                                                        'pre-line',
                                                }}
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </Card>

                        {/* Áreas de especialización */}
                        <div
                            className="about-areas-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(3, minmax(0, 1fr))',
                                gap: '14px',
                            }}
                        >
                            {areas.map((_, index) => (
                                <Card
                                    key={`about-area-${index}`}
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        minHeight: '150px',
                                        padding: '19px',
                                        display: 'flex',
                                        flexDirection:
                                            'column',
                                        justifyContent:
                                            'space-between',
                                        background:
                                            index === 0
                                                ? 'linear-gradient(145deg, rgba(143,149,127,0.16), rgba(255,255,255,0.76))'
                                                : index === 1
                                                    ? 'linear-gradient(145deg, rgba(204,205,191,0.52), rgba(255,255,255,0.78))'
                                                    : 'linear-gradient(145deg, rgba(170,168,153,0.18), rgba(255,255,255,0.78))',
                                        border:
                                            '1px solid rgba(143,149,127,0.18)',
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            position:
                                                'absolute',
                                            right: '-14px',
                                            bottom: '-14px',
                                            width: '74px',
                                            height: '74px',
                                            borderRadius:
                                                index % 2 === 0
                                                    ? '70% 30% 70% 30%'
                                                    : '30% 70% 30% 70%',
                                            background:
                                                'rgba(143,149,127,0.08)',
                                            transform:
                                                'rotate(24deg)',
                                        }}
                                    />

                                    <EditableText
                                        as="p"
                                        path={`about.areas.${index}.label`}
                                        style={{
                                            position:
                                                'relative',
                                            zIndex: 1,
                                            margin: 0,
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing:
                                                '0.14em',
                                            textTransform:
                                                'uppercase',
                                            color:
                                                'var(--green)',
                                        }}
                                    />

                                    <EditableText
                                        as="p"
                                        path={`about.areas.${index}.value`}
                                        multiline
                                        style={{
                                            position:
                                                'relative',
                                            zIndex: 1,
                                            margin: '18px 0 0',
                                            fontFamily:
                                                'Playfair Display, Georgia, serif',
                                            fontSize: '1.06rem',
                                            lineHeight: 1.4,
                                            color: 'var(--ink)',
                                        }}
                                    />
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            <style>{`
                @media (max-width: 980px) {
                    .about-main-grid {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 700px) {
                    .about-areas-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}