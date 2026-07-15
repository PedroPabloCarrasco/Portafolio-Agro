import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';

function BotanicalLeaf({
    color = 'rgba(73,99,77,0.28)',
    mirrored = false,
}) {
    return (
        <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            aria-hidden="true"
            style={{
                transform: mirrored ? 'scaleX(-1)' : 'none',
            }}
        >
            <path
                d="M11 70c8-22 20-37 36-46 9-5 18-8 26-10-3 12-7 22-13 31-11 17-27 29-49 25Z"
                fill={color}
            />

            <path
                d="M22 62c14-8 25-20 34-35"
                stroke="rgba(73,99,77,0.42)"
                strokeWidth="2"
                strokeLinecap="round"
            />

            <path
                d="M32 48c6 0 12-2 18-6"
                stroke="rgba(73,99,77,0.35)"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            <path
                d="M26 56c7 1 14 0 22-3"
                stroke="rgba(73,99,77,0.35)"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

function PlantBadge() {
    return (
        <span
            aria-hidden="true"
            style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',

                background:
                    'linear-gradient(145deg, rgba(73,99,77,0.92), rgba(127,138,111,0.92))',

                display: 'grid',
                placeItems: 'center',

                boxShadow:
                    '0 8px 16px rgba(42,51,38,0.15)',

                flexShrink: 0,
            }}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M12 21V10"
                    stroke="rgba(248,248,241,0.95)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />

                <path
                    d="M12 15c-5 0-8-3-8-8 5 0 8 3 8 8Z"
                    stroke="rgba(248,248,241,0.95)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <path
                    d="M12 12c5 0 8-3 8-8-5 0-8 3-8 8Z"
                    stroke="rgba(248,248,241,0.95)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </span>
    );
}

export default function Publications() {
    const { content } = useEditor();

    const publicationGroups = Array.isArray(
        content?.publications?.groups,
    )
        ? content.publications.groups
        : [];

    return (
        <section
            id="publicaciones"
            style={{
                padding: '18px 0 80px',
            }}
        >
            <Container>
                <SectionTitle
                    titlePath="publications.title"
                    subtitlePath="publications.subtitle"
                />

                <div
                    style={{
                        display: 'grid',
                        gap: '22px',

                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(290px, 1fr))',
                    }}
                >
                    {publicationGroups.map(
                        (group, groupIndex) => {
                            const entries = Array.isArray(
                                group?.entries,
                            )
                                ? group.entries
                                : [];

                            return (
                                <Card
                                    key={`publication-group-${groupIndex}`}
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        padding: '24px',

                                        borderRadius:
                                            '26px 12px 26px 12px',

                                        background:
                                            'linear-gradient(165deg, rgba(255,255,255,0.92), rgba(248,248,241,0.84))',

                                        border:
                                            '1px solid rgba(73,99,77,0.12)',

                                        boxShadow:
                                            '0 18px 32px rgba(42,51,38,0.08)',
                                    }}
                                >
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            right: '-12px',
                                            top: '-8px',
                                            opacity: 0.52,
                                        }}
                                    >
                                        <BotanicalLeaf />
                                    </div>

                                    <div
                                        aria-hidden="true"
                                        style={{
                                            position: 'absolute',
                                            left: '-14px',
                                            bottom: '-12px',
                                            opacity: 0.4,
                                        }}
                                    >
                                        <BotanicalLeaf mirrored />
                                    </div>

                                    <div
                                        style={{
                                            position: 'relative',
                                            zIndex: 1,

                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                        }}
                                    >
                                        <PlantBadge />

                                        <EditableText
                                            path={`publications.groups.${groupIndex}.type`}
                                            style={{
                                                margin: 0,

                                                fontFamily:
                                                    'Inter, system-ui, sans-serif',

                                                fontSize: '0.72rem',
                                                letterSpacing:
                                                    '0.18em',

                                                textTransform:
                                                    'uppercase',

                                                color:
                                                    'var(--green)',
                                            }}
                                        />
                                    </div>

                                    <div
                                        style={{
                                            display: 'grid',
                                            gap: '12px',
                                            marginTop: '16px',
                                        }}
                                    >
                                        {entries.map(
                                            (
                                                entry,
                                                entryIndex,
                                            ) => (
                                                <div
                                                    key={`publication-entry-${groupIndex}-${entryIndex}`}
                                                    style={{
                                                        position:
                                                            'relative',

                                                        zIndex: 1,

                                                        padding:
                                                            '14px 16px',

                                                        borderRadius:
                                                            '16px 8px 16px 8px',

                                                        background:
                                                            'rgba(255,255,255,0.78)',

                                                        border:
                                                            '1px solid rgba(73,99,77,0.12)',
                                                    }}
                                                >
                                                    <EditableText
                                                        path={`publications.groups.${groupIndex}.entries.${entryIndex}`}
                                                        multiline
                                                        style={{
                                                            margin: 0,

                                                            fontFamily:
                                                                'Playfair Display, Georgia, serif',

                                                            fontSize:
                                                                '1rem',

                                                            lineHeight:
                                                                '1.64',

                                                            color:
                                                                'var(--ink)',

                                                            whiteSpace:
                                                                'pre-line',
                                                        }}
                                                    />
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </Card>
                            );
                        },
                    )}
                </div>

                {publicationGroups.length === 0 && (
                    <Card
                        style={{
                            padding: '24px',
                            textAlign: 'center',
                        }}
                    >
                        <p
                            style={{
                                margin: 0,

                                fontFamily:
                                    'Inter, system-ui, sans-serif',

                                fontSize: '0.95rem',
                                color: 'var(--muted)',
                            }}
                        >
                            No hay grupos de publicaciones configurados.
                        </p>
                    </Card>
                )}
            </Container>
        </section>
    );
}