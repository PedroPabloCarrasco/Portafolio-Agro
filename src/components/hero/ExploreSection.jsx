import Container from '../common/Container';
import Card from '../common/Card';
import EditableText from '../admin/EditableText';

import { degreeItems, languageSkills } from '../../data/profile';
import { defaultEditableContent } from '../../data/editableContent';
import { useLanguage } from '../../context/LanguageContext';
import { useEditor } from '../../context/EditorContext';

/* =========================================================
   CONTENIDO ESTRUCTURAL
   Estos valores no se editan desde la interfaz.
========================================================= */

const contentByLanguage = {
    Español: {
        degreeTranslations: {
            Doctorado: 'Doctorado',
            Máster: 'Máster',
            Magíster: 'Máster',
            Licenciatura: 'Licenciatura',
            'Título profesional': 'Título profesional',
            'Estudios universitarios': 'Estudios universitarios',
        },

        institutionConnector: '·',
    },

    English: {
        degreeTranslations: {
            Doctorado: 'Doctorate',
            Máster: "Master's degree",
            Magíster: "Master's degree",
            Licenciatura: "Bachelor's degree",
            'Título profesional': 'Professional degree',
            'Estudios universitarios': 'University studies',
        },

        institutionConnector: '·',
    },

    Português: {
        degreeTranslations: {
            Doctorado: 'Doutorado',
            Máster: 'Mestrado',
            Magíster: 'Mestrado',
            Licenciatura: 'Licenciatura',
            'Título profesional': 'Título profissional',
            'Estudios universitarios': 'Estudos universitários',
        },

        institutionConnector: '·',
    },
};

/* =========================================================
   TRADUCCIONES DE GRADOS ACADÉMICOS
========================================================= */

const degreeContentByLanguage = {
    Español: {
        Doctorado: {
            title: 'Doctora en Territorio, Patrimonio y Medio Ambiente',
            note: 'Especialidad en Agroecología · Mención Internacional',
        },

        Máster: {
            title: 'Máster Oficial en Agricultura y Ganadería Ecológica',
            note: 'Metabolismo agrario y eficiencia energética en sistemas agrarios',
        },

        Magíster: {
            title: 'Máster Oficial en Agricultura y Ganadería Ecológica',
            note: 'Metabolismo agrario y eficiencia energética en sistemas agrarios',
        },

        Licenciatura: {
            title: 'Licenciada en Agronomía',
            note: 'Especialidad en Producción Vegetal',
        },

        'Título profesional': {
            title: 'Ingeniera Agrónoma',
            note: 'Título profesional en Ingeniería Agronómica',
        },

        'Estudios universitarios': {
            title: 'Estudios de Ingeniería Agronómica y Montes',
            note: 'Escuela Técnica Superior de Ingeniería Agronómica y de Montes',
        },
    },

    English: {
        Doctorado: {
            title: 'PhD in Territory, Heritage and Environment',
            note: 'Specialization in Agroecology · International Mention',
        },

        Máster: {
            title:
                'Official Master’s Degree in Organic Agriculture and Livestock',
            note:
                'Agrarian metabolism and energy efficiency in agricultural systems',
        },

        Magíster: {
            title:
                'Official Master’s Degree in Organic Agriculture and Livestock',
            note:
                'Agrarian metabolism and energy efficiency in agricultural systems',
        },

        Licenciatura: {
            title: 'Bachelor’s Degree in Agronomy',
            note: 'Specialization in Plant Production',
        },

        'Título profesional': {
            title: 'Agricultural Engineer',
            note: 'Professional degree in Agricultural Engineering',
        },

        'Estudios universitarios': {
            title: 'Studies in Agricultural Engineering and Forestry',
            note:
                'Higher Technical School of Agricultural and Forestry Engineering',
        },
    },

    Português: {
        Doctorado: {
            title: 'Doutora em Território, Patrimônio e Meio Ambiente',
            note: 'Especialidade em Agroecologia · Menção Internacional',
        },

        Máster: {
            title: 'Mestrado Oficial em Agricultura e Pecuária Ecológicas',
            note:
                'Metabolismo agrário e eficiência energética em sistemas agrários',
        },

        Magíster: {
            title: 'Mestrado Oficial em Agricultura e Pecuária Ecológicas',
            note:
                'Metabolismo agrário e eficiência energética em sistemas agrários',
        },

        Licenciatura: {
            title: 'Licenciada em Agronomia',
            note: 'Especialidade em Produção Vegetal',
        },

        'Título profesional': {
            title: 'Engenheira Agrônoma',
            note: 'Título profissional em Engenharia Agronômica',
        },

        'Estudios universitarios': {
            title: 'Estudos em Engenharia Agronômica e Florestal',
            note:
                'Escola Técnica Superior de Engenharia Agronômica e Florestal',
        },
    },
};

