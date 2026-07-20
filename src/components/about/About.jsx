import Container from '../common/Container';
import EditableText from '../admin/EditableText';
import { defaultEditableContent } from '../../data/editableContent';
import { useEditor } from '../../context/EditorContext';

const fallbackContent = {
    title: 'Sobre mí',
    description:
        'Investigación aplicada, docencia universitaria y trabajo territorial para la transición hacia sistemas agroalimentarios sostenibles.',
    label: 'Perfil académico y profesional',
    professionalTitle:
        'Agroecología, conocimiento situado e innovación territorial para transformar los sistemas alimentarios',
    paragraphs: [
        'Ingeniera Agrónoma y Doctora en Territorio, Patrimonio y Medio Ambiente, especializada en agroecología, diseño y planificación de agroecosistemas. Su trayectoria integra investigación aplicada, docencia universitaria, extensión y trabajo de campo junto a agricultores, estudiantes, equipos técnicos, comunidades rurales e instituciones.',
        'Su trabajo aborda el diagnóstico y la planificación predial, el manejo ecológico del suelo y la incorporación de biodiversidad funcional, especialmente mediante plantas multifuncionales. Estas estrategias buscan fortalecer los servicios ecosistémicos, favorecer el control biológico por conservación y aumentar la estabilidad y resiliencia de los sistemas productivos.',
        'Actualmente se desempeña como investigadora postdoctoral en el Centro de Ecología, Evolución y Cambios Ambientales de la Universidade de Lisboa, dentro del proyecto europeo GrowLIFE. Además, coordina el Laboratorio de Agroecología y Sistemas Alimentarios Locales de la Universidad de Granada y participa en redes internacionales de investigación, formación y transferencia de conocimiento.',
    ],
    values: [
        'Más de veinte años de experiencia académica, técnica y territorial',
        'Investigación interdisciplinaria y participativa con agricultores y comunidades',
        'Docencia de pregrado, posgrado y educación continua en agroecología',
        'Experiencia profesional e investigativa en Chile, España y Portugal',
    ],
    areas: [
        {
            label: 'Especialidad',
            value: 'Agroecología, diseño y planificación de agroecosistemas',
        },
        {
            label: 'Investigación',
            value: 'Transiciones agroecológicas y sistemas alimentarios sostenibles',
        },
        {
            label: 'Docencia',
            value: 'Aprendizaje situado, metodologías participativas y formación territorial',
        },
    ],
};

const timeline = [
    {
        value: '2023 — Actualidad',
        label: 'Investigadora postdoctoral',
        detail: 'cE3c · Universidade de Lisboa · Proyecto europeo GrowLIFE',
    },
    {
        value: '2024 — Actualidad',
        label: 'Coordinadora de LASAL',
        detail: 'Laboratorio de Agroecología y Sistemas Alimentarios Locales · Universidad de Granada',
    },
    {
        value: '2020 — Actualidad',
        label: 'Investigadora asociada',
        detail: 'Grupo STAND · Universidad de Granada',
    },
];

const academicProfile = [
    {
        label: 'Cargo actual',
        value: 'Investigadora postdoctoral en el cE3c de la Universidade de Lisboa',
    },
    {
        label: 'Proyecto europeo',
        value: 'GrowLIFE · Sistemas alimentarios sostenibles y transición agroecológica',
    },
    {
        label: 'Coordinación',
        value: 'Laboratorio de Agroecología y Sistemas Alimentarios Locales · Universidad de Granada',
    },
    {
        label: 'Grupo de investigación',
        value: 'Investigadora asociada del Grupo STAND · Universidad de Granada',
    },
    {
        label: 'Doctorado',
        value: 'Dra. en Territorio, Patrimonio y Medio Ambiente · Universidad de Granada',
    },
    {
        label: 'Máster',
        value: 'Máster en Agricultura y Ganadería Ecológicas · Universidad Pablo de Olavide',
    },
    {
        label: 'Título profesional',
        value: 'Ingeniera Agrónoma · Universidad Católica de Temuco',
    },
    {
        label: 'Especialidad',
        value: 'Agroecología, diseño y planificación de agroecosistemas',
    },
    {
        label: 'Investigación',
        value: 'Sistemas alimentarios sostenibles, biodiversidad funcional y transición agroecológica',
    },
    {
        label: 'Docencia',
        value: 'Pregrado, posgrado, doctorado y educación continua',
    },
    {
        label: 'Trabajo territorial',
        value: 'Agricultores, comunidades rurales, equipos técnicos e instituciones públicas',
    },
    {
        label: 'Idiomas',
        value: 'Español nativo · Portugués C1 · Inglés B1–B2',
    },
];

