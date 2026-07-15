import { useEditor } from '../../context/EditorContext';

function getValueFromPath(content, path) {
    return path
        .split('.')
        .reduce(
            (currentValue, key) => currentValue?.[key],
            content,
        );
}

export default function EditableText({
    path,
    as: Component = 'p',
    style,
    className,
    multiline = false,
    placeholder = 'Escribe aquí...',
    ...rest
}) {
    const {
        isEditing,
        content,
        updateContent,
    } = useEditor();

    const storedValue = getValueFromPath(content, path);
    const value =
        typeof storedValue === 'string'
            ? storedValue
            : '';

    const handleBlur = (event) => {
        const newValue = multiline
            ? event.currentTarget.innerText
            : event.currentTarget.textContent;

        updateContent(
            path,
            newValue?.trim() ?? '',
        );
    };

    const handleKeyDown = (event) => {
        if (!multiline && event.key === 'Enter') {
            event.preventDefault();
            event.currentTarget.blur();
        }

        if (event.key === 'Escape') {
            event.currentTarget.blur();
        }
    };

    return (
        <Component
            {...rest}
            className={className}
            contentEditable={isEditing}
            suppressContentEditableWarning
            data-placeholder={placeholder}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
                ...style,
                minWidth: isEditing ? '24px' : undefined,
                minHeight: isEditing ? '1em' : undefined,
                outline: isEditing
                    ? '2px dashed rgba(73, 99, 77, 0.45)'
                    : 'none',
                outlineOffset: isEditing ? '5px' : '0',
                borderRadius: isEditing ? '5px' : undefined,
                cursor: isEditing ? 'text' : 'inherit',
                transition:
                    'outline 180ms ease, background 180ms ease',
            }}
        >
            {value}
        </Component>
    );
}