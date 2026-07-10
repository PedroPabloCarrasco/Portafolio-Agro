import useReveal from '../../hooks/useReveal';
import SectionTitle from '../common/SectionTitle';

const education = [
    {
        degree: 'Doctorado en Territorio, Patrimonio y Medio Ambiente',
        spec: 'Especialidad: Agroecología',
        institution: 'Universidad de Granada',
        location: 'Granada, España',
        period: '2018 – 2023',
        desc: 'Tesis doctoral centrada en la caracterización de sistemas agroecológicos en territorios periurbanos y la valorización del conocimiento local campesino. Mención Internacional.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        color: '#2d4a35',
        tag: 'Doctorado',
    },
    {
        degree: 'Máster en Agricultura y Ganadería Ecológica',
        spec: '',
        institution: 'Universidad Pablo de Olavide (UPO)',
        location: 'Sevilla, España',
        period: '2015 – 2017',
        desc: 'Formación avanzada en manejo ecológico de sistemas agropecuarios, certificación ecológica, biodiversidad agraria y políticas agroambientales europeas.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
            </svg>
        ),
        color: '#45634B',
        tag: 'Máster',
    },
    {
        degree: 'Ingeniería Agronómica',
        spec: 'Mención: Gestión y Conservación del Medio Natural',
        institution: 'Universidad de Córdoba',
        location: 'Córdoba, España',
        period: '2009 – 2015',
        desc: 'Formación integral en ciencias agrarias, producción vegetal y animal, gestión del agua, edafología y planificación territorial sostenible.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-6 8-13A8 8 0 0 0 4 9c0 7 8 13 8 13z" />
                <path d="M12 22V10" />
            </svg>
        ),
        color: '#5C7A50',
        tag: 'Grado',
    },
    {
        degree: 'Curso Internacional de Agroecología Tropical',
        spec: '',
        institution: 'CATIE – Centro Agronómico Tropical de Investigación y Enseñanza',
        location: 'Turrialba, Costa Rica',
        period: '2016',
        desc: 'Programa intensivo de tres meses sobre diseño de sistemas agroforestales, agricultura campesina y transición agroecológica en contextos tropicales.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
        color: '#8B6D4D',
        tag: 'Curso',
    },
];

const languages = [
    { lang: 'Español', level: 'Nativo', pct: 100 },
    { lang: 'Inglés', level: 'C1 – Avanzado', pct: 85 },
    { lang: 'Francés', level: 'B1 – Intermedio', pct: 60 },
    { lang: 'Portugués', level: 'B2 – Intermedio-Alto', pct: 72 },
];

export default function Education() {
    const titleRef = useReveal({ threshold: 0.2 });

    return (
        <section id="formacion" style={{ padding: '80px 48px', background: 'transparent', position: 'relative' }}>
            <div ref={titleRef} className="reveal">
                <SectionTitle
                    title="Formación académica"
                    subtitle="Un recorrido multidisciplinar entre la agronomía, la ecología y el pensamiento territorial."
                />
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '32px', maxWidth: '820px' }}>
                {/* Línea vertical */}
                <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '8px',
                    bottom: '8px',
                    width: '2px',
                    background: 'linear-gradient(180deg, var(--green) 0%, rgba(69,99,75,0.15) 100%)',
                    borderRadius: '2px',
                }} />

                {education.map((item, i) => (
                    <EducationItem key={i} item={item} index={i} />
                ))}
            </div>

            {/* Idiomas */}
            <div style={{ marginTop: '64px', maxWidth: '820px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#1E2E22', marginBottom: '28px' }}>Idiomas</h3>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    {languages.map((l) => (
                        <div key={l.lang} style={{
                            flex: '1 1 160px',
                            background: 'var(--paper)',
                            border: '1px solid rgba(69,99,75,0.15)',
                            borderRadius: '12px',
                            padding: '20px',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                        }}>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', color: '#1E2E22', marginBottom: '4px' }}>{l.lang}</p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'var(--green)', marginBottom: '12px', fontWeight: '500' }}>{l.level}</p>
                            <div style={{ height: '5px', background: 'rgba(69,99,75,0.12)', borderRadius: '10px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${l.pct}%`, background: 'linear-gradient(90deg, var(--green), #7E9C74)', borderRadius: '10px' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function EducationItem({ item, index }) {
    const ref = useReveal({ threshold: 0.15 });
    return (
        <div
            ref={ref}
            className="reveal"
            style={{ marginBottom: '40px', paddingLeft: '32px', position: 'relative', animationDelay: `${index * 0.15}s` }}
        >
            {/* Nodo en la línea */}
            <div style={{
                position: 'absolute',
                left: '-40px',
                top: '10px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 12px ${item.color}50`,
                zIndex: 1,
            }}>
                {item.icon}
            </div>

            {/* Tarjeta */}
            <div style={{
                background: 'var(--paper)',
                border: '1px solid rgba(69,99,75,0.12)',
                borderRadius: '14px',
                padding: '24px 28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.2s',
            }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(45,74,53,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                        <span style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '10px',
                            fontWeight: '600',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'white',
                            background: item.color,
                            padding: '3px 10px',
                            borderRadius: '20px',
                            marginBottom: '8px',
                            display: 'inline-block',
                        }}>{item.tag}</span>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', color: '#1E2E22', lineHeight: '1.3', marginTop: '6px' }}>
                            {item.degree}
                        </h3>
                        {item.spec && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--green)', marginTop: '3px', fontWeight: '500' }}>{item.spec}</p>}
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(45,45,45,0.5)', whiteSpace: 'nowrap', marginTop: '4px' }}>{item.period}</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(45,45,45,0.65)', marginBottom: '10px' }}>
                    📍 {item.institution} · {item.location}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(45,45,45,0.7)', lineHeight: '1.7' }}>
                    {item.desc}
                </p>
            </div>
        </div>
    );
}
