import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { degreeItems, languageSkills } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

const contentByLanguage = {
    Español: {
        sectionTitle: 'Trayectoria y formación',
        sectionSubtitle:
            'Una carrera dedicada a la agroecología, la investigación aplicada, la docencia universitaria y el trabajo territorial.',

        aboutLabel: 'Sobre mí',
        aboutTitle: 'Agroecología, territorio y sistemas alimentarios sostenibles',
        aboutText:
            'Especialista en agroecología, diseño y planificación de agroecosistemas, con experiencia en procesos de transición agroecológica desarrollados junto a estudiantes, agricultores, comunidades rurales y equipos técnicos. Su trabajo integra investigación aplicada, docencia universitaria y trabajo de campo, vinculando el conocimiento académico con los desafíos reales de los territorios agrarios.',

        photoLabel: 'Trabajo territorial',
        photoTitle: 'Territorio, comunidad y paisaje',
        photoBadge: 'Agroecología',

        degreeLabel: 'Grados académicos',
        languageLabel: 'Idiomas',

        focusLabel: 'Enfoque profesional',
        focusTitle:
            'Investigación aplicada, conocimiento situado y transformación territorial.',
        focusText:
            'Su trabajo articula ciencia, metodologías participativas y conocimiento local para fortalecer sistemas agroalimentarios sostenibles, promover la biodiversidad funcional y acompañar procesos de transición agroecológica junto a agricultores, comunidades, estudiantes e instituciones.',

        tags: [
            'Agroecología',
            'Sistemas alimentarios',
            'Biodiversidad funcional',
            'Desarrollo rural',
        ],

        degreeTranslations: {
            Doctorado: 'Doctorado',
            Máster: 'Máster',
            Licenciatura: 'Licenciatura',
            'Título profesional': 'Título profesional',
        },

        institutionConnector: '·',
    },

    English: {
        sectionTitle: 'Career and education',
        sectionSubtitle:
            'A career dedicated to agroecology, applied research, university teaching, and territorial engagement.',

        aboutLabel: 'About me',
        aboutTitle: 'Agroecology, territory, and sustainable food systems',
        aboutText:
            'Specialist in agroecology and the design and planning of agroecosystems, with experience in agroecological transition processes developed alongside students, farmers, rural communities, and technical teams. Her work combines applied research, university teaching, and fieldwork, connecting academic knowledge with the real challenges of agricultural territories.',

        photoLabel: 'Territorial work',
        photoTitle: 'Territory, community, and landscape',
        photoBadge: 'Agroecology',

        degreeLabel: 'Academic degrees',
        languageLabel: 'Languages',

        focusLabel: 'Professional approach',
        focusTitle:
            'Applied research, situated knowledge, and territorial transformation.',
        focusText:
            'Her work combines science, participatory methodologies, and local knowledge to strengthen sustainable food systems, promote functional biodiversity, and support agroecological transition processes alongside farmers, communities, students, and institutions.',

        tags: [
            'Agroecology',
            'Food systems',
            'Functional biodiversity',
            'Rural development',
        ],

        degreeTranslations: {
            Doctorado: 'Doctorate',
            Máster: "Master's degree",
            Licenciatura: "Bachelor's degree",
            'Título profesional': 'Professional degree',
        },

        institutionConnector: '·',
    },

    Português: {
        sectionTitle: 'Trajetória e formação',
        sectionSubtitle:
            'Uma carreira dedicada à agroecologia, à pesquisa aplicada, à docência universitária e ao trabalho territorial.',

        aboutLabel: 'Sobre mim',
        aboutTitle: 'Agroecologia, território e sistemas alimentares sustentáveis',
        aboutText:
            'Especialista em agroecologia, desenho e planejamento de agroecossistemas, com experiência em processos de transição agroecológica desenvolvidos junto a estudantes, agricultores, comunidades rurais e equipes técnicas. Seu trabalho integra pesquisa aplicada, docência universitária e trabalho de campo, vinculando o conhecimento acadêmico aos desafios reais dos territórios agrários.',

        photoLabel: 'Trabalho territorial',
        photoTitle: 'Território, comunidade e paisagem',
        photoBadge: 'Agroecologia',

        degreeLabel: 'Graus acadêmicos',
        languageLabel: 'Idiomas',

        focusLabel: 'Abordagem profissional',
        focusTitle:
            'Pesquisa aplicada, conhecimento situado e transformação territorial.',
        focusText:
            'Seu trabalho articula ciência, metodologias participativas e conhecimento local para fortalecer sistemas alimentares sustentáveis, promover a biodiversidade funcional e acompanhar processos de transição agroecológica junto a agricultores, comunidades, estudantes e instituições.',

        tags: [
            'Agroecologia',
            'Sistemas alimentares',
            'Biodiversidade funcional',
            'Desenvolvimento rural',
        ],

        degreeTranslations: {
            Doctorado: 'Doutorado',
            Máster: 'Mestrado',
            Licenciatura: 'Licenciatura',
            'Título profesional': 'Título profissional',
        },

        institutionConnector: '·',
    },
};

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
        Licenciatura: {
            title: 'Licenciada en Agronomía',
            note: 'Especialidad en Producción Vegetal',
        },
        'Título profesional': {
            title: 'Ingeniera Agrónoma',
            note: 'Formación profesional en ciencias agronómicas',
        },
    },

    English: {
        Doctorado: {
            title: 'PhD in Territory, Heritage and Environment',
            note: 'Specialization in Agroecology · International Mention',
        },
        Máster: {
            title: 'Official Master’s Degree in Organic Agriculture and Livestock',
            note: 'Agrarian metabolism and energy efficiency in agricultural systems',
        },
        Licenciatura: {
            title: 'Bachelor’s Degree in Agronomy',
            note: 'Specialization in Plant Production',
        },
        'Título profesional': {
            title: 'Agricultural Engineer',
            note: 'Professional training in agricultural sciences',
        },
    },

    Português: {
        Doctorado: {
            title: 'Doutora em Território, Patrimônio e Meio Ambiente',
            note: 'Especialidade em Agroecologia · Menção Internacional',
        },
        Máster: {
            title: 'Mestrado Oficial em Agricultura e Pecuária Ecológicas',
            note: 'Metabolismo agrário e eficiência energética em sistemas agrários',
        },
        Licenciatura: {
            title: 'Licenciada em Agronomia',
            note: 'Especialidade em Produção Vegetal',
        },
        'Título profesional': {
            title: 'Engenheira Agrônoma',
            note: 'Formação profissional em ciências agronômicas',
        },
    },
};

