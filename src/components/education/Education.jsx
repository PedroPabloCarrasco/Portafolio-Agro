import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';
import { useLanguage } from '../../context/LanguageContext';

const supportedLanguages = ['Español', 'English', 'Português'];

const fallbackContentByLanguage = {
    Español: {
        sectionTitle: 'Formación académica',
        sectionSubtitle:
            'Trayectoria universitaria, especialización internacional y aprendizaje continuo',
        aboutLabel: 'Perfil académico',
        aboutTitle:
            'Formación interdisciplinaria para comprender y transformar los sistemas agroalimentarios',
        aboutText:
            'Doctora en Territorio, Patrimonio y Medio Ambiente, Máster en Agricultura y Ganadería Ecológica e Ingeniera Agrónoma. Su formación integra agroecología, producción vegetal, metabolismo agrario, sustentabilidad, gestión territorial y metodologías participativas.',
        tags: [
            'Agroecología',
            'Sistemas alimentarios',
            'Sustentabilidad',
            'Territorio',
            'Investigación aplicada',
        ],
        photoLabel: 'Trabajo territorial',
        photoTitle:
            'Aprendizaje situado junto a agricultores, comunidades y equipos técnicos',
        photoBadge: 'Chile · España · Portugal',
        degreeLabel: 'Grados académicos',
        degreeTranslations: {
            Doctorado: 'Doctorado',
            Máster: 'Máster',
            Licenciatura: 'Licenciatura',
            tituloProfesional: 'Título profesional',
        },
        institutionConnector: '·',
        languageLabel: 'Idiomas',
        focusLabel: 'Enfoque profesional',
        focusTitle:
            'La formación académica como base para una agroecología aplicada, participativa y territorial',
        focusText:
            'Su trayectoria combina formación científica, experiencia de campo y docencia universitaria. Este enfoque permite vincular el conocimiento académico con las necesidades reales de agricultores, comunidades rurales, instituciones públicas y sistemas alimentarios locales.',
    },
    English: {
        sectionTitle: 'Academic background',
        sectionSubtitle:
            'University education, international specialization and continuous learning',
        aboutLabel: 'Academic profile',
        aboutTitle:
            'Interdisciplinary training to understand and transform food systems',
        aboutText:
            'PhD in Territory, Heritage and Environment, Master in Organic Agriculture and Livestock, and Agricultural Engineer. Her training integrates agroecology, plant production, agrarian metabolism, sustainability, territorial management and participatory methodologies.',
        tags: [
            'Agroecology',
            'Food systems',
            'Sustainability',
            'Territory',
            'Applied research',
        ],
        photoLabel: 'Territorial work',
        photoTitle:
            'Situated learning with farmers, communities and technical teams',
        photoBadge: 'Chile · Spain · Portugal',
        degreeLabel: 'Academic degrees',
        degreeTranslations: {
            Doctorado: 'Doctorate',
            Máster: 'Master',
            Licenciatura: 'Bachelor degree',
            tituloProfesional: 'Professional degree',
        },
        institutionConnector: '·',
        languageLabel: 'Languages',
        focusLabel: 'Professional approach',
        focusTitle:
            'Academic training as the foundation for applied, participatory and territorial agroecology',
        focusText:
            'Her career combines scientific training, field experience and university teaching, linking academic knowledge with the real needs of farmers, rural communities, public institutions and local food systems.',
    },
    Português: {
        sectionTitle: 'Formação acadêmica',
        sectionSubtitle:
            'Trajetória universitária, especialização internacional e aprendizagem contínua',
        aboutLabel: 'Perfil acadêmico',
        aboutTitle:
            'Formação interdisciplinar para compreender e transformar os sistemas alimentares',
        aboutText:
            'Doutora em Território, Patrimônio e Meio Ambiente, Mestre em Agricultura e Pecuária Ecológica e Engenheira Agrônoma. Sua formação integra agroecologia, produção vegetal, metabolismo agrário, sustentabilidade, gestão territorial e metodologias participativas.',
        tags: [
            'Agroecologia',
            'Sistemas alimentares',
            'Sustentabilidade',
            'Território',
            'Pesquisa aplicada',
        ],
        photoLabel: 'Trabalho territorial',
        photoTitle:
            'Aprendizagem situada com agricultores, comunidades e equipes técnicas',
        photoBadge: 'Chile · Espanha · Portugal',
        degreeLabel: 'Graus acadêmicos',
        degreeTranslations: {
            Doctorado: 'Doutorado',
            Máster: 'Mestrado',
            Licenciatura: 'Licenciatura',
            tituloProfesional: 'Título profissional',
        },
        institutionConnector: '·',
        languageLabel: 'Idiomas',
        focusLabel: 'Abordagem profissional',
        focusTitle:
            'A formação acadêmica como base para uma agroecologia aplicada, participativa e territorial',
        focusText:
            'Sua trajetória combina formação científica, experiência de campo e docência universitária, articulando o conhecimento acadêmico com as necessidades reais de agricultores, comunidades rurais, instituições públicas e sistemas alimentares locais.',
    },
};

