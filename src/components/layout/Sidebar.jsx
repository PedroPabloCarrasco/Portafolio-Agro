import { useEffect, useState } from 'react';
import { navigation } from '../../data/profile';

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
                    width: '248px',
                    background: 'linear-gradient(180deg, rgba(31, 45, 32, 0.98) 0%, rgba(42, 61, 46, 0.98) 100%)',
                    color: '#f3ecdf',
                    borderRight: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '10px 0 30px rgba(16, 27, 18, 0.08)',
                }}
            >
                <div className="flex flex-col items-center pt-8 pb-6 px-5">
                    <div
                        className="flex flex-col items-center justify-center rounded-full mb-3"
                        style={{
                            width: '76px',
                            height: '76px',
                            border: '1px solid rgba(170, 196, 146, 0.38)',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                        }}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b7d29b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                            <path d="M12 22V10" />
                            <path d="M8 14s1-1 4-1 4 1 4 1" />
                        </svg>
                        <span
                            style={{
                                fontFamily: 'Playfair Display, Georgia, serif',
                                fontSize: '12px',
                                letterSpacing: '0.12em',
                                color: '#c8d8b0',
                                marginTop: '3px',
                            }}
                        >CBS</span>
                    </div>
                    <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(243,236,223,0.58)', textAlign: 'center' }}>Agroecología · Academia · Territorio</p>
                </div>

                <nav className="flex-1 px-4 pb-4">
                    {navigation.map((item, i) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 rounded-2xl mb-1 transition-all duration-200"
                            style={{
                                padding: '11px 14px',
                                color: i === 0 ? '#f7f0e3' : 'rgba(243,236,223,0.68)',
                                background: i === 0 ? 'rgba(170,196,146,0.16)' : 'transparent',
                                fontSize: '13px',
                                fontWeight: i === 0 ? '600' : '400',
                                fontFamily: 'Inter, system-ui, sans-serif',
                                textDecoration: 'none',
                                border: '1px solid transparent',
                            }}
                            onMouseEnter={e => {
                                if (i !== 0) {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.color = '#f7f0e3';
                                }
                            }}
                            onMouseLeave={e => {
                                if (i !== 0) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.color = 'rgba(243,236,223,0.68)';
                                }
                            }}
                        >
                            <span style={{ width: '18px', display: 'inline-flex', opacity: i === 0 ? 1 : 0.7 }}>{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="px-5 py-5" style={{ borderTop: '1px solid rgba(170,196,146,0.12)' }}>
                    <p
                        style={{
                            fontFamily: 'Playfair Display, Georgia, serif',
                            fontStyle: 'italic',
                            fontSize: '13px',
                            color: 'rgba(243,236,223,0.7)',
                            lineHeight: '1.6',
                        }}
                    >
                        "Ciencia aplicada para territorios vivos y sistemas agroecológicos resilientes."
                    </p>
                </div>

                <div className="flex items-center justify-center gap-3 pb-7 pt-2">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                        style={{ color: 'rgba(243,236,223,0.55)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#b7d29b'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(243,236,223,0.55)'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="mailto:claudia@example.com"
                        style={{ color: 'rgba(243,236,223,0.55)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#b7d29b'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(243,236,223,0.55)'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M2 7l10 7 10-7" />
                        </svg>
                    </a>
                    <a href="#contacto"
                        style={{ color: 'rgba(243,236,223,0.55)' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#b7d29b'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(243,236,223,0.55)'}
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
                    borderRadius: '16px',
                    border: '1px solid rgba(170,196,146,0.28)',
                    background: 'linear-gradient(180deg, rgba(36,51,37,0.96) 0%, rgba(31,45,32,0.96) 100%)',
                    color: '#f3ecdf',
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
                        color: '#f3ecdf',
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
                                width: '66px',
                                height: '66px',
                                border: '1px solid rgba(170,196,146,0.38)',
                                background: 'rgba(255,255,255,0.05)',
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b7d29b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                                <path d="M12 22V10" />
                                <path d="M8 14s1-1 4-1 4 1 4 1" />
                            </svg>
                            <span
                                style={{
                                    fontFamily: 'Playfair Display, Georgia, serif',
                                    fontSize: '12px',
                                    letterSpacing: '0.12em',
                                    color: '#c8d8b0',
                                    marginTop: '3px',
                                }}
                            >CBS</span>
                        </div>
                    </div>

                    <nav className="flex-1 px-4">
                        {navigation.map((item, i) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 rounded-2xl mb-1 transition-all duration-200"
                                style={{
                                    padding: '11px 14px',
                                    color: i === 0 ? '#f7f0e3' : 'rgba(243,236,223,0.78)',
                                    background: i === 0 ? 'rgba(168,196,130,0.18)' : 'transparent',
                                    fontSize: '13px',
                                    fontWeight: i === 0 ? '500' : '400',
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    textDecoration: 'none',
                                }}
                            >
                                <span style={{ width: '18px', display: 'inline-flex', opacity: i === 0 ? 1 : 0.78 }}>{item.icon}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="px-5 py-5" style={{ borderTop: '1px solid rgba(168,196,130,0.15)' }}>
                        <p
                            style={{
                                fontFamily: 'Playfair Display, Georgia, serif',
                                fontStyle: 'italic',
                                fontSize: '13px',
                                color: 'rgba(243,236,223,0.72)',
                                lineHeight: '1.6',
                            }}
                        >
                            "Ciencia aplicada para territorios vivos y sistemas agroecológicos resilientes."
                        </p>
                    </div>
                </aside>
            </div>
        </>
    );
}