// editableContent.js — Parte 1 de 4
// Líneas originales 1 a 139
// Copia esta parte inmediatamente después de la anterior.

import heroImage from '../assets/hero.png';

export const languageOptions = ['Español', 'English', 'Português'];

export const navigation = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Publicaciones', href: '#publicaciones' },
    { label: 'Contacto', href: '#contacto' },
];

export const heroTabs = [
    {
        label: 'Portafolio',
        title: 'PORTAFOLIO DE TRABAJO',
        subtitle:
            'Agroecología, investigación aplicada y transformación de sistemas alimentarios desde Chile, España y Portugal.',
        image: heroImage,
        facts: [
            'Investigación posdoctoral',
            'Docencia universitaria',
            'Vinculación territorial',
        ],
    },
    {
        label: 'Formación',
        title: 'Trayectoria académica',
        subtitle:
            'Formación internacional en agroecología, sustentabilidad agraria, metabolismo agrario y gestión territorial.',
        image: heroImage,
        facts: [
            'Doctorado internacional',
            'Máster oficial',
            'Ingeniería Agronómica',
        ],
    },
    {
        label: 'Experiencia',
        title: 'Ciencia situada en los territorios',
        subtitle:
            'Investigación, docencia, extensión y coordinación de iniciativas junto a agricultores, estudiantes, instituciones y comunidades rurales.',
        image: heroImage,
        facts: [
            'Universidade de Lisboa',
            'Universidad de Granada',
            'Universidad de Santiago de Chile',
        ],
    },
];

export const aboutValues = [
    'Agroecología',
    'Transición socioecológica',
    'Biodiversidad funcional',
    'Sistemas alimentarios sostenibles',
    'Investigación participativa',
    'Agricultura familiar campesina',
    'Desarrollo rural',
    'Gobernanza territorial',
];

export const degreeItems = [
    {
        title: 'Doctora en Territorio, Patrimonio y Medio Ambiente',
        institution: 'Universidad de Granada · España',
        badge: 'Doctorado internacional',
        note:
            'Especialidad en Agroecología. Tesis: “Transiciones Socioecológicas: Análisis de Casos en la Agricultura Familiar Campesina de Chile”.',
        year: '2020 – 2023',
    },
    {
        title: 'Máster Oficial en Agricultura y Ganadería Ecológica',
        institution: 'Universidad Pablo de Olavide · Sevilla, España',
        badge: 'Máster oficial',
        note:
            'Especialidad en metabolismo agrario y eficiencia energética. Tesis sobre el balance energético comparado entre viñedos ecológicos y convencionales del Valle de Llay-Llay, Chile.',
        year: '2017 – 2018',
    },
    {
        title: 'Ingeniera Agrónoma',
        institution: 'Universidad Católica de Temuco · Chile',
        badge: 'Título profesional',
        note:
            'Título profesional obtenido en 2005. Formación orientada a producción vegetal y sustentabilidad agraria.',
        year: '2005',
    },
    {
        title: 'Licenciada en Agronomía',
        institution: 'Universidad Católica de Temuco · Chile',
        badge: 'Licenciatura',
        note:
            'Especialidad en Producción Vegetal. Tesis sobre evaluación de sustentabilidad agraria mediante la metodología MESMIS en La Araucanía.',
        year: '2004',
    },
    {
        title: 'Estudios de Ingeniería Agronómica y Montes',
        institution: 'Universidad de Córdoba · ETSIAM · España',
        badge: 'Estudios internacionales',
        note:
            'Formación de segundo ciclo y estancia académica en ciencias agrarias, agroecología y manejo de recursos naturales.',
        year: '2000 – 2003',
    },
];

export const languageSkills = [
    {
        id: 'spanish',
        lang: 'Español',
        level: 'Lengua materna',
        code: 'Nativo',
        description:
            'Dominio nativo para comunicación oral, escrita, académica, docente y profesional.',
        training: null,
    },
    {
        id: 'portuguese',
        lang: 'Portugués',
        level: 'Nivel avanzado',
        code: 'C1',
        description:
            'Uso académico y profesional en docencia, investigación, extensión y gestión institucional.',
        training: 'Nivel declarado conforme al Marco Común Europeo de Referencia.',
    },
    {
        id: 'english',
        lang: 'Inglés',
        level: 'Nivel intermedio alto',
        code: 'B1–B2',
        description:
            'Competencias para lectura académica, comunicación profesional y participación en actividades internacionales.',
        training: 'Nivel declarado conforme al Marco Común Europeo de Referencia.',
    },
];

