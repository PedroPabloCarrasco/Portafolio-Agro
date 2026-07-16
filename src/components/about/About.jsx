import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { defaultEditableContent } from '../../data/editableContent';
import { useEditor } from '../../context/EditorContext';

const realAboutContent = {
    title: 'Sobre mí',
    description:
        'Agroecología, investigación aplicada y transformación de sistemas alimentarios',
    label: 'Perfil profesional',
    professionalTitle:
        'Ciencia, territorio y aprendizaje para impulsar transiciones agroecológicas',
    paragraphs: [
        'Especialista en agroecología, diseño y planificación de agroecosistemas, con experiencia en investigación aplicada, docencia universitaria, extensión y trabajo territorial junto a agricultores, estudiantes, equipos técnicos e instituciones públicas.',
        'Su trayectoria integra diagnóstico predial, planificación espacial y temporal, manejo ecológico del suelo, biodiversidad funcional y plantas multifuncionales para fortalecer servicios ecosistémicos, control biológico por conservación y resiliencia productiva.',
        'Actualmente desarrolla investigación postdoctoral en la Universidad de Lisboa, coordina el Laboratorio de Agroecología y Sistemas Alimentarios Locales de la Universidad de Granada y participa en redes internacionales de investigación y formación.',
    ],
    values: [
        'Más de 20 años de experiencia profesional y académica',
        'Investigación, docencia y extensión con enfoque territorial',
        'Experiencia internacional en Chile, España y Portugal',
        'Trabajo colaborativo con comunidades rurales e instituciones',
    ],
    areas: [
        {
            label: 'Especialidad',
            value: 'Agroecología y diseño de agroecosistemas',
        },
        {
            label: 'Investigación',
            value: 'Sistemas alimentarios sostenibles y transición agroecológica',
        },
        {
            label: 'Docencia',
            value: 'Aprendizaje situado, extensión y formación universitaria',
        },
    ],
    highlights: [
        {
            value: '2023 — Actualidad',
            label: 'Investigadora postdoctoral',
            detail: 'Universidade de Lisboa · Proyecto GrowLIFE',
        },
        {
            value: '2024 — Actualidad',
            label: 'Coordinadora LASAL',
            detail: 'Universidad de Granada',
        },
        {
            value: '30+',
            label: 'Publicaciones',
            detail: 'Artículos, capítulos y producción científica',
        },
    ],
};

function hasText(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

function getArray(value, fallback) {
    return Array.isArray(value) && value.length > 0 ? value : fallback;
}

function LeafIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20 4c-7.5.2-12.4 3-14.7 8.3C3.8 15.8 5.7 20 9.7 20c6.1 0 10.3-6 10.3-16Z" />
            <path d="M5 20c2.1-5.2 6.4-9 12.4-11.5" />
        </svg>
    );
}

function ResearchIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
            <path d="M8 11h6M11 8v6" />
        </svg>
    );
}

function EducationIcon({ size = 18 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M7 12v5c2.8 2.2 7.2 2.2 10 0v-5M21 9v6" />
        </svg>
    );
}

const areaIcons = [LeafIcon, ResearchIcon, EducationIcon];

function FieldPortrait() {
    return (
        <div className="about-portrait-wrap">
            <div className="about-portrait-ring" aria-hidden="true" />

            <div className="about-portrait">
                <img
                    src="/images/claudia-profile.jpeg"
                    alt="Claudia Paz Barrera Salas"
                />

                <div className="about-portrait-overlay" aria-hidden="true" />
            </div>

            <div className="about-portrait-badge">
                <span className="about-portrait-badge-icon">
                    <LeafIcon size={16} />
                </span>

                <div>
                    <strong>Especialista</strong>
                    <span>Agroecología</span>
                </div>
            </div>
        </div>
    );
}

function BotanicalDecoration() {
    return (
        <svg
            viewBox="0 0 180 240"
            fill="none"
            aria-hidden="true"
            className="about-botanical-decoration"
        >
            <path
                d="M84 230C81 181 89 125 123 42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <path
                d="M101 103C132 96 149 75 151 47C123 49 104 70 101 103Z"
                fill="currentColor"
            />
            <path
                d="M91 145C57 140 38 119 36 88C68 92 89 112 91 145Z"
                fill="currentColor"
                opacity="0.72"
            />
            <path
                d="M87 184C115 179 132 162 134 137C108 139 90 157 87 184Z"
                fill="currentColor"
                opacity="0.48"
            />
        </svg>
    );
}