function hasText(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

function safeArray(value, fallback = []) {
    return Array.isArray(value) && value.length > 0 ? value : fallback;
}

function EditableOrFallback({
    as: Component = 'span',
    path,
    value,
    fallback = '',
    multiline = false,
    className,
}) {
    if (hasText(value)) {
        return (
            <EditableText
                as={Component}
                path={path}
                multiline={multiline}
                className={className}
            />
        );
    }

    return <Component className={className}>{fallback}</Component>;
}

function ArrowIcon({ size = 18 }) {
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
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function LeafIcon({ size = 19 }) {
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
            <path d="M20 4C12.8 4.2 7.8 7 5.5 12.4 4 16 5.8 20 9.7 20 15.8 20 20 14 20 4Z" />
            <path d="M5 20c2.2-5.2 6.4-9 12.4-11.5" />
        </svg>
    );
}

function SearchIcon({ size = 19 }) {
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
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.4-3.4" />
            <path d="M8 11h6M11 8v6" />
        </svg>
    );
}

function EducationIcon({ size = 19 }) {
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

const areaIcons = [LeafIcon, SearchIcon, EducationIcon];

function BotanicalLine() {
    return (
        <svg
            className="about-v2-botanical"
            viewBox="0 0 240 310"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M76 294c10-75 38-145 88-232"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
            <path
                d="M125 130c38-2 63-24 70-61-38 4-63 25-70 61Z"
                fill="currentColor"
                opacity=".72"
            />
            <path
                d="M103 184c-38-2-63-23-72-60 39 3 66 24 72 60Z"
                fill="currentColor"
                opacity=".5"
            />
            <path
                d="M91 233c30-2 52-19 60-47-31 2-53 18-60 47Z"
                fill="currentColor"
                opacity=".32"
            />
        </svg>
    );
}

export default function About() {
    const { content } = useEditor();

    const saved = content?.about ?? {};
    const defaults = defaultEditableContent?.about ?? {};

    const paragraphs = safeArray(
        saved.paragraphs,
        safeArray(defaults.paragraphs, fallbackContent.paragraphs),
    );

    const values = safeArray(
        saved.values,
        safeArray(defaults.values, fallbackContent.values),
    );

    const areas = safeArray(
        saved.areas,
        safeArray(defaults.areas, fallbackContent.areas),
    );

    return (
        <section id="sobre-mi" className="about-v2-section">
            <div className="about-v2-orb about-v2-orb-one" aria-hidden="true" />
            <div className="about-v2-orb about-v2-orb-two" aria-hidden="true" />

            <Container>
                <header className="about-v2-header">
                    <div>
                        <span className="about-v2-eyebrow">
                            <EditableOrFallback
                                path="about.label"
                                value={saved.label ?? defaults.label}
                                fallback={fallbackContent.label}
                            />
                        </span>

                        <h2>
                            <EditableOrFallback
                                path="about.title"
                                value={saved.title ?? defaults.title}
                                fallback={fallbackContent.title}
                            />
                        </h2>
                    </div>

                    <p>
                        <EditableOrFallback
                            path="about.description"
                            value={saved.description ?? defaults.description}
                            fallback={fallbackContent.description}
                            multiline
                        />
                    </p>
                </header>

                <div className="about-v2-layout">
                    <article className="about-v2-portrait-card">
                        <BotanicalLine />

                        <div className="about-v2-photo">
                            <img
                                src="/images/claudia-profile.jpeg"
                                alt="Claudia Paz Barrera Salas"
                            />
                            <div className="about-v2-photo-overlay" aria-hidden="true" />
                        </div>

                        <div className="about-v2-person">
                            <span>Ingeniera Agrónoma · Dra. en Territorio, Patrimonio y Medio Ambiente</span>
                            <h3>Claudia Paz Barrera Salas</h3>

                            <p>
                                Investigadora postdoctoral especializada en
                                agroecología, sistemas alimentarios sostenibles y
                                transición agroecológica, con experiencia en Chile,
                                España y Portugal.
                            </p>

                            <div className="about-v2-profile-details">
                                {academicProfile.map((item, index) => (
                                    <div
                                        key={`academic-profile-${index}`}
                                        className="about-v2-profile-detail"
                                    >
                                        <small>{item.label}</small>
                                        <strong>{item.value}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-v2-specialty">
                            <span className="about-v2-specialty-icon">
                                <LeafIcon size={17} />
                            </span>
                            <div>
                                <small>Línea principal de investigación</small>
                                <strong>Transición agroecológica y sistemas alimentarios sostenibles</strong>
                            </div>
                        </div>
                    </article>

                    <div className="about-v2-content">
                        <article className="about-v2-story">
                            <div className="about-v2-story-top">
                                <div>
                                    <span className="about-v2-kicker">
                                        Trayectoria profesional
                                    </span>

                                    <h3>
                                        <EditableOrFallback
                                            path="about.professionalTitle"
                                            value={
                                                saved.professionalTitle ??
                                                defaults.professionalTitle
                                            }
                                            fallback={
                                                fallbackContent.professionalTitle
                                            }
                                            multiline
                                        />
                                    </h3>
                                </div>

                                <a href="#experiencia" className="about-v2-link">
                                    Ver experiencia
                                    <ArrowIcon size={17} />
                                </a>
                            </div>

                            <div className="about-v2-paragraphs">
                                {paragraphs.map((paragraph, index) => (
                                    <EditableOrFallback
                                        key={`about-paragraph-${index}`}
                                        as="p"
                                        path={`about.paragraphs.${index}`}
                                        value={
                                            saved.paragraphs?.[index] ??
                                            defaults.paragraphs?.[index]
                                        }
                                        fallback={
                                            typeof paragraph === 'string'
                                                ? paragraph
                                                : fallbackContent.paragraphs[
                                                index
                                                ] ?? ''
                                        }
                                        multiline
                                    />
                                ))}
                            </div>

                            <div className="about-v2-timeline">
                                {timeline.map((item, index) => (
                                    <div
                                        key={`about-timeline-${index}`}
                                        className="about-v2-timeline-item"
                                    >
                                        <span className="about-v2-timeline-dot" />
                                        <strong>{item.value}</strong>
                                        <span>{item.label}</span>
                                        <small>{item.detail}</small>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <div className="about-v2-bottom-grid">
                            <article className="about-v2-values">
                                <div className="about-v2-card-heading">
                                    <span>Enfoque profesional</span>
                                    <strong>Investigación, docencia y extensión vinculadas con los territorios</strong>
                                </div>

                                <div className="about-v2-values-list">
                                    {values.map((item, index) => (
                                        <div
                                            key={`about-value-${index}`}
                                            className="about-v2-value"
                                        >
                                            <span>{String(index + 1).padStart(2, '0')}</span>

                                            <EditableOrFallback
                                                as="p"
                                                path={`about.values.${index}`}
                                                value={
                                                    saved.values?.[index] ??
                                                    defaults.values?.[index]
                                                }
                                                fallback={
                                                    typeof item === 'string'
                                                        ? item
                                                        : fallbackContent.values[
                                                        index
                                                        ] ?? ''
                                                }
                                                multiline
                                            />
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <div className="about-v2-areas">
                                {areas.slice(0, 3).map((area, index) => {
                                    const Icon =
                                        areaIcons[index % areaIcons.length];

                                    const savedArea =
                                        saved.areas?.[index] ?? {};
                                    const defaultArea =
                                        defaults.areas?.[index] ?? {};

                                    const fallbackArea =
                                        typeof area === 'object' && area
                                            ? area
                                            : fallbackContent.areas[index] ?? {
                                                label: '',
                                                value: '',
                                            };

                                    return (
                                        <article
                                            key={`about-area-${index}`}
                                            className="about-v2-area"
                                        >
                                            <span className="about-v2-area-icon">
                                                <Icon />
                                            </span>

                                            <EditableOrFallback
                                                as="small"
                                                path={`about.areas.${index}.label`}
                                                value={
                                                    savedArea.label ??
                                                    defaultArea.label
                                                }
                                                fallback={
                                                    fallbackArea.label ??
                                                    fallbackContent.areas[index]
                                                        ?.label ??
                                                    ''
                                                }
                                            />

                                            <EditableOrFallback
                                                as="h4"
                                                path={`about.areas.${index}.value`}
                                                value={
                                                    savedArea.value ??
                                                    defaultArea.value
                                                }
                                                fallback={
                                                    fallbackArea.value ??
                                                    fallbackContent.areas[index]
                                                        ?.value ??
                                                    ''
                                                }
                                                multiline
                                            />
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <style>{`
                .about-v2-section {
                    position: relative;
                    overflow: hidden;
                    padding: clamp(74px, 9vw, 124px) 0;
                    color: var(--ink, #30352e);
                }

                .about-v2-orb {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(8px);
                }

                .about-v2-orb-one {
                    top: 6%;
                    right: -130px;
                    width: 360px;
                    height: 360px;
                    background: rgba(143, 149, 127, 0.08);
                }

                .about-v2-orb-two {
                    left: -150px;
                    bottom: 4%;
                    width: 320px;
                    height: 320px;
                    background: rgba(204, 205, 191, 0.12);
                }

                .about-v2-header {
                    display: grid;
                    grid-template-columns: minmax(0, .95fr) minmax(280px, .65fr);
                    gap: 48px;
                    align-items: end;
                    padding-bottom: 30px;
                    border-bottom: 1px solid rgba(143, 149, 127, 0.2);
                }

                .about-v2-eyebrow,
                .about-v2-kicker,
                .about-v2-card-heading > span {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .72rem;
                    font-weight: 700;
                    letter-spacing: .17em;
                    text-transform: uppercase;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-header h2 {
                    margin: 11px 0 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: clamp(2.7rem, 6vw, 5.5rem);
                    font-weight: 600;
                    line-height: .98;
                    letter-spacing: -.035em;
                    color: var(--ink, #30352e);
                }

                .about-v2-header > p {
                    max-width: 520px;
                    margin: 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: clamp(.96rem, 1.4vw, 1.08rem);
                    line-height: 1.8;
                    color: var(--muted, #687064);
                }

                .about-v2-layout {
                    display: grid;
                    grid-template-columns: minmax(280px, .72fr) minmax(0, 1.55fr);
                    gap: 26px;
                    margin-top: 30px;
                    align-items: stretch;
                }

                .about-v2-portrait-card,
                .about-v2-story,
                .about-v2-values,
                .about-v2-area {
                    border: 1px solid rgba(143, 149, 127, 0.18);
                    background: rgba(255, 255, 255, 0.68);
                    box-shadow: 0 22px 60px rgba(42, 49, 38, 0.09);
                    backdrop-filter: blur(14px);
                }

                .about-v2-portrait-card {
                    position: relative;
                    overflow: hidden;
                    min-height: 0;
                    padding: 18px;
                    border-radius: 30px;
                }

                .about-v2-botanical {
                    position: absolute;
                    right: -70px;
                    bottom: -38px;
                    width: 240px;
                    color: var(--green, #7f8a6f);
                    opacity: .1;
                }

                .about-v2-photo {
                    position: relative;
                    height: 390px;
                    overflow: hidden;
                    border-radius: 22px;
                    background: #d5d0c2;
                }

                .about-v2-photo img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    object-position: center;
                    transition: transform 600ms ease;
                }

                .about-v2-portrait-card:hover .about-v2-photo img {
                    transform: scale(1.025);
                }

                .about-v2-photo-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(180deg, transparent 55%, rgba(33, 42, 30, .24)),
                        linear-gradient(120deg, rgba(143, 149, 127, .12), transparent 45%);
                }

                .about-v2-person {
                    position: relative;
                    z-index: 1;
                    padding: 25px 8px 108px;
                }

                .about-v2-person > span {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .68rem;
                    font-weight: 700;
                    letter-spacing: .13em;
                    text-transform: uppercase;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-person h3 {
                    margin: 8px 0 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: clamp(1.7rem, 3vw, 2.25rem);
                    line-height: 1.05;
                    color: var(--ink, #30352e);
                }

                .about-v2-person p {
                    margin: 10px 0 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .9rem;
                    line-height: 1.65;
                    color: var(--muted, #687064);
                }

                .about-v2-profile-details {
                    display: grid;
                    gap: 0;
                    margin-top: 22px;
                    border-top: 1px solid rgba(143, 149, 127, .17);
                }

                .about-v2-profile-detail {
                    display: grid;
                    grid-template-columns: minmax(105px, .58fr) minmax(0, 1.42fr);
                    gap: 14px;
                    padding: 12px 0;
                    border-bottom: 1px solid rgba(143, 149, 127, .14);
                }

                .about-v2-profile-detail small,
                .about-v2-profile-detail strong {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                }

                .about-v2-profile-detail small {
                    padding-top: 2px;
                    font-size: .62rem;
                    font-weight: 700;
                    letter-spacing: .09em;
                    text-transform: uppercase;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-profile-detail strong {
                    font-size: .77rem;
                    font-weight: 600;
                    line-height: 1.48;
                    color: var(--ink, #30352e);
                }

                .about-v2-profile-detail:last-child {
                    border-bottom: 0;
                }

                .about-v2-specialty {
                    position: absolute;
                    left: 27px;
                    right: 27px;
                    bottom: 22px;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 11px;
                    padding: 11px 13px;
                    border: 1px solid rgba(143, 149, 127, .18);
                    border-radius: 16px;
                    background: rgba(247, 247, 241, .88);
                    backdrop-filter: blur(12px);
                }

                .about-v2-specialty-icon {
                    width: 37px;
                    height: 37px;
                    display: grid;
                    place-items: center;
                    flex-shrink: 0;
                    border-radius: 12px;
                    background: var(--green, #7f8a6f);
                    color: white;
                }

                .about-v2-specialty small,
                .about-v2-specialty strong {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                }

                .about-v2-specialty small {
                    font-size: .63rem;
                    color: var(--muted, #687064);
                }

                .about-v2-specialty strong {
                    margin-top: 2px;
                    font-size: .83rem;
                    color: var(--ink, #30352e);
                }

                .about-v2-content {
                    display: grid;
                    gap: 22px;
                }

                .about-v2-story {
                    padding: clamp(25px, 4vw, 42px);
                    border-radius: 30px;
                }

                .about-v2-story-top {
                    display: flex;
                    justify-content: space-between;
                    gap: 30px;
                    align-items: flex-start;
                }

                .about-v2-story h3 {
                    max-width: 760px;
                    margin: 11px 0 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: clamp(2rem, 4vw, 3.55rem);
                    font-weight: 600;
                    line-height: 1.04;
                    letter-spacing: -.025em;
                    color: var(--ink, #30352e);
                }

                .about-v2-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                    padding: 10px 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .78rem;
                    font-weight: 700;
                    text-decoration: none;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-link svg {
                    transition: transform 180ms ease;
                }

                .about-v2-link:hover svg {
                    transform: translateX(4px);
                }

                .about-v2-paragraphs {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 16px 28px;
                    margin-top: 26px;
                }

                .about-v2-paragraphs p {
                    margin: 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .95rem;
                    line-height: 1.82;
                    color: var(--muted, #687064);
                    white-space: pre-line;
                }

                .about-v2-paragraphs p:first-child {
                    grid-column: 1 / -1;
                    max-width: 900px;
                    font-size: 1.02rem;
                    color: var(--ink, #30352e);
                }

                .about-v2-timeline {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 12px;
                    margin-top: 30px;
                    padding-top: 26px;
                    border-top: 1px solid rgba(143, 149, 127, .16);
                }

                .about-v2-timeline-item {
                    position: relative;
                    padding-left: 16px;
                }

                .about-v2-timeline-dot {
                    position: absolute;
                    left: 0;
                    top: 5px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--green, #7f8a6f);
                    box-shadow: 0 0 0 5px rgba(143, 149, 127, .1);
                }

                .about-v2-timeline-item strong,
                .about-v2-timeline-item > span:not(.about-v2-timeline-dot),
                .about-v2-timeline-item small {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                }

                .about-v2-timeline-item strong {
                    font-size: .92rem;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-timeline-item > span:not(.about-v2-timeline-dot) {
                    margin-top: 5px;
                    font-size: .76rem;
                    font-weight: 700;
                    color: var(--ink, #30352e);
                }

                .about-v2-timeline-item small {
                    margin-top: 4px;
                    font-size: .67rem;
                    line-height: 1.5;
                    color: var(--muted, #687064);
                }

                .about-v2-bottom-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.08fr) minmax(250px, .92fr);
                    gap: 22px;
                }

                .about-v2-values {
                    padding: 27px;
                    border-radius: 26px;
                }

                .about-v2-card-heading strong {
                    display: block;
                    margin-top: 7px;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: 1.5rem;
                    line-height: 1.2;
                    color: var(--ink, #30352e);
                }

                .about-v2-values-list {
                    display: grid;
                    margin-top: 20px;
                }

                .about-v2-value {
                    display: grid;
                    grid-template-columns: 34px 1fr;
                    gap: 12px;
                    align-items: start;
                    padding: 14px 0;
                    border-top: 1px solid rgba(143, 149, 127, .14);
                }

                .about-v2-value > span {
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .68rem;
                    font-weight: 700;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-value p {
                    margin: 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .85rem;
                    line-height: 1.55;
                    color: var(--ink, #30352e);
                }

                .about-v2-areas {
                    display: grid;
                    grid-template-rows: repeat(3, 1fr);
                    gap: 11px;
                }

                .about-v2-area {
                    position: relative;
                    overflow: hidden;
                    min-height: 126px;
                    padding: 19px 20px 17px 75px;
                    border-radius: 22px;
                    transition:
                        transform 200ms ease,
                        border-color 200ms ease,
                        box-shadow 200ms ease;
                }

                .about-v2-area:hover {
                    transform: translateY(-3px);
                    border-color: rgba(143, 149, 127, .34);
                    box-shadow: 0 25px 52px rgba(42, 49, 38, .12);
                }

                .about-v2-area-icon {
                    position: absolute;
                    left: 18px;
                    top: 18px;
                    width: 40px;
                    height: 40px;
                    display: grid;
                    place-items: center;
                    border-radius: 14px;
                    background: rgba(143, 149, 127, .12);
                    color: var(--green, #7f8a6f);
                }

                .about-v2-area small {
                    display: block;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: .66rem;
                    font-weight: 700;
                    letter-spacing: .12em;
                    text-transform: uppercase;
                    color: var(--green, #7f8a6f);
                }

                .about-v2-area h4 {
                    margin: 9px 0 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: 1.07rem;
                    line-height: 1.35;
                    color: var(--ink, #30352e);
                }

                @media (max-width: 1050px) {
                    .about-v2-layout {
                        grid-template-columns: 1fr;
                    }

                    .about-v2-portrait-card {
                        min-height: auto;
                        display: grid;
                        grid-template-columns: minmax(240px, .72fr) minmax(0, 1.28fr);
                        gap: 28px;
                    }

                    .about-v2-photo {
                        height: 390px;
                    }

                    .about-v2-person {
                        align-self: center;
                        padding: 20px 20px 88px 0;
                    }

                    .about-v2-specialty {
                        left: calc(50% + 4px);
                        right: 28px;
                    }
                }

                @media (max-width: 800px) {
                    .about-v2-header {
                        grid-template-columns: 1fr;
                        gap: 18px;
                    }

                    .about-v2-story-top {
                        display: block;
                    }

                    .about-v2-link {
                        margin-top: 13px;
                    }

                    .about-v2-paragraphs,
                    .about-v2-timeline,
                    .about-v2-bottom-grid {
                        grid-template-columns: 1fr;
                    }

                    .about-v2-paragraphs p:first-child {
                        grid-column: auto;
                    }

                    .about-v2-areas {
                        grid-template-rows: none;
                    }
                }

                @media (max-width: 620px) {
                    .about-v2-section {
                        padding: 64px 0 82px;
                    }

                    .about-v2-layout {
                        margin-top: 20px;
                    }

                    .about-v2-portrait-card {
                        display: block;
                        padding: 14px;
                        border-radius: 24px;
                    }

                    .about-v2-photo {
                        height: min(115vw, 440px);
                    }

                    .about-v2-person {
                        padding: 22px 7px 96px;
                    }

                    .about-v2-profile-detail {
                        grid-template-columns: 1fr;
                        gap: 5px;
                        padding: 12px 0;
                    }

                    .about-v2-specialty {
                        left: 21px;
                        right: 21px;
                        bottom: 18px;
                    }

                    .about-v2-story,
                    .about-v2-values {
                        padding: 22px;
                        border-radius: 24px;
                    }

                    .about-v2-story h3 {
                        font-size: clamp(1.9rem, 10vw, 2.8rem);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .about-v2-photo img,
                    .about-v2-area,
                    .about-v2-link svg {
                        transition: none;
                    }

                    .about-v2-portrait-card:hover .about-v2-photo img,
                    .about-v2-area:hover,
                    .about-v2-link:hover svg {
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
}