/* =========================================================
   TRADUCCIONES DE IDIOMAS
========================================================= */

const languageContentByLanguage = {
    Español: {
        spanish: {
            name: 'Español',
            level: 'Lengua materna',
            description:
                'Dominio nativo oral, escrito, académico y profesional.',
        },

        portuguese: {
            name: 'Portugués',
            level: 'Nivel avanzado',
            description:
                'Uso académico y profesional en docencia, investigación y gestión institucional.',
        },

        english: {
            name: 'Inglés',
            level: 'Nivel intermedio alto',
            description:
                'Lectura académica, comunicación profesional y participación en actividades internacionales.',
        },
    },

    English: {
        spanish: {
            name: 'Spanish',
            level: 'Native language',
            description:
                'Native oral, written, academic, and professional proficiency.',
        },

        portuguese: {
            name: 'Portuguese',
            level: 'Advanced level',
            description:
                'Academic and professional use in teaching, research, and institutional management.',
        },

        english: {
            name: 'English',
            level: 'Upper-intermediate level',
            description:
                'Academic reading, professional communication, and participation in international activities.',
        },
    },

    Português: {
        spanish: {
            name: 'Espanhol',
            level: 'Língua materna',
            description:
                'Domínio nativo oral, escrito, acadêmico e profissional.',
        },

        portuguese: {
            name: 'Português',
            level: 'Nível avançado',
            description:
                'Uso acadêmico e profissional em docência, pesquisa e gestão institucional.',
        },

        english: {
            name: 'Inglês',
            level: 'Nível intermediário alto',
            description:
                'Leitura acadêmica, comunicação profissional e participação em atividades internacionais.',
        },
    },
};

/* =========================================================
   ILUSTRACIÓN TERRITORIAL
========================================================= */

function ComalleFrame({ language }) {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '300px',
                overflow: 'hidden',
                borderRadius: '28px',
                background:
                    'linear-gradient(180deg, #cccdbf 0%, #aaa899 48%, #8f957f 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22)',
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 20%), radial-gradient(circle at 80% 18%, rgba(255,255,255,0.24), transparent 22%), radial-gradient(circle at 50% 72%, rgba(255,255,255,0.14), transparent 30%)',
                }}
            />

            <svg
                viewBox="0 0 640 420"
                aria-hidden="true"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <path
                    d="M0 282c70-42 123-60 176-60 68 0 121 20 186 60 56-34 112-51 168-51 48 0 89 11 110 25v164H0V282Z"
                    fill="rgba(52,54,47,0.24)"
                />

                <path
                    d="M78 250c24-70 67-119 128-148 8 48-2 98-30 150"
                    stroke="rgba(255,255,255,0.48)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M104 268c22-11 43-17 63-17 28 0 55 9 82 27"
                    stroke="rgba(255,255,255,0.38)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M445 210c29-51 65-82 109-94 9 48-1 98-30 148"
                    stroke="rgba(255,255,255,0.42)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M425 252c27-10 52-15 76-15 30 0 59 8 86 24"
                    stroke="rgba(255,255,255,0.36)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <circle
                    cx="220"
                    cy="154"
                    r="64"
                    fill="rgba(255,255,255,0.16)"
                />

                <path
                    d="M196 158c8-16 21-24 39-24 18 0 31 8 39 24"
                    stroke="rgba(255,255,255,0.82)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M194 180c11 8 24 12 41 12s30-4 41-12"
                    stroke="rgba(255,255,255,0.62)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M418 142c9-18 25-28 48-28 19 0 34 8 44 24 8 17 7 36-3 58-19-4-34-11-45-22-17-1-31-9-44-32z"
                    fill="rgba(255,255,255,0.14)"
                />
            </svg>

            <div
                style={{
                    position: 'absolute',
                    right: '18px',
                    bottom: '18px',
                    left: '18px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '16px 18px',
                    borderRadius: '22px',
                    border: '1px solid rgba(255,255,255,0.16)',
                    background: 'rgba(52,54,47,0.24)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }}
            >
                <div>
                    <EditableText
                        as="p"
                        path={`explore.${language}.photoLabel`}
                        style={{
                            margin: 0,
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.72rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.72)',
                        }}
                    />

                    <EditableText
                        as="p"
                        path={`explore.${language}.photoTitle`}
                        style={{
                            margin: '6px 0 0',
                            fontFamily:
                                'Playfair Display, Georgia, serif',
                            fontSize: '1.2rem',
                            lineHeight: 1.4,
                            color: '#ffffff',
                        }}
                    />
                </div>

                <EditableText
                    as="span"
                    path={`explore.${language}.photoBadge`}
                    style={{
                        flexShrink: 0,
                        padding: '8px 12px',
                        borderRadius: '999px',
                        border: '1px solid rgba(255,255,255,0.18)',
                        background: 'rgba(255,255,255,0.14)',
                        color: '#ffffff',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.78rem',
                    }}
                />
            </div>
        </div>
    );
}

