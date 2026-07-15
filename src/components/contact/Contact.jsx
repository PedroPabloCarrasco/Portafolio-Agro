import { useState } from 'react';


import Container from '../common/Container';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';
import EditableText from '../admin/EditableText';

import { useEditor } from '../../context/EditorContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
    const { language } = useLanguage();

    const {
        content,
        isEditing,
    } = useEditor();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const contactLinks = Array.isArray(
        content?.contact?.links,
    )
        ? content.contact.links
        : [];

    function handleSubmit(event) {
        event.preventDefault();

        if (isEditing) {
            setError(
                language === 'English'
                    ? 'Finish editing the page before sending the form.'
                    : language === 'Português'
                        ? 'Finalize a edição da página antes de enviar o formulário.'
                        : 'Termina la edición de la página antes de enviar el formulario.',
            );

            return;
        }

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.message.trim()
        ) {
            setError(
                language === 'English'
                    ? 'Fill in name, email, and message.'
                    : language === 'Português'
                        ? 'Preencha nome, e-mail e mensagem.'
                        : 'Completa nombre, correo y mensaje.',
            );

            return;
        }

        const emailIsValid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                form.email,
            );

        if (!emailIsValid) {
            setError(
                language === 'English'
                    ? 'Enter a valid email address.'
                    : language === 'Português'
                        ? 'Digite um e-mail válido.'
                        : 'Ingresa un correo electrónico válido.',
            );

            return;
        }

        setError('');
        setSent(true);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));

        if (error) {
            setError('');
        }
    }

    function handleContactLinkClick(event) {
        if (isEditing) {
            event.preventDefault();
        }
    }

    return (
        <section
            id="contacto"
            style={{
                padding: '18px 0 72px',
            }}
        >
            <Container>
                <SectionTitle
                    titlePath="contact.title"
                    subtitlePath="contact.subtitle"
                />

                <div
                    style={{
                        display: 'grid',
                        gap: '22px',
                        gridTemplateColumns:
                            'minmax(0, 1.05fr) minmax(320px, 0.95fr)',
                    }}
                >
                    {/* Formulario */}
                    <Card
                        style={{
                            padding: '24px',
                        }}
                    >
                        {sent ? (
                            <div
                                style={{
                                    minHeight: '280px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    textAlign: 'center',
                                    borderRadius: '24px',

                                    background:
                                        'linear-gradient(135deg, rgba(73,99,77,0.94), rgba(145,166,122,0.9))',

                                    color: 'white',
                                    padding: '26px',
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            fontFamily:
                                                'Playfair Display, Georgia, serif',

                                            fontSize: '1.7rem',
                                        }}
                                    >
                                        {language === 'English'
                                            ? 'Message sent'
                                            : language ===
                                                'Português'
                                                ? 'Mensagem enviada'
                                                : 'Mensaje enviado'}
                                    </p>

                                    <p
                                        style={{
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',

                                            fontSize: '0.95rem',
                                            lineHeight: '1.8',

                                            color:
                                                'rgba(255,255,255,0.84)',

                                            marginTop: '12px',
                                        }}
                                    >
                                        {language === 'English'
                                            ? 'Thanks for your message. I will reply as soon as possible.'
                                            : language ===
                                                'Português'
                                                ? 'Obrigado pela sua mensagem. Responderei assim que possível.'
                                                : 'Gracias por tu mensaje. Responderé tan pronto como sea posible.'}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSent(false);

                                            setForm({
                                                name: '',
                                                email: '',
                                                message: '',
                                            });
                                        }}
                                        style={{
                                            ...submitStyle,
                                            margin: '20px auto 0',

                                            background:
                                                'rgba(255,255,255,0.14)',

                                            border:
                                                '1px solid rgba(255,255,255,0.24)',
                                        }}
                                    >
                                        {language === 'English'
                                            ? 'Send another message'
                                            : language ===
                                                'Português'
                                                ? 'Enviar outra mensagem'
                                                : 'Enviar otro mensaje'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: 'grid',
                                    gap: '16px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'grid',
                                        gap: '16px',

                                        gridTemplateColumns:
                                            'repeat(2, minmax(0, 1fr))',
                                    }}
                                >
                                    <label
                                        style={{
                                            display: 'grid',
                                            gap: '8px',
                                        }}
                                    >
                                        <span
                                            style={labelStyle}
                                        >
                                            {language ===
                                                'English'
                                                ? 'Name'
                                                : language ===
                                                    'Português'
                                                    ? 'Nome'
                                                    : 'Nombre'}
                                        </span>

                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={
                                                handleInputChange
                                            }
                                            style={inputStyle}
                                            type="text"
                                            placeholder={
                                                language ===
                                                    'English'
                                                    ? 'Your name'
                                                    : language ===
                                                        'Português'
                                                        ? 'Seu nome'
                                                        : 'Tu nombre'
                                            }
                                        />
                                    </label>

                                    <label
                                        style={{
                                            display: 'grid',
                                            gap: '8px',
                                        }}
                                    >
                                        <span
                                            style={labelStyle}
                                        >
                                            {language ===
                                                'English'
                                                ? 'Email'
                                                : language ===
                                                    'Português'
                                                    ? 'E-mail'
                                                    : 'Correo'}
                                        </span>

                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={
                                                handleInputChange
                                            }
                                            style={inputStyle}
                                            type="email"
                                            placeholder={
                                                language ===
                                                    'English'
                                                    ? 'you@email.com'
                                                    : language ===
                                                        'Português'
                                                        ? 'voce@email.com'
                                                        : 'tu@email.com'
                                            }
                                        />
                                    </label>
                                </div>

                                <label
                                    style={{
                                        display: 'grid',
                                        gap: '8px',
                                    }}
                                >
                                    <span style={labelStyle}>
                                        {language === 'English'
                                            ? 'Message'
                                            : language ===
                                                'Português'
                                                ? 'Mensagem'
                                                : 'Mensaje'}
                                    </span>

                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={
                                            handleInputChange
                                        }
                                        style={{
                                            ...inputStyle,
                                            minHeight: '180px',
                                            resize: 'vertical',
                                        }}
                                        placeholder={
                                            language ===
                                                'English'
                                                ? 'Tell me about your project or inquiry'
                                                : language ===
                                                    'Português'
                                                    ? 'Conte-me sobre seu projeto ou consulta'
                                                    : 'Cuéntame sobre tu proyecto o consulta'
                                        }
                                    />
                                </label>

                                {error ? (
                                    <p
                                        role="alert"
                                        style={{
                                            fontFamily:
                                                'Inter, system-ui, sans-serif',

                                            fontSize: '0.88rem',
                                            color: '#8c3c31',

                                            padding: '12px 14px',

                                            background:
                                                'rgba(140,60,49,0.08)',

                                            border:
                                                '1px solid rgba(140,60,49,0.16)',

                                            borderRadius:
                                                '16px',
                                        }}
                                    >
                                        {error}
                                    </p>
                                ) : null}

                                <button
                                    type="submit"
                                    style={{
                                        ...submitStyle,

                                        opacity: isEditing
                                            ? 0.65
                                            : 1,

                                        cursor: isEditing
                                            ? 'not-allowed'
                                            : 'pointer',
                                    }}
                                >
                                    {language === 'English'
                                        ? 'Send message'
                                        : language ===
                                            'Português'
                                            ? 'Enviar mensagem'
                                            : 'Enviar mensaje'}
                                </button>
                            </form>
                        )}
                    </Card>

                    {/* Columna lateral */}
                    <div
                        style={{
                            display: 'grid',
                            gap: '22px',
                        }}
                    >
                        {/* Frase editable */}
                        <Card
                            style={{
                                padding: '24px',

                                background:
                                    'linear-gradient(180deg, rgba(73,99,77,0.96), rgba(50,69,51,0.98))',

                                color: 'white',
                            }}
                        >
                            <EditableText
                                path="contact.eyebrow"
                                style={{
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',

                                    fontSize: '0.72rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',

                                    color:
                                        'rgba(255,255,255,0.66)',
                                }}
                            />

                            <EditableText
                                path="contact.message"
                                multiline
                                style={{
                                    fontFamily:
                                        'Playfair Display, Georgia, serif',

                                    fontSize: '1.55rem',
                                    lineHeight: '1.5',

                                    color: '#ffffff',
                                    marginTop: '12px',
                                    whiteSpace: 'pre-line',
                                }}
                            />
                        </Card>

                        {/* Información editable */}
                        <Card
                            style={{
                                padding: '24px',
                            }}
                        >
                            <EditableText
                                path="contact.informationTitle"
                                style={{
                                    fontFamily:
                                        'Inter, system-ui, sans-serif',

                                    fontSize: '0.72rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',

                                    color: 'var(--green)',
                                }}
                            />

                            <div
                                style={{
                                    display: 'grid',
                                    gap: '12px',
                                    marginTop: '16px',
                                }}
                            >
                                {contactLinks.map(
                                    (item, index) => {
                                        const href =
                                            typeof item?.href ===
                                                'string'
                                                ? item.href
                                                : '';

                                        const isExternalLink =
                                            href.startsWith(
                                                'http',
                                            );

                                        return (
                                            <div
                                                key={`contact-link-${index}`}
                                                style={{
                                                    position:
                                                        'relative',
                                                }}
                                            >
                                                <a
                                                    href={
                                                        href ||
                                                        '#'
                                                    }
                                                    target={
                                                        isExternalLink
                                                            ? '_blank'
                                                            : undefined
                                                    }
                                                    rel={
                                                        isExternalLink
                                                            ? 'noreferrer'
                                                            : undefined
                                                    }
                                                    onClick={
                                                        handleContactLinkClick
                                                    }
                                                    style={{
                                                        ...linkStyle,

                                                        cursor:
                                                            isEditing
                                                                ? 'default'
                                                                : 'pointer',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            minWidth:
                                                                0,
                                                            flex: 1,
                                                        }}
                                                    >
                                                        <EditableText
                                                            path={`contact.links.${index}.label`}
                                                            style={{
                                                                fontFamily:
                                                                    'Inter, system-ui, sans-serif',

                                                                fontSize:
                                                                    '0.72rem',

                                                                letterSpacing:
                                                                    '0.16em',

                                                                textTransform:
                                                                    'uppercase',

                                                                color:
                                                                    'var(--green)',
                                                            }}
                                                        />

                                                        <EditableText
                                                            path={`contact.links.${index}.value`}
                                                            style={{
                                                                fontFamily:
                                                                    'Playfair Display, Georgia, serif',

                                                                fontSize:
                                                                    '1rem',

                                                                lineHeight:
                                                                    '1.45',

                                                                color:
                                                                    'var(--ink)',

                                                                marginTop:
                                                                    '6px',

                                                                overflowWrap:
                                                                    'anywhere',
                                                            }}
                                                        />
                                                    </div>

                                                    <span
                                                        aria-hidden="true"
                                                        style={{
                                                            color:
                                                                'var(--green)',

                                                            fontSize:
                                                                '1rem',

                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        ↗
                                                    </span>
                                                </a>

                                                {isEditing && (
                                                    <div
                                                        style={{
                                                            marginTop:
                                                                '8px',

                                                            padding:
                                                                '10px 14px',

                                                            borderRadius:
                                                                '14px',

                                                            background:
                                                                'rgba(73,99,77,0.05)',

                                                            border:
                                                                '1px dashed rgba(73,99,77,0.2)',
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                display:
                                                                    'block',

                                                                marginBottom:
                                                                    '6px',

                                                                fontFamily:
                                                                    'Inter, system-ui, sans-serif',

                                                                fontSize:
                                                                    '0.65rem',

                                                                letterSpacing:
                                                                    '0.14em',

                                                                textTransform:
                                                                    'uppercase',

                                                                color:
                                                                    'var(--green)',
                                                            }}
                                                        >
                                                            URL del
                                                            enlace
                                                        </span>

                                                        <EditableText
                                                            path={`contact.links.${index}.href`}
                                                            style={{
                                                                fontFamily:
                                                                    'Inter, system-ui, sans-serif',

                                                                fontSize:
                                                                    '0.76rem',

                                                                lineHeight:
                                                                    '1.5',

                                                                color:
                                                                    'var(--muted)',

                                                                overflowWrap:
                                                                    'anywhere',
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
}

const labelStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '0.72rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--green)',
};

const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '18px',
    border: '1px solid rgba(73,99,77,0.14)',
    background: 'rgba(255,255,255,0.75)',
    color: 'var(--ink)',
    outline: 'none',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '0.92rem',
    boxSizing: 'border-box',
};

const submitStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '14px 18px',

    borderRadius: '999px',
    border: '1px solid rgba(73,99,77,0.12)',

    background:
        'linear-gradient(135deg, var(--green), var(--green-deep))',

    color: 'white',

    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '0.92rem',
    fontWeight: '600',

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
    color: 'inherit',
};