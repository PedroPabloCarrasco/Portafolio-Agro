import { useEffect, useRef } from 'react';

/**
 * Hook que observa un elemento y añade la clase `is-visible`
 * cuando entra en el viewport. Permite animar la entrada de secciones.
 */
export default function useReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12, ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
