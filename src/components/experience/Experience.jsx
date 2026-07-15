import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';

export default function Experience() {
    const { content } = useEditor();

    const experience = content?.experience ?? {};

    const areas = Array.isArray(experience.areas)
        ? experience.areas
        : [];

    return (
        <section
            id="experiencia"
            style={{
                padding: '18px 0 80px',
            }}
        >
            <Container>
                <SectionTitle
                    titlePath="experience.title"
                    subtitlePath="experience.subtitle"
                />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(2, minmax(0, 1fr))',
                        gap: '22px',
                    }}
                >
                    {areas.map((area, areaIndex) => {
                        const areaItems = Array.isArray(area.items)
                            ? area.items
                            : [];

                        return (
                            <Card
                                key={`experience-area-${areaIndex}`}
                                style={{
                                    padding: '28px',
                                }}
                            >
                                <EditableText
                                    as="h3"
                                    path={`experience.areas.${areaIndex}.title`}
                                    style={{
                                        fontFamily:
                                            'Playfair Display, Georgia, serif',
                                        fontSize: '1.55rem',
                                        fontWeight: '700',
                                        lineHeight: '1.25',
                                        color: 'var(--ink)',
                                        marginBottom: '22px',
                                    }}
                                />

                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '15px',
                                    }}
                                >
                                    {areaItems.map(
                                        (item, itemIndex) => (
                                            <div
                                                key={`experience-area-${areaIndex}-item-${itemIndex}`}
                                                style={{
                                                    display: 'flex',
                                                    alignItems:
                                                        'flex-start',
                                                    gap: '12px',
                                                }}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    style={{
                                                        width: '8px',
                                                        height: '8px',
                                                        marginTop: '9px',
                                                        borderRadius:
                                                            '50%',
                                                        background:
                                                            'linear-gradient(135deg, var(--green), var(--sage))',
                                                        flexShrink: 0,
                                                    }}
                                                />

                                                <EditableText
                                                    path={`experience.areas.${areaIndex}.items.${itemIndex}`}
                                                    multiline
                                                    style={{
                                                        flex: 1,
                                                        fontFamily:
                                                            'Inter, system-ui, sans-serif',
                                                        fontSize:
                                                            '0.96rem',
                                                        lineHeight:
                                                            '1.75',
                                                        color:
                                                            'var(--muted)',
                                                    }}
                                                />
                                            </div>
                                        ),
                                    )}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}