const languageContentByLanguage = {
    Español: {
        Español: {
            name: 'Español',
            level: 'Lengua materna',
            description: 'Dominio nativo oral y escrito.',
        },
        Portugués: {
            name: 'Portugués',
            level: 'Nivel avanzado',
            description:
                'Uso académico y profesional en docencia, investigación y gestión institucional.',
        },
        Inglés: {
            name: 'Inglés',
            level: 'Nivel intermedio alto',
            description:
                'Lectura académica, comunicación profesional y participación en actividades internacionales.',
        },
    },

    English: {
        Español: {
            name: 'Spanish',
            level: 'Native language',
            description: 'Native oral and written proficiency.',
        },
        Portugués: {
            name: 'Portuguese',
            level: 'Advanced level',
            description:
                'Academic and professional use in teaching, research, and institutional management.',
        },
        Inglés: {
            name: 'English',
            level: 'Upper-intermediate level',
            description:
                'Academic reading, professional communication, and participation in international activities.',
        },
    },

    Português: {
        Español: {
            name: 'Espanhol',
            level: 'Língua materna',
            description: 'Domínio nativo oral e escrito.',
        },
        Portugués: {
            name: 'Português',
            level: 'Nível avançado',
            description:
                'Uso acadêmico e profissional em docência, pesquisa e gestão institucional.',
        },
        Inglés: {
            name: 'Inglês',
            level: 'Nível intermediário alto',
            description:
                'Leitura acadêmica, comunicação profissional e participação em atividades internacionais.',
        },
    },
};

