export default function Button({ children, className = '', variant = 'primary', type = 'button', onClick, href }) {
    const base = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        borderRadius: '999px',
        padding: '0.78rem 1.15rem',
        border: '1px solid transparent',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '0.92rem',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease, border-color 180ms ease',
        cursor: 'pointer',
    };

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, var(--green), var(--green-deep))',
            color: 'white',
            boxShadow: '0 16px 30px rgba(49,69,52,0.18)',
        },
        soft: {
            background: 'rgba(255,255,255,0.72)',
            color: 'var(--ink)',
            borderColor: 'rgba(73,99,77,0.14)',
        },
    };

    const shared = { ...base, ...(variants[variant] || variants.primary) };

    if (href) {
        return (
            <a href={href} style={shared} className={className}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} style={shared} className={className}>
            {children}
        </button>
    );
}
