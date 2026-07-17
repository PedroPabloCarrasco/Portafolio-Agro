import Container from '../common/Container';
import Card from '../common/Card';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';

function TimelineDot({ index, path }) {
    const backgrounds = [
        'linear-gradient(135deg, rgba(73,99,77,0.16), rgba(73,99,77,0.28))',
        'linear-gradient(135deg, rgba(145,166,122,0.18), rgba(145,166,122,0.32))',
        'linear-gradient(135deg, rgba(181,143,104,0.18), rgba(181,143,104,0.3))',
    ];

    return (
        <EditableText
            as="div"
            path={path}
            style={{
                width: '54px',
                minWidth: '54px',
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
                fontWeight: 700,
                letterSpacing: '0.08em',
                flexShrink: 0,
                textAlign: 'center',
            }}
        />
    );
}

export default function Education() {
    const { content } = useEditor();

    const formation = content?.formation ?? {};
    const profile = formation?.profile ?? {};
    const degrees = Array.isArray(formation?.degrees)
        ? formation.degrees
        : [];
    const languages = Array.isArray(formation?.languages)
        ? formation.languages
        : [];
    const tags = Array.isArray(profile?.tags)
        ? profile.tags
        : [];

    return (
        <section
            id="formacion"
            className="education-section"
        >
            <Container>
                <header className="education-heading">
                    <EditableText
                        as="span"
                        path="formation.eyebrow"
                    />

                    <EditableText
                        as="h2"
                        path="formation.title"
                        multiline
                    />

                    <EditableText
                        as="p"
                        path="formation.subtitle"
                        multiline
                    />
                </header>

                <div className="education-intro-grid">
                    <Card className="education-about-card">
                        <EditableText
                            as="span"
                            path="formation.profile.label"
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

                        <EditableText
                            as="h3"
                            path="formation.profile.title"
                            multiline
                            style={{
                                marginTop: '10px',
                                fontFamily:
                                    'Playfair Display, Georgia, serif',
                                fontSize:
                                    'clamp(1.55rem, 2vw, 2rem)',
                                fontWeight: 700,
                                lineHeight: 1.25,
                                color: 'var(--ink)',
                            }}
                        />

                        <EditableText
                            as="p"
                            path="formation.profile.description"
                            multiline
                            style={{
                                marginTop: '16px',
                                fontFamily:
                                    'Inter, system-ui, sans-serif',
                                fontSize: '0.98rem',
                                lineHeight: 1.8,
                                color: 'var(--muted)',
                                whiteSpace: 'pre-line',
                            }}
                        />

                        <div className="education-tags">
                            {tags.map((tag, index) => (
                                <EditableText
                                    key={`formation-tag-${index}`}
                                    as="span"
                                    path={`formation.profile.tags.${index}`}
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
                                        fontWeight: 600,
                                    }}
                                />
                            ))}
                        </div>
                    </Card>
                </div>

                <EditableText
                    as="p"
                    path="formation.degreesLabel"
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
                    {degrees.map((degree, index) => (
                        <Card
                            key={`formation-degree-${index}`}
                            className="education-degree-card"
                        >
                            <TimelineDot
                                index={index}
                                path={`formation.degrees.${index}.abbreviation`}
                            />

                            <div className="education-degree-content">
                                <div className="education-degree-header">
                                    <div
                                        style={{
                                            minWidth: 0,
                                        }}
                                    >
                                        <EditableText
                                            as="span"
                                            path={`formation.degrees.${index}.type`}
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

                                        <EditableText
                                            as="h3"
                                            path={`formation.degrees.${index}.title`}
                                            multiline
                                            style={{
                                                marginTop: '6px',
                                                fontFamily:
                                                    'Playfair Display, Georgia, serif',
                                                fontSize:
                                                    '1.4rem',
                                                lineHeight: 1.3,
                                                color:
                                                    'var(--ink)',
                                            }}
                                        />
                                    </div>

                                    <EditableText
                                        as="span"
                                        path={`formation.degrees.${index}.period`}
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
                                    <EditableText
                                        as="span"
                                        path={`formation.degrees.${index}.institution`}
                                        multiline
                                    />

                                    <span
                                        className="education-degree-separator"
                                        aria-hidden="true"
                                    >
                                        ·
                                    </span>

                                    <EditableText
                                        as="span"
                                        path={`formation.degrees.${index}.description`}
                                        multiline
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="education-languages-card">
                    <EditableText
                        as="span"
                        path="formation.languagesLabel"
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
                        {languages.map((language, index) => (
                            <div
                                key={`formation-language-${index}`}
                                className="education-language-item"
                            >
                                <div className="education-language-content">
                                    <EditableText
                                        as="span"
                                        path={`formation.languages.${index}.name`}
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
                                        as="p"
                                        path={`formation.languages.${index}.subtitle`}
                                        style={{
                                            marginTop: '4px',
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize:
                                                '0.82rem',
                                            color:
                                                'var(--muted)',
                                        }}
                                    />

                                    <EditableText
                                        as="p"
                                        path={`formation.languages.${index}.description`}
                                        multiline
                                        style={{
                                            marginTop: '7px',
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',
                                            fontSize:
                                                '0.78rem',
                                            lineHeight: 1.6,
                                            color:
                                                'var(--muted)',
                                        }}
                                    />
                                </div>

                                <EditableText
                                    as="span"
                                    path={`formation.languages.${index}.level`}
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
                                        fontWeight: 600,
                                        flexShrink: 0,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="education-focus-card">
                    <EditableText
                        as="span"
                        path="formation.focus.label"
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

                    <EditableText
                        as="h3"
                        path="formation.focus.title"
                        multiline
                        style={{
                            marginTop: '10px',
                            maxWidth: '820px',
                            fontFamily:
                                'Playfair Display, Georgia, serif',
                            fontSize:
                                'clamp(1.5rem, 2.4vw, 2.15rem)',
                            lineHeight: 1.25,
                            color: 'var(--ink)',
                        }}
                    />

                    <EditableText
                        as="p"
                        path="formation.focus.description"
                        multiline
                        style={{
                            marginTop: '16px',
                            maxWidth: '940px',
                            fontFamily:
                                'Inter, system-ui, sans-serif',
                            fontSize: '0.98rem',
                            lineHeight: 1.8,
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
                    grid-template-columns: 1fr;
                    gap: 22px;
                    margin-bottom: 28px;
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
                        0 22px 48px rgba(50, 53, 44, 0.11);
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
                    display: grid;
                    grid-template-columns: auto minmax(0, 1fr);
                    gap: 16px;
                    align-items: start;
                    padding: 22px;
                }

                .education-degree-content {
                    min-width: 0;
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
                    font-family: Inter, system-ui, sans-serif;
                    font-size: 0.92rem;
                    line-height: 1.6;
                    color: var(--muted);
                }

                .education-degree-separator {
                    flex-shrink: 0;
                }

                .education-languages-card {
                    margin-top: 28px;
                    padding: 24px;
                }

                .education-language-list {
                    display: grid;
                    gap: 14px;
                    margin-top: 16px;
                }

                .education-language-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 14px;
                    padding: 16px 18px;
                    border: 1px solid rgba(73, 99, 77, 0.1);
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.72);
                }

                .education-language-content {
                    flex: 1;
                    min-width: 0;
                }

                .education-focus-card {
                    margin-top: 28px;
                    padding: 28px;
                    border: 1px solid rgba(73, 99, 77, 0.12);
                    background:
                        linear-gradient(
                            145deg,
                            rgba(255, 255, 255, 0.94),
                            rgba(248, 248, 241, 0.88)
                        );
                }

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
                .education-section
                    .education-degree-card
                    [style*="text-transform: uppercase"],
                .education-section
                    .education-language-item
                    [style*="border-radius: 999px"] {
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

                .education-section [contenteditable="true"] {
                    cursor: text;
                    outline: none;
                    border-radius: 4px;
                    transition:
                        background-color 160ms ease,
                        box-shadow 160ms ease;
                }

                .education-section [contenteditable="true"]:hover {
                    background: rgba(73, 99, 77, 0.06);
                    box-shadow:
                        0 0 0 3px rgba(73, 99, 77, 0.06);
                }

                .education-section [contenteditable="true"]:focus {
                    background: rgba(73, 99, 77, 0.09);
                    box-shadow:
                        0 0 0 3px rgba(73, 99, 77, 0.12);
                }

                @media (max-width: 640px) {
                    .education-section {
                        padding: 22px 0 68px;
                    }

                    .education-about-card,
                    .education-focus-card,
                    .education-languages-card {
                        padding: 22px;
                    }

                    .education-degree-card {
                        grid-template-columns: 1fr;
                    }

                    .education-degree-header {
                        align-items: flex-start;
                        flex-direction: column;
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