function ComalleFrame({ content }) {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '300px',
                borderRadius: '28px',
                overflow: 'hidden',
                background:
                    'linear-gradient(180deg, rgba(213,226,192,0.95) 0%, rgba(163,186,135,0.9) 42%, rgba(86,118,77,0.94) 100%)',
                boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.18)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.42), transparent 18%), radial-gradient(circle at 80% 18%, rgba(255,255,255,0.28), transparent 20%), radial-gradient(circle at 50% 72%, rgba(255,255,255,0.18), transparent 28%)',
                }}
            />

            <svg
                viewBox="0 0 640 420"
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                }}
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    d="M0 282c70-42 123-60 176-60 68 0 121 20 186 60 56-34 112-51 168-51 48 0 89 11 110 25v164H0V282Z"
                    fill="rgba(46,64,43,0.26)"
                />

                <path
                    d="M78 250c24-70 67-119 128-148 8 48-2 98-30 150"
                    stroke="rgba(255,255,255,0.44)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M104 268c22-11 43-17 63-17 28 0 55 9 82 27"
                    stroke="rgba(255,255,255,0.34)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M445 210c29-51 65-82 109-94 9 48-1 98-30 148"
                    stroke="rgba(255,255,255,0.38)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M425 252c27-10 52-15 76-15 30 0 59 8 86 24"
                    stroke="rgba(255,255,255,0.34)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <circle
                    cx="220"
                    cy="154"
                    r="64"
                    fill="rgba(255,255,255,0.18)"
                />

                <path
                    d="M196 158c8-16 21-24 39-24 18 0 31 8 39 24"
                    stroke="rgba(255,255,255,0.82)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M194 180c11 8 24 12 41 12s30-4 41-12"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                <path
                    d="M418 142c9-18 25-28 48-28 19 0 34 8 44 24 8 17 7 36-3 58-19-4-34-11-45-22-17-1-31-9-44-32z"
                    fill="rgba(255,255,255,0.16)"
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
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(24,42,28,0.18)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <div>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.72rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.68)',
                        }}
                    >
                        {content.photoLabel}
                    </p>

                    <p
                        style={{
                            margin: '6px 0 0',
                            fontFamily:
                                'Playfair Display, Georgia, serif',
                            fontSize: '1.2rem',
                            color: 'white',
                        }}
                    >
                        {content.photoTitle}
                    </p>
                </div>

                <span
                    style={{
                        flexShrink: 0,
                        padding: '8px 12px',
                        borderRadius: '999px',
                        border:
                            '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.12)',
                        color: 'white',
                        fontFamily:
                            'Inter, system-ui, sans-serif',
                        fontSize: '0.78rem',
                    }}
                >
                    {content.photoBadge}
                </span>
            </div>
        </div>
    );
}