function EditableOrFallback({
    as: Component = 'span',
    path,
    value,
    fallback,
    multiline = false,
    style,
}) {
    if (hasText(value)) {
        return (
            <EditableText
                as={Component}
                path={path}
                multiline={multiline}
                style={style}
            />
        );
    }

    return (
        <Component style={style}>
            {fallback}
        </Component>
    );
}

export default function About() {
    const { content } = useEditor();

    const defaultAbout = defaultEditableContent?.about ?? {};
    const savedAbout = content?.about ?? {};

    const about = {
        ...realAboutContent,
        ...defaultAbout,
        ...savedAbout,
    };

    const values = getArray(
        savedAbout.values,
        getArray(defaultAbout.values, realAboutContent.values),
    );

    const paragraphs = getArray(
        savedAbout.paragraphs,
        getArray(defaultAbout.paragraphs, realAboutContent.paragraphs),
    );

    const areas = getArray(
        savedAbout.areas,
        getArray(defaultAbout.areas, realAboutContent.areas),
    );

    const titleValue = savedAbout.title ?? defaultAbout.title;
    const descriptionValue =
        savedAbout.description ?? defaultAbout.description;

    const useEditableSectionTitle =
        hasText(titleValue) || hasText(descriptionValue);

    return (
        <section id="sobre-mi" className="about-section">
            <div className="about-glow about-glow-top" aria-hidden="true" />
            <div className="about-glow about-glow-bottom" aria-hidden="true" />

            <Container>
                {useEditableSectionTitle ? (
                    <SectionTitle
                        titlePath="about.title"
                        subtitlePath="about.description"
                        align="center"
                    />
                ) : (
                    <header className="about-heading">
                        <span>Conoce mi trayectoria</span>
                        <h2>{realAboutContent.title}</h2>
                        <p>{realAboutContent.description}</p>
                    </header>
                )}

                <div className="about-main-grid">
                    <Card className="about-profile-card">
                        <BotanicalDecoration />

                        <div className="about-profile-content">
                            <FieldPortrait />

                            <div className="about-identity">
                                <span>Ingeniera Agrónoma · Doctora</span>
                                <h3>Claudia Paz Barrera Salas</h3>
                                <p>
                                    Investigadora, docente y especialista en
                                    agroecología.
                                </p>
                            </div>

                            <div className="about-values">
                                {values.map((item, index) => {
                                    const pathValue =
                                        savedAbout.values?.[index] ??
                                        defaultAbout.values?.[index];

                                    return (
                                        <div
                                            key={`about-value-${index}`}
                                            className="about-value-item"
                                        >
                                            <span
                                                className="about-value-marker"
                                                aria-hidden="true"
                                            />

                                            <EditableOrFallback
                                                as="span"
                                                path={`about.values.${index}`}
                                                value={pathValue}
                                                fallback={
                                                    typeof item === 'string'
                                                        ? item
                                                        : realAboutContent
                                                            .values[index] ??
                                                        ''
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Card>

                    <div className="about-right-column">
                        <Card className="about-summary-card">
                            <div className="about-summary-shape" aria-hidden="true" />

                            <div className="about-summary-content">
                                <EditableOrFallback
                                    as="p"
                                    path="about.label"
                                    value={
                                        savedAbout.label ??
                                        defaultAbout.label
                                    }
                                    fallback={realAboutContent.label}
                                    style={{
                                        margin: 0,
                                        fontFamily:
                                            'Inter, system-ui, sans-serif',
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'var(--green)',
                                    }}
                                />

                                <EditableOrFallback
                                    as="h3"
                                    path="about.professionalTitle"
                                    value={
                                        savedAbout.professionalTitle ??
                                        defaultAbout.professionalTitle
                                    }
                                    fallback={
                                        realAboutContent.professionalTitle
                                    }
                                    multiline
                                    style={{
                                        margin: '10px 0 0',
                                        fontFamily:
                                            'Playfair Display, Georgia, serif',
                                        fontSize:
                                            'clamp(1.7rem, 3vw, 2.35rem)',
                                        lineHeight: 1.2,
                                        color: 'var(--ink)',
                                    }}
                                />

                                <div className="about-paragraphs">
                                    {paragraphs.map((paragraph, index) => {
                                        const pathValue =
                                            savedAbout.paragraphs?.[index] ??
                                            defaultAbout.paragraphs?.[index];

                                        return (
                                            <EditableOrFallback
                                                key={`about-paragraph-${index}`}
                                                as="p"
                                                path={`about.paragraphs.${index}`}
                                                value={pathValue}
                                                fallback={
                                                    typeof paragraph ===
                                                        'string'
                                                        ? paragraph
                                                        : realAboutContent
                                                            .paragraphs[
                                                        index
                                                        ] ?? ''
                                                }
                                                multiline
                                                style={{
                                                    margin: 0,
                                                    fontFamily:
                                                        'Inter, system-ui, sans-serif',
                                                    fontSize: '0.97rem',
                                                    lineHeight: 1.82,
                                                    color: 'var(--muted)',
                                                    whiteSpace: 'pre-line',
                                                }}
                                            />
                                        );
                                    })}
                                </div>

                                <div className="about-highlight-grid">
                                    {realAboutContent.highlights.map(
                                        (item) => (
                                            <div
                                                key={item.label}
                                                className="about-highlight"
                                            >
                                                <strong>{item.value}</strong>
                                                <span>{item.label}</span>
                                                <small>{item.detail}</small>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </Card>

                        <div className="about-areas-grid">
                            {areas.map((area, index) => {
                                const Icon =
                                    areaIcons[index % areaIcons.length];

                                const savedArea =
                                    savedAbout.areas?.[index] ?? {};
                                const defaultArea =
                                    defaultAbout.areas?.[index] ?? {};

                                const labelValue =
                                    savedArea.label ??
                                    defaultArea.label;
                                const valueValue =
                                    savedArea.value ??
                                    defaultArea.value;

                                const fallbackArea =
                                    typeof area === 'object' && area
                                        ? area
                                        : realAboutContent.areas[index] ?? {
                                            label: '',
                                            value: '',
                                        };

                                return (
                                    <Card
                                        key={`about-area-${index}`}
                                        className={`about-area-card about-area-card-${index + 1
                                            }`}
                                    >
                                        <span
                                            className="about-area-bg"
                                            aria-hidden="true"
                                        />

                                        <span className="about-area-icon">
                                            <Icon />
                                        </span>

                                        <EditableOrFallback
                                            as="p"
                                            path={`about.areas.${index}.label`}
                                            value={labelValue}
                                            fallback={
                                                fallbackArea.label ??
                                                realAboutContent.areas[index]
                                                    ?.label ??
                                                ''
                                            }
                                            style={{
                                                position: 'relative',
                                                zIndex: 1,
                                                margin: 0,
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.7rem',
                                                fontWeight: 700,
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: 'var(--green)',
                                            }}
                                        />

                                        <EditableOrFallback
                                            as="p"
                                            path={`about.areas.${index}.value`}
                                            value={valueValue}
                                            fallback={
                                                fallbackArea.value ??
                                                realAboutContent.areas[index]
                                                    ?.value ??
                                                ''
                                            }
                                            multiline
                                            style={{
                                                position: 'relative',
                                                zIndex: 1,
                                                margin: '18px 0 0',
                                                fontFamily:
                                                    'Playfair Display, Georgia, serif',
                                                fontSize: '1.08rem',
                                                lineHeight: 1.4,
                                                color: 'var(--ink)',
                                            }}
                                        />
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <style>{`
                .about-section {
                    position: relative;
                    overflow: hidden;
                    padding: 52px 0 104px;
                }

                .about-glow {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(4px);
                }

                .about-glow-top {
                    top: 110px;
                    right: -120px;
                    width: 330px;
                    height: 330px;
                    background: rgba(143, 149, 127, 0.08);
                }

                .about-glow-bottom {
                    bottom: 20px;
                    left: -130px;
                    width: 300px;
                    height: 300px;
                    background: rgba(204, 205, 191, 0.13);
                }

                .about-heading {
                    max-width: 760px;
                    margin: 0 auto 42px;
                    text-align: center;
                }

                .about-heading > span {
                    display: block;
                    margin-bottom: 10px;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--green);
                }

                .about-heading h2 {
                    margin: 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    line-height: 1.08;
                    color: var(--ink);
                }

                .about-heading p {
                    max-width: 620px;
                    margin: 15px auto 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--muted);
                }

                .about-main-grid {
                    display: grid;
                    grid-template-columns: minmax(300px, 0.82fr) minmax(0, 1.18fr);
                    gap: 24px;
                    align-items: stretch;
                }

                .about-profile-card,
                .about-summary-card,
                .about-area-card {
                    transition:
                        transform 220ms ease,
                        box-shadow 220ms ease,
                        border-color 220ms ease;
                }

                .about-profile-card:hover,
                .about-summary-card:hover,
                .about-area-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(143, 149, 127, 0.3) !important;
                    box-shadow: 0 24px 48px rgba(52, 54, 47, 0.12);
                }

                .about-profile-card {
                    position: relative;
                    overflow: hidden;
                    padding: 28px;
                    background:
                        linear-gradient(
                            145deg,
                            rgba(255, 255, 255, 0.88),
                            rgba(204, 205, 191, 0.5)
                        );
                    border: 1px solid rgba(143, 149, 127, 0.22);
                }

                .about-profile-content {
                    position: relative;
                    z-index: 1;
                }

                .about-botanical-decoration {
                    position: absolute;
                    right: -32px;
                    bottom: -58px;
                    width: 180px;
                    height: 240px;
                    color: var(--green);
                    opacity: 0.09;
                    pointer-events: none;
                }

                .about-portrait-wrap {
                    position: relative;
                    width: min(100%, 360px);
                    margin: 0 auto;
                }

                .about-portrait-ring {
                    position: absolute;
                    inset: -12px;
                    border: 1px solid rgba(143, 149, 127, 0.2);
                    border-radius: 50%;
                    transform: rotate(-5deg);
                }

                .about-portrait {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    overflow: hidden;
                    border: 8px solid rgba(204, 205, 191, 0.74);
                    border-radius: 50%;
                    background: var(--sage);
                    box-shadow:
                        0 28px 60px rgba(52, 54, 47, 0.18),
                        inset 0 0 0 1px rgba(255, 255, 255, 0.6);
                }

                .about-portrait img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    object-position: center;
                }

                .about-portrait-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(
                            180deg,
                            transparent 58%,
                            rgba(52, 54, 47, 0.16) 100%
                        );
                    pointer-events: none;
                }

                .about-portrait-badge {
                    position: absolute;
                    right: -8px;
                    bottom: 22px;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    padding: 9px 12px 9px 9px;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 999px;
                    background: rgba(248, 248, 243, 0.9);
                    box-shadow: 0 12px 28px rgba(52, 54, 47, 0.16);
                    backdrop-filter: blur(10px);
                }

                .about-portrait-badge-icon {
                    width: 32px;
                    height: 32px;
                    display: grid;
                    place-items: center;
                    border-radius: 50%;
                    background: var(--green);
                    color: white;
                }

                .about-portrait-badge strong,
                .about-portrait-badge span {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                }

                .about-portrait-badge strong {
                    font-size: 0.72rem;
                    color: var(--ink);
                }

                .about-portrait-badge div > span {
                    margin-top: 1px;
                    font-size: 0.64rem;
                    color: var(--muted);
                }

                .about-identity {
                    margin-top: 26px;
                    text-align: center;
                }

                .about-identity > span {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--green);
                }

                .about-identity h3 {
                    margin: 8px 0 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: clamp(1.45rem, 3vw, 1.9rem);
                    line-height: 1.2;
                    color: var(--ink);
                }

                .about-identity p {
                    margin: 8px 0 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 0.88rem;
                    line-height: 1.55;
                    color: var(--muted);
                }

                .about-values {
                    display: grid;
                    gap: 11px;
                    margin-top: 24px;
                }

                .about-value-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 13px 14px;
                    border: 1px solid rgba(143, 149, 127, 0.14);
                    border-radius: 16px 7px 16px 7px;
                    background: rgba(255, 255, 255, 0.44);
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 0.88rem;
                    line-height: 1.5;
                    color: var(--ink);
                }

                .about-value-item:nth-child(even) {
                    border-radius: 7px 16px 7px 16px;
                }

                .about-value-marker {
                    width: 11px;
                    height: 11px;
                    flex-shrink: 0;
                    border-radius: 50% 50% 50% 12%;
                    background:
                        linear-gradient(135deg, var(--green), var(--sage));
                    transform: rotate(35deg);
                    box-shadow: 0 0 0 5px rgba(143, 149, 127, 0.09);
                }

                .about-right-column {
                    display: grid;
                    gap: 22px;
                    align-content: start;
                }

                .about-summary-card {
                    position: relative;
                    overflow: hidden;
                    padding: clamp(24px, 4vw, 36px);
                    background:
                        linear-gradient(
                            145deg,
                            rgba(255, 255, 255, 0.9),
                            rgba(204, 205, 191, 0.34)
                        );
                    border: 1px solid rgba(143, 149, 127, 0.2);
                }

                .about-summary-shape {
                    position: absolute;
                    top: -72px;
                    right: -62px;
                    width: 210px;
                    height: 210px;
                    border-radius: 62% 38% 68% 32% / 42% 62% 38% 58%;
                    background: rgba(143, 149, 127, 0.08);
                    transform: rotate(20deg);
                }

                .about-summary-content {
                    position: relative;
                    z-index: 1;
                }

                .about-paragraphs {
                    display: grid;
                    gap: 14px;
                    margin-top: 19px;
                }

                .about-highlight-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 10px;
                    margin-top: 26px;
                }

                .about-highlight {
                    min-width: 0;
                    padding: 15px 13px;
                    border: 1px solid rgba(143, 149, 127, 0.16);
                    border-radius: 17px 7px 17px 7px;
                    background: rgba(255, 255, 255, 0.48);
                }

                .about-highlight strong,
                .about-highlight span,
                .about-highlight small {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                }

                .about-highlight strong {
                    font-size: 1.05rem;
                    color: var(--green);
                }

                .about-highlight span {
                    margin-top: 4px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: var(--ink);
                }

                .about-highlight small {
                    margin-top: 4px;
                    font-size: 0.63rem;
                    line-height: 1.4;
                    color: var(--muted);
                }

                .about-areas-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 14px;
                }

                .about-area-card {
                    position: relative;
                    overflow: hidden;
                    min-height: 178px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    border: 1px solid rgba(143, 149, 127, 0.18);
                }

                .about-area-card-1 {
                    background:
                        linear-gradient(
                            145deg,
                            rgba(143, 149, 127, 0.16),
                            rgba(255, 255, 255, 0.82)
                        );
                }

                .about-area-card-2 {
                    background:
                        linear-gradient(
                            145deg,
                            rgba(204, 205, 191, 0.56),
                            rgba(255, 255, 255, 0.84)
                        );
                }

                .about-area-card-3 {
                    background:
                        linear-gradient(
                            145deg,
                            rgba(170, 168, 153, 0.2),
                            rgba(255, 255, 255, 0.84)
                        );
                }

                .about-area-bg {
                    position: absolute;
                    right: -20px;
                    bottom: -22px;
                    width: 94px;
                    height: 94px;
                    border-radius: 70% 30% 70% 30%;
                    background: rgba(143, 149, 127, 0.08);
                    transform: rotate(24deg);
                }

                .about-area-card:nth-child(even) .about-area-bg {
                    border-radius: 30% 70% 30% 70%;
                }

                .about-area-icon {
                    position: absolute;
                    top: 17px;
                    left: 18px;
                    width: 38px;
                    height: 38px;
                    display: grid;
                    place-items: center;
                    border: 1px solid rgba(143, 149, 127, 0.18);
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.62);
                    color: var(--green);
                }

                @media (max-width: 980px) {
                    .about-main-grid {
                        grid-template-columns: 1fr;
                    }

                    .about-profile-card {
                        max-width: none;
                    }

                    .about-profile-content {
                        display: grid;
                        grid-template-columns: minmax(230px, 0.7fr) minmax(0, 1.3fr);
                        column-gap: 28px;
                        align-items: center;
                    }

                    .about-portrait-wrap {
                        grid-row: span 2;
                    }

                    .about-identity {
                        margin-top: 0;
                        text-align: left;
                    }

                    .about-values {
                        margin-top: 18px;
                    }
                }

                @media (max-width: 760px) {
                    .about-section {
                        padding: 34px 0 76px;
                    }

                    .about-profile-content {
                        display: block;
                    }

                    .about-identity {
                        margin-top: 26px;
                        text-align: center;
                    }

                    .about-highlight-grid {
                        grid-template-columns: 1fr;
                    }

                    .about-areas-grid {
                        grid-template-columns: 1fr;
                    }

                    .about-area-card {
                        min-height: 150px;
                    }
                }

                @media (max-width: 480px) {
                    .about-profile-card,
                    .about-summary-card {
                        padding: 20px;
                    }

                    .about-portrait-badge {
                        right: 0;
                        bottom: 10px;
                        transform: scale(0.9);
                        transform-origin: right bottom;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .about-profile-card,
                    .about-summary-card,
                    .about-area-card {
                        transition: none;
                    }

                    .about-profile-card:hover,
                    .about-summary-card:hover,
                    .about-area-card:hover {
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
}