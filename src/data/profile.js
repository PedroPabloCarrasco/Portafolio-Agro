import heroImage from '../assets/hero.png';

export const languageOptions = [
    'Español',
    'English',
    'Português',
];

export const navigation = [
    {
        label: 'Inicio',
        href: '#inicio',
    },
    {
        label: 'Sobre mí',
        href: '#sobre-mi',
    },
    {
        label: 'Formación',
        href: '#formacion',
    },
    {
        label: 'Experiencia',
        href: '#experiencia',
    },
    {
        label: 'Proyectos',
        href: '#proyectos',
    },
    {
        label: 'Publicaciones',
        href: '#publicaciones',
    },
    {
        label: 'Contacto',
        href: '#contacto',
    },
];

export const heroTabs = [
    {
        label: 'Portafolio',
        title: 'PORTAFOLIO DE TRABAJO',
        subtitle:
            'Ciencia, agroecología y territorio desde una mirada académica y aplicada.',
        image: heroImage,
        facts: [
            'Investigación',
            'Asistencia técnica',
            'Cooperación internacional',
        ],
    },
    {
        label: 'Formación',
        title: 'Trayectoria académica',
        subtitle:
            'Una base científica construida entre agronomía, ecología y pensamiento territorial.',
        image: heroImage,
        facts: [
            'Doctorado',
            'Máster',
            'Ingeniería Agronómica',
        ],
    },
    {
        label: 'Experiencia',
        title: 'Trabajo profesional',
        subtitle:
            'Investigación, docencia, extensión y proyectos con impacto territorial.',
        image: heroImage,
        facts: [
            'Investigación',
            'Docencia',
            'Extensión',
        ],
    },
];

export const aboutValues = [
    'Agroecología',
    'Sostenibilidad',
    'Territorio',
    'Biodiversidad',
    'Ciencia participativa',
    'Desarrollo rural',
];

export const degreeItems = [
    {
        title: 'Doctora en Territorio, Patrimonio y Medio Ambiente',
        institution: 'Universidad de Granada',
        badge: 'Doctorado',
        note: 'Especialidad en Agroecología',
        year: '2018 – 2023',
    },
    {
        title: 'Máster en Agricultura y Ganadería Ecológica',
        institution: 'Universidad Pablo de Olavide',
        badge: 'Magíster',
        note: 'Formación avanzada en producción ecológica',
        year: '2015 – 2017',
    },
    {
        title: 'Ingeniería Agronómica',
        institution: 'Universidad de Córdoba',
        badge: 'Ingeniera Agrónoma',
        note: 'Gestión y conservación del medio natural',
        year: '2009 – 2015',
    },
];

export const languageSkills = [
    {
        id: 'spanish',
        lang: 'Español',
        level: 'Lengua materna',
        code: 'Nativo',
        description:
            'Dominio nativo para comunicación oral, escrita, académica y profesional.',
        training: null,
    },
    {
        id: 'portuguese',
        lang: 'Portugués',
        level: 'Nivel avanzado',
        code: 'B2',
        description:
            'Uso académico y profesional en docencia, investigación y gestión institucional.',
        training:
            'Formación en Portugués Lengua Extranjera B2 en el Instituto Camões, actualmente en curso.',
    },
    {
        id: 'english',
        lang: 'Inglés',
        level: 'Nivel intermedio alto',
        code: 'B1–B2',
        description:
            'Competencias para lectura académica, comunicación profesional y participación en actividades internacionales.',
        training:
            'Formación en inglés académico y profesional B1 avanzado con British Council, actualmente en curso.',
    },
];

export const exploreCards = [
    {
        label: 'Sobre mí',
        description:
            'Trayectoria, motivación y enfoque de trabajo.',
        href: '#sobre-mi',
    },
    {
        label: 'Formación',
        description:
            'Grados académicos y especialización.',
        href: '#formacion',
    },
    {
        label: 'Experiencia',
        description:
            'Investigación, extensión, proyectos y docencia.',
        href: '#experiencia',
    },
    {
        label: 'Proyectos',
        description:
            'Iniciativas con enfoque agroecológico y territorial.',
        href: '#proyectos',
    },
];