export const exploreCards = [
    {

        // editableContent.js — Parte 2 de 4
        // Líneas originales 140 a 278
        // Copia esta parte inmediatamente después de la anterior.

        label: 'Perfil académico',
        description:
            'Especialización, enfoque profesional y líneas de investigación.',
        href: '#sobre-mi',
    },
    {
        label: 'Formación',
        description:
            'Doctorado, máster, licenciatura, título profesional y estudios internacionales.',
        href: '#formacion',
    },
    {
        label: 'Experiencia',
        description:
            'Investigación posdoctoral, coordinación académica, docencia y gestión institucional.',
        href: '#experiencia',
    },
    {
        label: 'Proyectos',
        description:
            'Iniciativas europeas y chilenas de agroecología, agrobiodiversidad y desarrollo territorial.',
        href: '#proyectos',
    },
    {
        label: 'Publicaciones',
        description:
            'Artículos, capítulos de libro, divulgación científica, manuales y recursos docentes.',
        href: '#publicaciones',
    },
];

export const experienceGroups = [
    {
        title: 'Investigación posdoctoral',
        icon: 'microscope',
        summary:
            'Investigación aplicada en sistemas alimentarios sostenibles, agroecología y transformación territorial.',
        items: [
            'Desde 2023 es investigadora posdoctoral del proyecto europeo GrowLIFE en el Centro de Ecologia, Evolução e Alterações Ambientais (cE3c) de la Universidade de Lisboa.',
            'Es responsable del componente técnico-científico y territorial de GrowLIFE para Portugal.',
            'Desarrolla diseño metodológico, levantamiento y análisis de datos cualitativos y cuantitativos en contextos productivos reales.',
            'Articula procesos participativos con agricultores, investigadores, actores territoriales e instituciones.',
        ],
    },
    {
        title: 'Coordinación e investigación académica',
        icon: 'sprout',
        summary:
            'Articulación de equipos, proyectos y procesos formativos con enfoque territorial e interdisciplinario.',
        items: [
            'Desde 2024 coordina el Laboratorio de Agroecología y Sistemas Alimentarios Locales (LASAL) de la Universidad de Granada.',
            'Desde 2020 es investigadora asociada del Grupo STAND (HUM-952) de la Universidad de Granada.',
            'Desde 2010 es investigadora asociada del Grupo de Agroecología y Medio Ambiente (GAMA) de la Universidad de Santiago de Chile.',
            'Su trabajo integra conocimiento local y científico para apoyar la planificación territorial y la gestión sostenible de los recursos.',
        ],
    },
    {
        title: 'Dirección y gestión institucional',
        icon: 'briefcase',
        summary:
            'Experiencia en dirección académica, planificación estratégica y administración de programas vinculados a agricultura ecológica.',
        items: [
            'Fue directora del Centro Tecnológico para la Sustentabilidad (CTS) del Instituto del Medio Ambiente entre 2009 y 2017.',
            'Fue directora del Área de Agricultura Ecológica del Instituto del Medio Ambiente entre 2015 y 2017.',
            'Dirigió procesos de formación, asistencia técnica, extensión y transferencia tecnológica.',
            'Coordinó equipos docentes y técnicos, actividades productivas y vinculación con organizaciones territoriales.',
        ],
    },
    {
        title: 'Extensión y trabajo territorial',
        icon: 'leaf',
        summary:
            'Acompañamiento a agricultores, comunidades rurales, estudiantes y equipos técnicos mediante metodologías participativas.',
        items: [
            'Ha desarrollado diagnóstico predial, planificación espacial y temporal y manejo ecológico del suelo.',
            'Trabaja con biodiversidad funcional y plantas multifuncionales para fortalecer servicios ecosistémicos y control biológico por conservación.',
            'Ha coordinado talleres, visitas prediales, actividades de campo y procesos de transición agroecológica.',
            'Posee experiencia en agricultura familiar campesina, sustentabilidad agraria, agrobiodiversidad y desarrollo rural.',
        ],
    },
    {
        title: 'Docencia y formación profesional',
        icon: 'book',
        summary:
            'Docencia universitaria y educación continua articuladas con prácticas de campo y problemas reales de los territorios.',
        items: [
            'Ha impartido docencia de pregrado, posgrado y educación continua en Chile, España y Portugal.',
            'Fue responsable del módulo “Manejo Agroecológico Predial” del Postítulo en Agroecología y Desarrollo Rural Sustentable de la USACH.',
            'Participó durante siete versiones en el Diplomado en Educación para el Desarrollo Sustentable.',
            'En 2023 fue docente invitada del Diplomado en Agroecología del Ministerio de Agricultura de Chile.',
        ],
    },
    {
        title: 'Divulgación y transferencia',
        icon: 'megaphone',
        summary:
            'Comunicación científica y creación de recursos para estudiantes, agricultores y ciudadanía.',
        items: [
            'Ha elaborado manuales técnicos, guías metodológicas, materiales de campo e informes de proyectos.',
            'Ha participado en congresos, seminarios, talleres, ferias científicas y actividades de divulgación internacional.',
            'Ha desarrollado contenidos sobre plantas multifuncionales, sustentabilidad, agroecología y sistemas alimentarios.',
            'Su producción combina publicaciones académicas, divulgación científica y transferencia de conocimientos.',
        ],
    },
];

