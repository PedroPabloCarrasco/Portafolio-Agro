export default function Footer() {
    return (
        <footer
            style={{
                width: '100%',
                padding: '32px 40px',
                borderTop: '1px solid rgba(69,99,75,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'rgba(251,248,243,0.7)',
            }}
        >
            <p style={{ fontFamily: 'Dancing Script, cursive', fontSize: '16px', color: 'var(--green)', opacity: 0.8 }}>
                Ciencia, naturaleza y territorio para un futuro sostenible.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(45,45,45,0.45)', letterSpacing: '0.05em' }}>
                © 2026 Claudia Barrera Salas
            </p>
        </footer>
    );
}