/* =========================================================
   GRADOS ACADÉMICOS
========================================================= */

function DegreeSeal({ item, language, content }) {
    const badge = item?.badge ?? 'Título profesional';

    const fallbackDegree = {
        title: item?.title ?? 'Grado académico',
        note: item?.note ?? '',
    };

    const translatedDegree =
        degreeContentByLanguage?.[language]?.[badge] ??
        degreeContentByLanguage?.Español?.[badge] ??
        fallbackDegree;

    const translatedBadge =
        content?.degreeTranslations?.[badge] ??
        badge;

    const backgroundByDegree = {
        Doctorado:
            'linear-gradient(135deg, rgba(143,149,127,0.18), rgba(143,149,127,0.32))',

        Máster:
            'linear-gradient(135deg, rgba(204,205,191,0.48), rgba(143,149,127,0.24))',

        Magíster:
            'linear-gradient(135deg, rgba(204,205,191,0.48), rgba(143,149,127,0.24))',

        Licenciatura:
            'linear-gradient(135deg, rgba(170,168,153,0.22), rgba(204,205,191,0.5))',

        'Título profesional':
            'linear-gradient(135deg, rgba(143,149,127,0.16), rgba(170,168,153,0.32))',

        'Estudios universitarios':
            'linear-gradient(135deg, rgba(204,205,191,0.46), rgba(170,168,153,0.28))',
    };

    const institutionCode =
        item?.code ??
        (badge === 'Doctorado'
            ? 'UGR'
            : badge === 'Máster' || badge === 'Magíster'
                ? 'UPO'
                : badge === 'Estudios universitarios'
                    ? 'UCO'
                    : 'UCT');

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '56px minmax(0, 1fr)',
                gap: '14px',
                padding: '18px 0',
                borderTop: '1px solid rgba(143,149,127,0.2)',
            }}
        >
            <div
                aria-label={item?.institution ?? 'Institución académica'}
                style={{
                    width: '56px',
                    height: '56px',
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '18px',
                    border: '1px solid rgba(143,149,127,0.22)',
                    background:
                        backgroundByDegree[badge] ??
                        backgroundByDegree['Título profesional'],
                    color: 'var(--ink)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                }}
            >
                {institutionCode}
            </div>

            <div style={{ minWidth: 0 }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: '12px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            minWidth: 0,
                            flex: 1,
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.72rem',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'var(--green)',
                            }}
                        >
                            {translatedBadge}
                        </p>

                        <h3
                            style={{
                                margin: '6px 0 0',
                                fontFamily:
                                    'Playfair Display, Georgia, serif',
                                fontSize: '1.1rem',
                                lineHeight: 1.35,
                                color: 'var(--ink)',
                            }}
                        >
                            {translatedDegree.title}
                        </h3>
                    </div>

                    <span
                        style={{
                            flexShrink: 0,
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.78rem',
                            color: 'var(--muted)',
                        }}
                    >
                        {item?.year ?? ''}
                    </span>
                </div>

                <p
                    style={{
                        margin: '8px 0 0',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        color: 'var(--muted)',
                    }}
                >
                    {item?.institution ?? ''}

                    {item?.country ? (
                        <>
                            {' '}
                            {content?.institutionConnector ?? '·'}{' '}
                            {item.country}
                        </>
                    ) : null}
                </p>

                {translatedDegree.note ? (
                    <p
                        style={{
                            margin: '5px 0 0',
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.82rem',
                            lineHeight: 1.55,
                            color: 'var(--muted)',
                        }}
                    >
                        {translatedDegree.note}
                    </p>
                ) : null}
            </div>
        </div>
    );
}

/* =========================================================
   IDIOMAS
========================================================= */