export const experienceGroups = [
    {
        title: 'Investigación',
        icon: 'microscope',
        summary:
            'Investigación aplicada en agroecología, sistemas alimentarios sostenibles y transformación territorial.',
        items: [
            'Investigadora posdoctoral del proyecto europeo GrowLIFE en el cE3c de la Universidad de Lisboa.',
            'Diseño metodológico, levantamiento y análisis de datos cualitativos y cuantitativos en contextos productivos reales.',
            'Investigación participativa con agricultores, comunidades rurales, actores institucionales y equipos académicos.',
            'Producción de evidencia científica, validación de indicadores y publicación de artículos sobre agroecología, biodiversidad y sistemas alimentarios.',
        ],
    },
    {
        title: 'Extensión y Asistencia Técnica',
        icon: 'leaf',
        summary:
            'Acompañamiento territorial a agricultores, comunidades rurales, instituciones públicas y equipos técnicos.',
        items: [
            'Asistencia técnica y planificación predial con familias de la agricultura familiar campesina.',
            'Diseño y facilitación de talleres participativos, visitas prediales y procesos formativos en agroecología.',
            'Apoyo a procesos de transición agroecológica, manejo ecológico del suelo y promoción de biodiversidad funcional.',
            'Experiencia en certificación orgánica, Buenas Prácticas Agrícolas, trazabilidad y sistemas de control interno.',
        ],
    },
    {
        title: 'Gestión de Proyectos',
        icon: 'sprout',
        summary:
            'Diseño, coordinación y ejecución de proyectos nacionales e internacionales de investigación y desarrollo rural.',
        items: [
            'Coordinación técnico-científica y territorial de proyectos financiados por LIFE, Horizon Europe, FIA, FIC y fondos universitarios.',
            'Articulación entre agricultores, academia, comunidades, municipios, organismos públicos y organizaciones territoriales.',
            'Planificación, seguimiento, evaluación y sistematización de actividades, resultados e indicadores.',
            'Elaboración de informes técnicos, manuales, guías metodológicas y productos de transferencia de conocimiento.',
        ],
    },
    {
        title: 'Docencia',
        icon: 'book',
        summary:
            'Docencia universitaria, formación profesional y diseño de programas educativos en agroecología.',
        items: [
            'Docencia de pregrado, posgrado, doctorado y educación continua en Chile, España y Portugal.',
            'Diseño de cursos, diplomados, guías de campo, manuales técnicos y recursos educativos digitales.',
            'Dirección y acompañamiento de memorias, trabajos de titulación, prácticas profesionales y actividades de terreno.',
            'Experiencia en aprendizaje basado en proyectos, aprendizaje-servicio y metodologías de enseñanza situada.',
        ],
    },
];

export const projectItems = [
    {
        id: 'growlife',

        title: 'GrowLIFE',

        subtitle:
            'Transición hacia sistemas alimentarios sostenibles en Portugal',

        category: 'Investigación',

        shape: 'research',

        summary:
            'Investigación-acción y co-creación multiactor para promover sistemas alimentarios más sostenibles y resilientes.',

        description:
            'GrowLIFE es un proyecto europeo desarrollado en el Centro de Ecología, Evolución y Cambios Ambientales de la Universidad de Lisboa. Claudia Barrera participa como investigadora posdoctoral responsable del componente técnico-científico y territorial para Portugal. Su trabajo comprende el diseño metodológico de investigación aplicada, el levantamiento y análisis de datos en contextos productivos reales y la articulación de procesos participativos con agricultores, actores territoriales e investigadores. El proyecto busca generar evidencia, fortalecer capacidades locales y apoyar políticas públicas orientadas a la transición hacia sistemas alimentarios sostenibles.',

        info: [
            '2023 – 2028',
            'Investigadora posdoctoral',
            'Universidad de Lisboa · Programa LIFE de la Unión Europea',
        ],

        results: [
            'Diseño metodológico',
            'Indicadores de sostenibilidad',
            'Procesos participativos',
        ],

        gallery: [
            {
                title: 'Sistemas alimentarios sostenibles',

                description:
                    'Investigación aplicada en sistemas agrícolas y alimentarios orientada a promover modelos más sostenibles y resilientes.',

                image:
                    'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 50%',
            },

            {
                title: 'Investigación territorial',

                description:
                    'Trabajo de campo y levantamiento de información en contextos productivos reales junto a agricultores y actores territoriales.',

                image:
                    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 55%',
            },

            {
                title: 'Agricultura sostenible',

                description:
                    'Análisis de prácticas productivas y estrategias para avanzar hacia sistemas alimentarios más sostenibles.',

                image:
                    'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 45%',
            },
        ],
    },

    {
        id: 'lift',

        title: 'LIFT',

        subtitle:
            'Living Labs para transformar sistemas agroalimentarios',

        category: 'Cooperación',

        shape: 'cooperation',

        summary:
            'Laboratorios vivos para fortalecer la producción, distribución, compra pública y consumo de alimentos agroecológicos.',

        description:
            'LIFT —Agroecological Food System Living Labs for Farm and Landscape Transformation— es una iniciativa financiada por Agroecology Partnership, en el marco de Horizon Europe. Claudia Barrera desarrolla funciones de liderazgo metodológico e implementación de Living Labs orientados a la transformación de los sistemas agroalimentarios. Su trabajo incluye coordinación territorial, investigación aplicada, análisis socioproductivo y articulación entre agricultores, academia, instituciones y actores vinculados a la alimentación escolar y la compra pública de productos ecológicos.',

        info: [
            '2025 – 2028',
            'Liderazgo metodológico y coordinación territorial',
            'Agroecology Partnership · Horizon Europe',
        ],

        results: [
            'Diseño de Living Labs',
            'Articulación multisectorial',
            'Compra pública agroecológica',
        ],

        gallery: [
            {
                title: 'Laboratorios vivos',

                description:
                    'Espacios territoriales de experimentación, aprendizaje y colaboración para transformar los sistemas agroalimentarios.',

                image:
                    'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 48%',
            },

            {
                title: 'Producción agroecológica',

                description:
                    'Fortalecimiento de sistemas de producción ecológica y de cadenas alimentarias sostenibles.',

                image:
                    'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 52%',
            },

            {
                title: 'Alimentos y territorio',

                description:
                    'Conexión entre producción local, abastecimiento, consumo y desarrollo de sistemas alimentarios territoriales.',

                image:
                    'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 50%',
            },
        ],
    },

    {
        id: 'tomate-rosado',

        title: 'Tomate Rosado Tradicional',

        subtitle:
            'Rescate y valorización de variedades locales en Chile',

        category: 'Conservación',

        shape: 'seed',

        summary:
            'Conservación y uso productivo de variedades tradicionales de tomate rosado junto a agricultores familiares.',

        description:
            'Proyecto orientado al rescate, conservación y valorización de variedades tradicionales de tomate rosado en la agricultura familiar campesina de los sectores de Llay-Llay y San Clemente. Claudia Barrera participó como responsable técnica, coordinando actividades productivas, acompañando a agricultores y validando prácticas para conservar y valorizar estos recursos genéticos locales. La iniciativa promovió el uso sostenible de la agrobiodiversidad, el fortalecimiento de capacidades productivas y la valorización territorial de variedades tradicionales.',

        info: [
            '2015 – 2017',
            'Responsable técnica',
            'Fundación para la Innovación Agraria · FIA',
        ],

        results: [
            'Rescate de variedades locales',
            'Acompañamiento a agricultores',
            'Valorización territorial',
        ],

        gallery: [
            {
                title: 'Tomates tradicionales',

                description:
                    'Valorización de variedades tradicionales de tomate rosado conservadas por la agricultura familiar campesina.',

                image:
                    'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 48%',
            },

            {
                title: 'Cultivo y conservación',

                description:
                    'Prácticas productivas orientadas a conservar y utilizar sosteniblemente variedades agrícolas tradicionales.',

                image:
                    'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 52%',
            },

            {
                title: 'Agricultura familiar',

                description:
                    'Acompañamiento técnico a agricultores y fortalecimiento de capacidades para la conservación de la agrobiodiversidad.',

                image:
                    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85',

                focal: 'center 42%',
            },
        ],
    },
];

