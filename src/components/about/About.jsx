import { useState, useEffect, useRef } from 'react';
import SectionTitle from '../common/SectionTitle';
import useReveal from '../../hooks/useReveal';

const values = [
    { label: 'Agroecología', color: '#45634B' },
    { label: 'Sostenibilidad', color: '#5C7A50' },
    { label: 'Territorio', color: '#4E8080' },
    { label: 'Biodiversidad', color: '#7A8C5C' },
    { label: 'Ciencia participativa', color: '#8B6D4D' },
    { label: 'Sistemas alimentarios', color: '#45634B' },
    { label: 'Desarrollo rural', color: '#4E8080' },
    { label: 'Patrimonio natural', color: '#6E7F8C' },
];

const skills = [
    { name: 'Investigación científica', pct: 92 },
    { name: 'Gestión de proyectos agrícolas', pct: 88 },
    { name: 'Análisis de sistemas agroalimentarios', pct: 85 },
    { name: 'Trabajo de campo y diagnóstico territorial', pct: 90 },
    { name: 'Divulgación y comunicación ambiental', pct: 80 },
];

function SkillBar({ name, pct, active }) {
    return (
        <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#2d4a35', fontWeight: '500' }}>{name}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--green)', fontWeight: '600' }}>{pct}%</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(69,99,75,0.12)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{
                    height: '100%',
                    width: active ? `${pct}%` : '0%',
                    background: 'linear-gradient(90deg, var(--green), #7E9C74)',
                    borderRadius: '10px',
                    transition: 'width 1.3s cubic-bezier(0.22,1,0.36,1)',
                }} />
            </div>
        </div>
    );
}

export default function About() {
    const leftRef = useReveal({ threshold: 0.15 });
    const rightRef = useReveal({ threshold: 0.15 });
    const barsRef = useRef(null);
    const [barsActive, setBarsActive] = useState(false);

    useEffect(() => {
        const el = barsRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setBarsActive(true); obs.disconnect(); }
        }, { threshold: 0.2 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="sobre-mi" style={{ padding: '80px 48px', background: 'transparent', position: 'relative' }}>
            <SectionTitle
                title="Sobre mí"
                subtitle="Investigadora y profesional comprometida con la transformación sostenible de los sistemas agrícolas y territoriales."
            />

            <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {/* Columna izquierda — avatar + valores */}
                <div ref={leftRef} className="reveal-left" style={{ flex: '0 0 280px' }}>
                    {/* Avatar */}
                    <div style={{
                        width: '280px',
                        height: '300px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #2d4a35 0%, #45634B 60%, #7E9C74 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '28px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(45,74,53,0.3)',
                    }}>
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.12 }}>
                            <svg width="100%" height="100%" viewBox="0 0 280 300">
                                <path d="M140 290C140 290 60 240 60 165C60 108 95 62 140 62C185 62 220 108 220 165C220 240 140 290 140 290Z" fill="white" />
                                <path d="M140 290V90" stroke="white" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1 }}>
                            <circle cx="12" cy="8" r="5" />
                            <path d="M3 21c0-5 4-9 9-9s9 4 9 9" />
                        </svg>
                        <p style={{ fontFamily: 'Dancing Script, cursive', fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginTop: '12px', position: 'relative', zIndex: 1 }}>
                            Claudia Barrera Salas
                        </p>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', position: 'relative', zIndex: 1, marginTop: '4px' }}>
                            Ingeniera Agrónoma · PhD
                        </p>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {values.map((v) => (
                            <span key={v.label} style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '11px',
                                fontWeight: '500',
                                padding: '5px 12px',
                                borderRadius: '20px',
                                background: `${v.color}16`,
                                border: `1px solid ${v.color}30`,
                                color: v.color,
                                letterSpacing: '0.04em',
                            }}>{v.label}</span>
                        ))}
                    </div>
                </div>

                {/* Columna derecha — bio + competencias */}
                <div ref={rightRef} className="reveal-right" style={{ flex: 1, minWidth: '280px' }}>
                    <p style={{
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        fontSize: '19px',
                        color: '#2d4a35',
                        lineHeight: '1.65',
                        marginBottom: '28px',
                        borderLeft: '3px solid var(--green)',
                        paddingLeft: '20px',
                    }}>
                        "Creo que la agroecología no es solo una disciplina científica, es una forma de entender y habitar el territorio con responsabilidad."
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(45,45,45,0.72)', lineHeight: '1.85', marginBottom: '16px' }}>
                        Soy Ingeniera Agrónoma con Máster en Agricultura y Ganadería Ecológica por la Universidad Pablo de Olavide (España) y Doctora en Territorio, Patrimonio y Medio Ambiente con especialidad en Agroecología por la Universidad de Granada.
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(45,45,45,0.72)', lineHeight: '1.85', marginBottom: '36px' }}>
                        Mi trabajo se centra en la intersección entre los sistemas agroalimentarios, la biodiversidad y el desarrollo rural sostenible. He participado en proyectos de investigación en España, América Latina y África subsahariana, siempre con un enfoque participativo y transdisciplinar.
                    </p>

                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#1E2E22', marginBottom: '22px' }}>Competencias</h3>
                    <div ref={barsRef}>
                        {skills.map((s) => (
                            <SkillBar key={s.name} name={s.name} pct={s.pct} active={barsActive} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