function DegreeSeal({ item, language, content }) {
    const fallbackDegree = {
        title: item.title ?? 'Grado académico',
        note: item.note ?? '',
    };

    const translatedDegree =
        degreeContentByLanguage?.[language]?.[item.badge] ??
        degreeContentByLanguage?.Español?.[item.badge] ??
        fallbackDegree;

    const translatedBadge =
        content?.degreeTranslations?.[item.badge] ??
        item.badge ??
        'Grado académico';

    const backgroundByDegree = {
        Doctorado:
            'linear-gradient(135deg, rgba(73,99,77,0.16), rgba(73,99,77,0.28))',

        Máster:
            'linear-gradient(135deg, rgba(145,166,122,0.18), rgba(145,166,122,0.3))',

        Magíster:
            'linear-gradient(135deg, rgba(145,166,122,0.18), rgba(145,166,122,0.3))',

        Licenciatura:
            'linear-gradient(135deg, rgba(181,143,104,0.16), rgba(181,143,104,0.28))',

        'Título profesional':
            'linear-gradient(135deg, rgba(119,137,112,0.16), rgba(119,137,112,0.28))',
    };

    const institutionCode =
        item.code ??
        (item.badge === 'Doctorado'
            ? 'UGR'
            : item.badge === 'Máster' || item.badge === 'Magíster'
                ? 'UPO'
                : 'UCT');

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '56px minmax(0, 1fr)',
                gap: '14px',
                padding: '18px 0',
                borderTop: '1px solid rgba(73,99,77,0.12)',
            }}
        >
            <div
                aria-label={item.institution ?? 'Institución académica'}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    display: 'grid',
                    placeItems: 'center',
                    border: '1px solid rgba(73,99,77,0.12)',

                    background:
                        backgroundByDegree[item.badge] ??
                        'linear-gradient(135deg, rgba(119,137,112,0.16), rgba(119,137,112,0.28))',

                    color: 'var(--ink)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                }}
            >
                {institutionCode}
            </div>

            <div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: '12px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <p
                            style={{
                                margin: 0,
                                fontFamily: 'Inter, system-ui, sans-serif',
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
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.78rem',
                            color: 'var(--muted)',
                        }}
                    >
                        {item.year ?? ''}
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
                    {item.institution ?? ''}

                    {item.country ? (
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
                            fontFamily: 'Inter, system-ui, sans-serif',
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

function LanguageItem({ item, language }) {
    const translatedLanguage =
        languageContentByLanguage[language]?.[item.lang] ??
        languageContentByLanguage.Español[item.lang];

    return (
        <div
            style={{
                padding: '18px',
                borderRadius: '22px',
                border: '1px solid rgba(73,99,77,0.1)',
                background: 'rgba(255,255,255,0.72)',
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
                <div>
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
                        background: 'rgba(73,99,77,0.08)',
                        color: 'var(--green)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                    }}
                >
                    {item.code}
                </span>
            </div>

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
        </div>
    );
}

export default function ExploreSection() {
    const { language } = useLanguage();

    const currentLanguage =
        contentByLanguage[language] ? language : 'Español';

    const content = contentByLanguage[currentLanguage];

    return (
        <section
            id="explora"
            style={{
                position: 'relative',
                padding: '30px 0 90px',
            }}
        >
            <Container>
                <SectionTitle
                    title={content.sectionTitle}
                    subtitle={content.sectionSubtitle}
                    align="center"
                />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'minmax(0, 1.1fr) minmax(320px, 0.9fr)',
                        gap: '22px',
                        alignItems: 'stretch',
                    }}
                    className="explore-main-grid"
                >
                    <Card
                        style={{
                            padding: '24px',
                            display: 'grid',
                            gridTemplateColumns:
                                'minmax(240px, 0.8fr) minmax(0, 1.2fr)',
                            gap: '22px',
                            alignItems: 'center',
                        }}
                        className="explore-about-card"
                    >
                        <ComalleFrame content={content} />

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        margin: 0,
                                        fontFamily:
                                            'Inter, system-ui, sans-serif',
                                        fontSize: '0.72rem',
                                        letterSpacing: '0.18em',
                                        textTransform: 'uppercase',
                                        color: 'var(--green)',
                                    }}
                                >
                                    {content.aboutLabel}
                                </p>

                                <h3
                                    style={{
                                        margin: '8px 0 0',
                                        fontFamily:
                                            'Playfair Display, Georgia, serif',
                                        fontSize:
                                            'clamp(1.45rem, 2.5vw, 1.85rem)',
                                        lineHeight: 1.25,
                                        color: 'var(--ink)',
                                    }}
                                >
                                    {content.aboutTitle}
                                </h3>
                            </div>

                            <p
                                style={{
                                    margin: 0,
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',
                                    fontSize: '0.96rem',
                                    lineHeight: 1.8,
                                    color: 'var(--muted)',
                                }}
                            >
                                {content.aboutText}
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                }}
                            >
                                {content.tags.map((value) => (
                                    <span
                                        key={value}
                                        style={{
                                            padding: '8px 12px',
                                            borderRadius: '999px',
                                            border:
                                                '1px solid rgba(73,99,77,0.1)',
                                            background:
                                                'rgba(73,99,77,0.08)',
                                            color: 'var(--green)',
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card style={{ padding: '24px' }}>
                        <p
                            style={{
                                margin: 0,
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.72rem',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: 'var(--green)',
                            }}
                        >
                            {content.degreeLabel}
                        </p>

                        <div style={{ marginTop: '10px' }}>
                            {degreeItems.map((item) => (
                                <DegreeSeal
                                    key={`${item.badge}-${item.title}`}
                                    item={item}
                                    language={currentLanguage}
                                    content={content}
                                />
                            ))}
                        </div>
                    </Card>

                    <Card style={{ padding: '24px' }}>
                        <p
                            style={{
                                margin: 0,
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.72rem',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: 'var(--green)',
                            }}
                        >
                            {content.languageLabel}
                        </p>

                        <div
                            style={{
                                display: 'grid',
                                gap: '14px',
                                marginTop: '16px',
                            }}
                        >
                            {languageSkills.map((item) => (
                                <LanguageItem
                                    key={item.lang}
                                    item={item}
                                    language={currentLanguage}
                                />
                            ))}
                        </div>
                    </Card>

                    <Card
                        style={{
                            padding: '26px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            color: 'white',
                            background:
                                'linear-gradient(135deg, rgba(73,99,77,0.96), rgba(112,139,91,0.94))',
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',
                                    fontSize: '0.72rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.68)',
                                }}
                            >
                                {content.focusLabel}
                            </p>

                            <h3
                                style={{
                                    margin: '10px 0 0',
                                    fontFamily:
                                        'Playfair Display, Georgia, serif',
                                    fontSize:
                                        'clamp(1.4rem, 2.3vw, 1.65rem)',
                                    lineHeight: 1.35,
                                }}
                            >
                                {content.focusTitle}
                            </h3>
                        </div>

                        <p
                            style={{
                                margin: '20px 0 0',
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.94rem',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.84)',
                            }}
                        >
                            {content.focusText}
                        </p>
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