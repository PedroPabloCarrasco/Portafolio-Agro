import { useEffect, useState } from 'react';

const navItems = [
    {
        label: 'Inicio',
        href: '#inicio',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
        ),
    },
    {
        label: 'Sobre mí',
        href: '#sobre-mi',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
        ),
    },
    {
        label: 'Formación',
        href: '#formacion',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
            </svg>
        ),
    },
    {
        label: 'Experiencia',
        href: '#experiencia',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
        ),
    },
    {
        label: 'Proyectos',
        href: '#proyectos',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14,2 14,8 20,8" />
            </svg>
        ),
    },
    {
        label: 'Publicaciones',
        href: '#publicaciones',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
    },
    {
        label: 'Contacto',
        href: '#contacto',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
            </svg>
        ),
    },
];

export default function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        function handleEscape(event) {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        }

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobileMenuOpen]);

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    return (
        <>
            <aside
                className="hidden lg:flex flex-col shrink-0 h-screen sticky top-0"
                style={{
                    width: '210px',
                    background: 'linear-gradient(180deg, #2A3D2E 0%, #1E2E22 100%)',
                    color: '#e8dcc8',
                }}
            >
                {/* Logo */}
                <div className="flex flex-col items-center pt-8 pb-6 px-4">
                    <div
                        className="flex flex-col items-center justify-center rounded-full mb-3"
                        style={{
                            width: '64px',
                            height: '64px',
                            border: '1.5px solid rgba(168,196,130,0.5)',
                            background: 'rgba(255,255,255,0.05)',
                        }}
                    >
                        {/* Leaf / plant icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a8c482" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                            <path d="M12 22V10" />
                            <path d="M8 14s1-1 4-1 4 1 4 1" />
                        </svg>
                        <span
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '11px',
                                letterSpacing: '0.12em',
                                color: '#c8d8b0',
                                marginTop: '2px',
                            }}
                        >CBS</span>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3">
                    {navItems.map((item, i) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 rounded-lg mb-1 transition-all duration-200"
                            style={{
                                padding: '9px 14px',
                                color: i === 0 ? '#e8dcc8' : 'rgba(232,220,200,0.65)',
                                background: i === 0 ? 'rgba(168,196,130,0.18)' : 'transparent',
                                fontSize: '13.5px',
                                fontWeight: i === 0 ? '500' : '400',
                                fontFamily: 'Inter, sans-serif',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                                if (i !== 0) {
                                    e.currentTarget.style.background = 'rgba(168,196,130,0.10)';
                                    e.currentTarget.style.color = '#e8dcc8';
                                }
                            }}
                            onMouseLeave={e => {
                                if (i !== 0) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'rgba(232,220,200,0.65)';
                                }
                            }}
                        >
                            <span style={{ opacity: i === 0 ? 1 : 0.7 }}>{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Quote */}
                <div className="px-5 py-5" style={{ borderTop: '1px solid rgba(168,196,130,0.15)' }}>
                    <p
                        style={{
                            fontFamily: 'Dancing Script, cursive',
                            fontSize: '13px',
                            color: 'rgba(232,220,200,0.55)',
                            lineHeight: '1.6',
                        }}
                    >
                        "Trabajando por sistemas agrícolas sostenibles y territorios vivos."
                    </p>
                </div>

                {/* Social */}
                <div className="flex items-center justify-center gap-4 pb-7 pt-2">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                        style={{ color: 'rgba(232,220,200,0.55)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#a8c482'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,220,200,0.55)'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="mailto:claudia@example.com"
                        style={{ color: 'rgba(232,220,200,0.55)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#a8c482'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,220,200,0.55)'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M2 7l10 7 10-7" />
                        </svg>
                    </a>
                    <a href="#contacto"
                        style={{ color: 'rgba(232,220,200,0.55)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#a8c482'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,220,200,0.55)'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </a>
                </div>
            </aside>

            {/* Mobile burger button */}
            <button
                type="button"
                aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(open => !open)}
                style={{
                    position: 'fixed',
                    top: '14px',
                    left: '14px',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: '1px solid rgba(168,196,130,0.45)',
                    background: 'linear-gradient(180deg, rgba(42,61,46,0.96) 0%, rgba(30,46,34,0.96) 100%)',
                    color: '#e8dcc8',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: '0 10px 24px rgba(0,0,0,0.28)',
                    zIndex: 70,
                    backdropFilter: 'blur(4px)',
                }}
            >
                {isMobileMenuOpen ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>

            {/* Mobile drawer */}
            <div
                className="lg:hidden"
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 65,
                    pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
                }}
            >
                <button
                    type="button"
                    aria-label="Cerrar menu"
                    onClick={closeMobileMenu}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        background: 'rgba(11,18,13,0.52)',
                        opacity: isMobileMenuOpen ? 1 : 0,
                        transition: 'opacity 0.24s ease',
                    }}
                />

                <aside
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: 'min(80vw, 280px)',
                        background: 'linear-gradient(180deg, #2A3D2E 0%, #1E2E22 100%)',
                        color: '#e8dcc8',
                        display: 'flex',
                        flexDirection: 'column',
                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-104%)',
                        transition: 'transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1)',
                        boxShadow: '14px 0 36px rgba(0,0,0,0.3)',
                    }}
                >
                    <div className="flex flex-col items-center pt-8 pb-5 px-4">
                        <div
                            className="flex flex-col items-center justify-center rounded-full mb-2"
                            style={{
                                width: '62px',
                                height: '62px',
                                border: '1.5px solid rgba(168,196,130,0.5)',
                                background: 'rgba(255,255,255,0.05)',
                            }}
                        >
                            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#a8c482" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                                <path d="M12 22V10" />
                                <path d="M8 14s1-1 4-1 4 1 4 1" />
                            </svg>
                            <span
                                style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '11px',
                                    letterSpacing: '0.12em',
                                    color: '#c8d8b0',
                                    marginTop: '2px',
                                }}
                            >CBS</span>
                        </div>
                    </div>

                    <nav className="flex-1 px-3">
                        {navItems.map((item, i) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 rounded-lg mb-1 transition-all duration-200"
                                style={{
                                    padding: '11px 14px',
                                    color: i === 0 ? '#e8dcc8' : 'rgba(232,220,200,0.78)',
                                    background: i === 0 ? 'rgba(168,196,130,0.2)' : 'transparent',
                                    fontSize: '14px',
                                    fontWeight: i === 0 ? '500' : '400',
                                    fontFamily: 'Inter, sans-serif',
                                    textDecoration: 'none',
                                }}
                            >
                                <span style={{ opacity: i === 0 ? 1 : 0.78 }}>{item.icon}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="px-5 py-5" style={{ borderTop: '1px solid rgba(168,196,130,0.15)' }}>
                        <p
                            style={{
                                fontFamily: 'Dancing Script, cursive',
                                fontSize: '13px',
                                color: 'rgba(232,220,200,0.62)',
                                lineHeight: '1.6',
                            }}
                        >
                            "Trabajando por sistemas agrícolas sostenibles y territorios vivos."
                        </p>
                    </div>
                </aside>
            </div>
        </>
    );
}