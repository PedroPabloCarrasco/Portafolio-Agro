import useReveal from '../../hooks/useReveal';
import { useRef, useEffect } from 'react';

const delayClasses = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

function RevealCard({ card, delay }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <a
            ref={ref}
            href={card.href}
            className={`reveal-scale ${delayClasses[delay] || ''}`}
            style={{
                flex: '0 0 170px',
                minHeight: '200px',
                borderRadius: '14px',
                background: card.bg,
                padding: '20px 16px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.18)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
            }}
        >
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: '600', color: 'white', lineHeight: '1.2' }}>
                {card.title}
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5', flex: 1 }}>
                {card.desc}
            </p>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
        </a>
    );
}

const cards = [
    {
        title: 'Sobre mí',
        desc: 'Conoce mi trayectoria profesional, valores y motivación.',
        color: '#45634B',
        bg: 'linear-gradient(135deg, #3a5240 0%, #2d4a35 100%)',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
        ),
        href: '#sobre-mi',
    },
    {
        title: 'Formación',
        desc: 'Mi preparación académica y especializaciones internacionales.',
        color: '#5C7A50',
        bg: 'linear-gradient(135deg, #4a6642 0%, #3a5434 100%)',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
            </svg>
        ),
        href: '#formacion',
    },
    {
        title: 'Experiencia',
        desc: 'Proyectos, asesorías y colaboraciones en agroecología y sostenibilidad.',
        color: '#8B6D4D',
        bg: 'linear-gradient(135deg, #7a5e3e 0%, #6b4f32 100%)',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
        ),
        href: '#experiencia',
    },
    {
        title: 'Proyectos',
        desc: 'Iniciativas en agroecología, territorio y desarrollo rural sostenible.',
        color: '#4E8080',
        bg: 'linear-gradient(135deg, #3e6e6e 0%, #305e5e 100%)',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                <path d="M12 22V10" />
            </svg>
        ),
        href: '#proyectos',
    },
    {
        title: 'Publicaciones',
        desc: 'Artículos, capítulos y publicaciones científicas.',
        color: '#6E7F8C',
        bg: 'linear-gradient(135deg, #5e6e7a 0%, #4e5f6c 100%)',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
        href: '#publicaciones',
    },
];

export default function ExploreSection() {
    const titleRef = useReveal({ threshold: 0.3 });
    return (
        <section
            id="explora"
            style={{
                background: 'transparent',
                padding: '0 32px 60px 32px',
            }}
        >
            {/* Título */}
            <div
                ref={titleRef}
                className="reveal"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '32px',
                }}
            >
                {/* Decoración izquierda */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M1 7C4 3 8 1 12 3C16 5 18 9 18 9" stroke="#45634B" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M12 3C13 0 15 1 14 4" stroke="#45634B" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path d="M8 18C8 18 2 13 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 13 8 18 8 18Z" fill="#45634B" opacity="0.5" />
                        <path d="M8 18V6" stroke="#2d4a35" strokeWidth="1" />
                    </svg>
                </div>

                <h2
                    style={{
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        fontSize: '22px',
                        color: '#2d4a35',
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Explora mi trabajo
                </h2>

                {/* Decoración derecha */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path d="M8 18C8 18 2 13 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 13 8 18 8 18Z" fill="#45634B" opacity="0.5" />
                        <path d="M8 18V6" stroke="#2d4a35" strokeWidth="1" />
                    </svg>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ transform: 'scaleX(-1)' }}>
                        <path d="M1 7C4 3 8 1 12 3C16 5 18 9 18 9" stroke="#45634B" strokeWidth="1.2" strokeLinecap="round" />
                        <path d="M12 3C13 0 15 1 14 4" stroke="#45634B" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            {/* Cards con aparición escalonada */}
            <div
                style={{
                    display: 'flex',
                    gap: '14px',
                    maxWidth: '960px',
                    margin: '0 auto',
                    overflowX: 'auto',
                    paddingBottom: '8px',
                }}
            >
                {cards.map((card, i) => (
                    <RevealCard key={card.href} card={card} delay={i} />
                ))}
            </div>
        </section>
    );
}
