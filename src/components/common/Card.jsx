export default function Card({ children, className = '', style = {}, as: Component = 'div' }) {
    return (
        <Component
            className={className}
            style={{
                borderRadius: 'var(--radius)',
                border: '1px solid rgba(83, 89, 72, 0.16)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(252,249,242,0.98))',
                boxShadow: '0 16px 38px rgba(50,53,44,0.08)',
                backdropFilter: 'blur(12px)',
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
