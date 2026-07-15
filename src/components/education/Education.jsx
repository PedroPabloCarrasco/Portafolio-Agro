import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';

function TimelineDot({ index }) {
    const labels = ['D', 'M', 'I'];

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

                fontSize: '0.76rem',
                fontWeight: '700',
                letterSpacing: '0.1em',

                flexShrink: 0,
            }}
        >
            {labels[index] ?? String(index + 1)}
        </div>
    );
}

export default function Education() {
    const { content } = useEditor();

    const formation = content?.formation ?? {};

    const degreeItems = Array.isArray(formation.items)
        ? formation.items
        : [];

    const languageSkills = Array.isArray(formation.languages)
        ? formation.languages
        : [];

    return (
        <section
            id="formacion"
            style={{
                padding: '18px 0 80px',
            }}
        >
            <Container>
                <SectionTitle
                    titlePath="formation.title"
                    subtitlePath="formation.subtitle"
                />

                {/* Grados académicos */}
                <div
                    style={{
                        display: 'grid',
                        gap: '18px',
                    }}
                >
                    {degreeItems.map((item, index) => (
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
                            <TimelineDot index={index} />

                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent:
                                            'space-between',
                                        gap: '12px',
                                        flexWrap: 'wrap',
                                        alignItems: 'baseline',
                                    }}
                                >
                                    <div
                                        style={{
                                            minWidth: 0,
                                        }}
                                    >
                                        <EditableText
                                            path={`formation.items.${index}.badge`}
                                            style={{
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.72rem',
                                                letterSpacing:
                                                    '0.18em',
                                                textTransform:
                                                    'uppercase',
                                                color: 'var(--green)',
                                            }}
                                        />

                                        <EditableText
                                            as="h3"
                                            path={`formation.items.${index}.title`}
                                            style={{
                                                fontFamily:
                                                    'Playfair Display, Georgia, serif',
                                                fontSize: '1.4rem',
                                                lineHeight: '1.3',
                                                color: 'var(--ink)',
                                                marginTop: '6px',
                                            }}
                                        />
                                    </div>

                                    <EditableText
                                        as="span"
                                        path={`formation.items.${index}.year`}
                                        style={{
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.8rem',
                                            color: 'var(--muted)',
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        flexWrap: 'wrap',
                                        gap: '5px',
                                        marginTop: '10px',

                                        fontFamily:
                                            'Inter, system-ui, sans-serif',

                                        fontSize: '0.92rem',
                                        color: 'var(--muted)',
                                    }}
                                >
                                    <EditableText
                                        as="span"
                                        path={`formation.items.${index}.institution`}
                                        style={{
                                            fontFamily: 'inherit',
                                            fontSize: 'inherit',
                                            color: 'inherit',
                                        }}
                                    />

                                    <span aria-hidden="true">·</span>

                                    <EditableText
                                        as="span"
                                        path={`formation.items.${index}.note`}
                                        multiline
                                        style={{
                                            fontFamily: 'inherit',
                                            fontSize: 'inherit',
                                            lineHeight: '1.6',
                                            color: 'inherit',
                                        }}
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
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
                            path="formation.languagesTitle"
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
                            {languageSkills.map((item, index) => (
                                <div
                                    key={`formation-language-${index}`}
                                    style={{
                                        padding: '16px 18px',
                                        borderRadius: '20px',

                                        background:
                                            'rgba(255,255,255,0.72)',

                                        border:
                                            '1px solid rgba(73,99,77,0.1)',

                                        display: 'flex',
                                        alignItems: 'center',
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
                                                fontSize: '1.05rem',
                                                color: 'var(--ink)',
                                            }}
                                        />

                                        <EditableText
                                            path={`formation.languages.${index}.level`}
                                            style={{
                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',
                                                fontSize: '0.82rem',
                                                color: 'var(--muted)',
                                                marginTop: '4px',
                                            }}
                                        />
                                    </div>

                                    <EditableText
                                        as="span"
                                        path={`formation.languages.${index}.code`}
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
                            ))}
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
                            justifyContent: 'space-between',
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
                                    fontFamily:
                                        'Playfair Display, Georgia, serif',

                                    fontSize: '1.55rem',
                                    lineHeight: '1.3',

                                    color: '#ffffff',
                                    marginTop: '10px',
                                }}
                            />
                        </div>

                        <EditableText
                            path="formation.reading.description"
                            multiline
                            style={{
                                fontFamily:
                                    'Inter, system-ui, sans-serif',

                                fontSize: '0.95rem',
                                lineHeight: '1.8',

                                color:
                                    'rgba(255,255,255,0.84)',

                                marginTop: '18px',
                            }}
                        />
                    </Card>
                </div>
            </Container>
        </section>
    );
}