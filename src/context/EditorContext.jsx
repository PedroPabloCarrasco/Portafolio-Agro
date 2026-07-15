import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import { defaultEditableContent } from '../data/editableContent';

const EditorContext = createContext(null);

const STORAGE_KEY = 'claudia-portfolio-global-content';

/**
 * Crea una copia independiente del contenido.
 * Evita modificar directamente defaultEditableContent.
 */
function cloneContent(value) {
    return JSON.parse(JSON.stringify(value));
}

/**
 * Combina el contenido predeterminado con el guardado en localStorage.
 *
 * Esto es importante cuando agregas campos nuevos como:
 * publications.groups
 * experience.areas
 * formation.languages
 *
 * Así no es obligatorio borrar localStorage cada vez que agregas
 * una propiedad nueva.
 */
function mergeContent(defaultValue, savedValue) {
    /*
     * Arrays
     */
    if (Array.isArray(defaultValue)) {
        if (!Array.isArray(savedValue)) {
            return cloneContent(defaultValue);
        }

        const mergedArray = defaultValue.map(
            (defaultItem, index) => {
                const savedItem = savedValue[index];

                if (savedItem === undefined) {
                    return cloneContent(defaultItem);
                }

                return mergeContent(
                    defaultItem,
                    savedItem,
                );
            },
        );

        /*
         * Conserva elementos adicionales que hayan sido guardados
         * desde el editor, aunque no estén en los datos originales.
         */
        if (savedValue.length > defaultValue.length) {
            const additionalItems = savedValue
                .slice(defaultValue.length)
                .map((item) => cloneContent(item));

            mergedArray.push(...additionalItems);
        }

        return mergedArray;
    }

    /*
     * Objetos
     */
    if (
        defaultValue !== null &&
        typeof defaultValue === 'object'
    ) {
        const safeSavedValue =
            savedValue !== null &&
                typeof savedValue === 'object' &&
                !Array.isArray(savedValue)
                ? savedValue
                : {};

        const result = {};

        /*
         * Carga todas las propiedades predeterminadas.
         */
        Object.keys(defaultValue).forEach((key) => {
            result[key] = mergeContent(
                defaultValue[key],
                safeSavedValue[key],
            );
        });

        /*
         * Conserva posibles propiedades adicionales guardadas.
         */
        Object.keys(safeSavedValue).forEach((key) => {
            if (!(key in result)) {
                result[key] = cloneContent(
                    safeSavedValue[key],
                );
            }
        });

        return result;
    }

    /*
     * Strings, números, booleanos y valores simples.
     */
    return savedValue !== undefined
        ? savedValue
        : defaultValue;
}

/**
 * Lee una ruta como:
 *
 * publications.groups.0.entries.1
 *
 * y obtiene el valor correspondiente.
 */
function getValueByPath(source, path) {
    return path
        .split('.')
        .reduce(
            (currentValue, key) =>
                currentValue?.[key],
            source,
        );
}

