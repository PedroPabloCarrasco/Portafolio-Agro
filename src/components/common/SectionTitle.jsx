/**
 * SectionTitle — encabezado reutilizable con decoración botánica
 * Props: title, subtitle, align ('left' | 'center')
 */
export default function SectionTitle({ title, subtitle, align = 'left' }) {
    const isCenter = align === 'center';
    return (
        <div style={{ marginBottom: '48px', textAlign: isCenter ? 'center' : 'left' }}>
            {/* Línea botánica decorativa */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '14px',
                justifyContent: isCenter ? 'center' : 'flex-start',
            }}>
                <div style={{ width: '32px', height: '2px', background: 'var(--green)', borderRadius: '2px', opacity: 0.6 }} />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                    <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                    <path d="M12 22V10" />
                </svg>
                <div style={{ width: '32px', height: '2px', background: 'var(--green)', borderRadius: '2px', opacity: 0.6 }} />
            </div>
            <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '36px',
                fontWeight: '700',
                color: '#1E2E22',
                lineHeight: '1.2',
                marginBottom: '12px',
            }}>
                {title}
            </h2>
            {subtitle && (
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: 'rgba(45,45,45,0.6)',
                    lineHeight: '1.6',
                    maxWidth: isCenter ? '520px' : '480px',
                    margin: isCenter ? '0 auto' : '0',
                }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