export const publicationGroups = [
    {
        type: 'Investigación aplicada',
        entries: [
            'Transición agroecológica y sostenibilidad de sistemas agroalimentarios en contextos territoriales y periurbanos.',
            'Redes alimentarias locales, circuitos cortos de comercialización y resiliencia territorial.',
            'Agrobiodiversidad, conservación de variedades tradicionales y soberanía alimentaria.',
            'Biodiversidad funcional y manejo ecológico de agroecosistemas.',
            'Metodologías participativas e investigación aplicada junto a agricultores, comunidades y actores territoriales.',
        ],
    },
    {
        type: 'Libros y capítulos',
        entries: [
            'Contribuciones académicas sobre agroecología, territorio y transformación de los sistemas agroalimentarios.',
            'Publicaciones vinculadas a mercados campesinos, circuitos cortos y soberanía alimentaria.',
            'Aportes sobre biodiversidad agrícola, conocimiento local y procesos de transición agroecológica.',
        ],
    },
    {
        type: 'Recursos docentes',
        entries: [
            '2025: Autora del Manual de Manejo de Plantas Multifuncionales, destinado a estudiantes de la Escuela de Hotelería y Turismo de Portugal, elaborado en formato digital e integrado a los recursos educativos del proyecto GrowLIFE.',

            '2024: Autora de la Guía de Reconocimiento y Prospección de Plantas Multifuncionales, desarrollada como material docente digital para apoyar el aprendizaje aplicado y facilitar la sistematización y el acceso a contenidos mediante el uso de TIC.',

            '2023: Autora de la Guía de Visitas Participativas para Exploraciones Sustentables, elaborada en el marco del proyecto GrowLIFE como recurso metodológico para actividades participativas y trabajo territorial.',

            '2008–2015: Autora de la Guía de Reconocimiento de Malezas, elaborada en formato digital y físico como material de apoyo para estudiantes de Técnico en Agricultura Ecológica del Instituto del Medio Ambiente, Chile.',

            '2008–2015: Autora de la Guía de Trabajo de Campo para el Diseño y la Planificación Predial, desarrollada como recurso docente para la organización de actividades prácticas y el seguimiento del aprendizaje, con apoyo de herramientas TIC.',
        ],
    },
];

export const contactLinks = [
    {
        label: 'Correo',
        value: 'claudia.barrera@ugr.es',
        href: 'mailto:claudia.barrera@ugr.es',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/claudia-barrera-salas',
        href: 'https://linkedin.com',
    },
    {
        label: 'Investigación',
        value: 'Universidad de Córdoba',
        href: 'https://www.uco.es',
    },
];