const fallbackDegrees = [
    {
        code: 'PhD',
        badge: 'Doctorado',
        title: 'Doctora en Territorio, Patrimonio y Medio Ambiente',
        institution: 'Universidad de Granada, España',
        year: '2020 — 2023',
        note: 'Especialidad en Agroecología. Tesis sobre transiciones socioecológicas en la agricultura familiar campesina de Chile.',
    },
    {
        code: 'MSc',
        badge: 'Máster',
        title: 'Máster Oficial en Agricultura y Ganadería Ecológica',
        institution: 'Universidad Pablo de Olavide, Sevilla, España',
        year: '2017 — 2018',
        note: 'Especialización en metabolismo agrario y eficiencia energética de sistemas agrarios.',
    },
    {
        code: 'Lic.',
        badge: 'Licenciatura',
        title: 'Licenciada en Agronomía',
        institution: 'Universidad Católica de Temuco, Chile',
        year: '2004',
        note: 'Especialidad en producción vegetal y evaluación de sustentabilidad agraria mediante metodología MESMIS.',
    },
    {
        code: 'Ing.',
        badge: 'Ingeniera Agrónoma',
        title: 'Ingeniera Agrónoma',
        institution: 'Universidad Católica de Temuco, Chile',
        year: '2005',
        note: 'Formación profesional en producción agrícola, sustentabilidad y gestión de sistemas productivos.',
    },
    {
        code: 'ETSIAM',
        badge: 'Estudios internacionales',
        title: 'Estudios de Ingeniería Agronómica y Montes',
        institution: 'Universidad de Córdoba, España',
        year: '2000 — 2003',
        note: 'Formación complementaria en agroecología, ecología política, etnoecología y desarrollo rural.',
    },
];

const fallbackLanguages = [
    {
        lang: 'Español',
        level: 'Lengua materna',
        description:
            'Comunicación académica, profesional y territorial.',
        code: 'Nativo',
    },
    {
        lang: 'Português',
        level: 'Nivel avanzado',
        description:
            'Uso académico y profesional en docencia, investigación y gestión institucional.',
        code: 'C1',
    },
    {
        lang: 'English',
        level: 'Nivel intermedio alto',
        description:
            'Lectura académica, comunicación profesional y participación en actividades internacionales.',
        code: 'B1–B2',
    },
];


