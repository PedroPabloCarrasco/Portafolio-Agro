import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';
import { useLanguage } from '../../context/LanguageContext';

const supportedLanguages = [
    'Español',
    'English',
    'Português',
];

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
                    backgrounds[index] ??
                    backgrounds[backgrounds.length - 1],

                border: '1px solid rgba(73,99,77,0.12)',

                display: 'grid',
                placeItems: 'center',

                color: 'var(--ink)',

                fontFamily:
                    'Inter, system-ui, sans-serif',

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

    const localizedContent =
        formation?.contentByLanguage?.[activeLanguage] ??
        formation?.contentByLanguage?.Español ??
        {};

    const languagePath =
        `formation.contentByLanguage.${activeLanguage}`;

    const degreeItems = Array.isArray(formation.items)
        ? formation.items
        : [];

    const languageSkills = Array.isArray(
        formation.languages,
    )
        ? formation.languages
        : [];

    const tags = Array.isArray(localizedContent.tags)
        ? localizedContent.tags
        : [];

    return (
        <section
            id="formacion"
            style={{
                padding: '18px 0 80px',
            }}
        >
            <Container>
                {/* Título principal editable según idioma */}
                <SectionTitle
                    titlePath={`${languagePath}.sectionTitle`}
                    subtitlePath={`${languagePath}.sectionSubtitle`}
                />

                {/* Sobre mí y trabajo territorial */}
                <div
                    style={{
                        display: 'grid',
                        gap: '22px',
                        gridTemplateColumns:
                            'minmax(0, 1.1fr) minmax(320px, 0.9fr)',
                        marginBottom: '28px',
                    }}
                >
                    {/* Sobre mí */}
                    <Card
                        style={{
                            padding: '28px',
                        }}
                    >
                        <EditableText
                            path={`${languagePath}.aboutLabel`}
                            style={{
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
                            path={`${languagePath}.aboutTitle`}
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

                        <EditableText
                            path={`${languagePath}.aboutText`}
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

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px',
                                marginTop: '20px',
                            }}
                        >
                            {tags.map((tag, index) => (
                                <EditableText
                                    key={`formation-tag-${activeLanguage}-${index}`}
                                    as="span"
                                    path={`${languagePath}.tags.${index}`}
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

                    {/* Trabajo territorial */}
                    <Card
                        style={{
                            position: 'relative',
                            overflow: 'hidden',

                            minHeight: '320px',
                            padding: '28px',

                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',

                            background:
                                'linear-gradient(145deg, rgba(73,99,77,0.96), rgba(127,138,111,0.9))',

                            color: '#ffffff',
                        }}
                    >
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                right: '-70px',
                                bottom: '-80px',

                                width: '220px',
                                height: '220px',

                                borderRadius: '50%',

                                border:
                                    '1px solid rgba(255,255,255,0.15)',
                            }}
                        />

                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                right: '-25px',
                                bottom: '-45px',

                                width: '140px',
                                height: '140px',

                                borderRadius: '50%',

                                border:
                                    '1px solid rgba(255,255,255,0.12)',
                            }}
                        />

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            <EditableText
                                path={`${languagePath}.photoLabel`}
                                style={{
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',

                                    fontSize: '0.72rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',

                                    color:
                                        'rgba(255,255,255,0.68)',
                                }}
                            />

                            <EditableText
                                as="h3"
                                path={`${languagePath}.photoTitle`}
                                multiline
                                style={{
                                    marginTop: '12px',

                                    maxWidth: '420px',

                                    fontFamily:
                                        'Playfair Display, Georgia, serif',

                                    fontSize:
                                        'clamp(1.8rem, 3vw, 2.6rem)',

                                    lineHeight: '1.15',
                                    color: '#ffffff',
                                }}
                            />
                        </div>

                        <EditableText
                            as="span"
                            path={`${languagePath}.photoBadge`}
                            style={{
                                position: 'relative',
                                zIndex: 1,

                                width: 'fit-content',

                                padding: '8px 13px',
                                marginTop: '28px',

                                borderRadius: '999px',

                                background:
                                    'rgba(255,255,255,0.14)',

                                border:
                                    '1px solid rgba(255,255,255,0.2)',

                                color: '#ffffff',

                                fontFamily:
                                    'Inter, system-ui, sans-serif',

                                fontSize: '0.78rem',
                                fontWeight: '600',
                            }}
                        />
                    </Card>
                </div>

                {/* Etiqueta de grados académicos */}
                <EditableText
                    path={`${languagePath}.degreeLabel`}
                    style={{
                        marginBottom: '16px',

                        fontFamily:
                            'Inter, system-ui, sans-serif',

                        fontSize: '0.72rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',

                        color: 'var(--green)',
                    }}
                />

                {/* Grados académicos */}
                <div
                    style={{
                        display: 'grid',
                        gap: '18px',
                    }}
                >
                    {degreeItems.map((item, index) => {
                        const translationKey =
                            getDegreeTranslationKey(
                                item?.badge,
                            );

                        return (
                            <Card
                                key={`formation-degree-${index}`}
                                style={{
                                    padding: '22px',

                                    display: 'grid',
                                    gridTemplateColumns:
                                        'auto minmax(0, 1fr)',

                                    gap: '16px',
                                    alignItems: 'start',
                                }}
                            >
                                <TimelineDot
                                    index={index}
                                    code={item?.code}
                                />

                                <div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent:
                                                'space-between',

                                            alignItems:
                                                'baseline',

                                            flexWrap: 'wrap',
                                            gap: '12px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                minWidth: 0,
                                            }}
                                        >
                                            {translationKey ? (
                                                <EditableText
                                                    path={`${languagePath}.degreeTranslations.${translationKey}`}
                                                    style={{
                                                        fontFamily:
                                                            'Inter, system-ui, sans-serif',

                                                        fontSize:
                                                            '0.72rem',

                                                        letterSpacing:
                                                            '0.18em',

                                                        textTransform:
                                                            'uppercase',

                                                        color:
                                                            'var(--green)',
                                                    }}
                                                />
                                            ) : (
                                                <EditableText
                                                    path={`formation.items.${index}.badge`}
                                                    style={{
                                                        fontFamily:
                                                            'Inter, system-ui, sans-serif',

                                                        fontSize:
                                                            '0.72rem',

                                                        letterSpacing:
                                                            '0.18em',

                                                        textTransform:
                                                            'uppercase',

                                                        color:
                                                            'var(--green)',
                                                    }}
                                                />
                                            )}

                                            <EditableText
                                                as="h3"
                                                path={`formation.items.${index}.title`}
                                                multiline
                                                style={{
                                                    marginTop: '6px',

                                                    fontFamily:
                                                        'Playfair Display, Georgia, serif',

                                                    fontSize:
                                                        '1.4rem',

                                                    lineHeight: '1.3',
                                                    color:
                                                        'var(--ink)',
                                                }}
                                            />
                                        </div>

                                        <EditableText
                                            as="span"
                                            path={`formation.items.${index}.year`}
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

                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems:
                                                'baseline',

                                            flexWrap: 'wrap',
                                            gap: '5px',

                                            marginTop: '10px',

                                            fontFamily:
                                                'Inter, system-ui, sans-serif',

                                            fontSize: '0.92rem',
                                            color:
                                                'var(--muted)',
                                        }}
                                    >
                                        <EditableText
                                            as="span"
                                            path={`formation.items.${index}.institution`}
                                            style={{
                                                fontFamily:
                                                    'inherit',

                                                fontSize:
                                                    'inherit',

                                                color: 'inherit',
                                            }}
                                        />

                                        <EditableText
                                            as="span"
                                            path={`${languagePath}.institutionConnector`}
                                            style={{
                                                fontFamily:
                                                    'inherit',

                                                fontSize:
                                                    'inherit',

                                                color: 'inherit',
                                            }}
                                        />

                                        <EditableText
                                            as="span"
                                            path={`formation.items.${index}.note`}
                                            multiline
                                            style={{
                                                fontFamily:
                                                    'inherit',

                                                fontSize:
                                                    'inherit',

                                                lineHeight: '1.6',
                                                color: 'inherit',
                                            }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div
                    style={{
                        display: 'grid',
                        gap: '22px',

                        gridTemplateColumns:
                            'minmax(0, 1.2fr) minmax(320px, 0.8fr)',

                        marginTop: '28px',
                    }}
                >
                    {/* Idiomas */}
                    <Card
                        style={{
                            padding: '24px',
                        }}
                    >
                        <EditableText
                            path={`${languagePath}.languageLabel`}
                            style={{
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
                                    <div
                                        key={`formation-language-${index}`}
                                        style={{
                                            padding:
                                                '16px 18px',

                                            borderRadius:
                                                '20px',

                                            background:
                                                'rgba(255,255,255,0.72)',

                                            border:
                                                '1px solid rgba(73,99,77,0.1)',

                                            display: 'flex',
                                            alignItems:
                                                'center',

                                            justifyContent:
                                                'space-between',

                                            gap: '14px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                flex: 1,
                                                minWidth: 0,
                                            }}
                                        >
                                            <EditableText
                                                path={`formation.languages.${index}.lang`}
                                                style={{
                                                    fontFamily:
                                                        'Playfair Display, Georgia, serif',

                                                    fontSize:
                                                        '1.05rem',

                                                    color:
                                                        'var(--ink)',
                                                }}
                                            />

                                            <EditableText
                                                path={`formation.languages.${index}.level`}
                                                style={{
                                                    marginTop:
                                                        '4px',

                                                    fontFamily:
                                                        'Inter, system-ui, sans-serif',

                                                    fontSize:
                                                        '0.82rem',

                                                    color:
                                                        'var(--muted)',
                                                }}
                                            />

                                            <EditableText
                                                path={`formation.languages.${index}.description`}
                                                multiline
                                                style={{
                                                    marginTop:
                                                        '7px',

                                                    fontFamily:
                                                        'Inter, system-ui, sans-serif',

                                                    fontSize:
                                                        '0.78rem',

                                                    lineHeight:
                                                        '1.6',

                                                    color:
                                                        'var(--muted)',
                                                }}
                                            />
                                        </div>

                                        <EditableText
                                            as="span"
                                            path={`formation.languages.${index}.code`}
                                            style={{
                                                padding:
                                                    '8px 12px',

                                                borderRadius:
                                                    '999px',

                                                background:
                                                    'rgba(73,99,77,0.08)',

                                                color:
                                                    'var(--green)',

                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',

                                                fontSize:
                                                    '0.78rem',

                                                fontWeight:
                                                    '600',

                                                flexShrink: 0,
                                            }}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                    </Card>

                    {/* Criterio de lectura */}
                    <Card
                        style={{
                            padding: '24px',

                            background:
                                'linear-gradient(135deg, rgba(73,99,77,0.94), rgba(145,166,122,0.9))',

                            color: 'white',

                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent:
                                'space-between',
                        }}
                    >
                        <div>
                            <EditableText
                                path="formation.reading.eyebrow"
                                style={{
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',

                                    fontSize: '0.72rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',

                                    color:
                                        'rgba(255,255,255,0.68)',
                                }}
                            />

                            <EditableText
                                as="h3"
                                path="formation.reading.title"
                                multiline
                                style={{
                                    marginTop: '10px',

                                    fontFamily:
                                        'Playfair Display, Georgia, serif',

                                    fontSize: '1.55rem',
                                    lineHeight: '1.3',

                                    color: '#ffffff',
                                }}
                            />
                        </div>

                        <EditableText
                            path="formation.reading.description"
                            multiline
                            style={{
                                marginTop: '18px',

                                fontFamily:
                                    'Inter, system-ui, sans-serif',

                                fontSize: '0.95rem',
                                lineHeight: '1.8',

                                color:
                                    'rgba(255,255,255,0.84)',
                            }}
                        />
                    </Card>
                </div>

                {/* Enfoque profesional */}
                <Card
                    style={{
                        marginTop: '28px',
                        padding: '28px',

                        background:
                            'linear-gradient(145deg, rgba(255,255,255,0.92), rgba(248,248,241,0.84))',

                        border:
                            '1px solid rgba(73,99,77,0.12)',
                    }}
                >
                    <EditableText
                        path={`${languagePath}.focusLabel`}
                        style={{
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
                        path={`${languagePath}.focusTitle`}
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

                    <EditableText
                        path={`${languagePath}.focusText`}
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
        </section>
    );
}