export const projectItems = [
    {
        id: 'growlife',
        title: 'GrowLIFE',
        subtitle:
            'Transición hacia sistemas alimentarios sostenibles mediante investigación-acción',
        category: 'Unión Europea',
        shape: 'research',
        summary:
            'Proyecto LIFE orientado a promover sistemas alimentarios sostenibles y resilientes mediante cambios de comportamiento, co-creación multiactor y evidencia científica.',
        description:
            'GrowLIFE —An integrated approach to promote sustainable food systems via behavioral changes cross-fostering all parties involved— se desarrolla en el cE3c de la Universidade de Lisboa. Claudia Barrera participa como investigadora posdoctoral responsable del componente técnico-científico y territorial para Portugal. Su labor incluye diseño metodológico, levantamiento y análisis de datos, validación de indicadores, investigación aplicada y articulación de procesos participativos con agricultores, investigadores y actores territoriales.',
        info: [
            '2023 – 2028',
            'Investigadora posdoctoral',
            'cE3c · Universidade de Lisboa · Programa LIFE',
        ],
        results: [
            'Diseño metodológico',
            'Indicadores de sostenibilidad',
            'Investigación participativa',
            'Transferencia de conocimiento',
        ],
        gallery: [
            {
                title: 'Sistemas alimentarios sostenibles',
                description:
                    'Diseño y evaluación de estrategias participativas para apoyar la transición hacia sistemas alimentarios más sostenibles.',
                image:
                    'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 50%',
            },
            {


                // editableContent.js — Parte 3 de 4
                // Líneas originales 279 a 417
                // Copia esta parte inmediatamente después de la anterior.

                title: 'Investigación territorial',
                description:
                    'Levantamiento de información y trabajo aplicado en contextos agrícolas y alimentarios reales.',
                image:
                    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 55%',
            },
            {
                title: 'Co-creación multiactor',
                description:
                    'Articulación entre agricultores, actores territoriales, instituciones e investigadores.',
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
            'Living Labs agroecológicos para transformar fincas, paisajes y sistemas alimentarios',
        category: 'Horizon Europe',
        shape: 'cooperation',
        summary:
            'Diseño e implementación de Living Labs vinculados a producción ecológica, sistemas agroalimentarios y compra pública.',
        description:
            'LIFT —Agroecological Food System Living Labs for Farm and Landscape Transformation— es financiado por Agroecology Partnership en el marco de Horizon Europe. Claudia Barrera ejerce liderazgo en el diseño metodológico y la implementación de Living Labs, con responsabilidades en coordinación territorial, investigación aplicada, análisis socioproductivo y articulación entre agricultores, academia y actores institucionales. El trabajo incorpora la compra pública de productos ecológicos para cocinas destinadas a alimentación escolar temprana.',
        info: [
            '2024 – Actualidad',
            'Liderazgo metodológico y coordinación territorial',
            'Agroecology Partnership · Horizon Europe',
        ],
        results: [
            'Diseño de Living Labs',
            'Análisis socioproductivo',
            'Articulación multisectorial',
            'Compra pública ecológica',
        ],
        gallery: [
            {
                title: 'Living Labs',
                description:
                    'Espacios de experimentación, aprendizaje y colaboración para transformar sistemas agroalimentarios.',
                image:
                    'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 48%',
            },
            {
                title: 'Producción agroecológica',
                description:
                    'Fortalecimiento de sistemas productivos ecológicos y cadenas alimentarias sostenibles.',
                image:
                    'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 52%',
            },
            {
                title: 'Alimentación y territorio',
                description:
                    'Vinculación entre producción local, abastecimiento institucional y alimentación escolar.',
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
            'Rescate de variedades locales en la agricultura familiar campesina',
        category: 'FIA · Chile',
        shape: 'seed',
        summary:
            'Conservación y valorización productiva de variedades tradicionales de tomate rosado en Llay-Llay y San Clemente.',
        description:
            'Proyecto de la Fundación para la Innovación Agraria orientado al rescate, conservación y valorización de variedades tradicionales de tomate rosado. Claudia Barrera se desempeñó como responsable técnica, coordinando actividades productivas, acompañando a agricultores familiares y validando prácticas de conservación y uso sostenible de estos recursos genéticos locales.',
        info: [
            '2015 – 2017',
            'Responsable técnica',
            'Fundación para la Innovación Agraria · FIA',
        ],
        results: [
            'Rescate de variedades locales',
            'Acompañamiento técnico',
            'Conservación de agrobiodiversidad',
            'Valorización territorial',
        ],
        gallery: [
            {
                title: 'Variedades tradicionales',
                description:
                    'Conservación de tomates rosados mantenidos por familias agricultoras.',
                image:
                    'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 48%',
            },
            {
                title: 'Conservación productiva',
                description:
                    'Validación de prácticas para el uso sostenible de recursos genéticos locales.',
                image:
                    'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 52%',
            },
            {
                title: 'Agricultura familiar campesina',
                description:
                    'Acompañamiento técnico y fortalecimiento de capacidades productivas.',
                image:
                    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 42%',
            },
        ],
    },
    {
        id: 'cambio-climatico-agricultura',
        title: 'Cambio climático y agricultura',
        subtitle:
            'Percepciones y estrategias de adaptación de agricultores',
        category: 'DICYT · USACH',
        shape: 'research',
        summary:
            'Estudio aplicado sobre las respuestas productivas y territoriales de agricultores frente al cambio climático.',
        description:
            'Proyecto “Cambio climático y agricultura: ¿quién cambia quién? Percepción y estrategias de los agricultores frente al cambio climático”, financiado por DICYT–VRIDEI de la Universidad de Santiago de Chile. Claudia Barrera fue responsable técnica del diseño y ejecución del estudio, incluyendo el levantamiento y análisis de información sobre percepciones, respuestas y estrategias de adaptación.',
        info: [
            '2014 – 2015',
            'Responsable técnica',
            'DICYT–VRIDEI · Universidad de Santiago de Chile',
        ],
        results: [
            'Diseño del estudio',
            'Levantamiento de información',
            'Análisis de adaptación',
            'Resiliencia agrícola',
        ],
        gallery: [
            {

                // editableContent.js — Parte 4 de 4
                // Líneas originales 418 a 555
                // Copia esta parte inmediatamente después de la anterior.

                title: 'Percepción territorial',
                description:
                    'Análisis de cómo los agricultores interpretan los cambios climáticos y sus efectos.',
                image:
                    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 50%',
            },
            {
                title: 'Estrategias de adaptación',
                description:
                    'Identificación de respuestas productivas y de manejo implementadas en sistemas agrícolas.',
                image:
                    'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 50%',
            },
            {
                title: 'Planificación territorial',
                description:
                    'Generación de conocimiento para fortalecer resiliencia y toma de decisiones.',
                image:
                    'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 45%',
            },
        ],
    },
    {
        id: 'caravana-agroecologica',
        title: 'La Caravana Agroecológica',
        subtitle:
            'Alimentación saludable, agricultura sustentable y aprendizaje en terreno',
        category: 'DICYT · USACH',
        shape: 'cooperation',
        summary:
            'Extensión agroecológica y formación situada mediante actividades territoriales con agricultores y estudiantes.',
        description:
            'Proyecto “La caravana agroecológica: para una alimentación saludable, una agricultura sustentable”, desarrollado por la Universidad de Santiago de Chile. Claudia Barrera fue responsable técnica de la gestión de campo y la coordinación de actividades de extensión, incluyendo planificación territorial, trabajo con agricultores y supervisión de estudiantes de pregrado y posgrado.',
        info: [
            'Proyecto de extensión e investigación aplicada',
            'Responsable técnica de gestión de campo',
            'VRID–DICYT–OP · Universidad de Santiago de Chile',
        ],
        results: [
            'Extensión agroecológica',
            'Aprendizaje situado',
            'Trabajo con agricultores',
            'Formación en terreno',
        ],
        gallery: [
            {
                title: 'Aprendizaje situado',
                description:
                    'Vinculación entre formación académica y experiencias productivas reales.',
                image:
                    'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 50%',
            },
            {
                title: 'Trabajo colaborativo',
                description:
                    'Encuentros entre agricultores, estudiantes, docentes y actores territoriales.',
                image:
                    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 50%',
            },
            {
                title: 'Extensión agroecológica',
                description:
                    'Transferencia de conocimientos mediante recorridos, talleres y actividades de campo.',
                image:
                    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1600&q=85',
                focal: 'center 45%',
            },
        ],
    },
];

export const publicationGroups = [
    {
        type: 'Capítulos de libros',
        entries: [
            '2025 · Barrera-Salas, C. y Peredo-Parada, S. “Promoción de la diversidad funcional en agroecosistemas: las plantas multifuncionales y su importancia en las soluciones basadas en la naturaleza”. Libro de INIA, en edición.',
            '2022 · Barrera-Salas, C. y Peredo-Parada, S. “Plantas multifuncionales: conocimiento situado y valorización de los recursos locales para el manejo sustentable de sistemas agroecológicos en Chile”. En Sembramos, comemos y vivimos. Saberes agroecológicos desde los sures, Editorial Comares.',
            '2020 · Peredo, S., Acuña, B., Aedo, M. y Barrera, C. “Aprendizaje transformador para la sustentabilidad”. En Impacto en el Saber y Sentir Docente, Vol. 3, Ariadna Ediciones.',
            '2019 · Peredo, S. y Barrera, C. “Agroecology, Local Knowledge and Participatory Research”. En Ethnobotany: Local Knowledge and Traditions, Taylor & Francis / CRC Press.',
        ],
    },
    {
        type: 'Publicaciones y divulgación científica',
        entries: [
            '2025 · “Agroecología en el desierto más árido del mundo: el poderío de las mujeres de Atacama en Chile”. Teocintle, Gaceta Agroecológica.',
            '2024 · “¿Cómo crees que el mar y los océanos influyen en los alimentos que comes?”. Revista de divulgación científica Cambalache.',
            '2024 · “Plantas Multifuncionales, observando la naturaleza que te rodea descubrirás sus bondades”. Revista Cambalache.',
            '2022 · “Plantas Multifuncionales (PlaM): saberes locales ignorados en los territorios. Prospecciones realizadas en Chile”. Revista Agroecológica de Divulgación.',
            '2020 · “Aprendizaje colaborativo para la transición agroecológica: creación de un vínculo entre el campo y la ciudad”. Revista de Agricultura Ecológica.',
        ],
    },
    {
        type: 'Recursos docentes y manuales',
        entries: [
            '2025 · Manual de Manejo de Plantas Multifuncionales para estudiantes de la Escuela de Hotelería y Turismo de Portugal, proyecto GrowLIFE.',
            '2024 · Guía de Reconocimiento y Prospección de Plantas Multifuncionales.',
            '2023 · Guía de Visitas Participativas para Exploraciones Sustentables, proyecto GrowLIFE.',
            '2016 · Manual básico de producción agroecológica para formación técnico-profesional, carrera Técnico en Agricultura Ecológica del IDMA.',
            '2013 · Manual técnico de manejo de compost y enmiendas orgánicas en sistemas hortícolas.',
            '2010 · Manual de prácticas agroecológicas para pequeños agricultores.',
            '2008–2015 · Guías metodológicas de trabajo de campo para prácticas de primer y segundo año y guías de reconocimiento de malezas.',
        ],
    },
    {
        type: 'Ponencias y congresos',
        entries: [
            '2026 · “Visitas Participativas no Projeto GrowLIFE: Uma Ferramenta Estratégica para a Transição Agroecológica dos Territórios em Portugal”.',
            '2023 · “Las caravanas agroecológicas como formato heterodoxo para la docencia e investigación situada, colaborativa y crítica”. IX Congreso Internacional de Agroecología.',
            '2023 · “Caravana de mujeres en el desierto: con afectos y recuerdos vamos diseñando el huerto”. IX Congreso Internacional de Agroecología.',
            '2021 · “Cuando las plantas encuentran su sitio: criterios en el codiseño de fincas y la planificación participativa de cultivos”. Jornadas Técnicas SEAE.',
            '2020 · “Sabiduría ancestral: rescate de conocimientos agroecológicos de mujeres del Valle del Loa, Desierto de Atacama, Chile”. VIII Congreso Internacional de Agroecología.',
            '2018 · “Formación en agroecología: técnicos y campesinos trabajando juntos en el rescate del conocimiento campesino”. VII Congreso Internacional de Agroecología.',
        ],
    },
];

export const contactLinks = [
    {
        label: 'Correo profesional',
        value: 'cpsalas@ciencias.ulisboa.pt',
        href: 'mailto:cpsalas@ciencias.ulisboa.pt',
    },
    {
        label: 'Correo personal',
        value: 'barrerasalasclaudia@gmail.com',
        href: 'mailto:barrerasalasclaudia@gmail.com',
    },
    {
        label: 'Afiliación actual',
        value: 'cE3c · Faculdade de Ciências · Universidade de Lisboa',
        href: 'https://ce3c.ciencias.ulisboa.pt/',
    },
];