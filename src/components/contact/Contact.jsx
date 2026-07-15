import { useState } from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import { contactLinks } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
    const { language, copy } = useLanguage();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setError(language === 'English' ? 'Fill in name, email, and message.' : language === 'Português' ? 'Preencha nome, e-mail e mensagem.' : 'Completa nombre, correo y mensaje.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError(language === 'English' ? 'Enter a valid email address.' : language === 'Português' ? 'Digite um e-mail válido.' : 'Ingresa un correo electrónico válido.');
            return;
        }

        setSent(true);
    }

    return (
        <section id="contacto" style={{ padding: '18px 0 72px' }}>
            <Container>
                <SectionTitle
                    title={copy.sections.contact.title}
                    subtitle={copy.sections.contact.subtitle}
                />

                <div style={{ display: 'grid', gap: '22px', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(320px, 0.95fr)' }}>
                    <Card style={{ padding: '24px' }}>
                        {sent ? (
                            <div style={{ minHeight: '280px', display: 'grid', placeItems: 'center', textAlign: 'center', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(73,99,77,0.94), rgba(145,166,122,0.9))', color: 'white', padding: '26px' }}>
                                <div>
                                    <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.7rem' }}>{language === 'English' ? 'Message sent' : language === 'Português' ? 'Mensagem enviada' : 'Mensaje enviado'}</p>
                                    <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.95rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.84)', marginTop: '12px' }}>{language === 'English' ? 'Thanks for your message. I will reply as soon as possible.' : language === 'Português' ? 'Obrigado pela sua mensagem. Responderei assim que possível.' : 'Gracias por tu mensaje. Responderé tan pronto como sea posible.'}</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
                                    <label style={{ display: 'grid', gap: '8px' }}>
                                        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green)' }}>{language === 'English' ? 'Name' : language === 'Português' ? 'Nome' : 'Nombre'}</span>
                                        <input value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} style={inputStyle} type="text" placeholder={language === 'English' ? 'Your name' : language === 'Português' ? 'Seu nome' : 'Tu nombre'} />
                                    </label>
                                    <label style={{ display: 'grid', gap: '8px' }}>
                                        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green)' }}>{language === 'English' ? 'Email' : language === 'Português' ? 'E-mail' : 'Correo'}</span>
                                        <input value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} style={inputStyle} type="email" placeholder={language === 'English' ? 'you@email.com' : language === 'Português' ? 'voce@email.com' : 'tu@email.com'} />
                                    </label>
                                </div>

                                <label style={{ display: 'grid', gap: '8px' }}>
                                    <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green)' }}>{language === 'English' ? 'Message' : language === 'Português' ? 'Mensagem' : 'Mensaje'}</span>
                                    <textarea value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} style={{ ...inputStyle, minHeight: '180px', resize: 'vertical' }} placeholder={language === 'English' ? 'Tell me about your project or inquiry' : language === 'Português' ? 'Conte-me sobre seu projeto ou consulta' : 'Cuéntame sobre tu proyecto o consulta'} />
                                </label>

                                {error ? (
                                    <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.88rem', color: '#8c3c31', padding: '12px 14px', background: 'rgba(140,60,49,0.08)', border: '1px solid rgba(140,60,49,0.16)', borderRadius: '16px' }}>{error}</p>
                                ) : null}

                                <button type="submit" style={submitStyle}>{language === 'English' ? 'Send message' : language === 'Português' ? 'Enviar mensagem' : 'Enviar mensaje'}</button>
                            </form>
                        )}
                    </Card>

                    <div style={{ display: 'grid', gap: '22px' }}>
                        <Card style={{ padding: '24px', background: 'linear-gradient(180deg, rgba(73,99,77,0.96), rgba(50,69,51,0.98))', color: 'white' }}>
                            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.66)' }}>{language === 'English' ? 'Quote' : language === 'Português' ? 'Citação' : 'Cita'}</p>
                            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.55rem', lineHeight: '1.5', marginTop: '12px' }}>{language === 'English' ? 'Every conversation can become a useful seed for the territory.' : language === 'Português' ? 'Toda conversa pode se tornar uma semente útil para o território.' : 'Cada conversación puede convertirse en una semilla útil para el territorio.'}</p>
                        </Card>

                        <Card style={{ padding: '24px' }}>
                            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--green)' }}>{language === 'English' ? 'Information' : language === 'Português' ? 'Informações' : 'Información'}</p>
                            <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
                                {contactLinks.map((item) => (
                                    <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} style={linkStyle}>
                                        <div>
                                            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green)' }}>{item.label}</p>
                                            <p style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1rem', color: 'var(--ink)', marginTop: '6px' }}>{item.value}</p>
                                        </div>
                                        <span style={{ color: 'var(--green)' }}>↗</span>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
}

const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '18px',
    border: '1px solid rgba(73,99,77,0.14)',
    background: 'rgba(255,255,255,0.75)',
    color: 'var(--ink)',
    outline: 'none',
};

const submitStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 18px',
    borderRadius: '999px',
    border: '1px solid rgba(73,99,77,0.12)',
    background: 'linear-gradient(135deg, var(--green), var(--green-deep))',
    color: 'white',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '0.92rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: 'fit-content',
};

const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    padding: '16px 18px',
    borderRadius: '20px',
    border: '1px solid rgba(73,99,77,0.1)',
    background: 'rgba(255,255,255,0.74)',
    textDecoration: 'none',
};