export function EditorProvider({ children }) {
    const [isEditing, setIsEditing] =
        useState(false);

    const [content, setContent] = useState(() =>
        cloneContent(defaultEditableContent),
    );

    const [savedContent, setSavedContent] =
        useState(() =>
            cloneContent(defaultEditableContent),
        );

    const [message, setMessage] = useState('');

    const messageTimerRef = useRef(null);

    /*
     * Cargar contenido guardado al iniciar la aplicación.
     */
    useEffect(() => {
        try {
            const storedContent =
                window.localStorage.getItem(
                    STORAGE_KEY,
                );

            if (!storedContent) {
                return;
            }

            const parsedContent =
                JSON.parse(storedContent);

            const mergedContent = mergeContent(
                defaultEditableContent,
                parsedContent,
            );

            setContent(mergedContent);

            setSavedContent(
                cloneContent(mergedContent),
            );
        } catch (error) {
            console.error(
                'No fue posible cargar el contenido guardado:',
                error,
            );

            window.localStorage.removeItem(
                STORAGE_KEY,
            );

            const originalContent =
                cloneContent(
                    defaultEditableContent,
                );

            setContent(originalContent);

            setSavedContent(
                cloneContent(originalContent),
            );
        }
    }, []);

    /*
     * Limpiar el temporizador al desmontar el provider.
     */
    useEffect(() => {
        return () => {
            if (messageTimerRef.current) {
                window.clearTimeout(
                    messageTimerRef.current,
                );
            }
        };
    }, []);

    const showMessage = (text) => {
        setMessage(text);

        if (messageTimerRef.current) {
            window.clearTimeout(
                messageTimerRef.current,
            );
        }

        messageTimerRef.current =
            window.setTimeout(() => {
                setMessage('');
            }, 3000);
    };

    /**
     * Actualiza una ruta anidada como:
     *
     * experience.areas.0.title
     * publications.groups.2.entries.3
     * formation.languages.1.description
     */
    const updateContent = (path, value) => {
        if (
            typeof path !== 'string' ||
            path.trim() === ''
        ) {
            console.error(
                'updateContent recibió una ruta inválida:',
                path,
            );

            return;
        }

        setContent((currentContent) => {
            const newContent =
                cloneContent(currentContent);

            const keys = path.split('.');

            let target = newContent;

            for (
                let index = 0;
                index < keys.length - 1;
                index += 1
            ) {
                const currentKey = keys[index];
                const nextKey = keys[index + 1];

                const nextKeyIsArrayIndex =
                    Number.isInteger(
                        Number(nextKey),
                    );

                if (
                    target[currentKey] === undefined ||
                    target[currentKey] === null
                ) {
                    target[currentKey] =
                        nextKeyIsArrayIndex
                            ? []
                            : {};
                }

                target = target[currentKey];
            }

            const finalKey =
                keys[keys.length - 1];

            target[finalKey] = value;

            return newContent;
        });
    };

    /**
     * Agrega un elemento a un array.
     *
     * Ejemplo:
     * addArrayItem('publications.groups.0.entries', 'Nuevo texto')
     */
    const addArrayItem = (path, newItem) => {
        setContent((currentContent) => {
            const newContent =
                cloneContent(currentContent);

            const targetArray =
                getValueByPath(newContent, path);

            if (!Array.isArray(targetArray)) {
                console.error(
                    `La ruta "${path}" no corresponde a un array.`,
                );

                return currentContent;
            }

            targetArray.push(
                cloneContent(newItem),
            );

            return newContent;
        });
    };

    /**
     * Elimina un elemento de un array por su índice.
     *
     * Ejemplo:
     * removeArrayItem('publications.groups.0.entries', 2)
     */
    const removeArrayItem = (
        path,
        itemIndex,
    ) => {
        setContent((currentContent) => {
            const newContent =
                cloneContent(currentContent);

            const targetArray =
                getValueByPath(newContent, path);

            if (!Array.isArray(targetArray)) {
                console.error(
                    `La ruta "${path}" no corresponde a un array.`,
                );

                return currentContent;
            }

            if (
                itemIndex < 0 ||
                itemIndex >= targetArray.length
            ) {
                console.error(
                    'Índice inválido para eliminar:',
                    itemIndex,
                );

                return currentContent;
            }

            targetArray.splice(itemIndex, 1);

            return newContent;
        });
    };

    /**
     * Activa el modo edición y guarda una copia temporal.
     */
    const startEditing = () => {
        setSavedContent(
            cloneContent(content),
        );

        setIsEditing(true);
        setMessage('');
    };

    /**
     * Guarda todo el contenido en localStorage.
     */
    const saveContent = () => {
        try {
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(content),
            );

            setSavedContent(
                cloneContent(content),
            );

            setIsEditing(false);

            showMessage(
                'Cambios guardados correctamente.',
            );
        } catch (error) {
            console.error(
                'No fue posible guardar el contenido:',
                error,
            );

            showMessage(
                'No fue posible guardar los cambios.',
            );
        }
    };

    /**
     * Revierte todos los cambios realizados durante
     * la sesión actual de edición.
     */
    const cancelEditing = () => {
        setContent(
            cloneContent(savedContent),
        );

        setIsEditing(false);

        showMessage('Edición cancelada.');
    };

    /**
     * Restaura todo el contenido original.
     */
    const resetContent = () => {
        const shouldReset =
            window.confirm(
                '¿Quieres restaurar todo el contenido original?',
            );

        if (!shouldReset) {
            return;
        }

        const originalContent =
            cloneContent(
                defaultEditableContent,
            );

        window.localStorage.removeItem(
            STORAGE_KEY,
        );

        setContent(originalContent);

        setSavedContent(
            cloneContent(originalContent),
        );

        setIsEditing(false);

        showMessage(
            'Contenido original restaurado.',
        );
    };

    return (
        <EditorContext.Provider
            value={{
                isEditing,
                content,
                message,

                startEditing,
                updateContent,
                addArrayItem,
                removeArrayItem,
                saveContent,
                cancelEditing,
                resetContent,
            }}
        >
            {children}
        </EditorContext.Provider>
    );
}

export function useEditor() {
    const context =
        useContext(EditorContext);

    if (!context) {
        throw new Error(
            'useEditor debe utilizarse dentro de EditorProvider.',
        );
    }

    return context;
}