import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';

import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';
import { useLanguage } from '../../context/LanguageContext';

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
            }}
        >
            <img
                src="/images/claudia-profile.jpeg"
                alt="Claudia Barrera"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                }}
            />
        </div>
    );
}

export default function About() {
    const { copy } = useLanguage();
    const { content } = useEditor();

    return (
        <section
            id="sobre-mi"
            style={{
                padding: '18px 0 80px',
            }}
        >
            <Container>
                <SectionTitle
                    titlePath="about.title"
                    subtitlePath="about.description"

                />

                <div
                    style={{
                        display: 'grid',
                        gap: '22px',
                        gridTemplateColumns:
                            'minmax(320px, 0.95fr) minmax(0, 1.05fr)',
                    }}
                >
                    {/* Columna izquierda */}
                    <Card
                        style={{
                            padding: '24px',
                        }}
                    >
                        <FieldPortrait />

                        <div
                            style={{
                                display: 'grid',
                                gap: '14px',
                                marginTop: '20px',
                            }}
                        >
                            {content.about.values.map((item, index) => (
                                <div
                                    key={`about-value-${index}`}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '12px 14px',
                                        borderRadius: '18px',

                                        background:
                                            index % 2 === 0
                                                ? 'rgba(73, 99, 77, 0.06)'
                                                : 'rgba(181, 143, 104, 0.06)',

                                        border:
                                            '1px solid rgba(73, 99, 77, 0.08)',
                                    }}
                                >
                                    <span
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',

                                            background:
                                                'linear-gradient(135deg, var(--green), var(--sage))',

                                            flexShrink: 0,
                                        }}
                                    />

                                    <EditableText
                                        path={`about.values.${index}`}
                                        style={{
                                            flex: 1,
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.92rem',
                                            color: 'var(--ink)',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Columna derecha */}
                    <div
                        style={{
                            display: 'grid',
                            gap: '22px',
                        }}
                    >
                        {/* Resumen profesional */}
                        <Card
                            style={{
                                padding: '28px',
                            }}
                        >
                            <EditableText
                                path="about.label"
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
                                path="about.title"
                                style={{
                                    fontFamily:
                                        'Playfair Display, Georgia, serif',
                                    fontSize: '1.8rem',
                                    lineHeight: '1.3',
                                    color: 'var(--ink)',
                                    marginTop: '10px',
                                }}
                            />

                            {content.about.paragraphs.map(
                                (paragraph, index) => (
                                    <EditableText
                                        key={`about-paragraph-${index}`}
                                        path={`about.paragraphs.${index}`}
                                        multiline
                                        style={{
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '1rem',
                                            lineHeight: '1.85',
                                            color: 'var(--muted)',

                                            marginTop:
                                                index === 0
                                                    ? '16px'
                                                    : '14px',

                                            whiteSpace: 'pre-line',
                                        }}
                                    />
                                ),
                            )}
                        </Card>

                        {/* Áreas de especialización */}
                        <div
                            style={{
                                display: 'grid',
                                gap: '14px',
                                gridTemplateColumns:
                                    'repeat(3, minmax(0, 1fr))',
                            }}
                        >
                            {content.about.areas.map((item, index) => (
                                <Card
                                    key={`about-area-${index}`}
                                    style={{
                                        padding: '18px',
                                    }}
                                >
                                    <EditableText
                                        path={`about.areas.${index}.label`}
                                        style={{
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize: '0.72rem',
                                            letterSpacing: '0.16em',
                                            textTransform: 'uppercase',
                                            color: 'var(--green)',
                                        }}
                                    />

                                    <EditableText
                                        path={`about.areas.${index}.value`}
                                        style={{
                                            fontFamily:
                                                'Playfair Display, Georgia, serif',
                                            fontSize: '1.02rem',
                                            lineHeight: '1.4',
                                            color: 'var(--ink)',
                                            marginTop: '10px',
                                        }}
                                    />
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}