function hasText(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

function getText(savedValue, fallbackValue) {
    return hasText(savedValue) ? savedValue : fallbackValue;
}

function getArray(savedValue, fallbackValue) {
    return Array.isArray(savedValue) && savedValue.length > 0
        ? savedValue
        : fallbackValue;
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

    return <Component style={style}>{fallback}</Component>;
}

function TimelineDot({ index, code }) {
    const backgrounds = [
        'linear-gradient(135deg, rgba(73,99,77,0.16), rgba(73,99,77,0.28))',
        'linear-gradient(135deg, rgba(145,166,122,0.18), rgba(145,166,122,0.32))',
        'linear-gradient(135deg, rgba(181,143,104,0.18), rgba(181,143,104,0.3))',
    ];

    return (
        <div
            aria-hidden="true"
            style={{
                width: '54px',
                height: '54px',
                borderRadius: '18px',
                background:
                    backgrounds[index % backgrounds.length],
                border: '1px solid rgba(73,99,77,0.12)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--ink)',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                flexShrink: 0,
            }}
        >
            {code || String(index + 1)}
        </div>
    );
}

function getDegreeTranslationKey(badge) {
    const degreeKeyMap = {
        Doctorado: 'Doctorado',
        Máster: 'Máster',
        Magíster: 'Máster',
        Licenciatura: 'Licenciatura',
        Ingeniería: 'tituloProfesional',
        'Ingeniera Agrónoma': 'tituloProfesional',
        'Título profesional': 'tituloProfesional',
    };

    return degreeKeyMap[badge] ?? null;
}

export default function Education() {
    const { language } = useLanguage();
    const { content } = useEditor();

    const activeLanguage = supportedLanguages.includes(language)
        ? language
        : 'Español';

    const formation = content?.formation ?? {};
    const languagePath = `formation.contentByLanguage.${activeLanguage}`;

    const savedLocalized =
        formation?.contentByLanguage?.[activeLanguage] ??
        formation?.contentByLanguage?.Español ??
        {};

    const fallbackLocalized =
        fallbackContentByLanguage[activeLanguage] ??
        fallbackContentByLanguage.Español;

    const degreeItems = getArray(formation.items, fallbackDegrees);
    const languageSkills = getArray(
        formation.languages,
        fallbackLanguages,
    );
    const tags = getArray(savedLocalized.tags, fallbackLocalized.tags);


    const sectionTitle = getText(
        savedLocalized.sectionTitle,
        fallbackLocalized.sectionTitle,
    );

    const sectionSubtitle = getText(
        savedLocalized.sectionSubtitle,
        fallbackLocalized.sectionSubtitle,
    );

    const useEditableSectionTitle =
        hasText(savedLocalized.sectionTitle) ||
        hasText(savedLocalized.sectionSubtitle);

    return (
        <section id="formacion" className="education-section">
            <Container>
                {useEditableSectionTitle ? (
                    <SectionTitle
                        titlePath={`${languagePath}.sectionTitle`}
                        subtitlePath={`${languagePath}.sectionSubtitle`}
                    />
                ) : (
                    <header className="education-heading">
                        <span>Trayectoria académica</span>
                        <h2>{sectionTitle}</h2>
                        <p>{sectionSubtitle}</p>
                    </header>
                )}

                <div className="education-intro-grid education-intro-grid-single">
                    <Card className="education-about-card">
                        <EditableOrFallback
                            path={`${languagePath}.aboutLabel`}
                            value={savedLocalized.aboutLabel}
                            fallback={fallbackLocalized.aboutLabel}
                            style={{
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
                            path={`${languagePath}.aboutTitle`}
                            value={savedLocalized.aboutTitle}
                            fallback={fallbackLocalized.aboutTitle}
                            multiline
                            style={{
                                marginTop: '10px',
                                fontFamily:
                                    'Playfair Display, Georgia, serif',
                                fontSize:
                                    'clamp(1.55rem, 2vw, 2rem)',
                                fontWeight: '700',
                                lineHeight: '1.25',
                                color: 'var(--ink)',
                            }}
                        />

                        <EditableOrFallback
                            as="p"
                            path={`${languagePath}.aboutText`}
                            value={savedLocalized.aboutText}
                            fallback={fallbackLocalized.aboutText}
                            multiline
                            style={{
                                marginTop: '16px',
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.98rem',
                                lineHeight: '1.8',
                                color: 'var(--muted)',
                                whiteSpace: 'pre-line',
                            }}
                        />

                        <div className="education-tags">
                            {tags.map((tag, index) => (
                                <EditableOrFallback
                                    key={`formation-tag-${activeLanguage}-${index}`}
                                    as="span"
                                    path={`${languagePath}.tags.${index}`}
                                    value={savedLocalized.tags?.[index]}
                                    fallback={tag}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '8px 12px',
                                        borderRadius: '999px',
                                        background:
                                            'rgba(73,99,77,0.08)',
                                        border:
                                            '1px solid rgba(73,99,77,0.1)',
                                        color: 'var(--green)',
                                        fontFamily:
                                            'Inter, system-ui, sans-serif',
                                        fontSize: '0.78rem',
                                        fontWeight: '600',
                                    }}
                                />
                            ))}
                        </div>
                    </Card>

                </div>

                <EditableOrFallback
                    as="p"
                    path={`${languagePath}.degreeLabel`}
                    value={savedLocalized.degreeLabel}
                    fallback={fallbackLocalized.degreeLabel}
                    style={{
                        marginBottom: '16px',
                        fontFamily:
                            'Inter, system-ui, sans-serif',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--green)',
                    }}
                />

                <div className="education-degree-list">
                    {degreeItems.map((item, index) => {
                        const savedItem = formation.items?.[index] ?? {};
                        const fallbackItem =
                            fallbackDegrees[index] ?? item;
                        const translationKey =
                            getDegreeTranslationKey(
                                savedItem.badge ??
                                item.badge ??
                                fallbackItem.badge,
                            );

                        return (
                            <Card
                                key={`formation-degree-${index}`}
                                className="education-degree-card"
                            >
                                <TimelineDot
                                    index={index}
                                    code={
                                        savedItem.code ??
                                        item.code ??
                                        fallbackItem.code
                                    }
                                />

                                <div>
                                    <div className="education-degree-header">
                                        <div style={{ minWidth: 0 }}>
                                            {translationKey ? (
                                                <EditableOrFallback
                                                    path={`${languagePath}.degreeTranslations.${translationKey}`}
                                                    value={
                                                        savedLocalized
                                                            .degreeTranslations?.[
                                                        translationKey
                                                        ]
                                                    }
                                                    fallback={
                                                        fallbackLocalized
                                                            .degreeTranslations?.[
                                                        translationKey
                                                        ] ??
                                                        item.badge ??
                                                        fallbackItem.badge
                                                    }
                                                    style={{
                                                        fontFamily:
                                                            'Inter, system-ui, sans-serif',
                                                        fontSize:
                                                            '0.72rem',
                                                        fontWeight: 700,
                                                        letterSpacing:
                                                            '0.18em',
                                                        textTransform:
                                                            'uppercase',
                                                        color:
                                                            'var(--green)',
                                                    }}
                                                />
                                            ) : (
                                                <EditableOrFallback
                                                    path={`formation.items.${index}.badge`}
                                                    value={savedItem.badge}
                                                    fallback={
                                                        item.badge ??
                                                        fallbackItem.badge
                                                    }
                                                    style={{
                                                        fontFamily:
                                                            'Inter, system-ui, sans-serif',
                                                        fontSize:
                                                            '0.72rem',
                                                        fontWeight: 700,
                                                        letterSpacing:
                                                            '0.18em',
                                                        textTransform:
                                                            'uppercase',
                                                        color:
                                                            'var(--green)',
                                                    }}
                                                />
                                            )}

                                            <EditableOrFallback
                                                as="h3"
                                                path={`formation.items.${index}.title`}
                                                value={savedItem.title}
                                                fallback={
                                                    item.title ??
                                                    fallbackItem.title
                                                }
                                                multiline
                                                style={{
                                                    marginTop: '6px',
                                                    fontFamily:
                                                        'Playfair Display, Georgia, serif',
                                                    fontSize: '1.4rem',
                                                    lineHeight: '1.3',
                                                    color:
                                                        'var(--ink)',
                                                }}
                                            />
                                        </div>

                                        <EditableOrFallback
                                            as="span"
                                            path={`formation.items.${index}.year`}
                                            value={savedItem.year}
                                            fallback={
                                                item.year ??
                                                fallbackItem.year
                                            }
                                            style={{
                                                flexShrink: 0,
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.8rem',
                                                color:
                                                    'var(--muted)',
                                            }}
                                        />
                                    </div>

                                    <div className="education-degree-meta">
                                        <EditableOrFallback
                                            as="span"
                                            path={`formation.items.${index}.institution`}
                                            value={savedItem.institution}
                                            fallback={
                                                item.institution ??
                                                fallbackItem.institution
                                            }
                                        />

                                        <span aria-hidden="true">
                                            {fallbackLocalized.institutionConnector}
                                        </span>

                                        <EditableOrFallback
                                            as="span"
                                            path={`formation.items.${index}.note`}
                                            value={savedItem.note}
                                            fallback={
                                                item.note ??
                                                fallbackItem.note
                                            }
                                            multiline
                                        />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <Card className="education-languages-card">
                    <EditableOrFallback
                        path={`${languagePath}.languageLabel`}
                        value={savedLocalized.languageLabel}
                        fallback={fallbackLocalized.languageLabel}
                        style={{
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--green)',
                        }}
                    />

                    <div className="education-language-list">
                        {languageSkills.map((item, index) => {
                            const savedItem =
                                formation.languages?.[index] ??
                                {};
                            const fallbackItem =
                                fallbackLanguages[index] ??
                                item;

                            return (
                                <div
                                    key={`formation-language-${index}`}
                                    className="education-language-item"
                                >
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <EditableOrFallback
                                            path={`formation.languages.${index}.lang`}
                                            value={savedItem.lang}
                                            fallback={
                                                item.lang ??
                                                fallbackItem.lang
                                            }
                                            style={{
                                                fontFamily:
                                                    'Playfair Display, Georgia, serif',
                                                fontSize: '1.05rem',
                                                color:
                                                    'var(--ink)',
                                            }}
                                        />

                                        <EditableOrFallback
                                            as="p"
                                            path={`formation.languages.${index}.level`}
                                            value={savedItem.level}
                                            fallback={
                                                item.level ??
                                                fallbackItem.level
                                            }
                                            style={{
                                                marginTop: '4px',
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.82rem',
                                                color:
                                                    'var(--muted)',
                                            }}
                                        />

                                        <EditableOrFallback
                                            as="p"
                                            path={`formation.languages.${index}.description`}
                                            value={
                                                savedItem.description
                                            }
                                            fallback={
                                                item.description ??
                                                fallbackItem.description
                                            }
                                            multiline
                                            style={{
                                                marginTop: '7px',
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.78rem',
                                                lineHeight: '1.6',
                                                color:
                                                    'var(--muted)',
                                            }}
                                        />
                                    </div>

                                    <EditableOrFallback
                                        as="span"
                                        path={`formation.languages.${index}.code`}
                                        value={savedItem.code}
                                        fallback={
                                            item.code ??
                                            fallbackItem.code
                                        }
                                        style={{
                                            padding: '8px 12px',
                                            borderRadius: '999px',
                                            background:
                                                'rgba(73,99,77,0.08)',
                                            color: 'var(--green)',
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.78rem',
                                            fontWeight: '600',
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Card>

                <Card className="education-focus-card">
                    <EditableOrFallback
                        path={`${languagePath}.focusLabel`}
                        value={savedLocalized.focusLabel}
                        fallback={fallbackLocalized.focusLabel}
                        style={{
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
                        path={`${languagePath}.focusTitle`}
                        value={savedLocalized.focusTitle}
                        fallback={fallbackLocalized.focusTitle}
                        multiline
                        style={{
                            marginTop: '10px',
                            maxWidth: '820px',
                            fontFamily:
                                'Playfair Display, Georgia, serif',
                            fontSize:
                                'clamp(1.5rem, 2.4vw, 2.15rem)',
                            lineHeight: '1.25',
                            color: 'var(--ink)',
                        }}
                    />

                    <EditableOrFallback
                        as="p"
                        path={`${languagePath}.focusText`}
                        value={savedLocalized.focusText}
                        fallback={fallbackLocalized.focusText}
                        multiline
                        style={{
                            marginTop: '16px',
                            maxWidth: '940px',
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.98rem',
                            lineHeight: '1.8',
                            color: 'var(--muted)',
                            whiteSpace: 'pre-line',
                        }}
                    />
                </Card>
            </Container>

            <style>{`
                .education-section {
                    padding: 28px 0 88px;
                }

                .education-heading {
                    max-width: 760px;
                    margin: 0 auto 38px;
                    text-align: center;
                }

                .education-heading > span {
                    display: block;
                    margin-bottom: 10px;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: var(--green);
                }

                .education-heading h2 {
                    margin: 0;
                    font-family: "Playfair Display", Georgia, serif;
                    font-size: clamp(2rem, 5vw, 3.4rem);
                    line-height: 1.08;
                    color: var(--ink);
                }

                .education-heading p {
                    max-width: 640px;
                    margin: 14px auto 0;
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--muted);
                }

                .education-intro-grid {
                    display: grid;
                    gap: 22px;
                    grid-template-columns: 1fr;
                    margin-bottom: 28px;
                }

                .education-intro-grid-single .education-about-card {
                    max-width: none;
                }

                .education-about-card,
                .education-degree-card,
                .education-languages-card,
                .education-focus-card {
                    transition:
                        transform 220ms ease,
                        box-shadow 220ms ease;
                }

                .education-about-card:hover,
                .education-degree-card:hover,
                .education-languages-card:hover,
                .education-focus-card:hover {
                    transform: translateY(-3px);
                    box-shadow:
                        0 22px 48px rgba(50,53,44,0.11);
                }

                .education-about-card {
                    padding: 28px;
                }

                .education-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 20px;
                }

                .education-degree-list {
                    display: grid;
                    gap: 18px;
                }

                .education-degree-card {
                    padding: 22px;
                    display: grid;
                    grid-template-columns:
                        auto minmax(0, 1fr);
                    gap: 16px;
                    align-items: start;
                }

                .education-degree-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    flex-wrap: wrap;
                    gap: 12px;
                }

                .education-degree-meta {
                    display: flex;
                    align-items: baseline;
                    flex-wrap: wrap;
                    gap: 5px;
                    margin-top: 10px;
                    font-family:
                        Inter, system-ui, sans-serif;
                    font-size: 0.92rem;
                    line-height: 1.6;
                    color: var(--muted);
                }

                .education-languages-card {
                    padding: 24px;
                }

                .education-language-list {
                    display: grid;
                    gap: 14px;
                    margin-top: 16px;
                }

                .education-language-item {
                    padding: 16px 18px;
                    border-radius: 20px;
                    background:
                        rgba(255,255,255,0.72);
                    border:
                        1px solid rgba(73,99,77,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                }


                /* Fuerza contraste oscuro incluso cuando EditableText
                   o estilos globales intentan aplicar texto blanco. */
                .education-section,
                .education-section p,
                .education-section h2,
                .education-section h3,
                .education-section h4,
                .education-section span,
                .education-section [contenteditable] {
                    color: var(--ink) !important;
                }

                .education-section .education-heading > span,
                .education-section .education-about-card > span,
                .education-section .education-languages-card > span,
                .education-section .education-focus-card > span,
                .education-section .education-degree-card [style*="text-transform: uppercase"],
                .education-section .education-language-item [style*="border-radius: 999px"] {
                    color: var(--green) !important;
                }

                .education-section .education-about-card p,
                .education-section .education-degree-meta,
                .education-section .education-degree-meta span,
                .education-section .education-language-item p,
                .education-section .education-focus-card p,
                .education-section .education-heading p {
                    color: var(--muted) !important;
                }

                .education-section [contenteditable="false"]:empty::before,
                .education-section [contenteditable="true"]:empty::before {
                    color: rgba(47, 53, 45, 0.48) !important;
                }

                .education-focus-card {
                    margin-top: 28px;
                    padding: 28px;
                    background:
                        linear-gradient(
                            145deg,
                            rgba(255,255,255,0.94),
                            rgba(248,248,241,0.88)
                        );
                    border:
                        1px solid rgba(73,99,77,0.12);
                }

                @media (max-width: 920px) {
                    .education-intro-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 640px) {
                    .education-section {
                        padding: 22px 0 68px;
                    }

                    .education-about-card,
                    .education-focus-card {
                        padding: 22px;
                    }

                    .education-degree-card {
                        grid-template-columns: 1fr;
                    }

                    .education-language-item {
                        align-items: flex-start;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .education-about-card,
                    .education-degree-card,
                    .education-languages-card,
                    .education-focus-card {
                        transition: none;
                    }

                    .education-about-card:hover,
                    .education-degree-card:hover,
                    .education-languages-card:hover,
                    .education-focus-card:hover {
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
}