import { useMemo } from 'react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, copy, languageOptions } = useLanguage();

    const quickLinks = useMemo(() => [
        { label: copy.nav.home, href: '#inicio' },
        { label: copy.nav.about, href: '#sobre-mi' },
        { label: copy.nav.education, href: '#formacion' },
        { label: copy.nav.experience, href: '#experiencia' },
    ], [copy]);

    return (
        <header
            style={{
                position: 'sticky',
                top: '18px',
                zIndex: 60,
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '0 clamp(16px, 2vw, 28px)',
                pointerEvents: 'none',
            }}
        >
            <div
                style={{
                    pointerEvents: 'auto',
                    width: '100%',
                    maxWidth: '980px',
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '12px 14px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.58)',
                    border: '1px solid rgba(73,99,77,0.12)',
                    boxShadow: '0 18px 42px rgba(22,35,24,0.08)',
                    backdropFilter: 'blur(18px)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, var(--green), var(--green-deep))', color: 'white', boxShadow: '0 12px 22px rgba(49,69,52,0.22)' }}>
                        <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: '700', fontSize: '0.9rem' }}>CB</span>
                    </div>
                    <div style={{ minWidth: 0 }}>
                        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Claudia Barrera Salas</p>
                        <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1rem', color: 'var(--ink)' }}>Portafolio de trabajo</p>
                    </div>
                </div>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }} aria-label="Navegación principal">
                    {quickLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            style={{
                                padding: '8px 12px',
                                borderRadius: '999px',
                                color: 'var(--muted)',
                                textDecoration: 'none',
                                fontFamily: 'Inter, system-ui, sans-serif',
                                fontSize: '0.84rem',
                                transition: 'background 180ms ease, color 180ms ease, transform 180ms ease',
                            }}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.background = 'rgba(73,99,77,0.08)';
                                event.currentTarget.style.color = 'var(--ink)';
                                event.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.background = 'transparent';
                                event.currentTarget.style.color = 'var(--muted)';
                                event.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', padding: '4px', borderRadius: '999px', background: 'rgba(73,99,77,0.07)', border: '1px solid rgba(73,99,77,0.08)' }}>
                        {languageOptions.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setLanguage(item)}
                                style={{
                                    border: 'none',
                                    background: language === item ? 'linear-gradient(135deg, var(--green), var(--green-deep))' : 'transparent',
                                    color: language === item ? 'white' : 'var(--muted)',
                                    padding: '7px 10px',
                                    borderRadius: '999px',
                                    cursor: 'pointer',
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    fontSize: '0.78rem',
                                    transition: 'all 180ms ease',
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <Button variant="soft" href="#contacto">{copy.nav.contact}</Button>
                </div>
            </div>
        </header>
    );
}