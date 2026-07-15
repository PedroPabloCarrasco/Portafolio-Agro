import {
    Edit3,
    RotateCcw,
    Save,
    X,
} from 'lucide-react';

import { useEditor } from '../../context/EditorContext';

export default function EditorToolbar() {
    const {
        isEditing,
        message,
        startEditing,
        saveContent,
        cancelEditing,
        resetContent,
    } = useEditor();

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    right: '24px',
                    bottom: '24px',
                    zIndex: 10000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px',
                    borderRadius: '999px',
                    background:
                        'rgba(255, 255, 255, 0.94)',
                    border:
                        '1px solid rgba(73, 99, 77, 0.16)',
                    boxShadow:
                        '0 16px 42px rgba(31, 43, 34, 0.18)',
                    backdropFilter: 'blur(14px)',
                }}
            >
                {!isEditing ? (
                    <button
                        type="button"
                        onClick={startEditing}
                        style={primaryButtonStyle}
                    >
                        <Edit3 size={16} />
                        Editar página
                    </button>
                ) : (
                    <>
                        <button
                            type="button"
                            onClick={cancelEditing}
                            style={iconButtonStyle}
                            title="Cancelar edición"
                            aria-label="Cancelar edición"
                        >
                            <X size={17} />
                        </button>

                        <button
                            type="button"
                            onClick={saveContent}
                            style={primaryButtonStyle}
                        >
                            <Save size={16} />
                            Guardar
                        </button>
                    </>
                )}

                <button
                    type="button"
                    onClick={resetContent}
                    style={iconButtonStyle}
                    title="Restaurar contenido"
                    aria-label="Restaurar contenido"
                >
                    <RotateCcw size={16} />
                </button>
            </div>

            {message && (
                <div
                    role="status"
                    style={{
                        position: 'fixed',
                        left: '50%',
                        bottom: '88px',
                        zIndex: 10001,
                        transform: 'translateX(-50%)',
                        maxWidth: 'calc(100vw - 40px)',
                        padding: '12px 18px',
                        borderRadius: '999px',
                        background: '#49634d',
                        color: '#ffffff',
                        fontFamily:
                            'Inter, system-ui, sans-serif',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        boxShadow:
                            '0 12px 34px rgba(31, 43, 34, 0.22)',
                    }}
                >
                    {message}
                </div>
            )}
        </>
    );
}

const primaryButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '7px',
    border: 'none',
    borderRadius: '999px',
    padding: '10px 16px',
    background: '#49634d',
    color: '#ffffff',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '0.82rem',
    fontWeight: 700,
    cursor: 'pointer',
};

const iconButtonStyle = {
    display: 'grid',
    placeItems: 'center',
    width: '38px',
    height: '38px',
    padding: 0,
    borderRadius: '50%',
    border: '1px solid rgba(73, 99, 77, 0.16)',
    background: 'transparent',
    color: '#49634d',
    cursor: 'pointer',
};