function LanguageItem({ item, language }) {
    const languageId =
        item?.id ??
        (item?.lang === 'Español'
            ? 'spanish'
            : item?.lang === 'Portugués'
                ? 'portuguese'
                : 'english');

    const translatedLanguage =
        languageContentByLanguage?.[language]?.[languageId] ??
        languageContentByLanguage?.Español?.[languageId] ?? {
            name: item?.lang ?? 'Idioma',
            level: item?.level ?? '',
            description: item?.description ?? '',
        };

    return (
        <div
            style={{
                padding: '18px',
                borderRadius: '22px',
                border: '1px solid rgba(143,149,127,0.2)',
                background:
                    'linear-gradient(145deg, rgba(255,255,255,0.76), rgba(204,205,191,0.34))',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                }}
            >
                <div style={{ minWidth: 0 }}>
                    <p
                        style={{
                            margin: 0,
                            fontFamily:
                                'Playfair Display, Georgia, serif',
                            fontSize: '1.05rem',
                            color: 'var(--ink)',
                        }}
                    >
                        {translatedLanguage.name}
                    </p>

                    <p
                        style={{
                            margin: '4px 0 0',
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.82rem',
                            color: 'var(--muted)',
                        }}
                    >
                        {translatedLanguage.level}
                    </p>
                </div>

                <span
                    style={{
                        flexShrink: 0,
                        padding: '8px 12px',
                        borderRadius: '999px',
                        background: 'rgba(143,149,127,0.14)',
                        color: 'var(--green-deep)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                    }}
                >
                    {item?.code ?? ''}
                </span>
            </div>

            {translatedLanguage.description ? (
                <p
                    style={{
                        margin: '12px 0 0',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.8rem',
                        lineHeight: 1.55,
                        color: 'var(--muted)',
                    }}
                >
                    {translatedLanguage.description}
                </p>
            ) : null}
        </div>
    );
}

/* =========================================================
   SECCIÓN PRINCIPAL
========================================================= */

export default function ExploreSection() {
    const { language } = useLanguage();
    const { content: editableContent } = useEditor();

    const currentLanguage =
        contentByLanguage[language]
            ? language
            : 'Español';

    const staticContent =
        contentByLanguage[currentLanguage] ??
        contentByLanguage.Español;

    const defaultExplore =
        defaultEditableContent?.explore?.[currentLanguage] ??
        defaultEditableContent?.explore?.Español ??
        {};

    const savedExplore =
        editableContent?.explore?.[currentLanguage] ??
        {};

    const content = {
        ...staticContent,
        ...defaultExplore,
        ...savedExplore,
    };

    const tags = Array.isArray(content.tags)
        ? content.tags
        : [];

    return (
        <section
            id="explora"
            style={{
                position: 'relative',
                padding: '30px 0 90px',
            }}
        >
            <Container>
                <div
                    style={{
                        maxWidth: '760px',
                        margin: '0 auto 38px',
                        textAlign: 'center',
                    }}
                >
                    <EditableText
                        as="h2"
                        path={`explore.${currentLanguage}.sectionTitle`}
                        style={{
                            margin: 0,
                            fontFamily:
                                'Playfair Display, Georgia, serif',
                            fontSize:
                                'clamp(2rem, 4.5vw, 3.5rem)',
                            lineHeight: 1.08,
                            color: 'var(--ink)',
                        }}
                    />

                    <EditableText
                        as="p"
                        multiline
                        path={`explore.${currentLanguage}.sectionSubtitle`}
                        style={{
                            maxWidth: '680px',
                            margin: '14px auto 0',
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.98rem',
                            lineHeight: 1.75,
                            color: 'var(--muted)',
                        }}
                    />
                </div>

                <div
                    className="explore-main-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'minmax(0, 1.1fr) minmax(320px, 0.9fr)',
                        gap: '22px',
                        alignItems: 'stretch',
                    }}
                >
                    <Card
                        className="explore-about-card"
                        style={{
                            padding: '24px',
                            display: 'grid',
                            gridTemplateColumns:
                                'minmax(240px, 0.8fr) minmax(0, 1.2fr)',
                            gap: '22px',
                            alignItems: 'center',
                        }}
                    >
                        <ComalleFrame
                            language={currentLanguage}
                        />

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                            }}
                        >
                            <div>
                                <EditableText
                                    as="p"
                                    path={`explore.${currentLanguage}.aboutLabel`}
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
                                    multiline
                                    path={`explore.${currentLanguage}.aboutTitle`}
                                    style={{
                                        margin: '8px 0 0',
                                        fontFamily:
                                            'Playfair Display, Georgia, serif',
                                        fontSize:
                                            'clamp(1.45rem, 2.5vw, 1.85rem)',
                                        lineHeight: 1.25,
                                        color: 'var(--ink)',
                                    }}
                                />
                            </div>

                            <EditableText
                                as="p"
                                multiline
                                path={`explore.${currentLanguage}.aboutText`}
                                style={{
                                    margin: 0,
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',
                                    fontSize: '0.96rem',
                                    lineHeight: 1.8,
                                    color: 'var(--muted)',
                                }}
                            />

                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                }}
                            >
                                {tags.map((_, index) => (
                                    <EditableText
                                        key={`${currentLanguage}-tag-${index}`}
                                        as="span"
                                        path={`explore.${currentLanguage}.tags.${index}`}
                                        style={{
                                            display: 'inline-flex',
                                            padding: '8px 12px',
                                            borderRadius: '999px',
                                            border:
                                                '1px solid rgba(143,149,127,0.2)',
                                            background:
                                                'rgba(143,149,127,0.12)',
                                            color:
                                                'var(--green-deep)',
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.8rem',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card style={{ padding: '24px' }}>
                        <EditableText
                            as="p"
                            path={`explore.${currentLanguage}.degreeLabel`}
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

                        <div style={{ marginTop: '10px' }}>
                            {degreeItems.map((item, index) => (
                                <DegreeSeal
                                    key={
                                        item?.id ??
                                        `${item?.badge ?? 'degree'}-${index}`
                                    }
                                    item={item}
                                    language={currentLanguage}
                                    content={content}
                                />
                            ))}
                        </div>
                    </Card>

                    <Card style={{ padding: '24px' }}>
                        <EditableText
                            as="p"
                            path={`explore.${currentLanguage}.languageLabel`}
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

                        <div
                            style={{
                                display: 'grid',
                                gap: '14px',
                                marginTop: '16px',
                            }}
                        >
                            {languageSkills.map(
                                (item, index) => (
                                    <LanguageItem
                                        key={
                                            item?.id ??
                                            `language-${index}`
                                        }
                                        item={item}
                                        language={
                                            currentLanguage
                                        }
                                    />
                                ),
                            )}
                        </div>
                    </Card>

                    <Card
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            padding: '26px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            color: '#ffffff',
                            background:
                                'linear-gradient(135deg, #737966 0%, #8f957f 55%, #aaa899 100%)',
                        }}
                    >
                        <svg
                            viewBox="0 0 180 220"
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                right: '-36px',
                                bottom: '-48px',
                                width: '180px',
                                height: '220px',
                                opacity: 0.12,
                                pointerEvents: 'none',
                            }}
                        >
                            <path
                                d="M84 216C81 164 89 112 126 34"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            <path
                                d="M105 89C137 81 153 60 154 31C125 34 107 53 105 89Z"
                                fill="#fff"
                            />

                            <path
                                d="M93 129C57 124 38 103 37 72C69 75 90 94 93 129Z"
                                fill="#fff"
                            />

                            <path
                                d="M88 170C118 165 135 148 137 121C109 123 91 142 88 170Z"
                                fill="#fff"
                            />
                        </svg>

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            <EditableText
                                as="p"
                                path={`explore.${currentLanguage}.focusLabel`}
                                style={{
                                    margin: 0,
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',
                                    fontSize: '0.72rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color:
                                        'rgba(255,255,255,0.7)',
                                }}
                            />

                            <EditableText
                                as="h3"
                                multiline
                                path={`explore.${currentLanguage}.focusTitle`}
                                style={{
                                    margin: '10px 0 0',
                                    fontFamily:
                                        'Playfair Display, Georgia, serif',
                                    fontSize:
                                        'clamp(1.4rem, 2.3vw, 1.65rem)',
                                    lineHeight: 1.35,
                                    color: '#ffffff',
                                }}
                            />
                        </div>

                        <EditableText
                            as="p"
                            multiline
                            path={`explore.${currentLanguage}.focusText`}
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                margin: '20px 0 0',
                                maxWidth: '95%',
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.94rem',
                                lineHeight: 1.8,
                                color:
                                    'rgba(255,255,255,0.86)',
                            }}
                        />
                    </Card>
                </div>
            </Container>

            <style>{`
                @media (max-width: 1050px) {
                    .explore-main-grid {
                        grid-template-columns: 1fr !important;
                    }
                }

                @media (max-width: 760px) {
                    .explore-about-card {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}