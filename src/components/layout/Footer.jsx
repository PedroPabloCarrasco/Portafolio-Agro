import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
    const { copy } = useLanguage();

    return (
        <footer
            style={{
                width: '100%',
                padding: '28px clamp(20px, 3vw, 40px) 40px',
                borderTop: '1px solid rgba(73,99,77,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'linear-gradient(180deg, rgba(248,243,233,0.46), rgba(241,234,221,0.78))',
                backdropFilter: 'blur(10px)',
            }}
        >
            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontSize: '15px', color: 'var(--green)', opacity: 0.88 }}>
                {copy.footer}
            </p>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                © 2026 Claudia Barrera Salas
            </p>
        </footer>
    );
}
