import EditableText from '../admin/EditableText';

export default function SectionTitle({
    title,
    subtitle,
    titlePath,
    subtitlePath,
    align = 'left',
}) {
    const isCenter = align === 'center';

    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: 'clamp(2rem, 2.5vw, 3.4rem)',
        fontWeight: '700',
        color: 'var(--ink)',
        lineHeight: '1.06',
        letterSpacing: '-0.02em',
        marginBottom: '14px',
    };

    const subtitleStyle = {
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 'clamp(0.98rem, 1.2vw, 1.05rem)',
        color: 'var(--muted)',
        lineHeight: '1.6',
        maxWidth: isCenter ? '620px' : '560px',
        margin: isCenter ? '0 auto' : '0',
        whiteSpace: 'pre-line',
    };

    return (
        <div
            style={{
                marginBottom: '40px',
                textAlign: isCenter ? 'center' : 'left',
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '14px',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(73,99,77,0.12)',
                    background: 'rgba(255,255,255,0.45)',
                    boxShadow: '0 8px 24px rgba(22,35,24,0.04)',
                }}
            >
                <span
                    style={{
                        width: '24px',
                        height: '1px',
                        background:
                            'linear-gradient(90deg, transparent, var(--green))',
                        opacity: 0.8,
                    }}
                />

                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--green)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        opacity: 0.82,
                    }}
                >
                    <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                    <path d="M12 22V10" />
                </svg>

                <span
                    style={{
                        width: '24px',
                        height: '1px',
                        background:
                            'linear-gradient(90deg, var(--green), transparent)',
                        opacity: 0.8,
                    }}
                />
            </div>

            {titlePath ? (
                <EditableText
                    as="h2"
                    path={titlePath}
                    style={titleStyle}
                />
            ) : (
                <h2 style={titleStyle}>
                    {title}
                </h2>
            )}

            {subtitlePath ? (
                <EditableText
                    path={subtitlePath}
                    multiline
                    style={subtitleStyle}
                />
            ) : (
                subtitle && (
                    <p style={subtitleStyle}>
                        {subtitle}
                    </p>
                )
            )}
        </div>
    );
}