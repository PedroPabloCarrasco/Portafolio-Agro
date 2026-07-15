export default function Container({ children, className = '', as: Component = 'div', style = {} }) {
    return (
        <Component
            className={className}
            style={{
                width: '100%',
                maxWidth: '1240px',
                margin: '0 auto',
                paddingLeft: 'clamp(20px, 3vw, 40px)',
                paddingRight: 'clamp(20px, 3vw, 40px)',
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
