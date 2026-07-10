import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import SectionTitle from '../common/SectionTitle';

const contactInfo = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
            </svg>
        ),
        label: 'Correo electrónico',
        value: 'claudia.barrera@ugr.es',
        href: 'mailto:claudia.barrera@ugr.es',
        color: '#2d4a35',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        label: 'LinkedIn',
        value: 'linkedin.com/in/claudia-barrera-salas',
        href: 'https://linkedin.com',
        color: '#45634B',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Institución',
        value: 'Universidad de Córdoba – ISEC, Edificio Huleva',
        href: 'https://www.uco.es',
        color: '#4E8080',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        label: 'Perfiles académicos',
        value: 'ResearchGate · ORCID · Google Scholar',
        href: 'https://orcid.org',
        color: '#8B6D4D',
    },
];

export default function Contact() {
    const titleRef = useReveal({ threshold: 0.2 });
    const formRef = useReveal({ threshold: 0.1 });
    const infoRef = useReveal({ threshold: 0.1 });

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    function handleChange(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError('Por favor completa los campos obligatorios.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError('Introduce un email válido.');
            return;
        }
        // Simulación de envío (sin backend)
        setSent(true);
    }

    const inputStyle = {
        width: '100%',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        padding: '11px 16px',
        borderRadius: '10px',
        border: '1px solid rgba(69,99,75,0.22)',
        background: 'rgba(251,248,243,0.8)',
        color: '#2d2d2d',
        outline: 'none',
        transition: 'border-color 0.2s',
        boxSizing: 'border-box',
    };

    return (
        <section id="contacto" style={{ padding: '80px 48px 60px', background: 'transparent', position: 'relative' }}>
            <div ref={titleRef} className="reveal">
                <SectionTitle
                    title="Contacto"
                    subtitle="¿Tienes una propuesta de colaboración, consultoría o simplemente quieres compartir ideas? Escríbeme."
                />
            </div>

            <div style={{ display: 'flex', gap: '52px', flexWrap: 'wrap', maxWidth: '1000px' }}>
                {/* Formulario */}
                <div ref={formRef} className="reveal-left" style={{ flex: '1 1 380px' }}>
                    {sent ? (
                        <div style={{
                            background: 'linear-gradient(135deg, #2d4a35, #45634B)',
                            borderRadius: '16px',
                            padding: '48px 36px',
                            textAlign: 'center',
                            boxShadow: '0 12px 40px rgba(45,74,53,0.25)',
                        }}>
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌿</div>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: 'white', marginBottom: '12px' }}>¡Mensaje enviado!</h3>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                                Gracias por ponerte en contacto. Te responderé lo antes posible.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#2d4a35', display: 'block', marginBottom: '6px' }}>
                                        Nombre <span style={{ color: '#8B6D4D' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'var(--green)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(69,99,75,0.22)'}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#2d4a35', display: 'block', marginBottom: '6px' }}>
                                        Email <span style={{ color: '#8B6D4D' }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="tu@email.com"
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'var(--green)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(69,99,75,0.22)'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#2d4a35', display: 'block', marginBottom: '6px' }}>
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Motivo del mensaje"
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(69,99,75,0.22)'}
                                />
                            </div>

                            <div>
                                <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '500', color: '#2d4a35', display: 'block', marginBottom: '6px' }}>
                                    Mensaje <span style={{ color: '#8B6D4D' }}>*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Escribe tu mensaje aquí..."
                                    rows={6}
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                                    onFocus={e => e.target.style.borderColor = 'var(--green)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(69,99,75,0.22)'}
                                />
                            </div>

                            {error && (
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#c0392b', background: 'rgba(192,57,43,0.08)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(192,57,43,0.2)' }}>
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    padding: '13px 32px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    background: 'linear-gradient(135deg, #2d4a35, #45634B)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'opacity 0.2s, transform 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    width: 'fit-content',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22,2 15,22 11,13 2,9" />
                                </svg>
                                Enviar mensaje
                            </button>
                        </form>
                    )}
                </div>

                {/* Info de contacto */}
                <div ref={infoRef} className="reveal-right" style={{ flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Cita decorativa */}
                    <div style={{
                        background: 'linear-gradient(135deg, #2d4a35, #45634B)',
                        borderRadius: '14px',
                        padding: '28px 24px',
                        marginBottom: '8px',
                    }}>
                        <p style={{ fontFamily: 'Dancing Script, cursive', fontSize: '17px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                            "Cada conversación es una semilla que puede crecer en proyectos transformadores."
                        </p>
                    </div>

                    {contactInfo.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '14px 18px',
                                background: 'var(--paper)',
                                border: '1px solid rgba(69,99,75,0.12)',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(45,74,53,0.12)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                        >
                            <div style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '10px',
                                background: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: item.color, marginBottom: '2px' }}>{item.label}</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(45,45,45,0.7)', lineHeight: '1.4' }}>{item.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
