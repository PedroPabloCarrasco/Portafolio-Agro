import { useCallback, useEffect, useMemo, useState } from 'react';
import heroImg from '../../assets/hero.png';
import useReveal from '../../hooks/useReveal';
import { useEditor } from '../../context/EditorContext';
import { useLanguage } from '../../context/LanguageContext';
import EditableText from '../admin/EditableText';

const PAGE_COLORS = ['#7f8a6f', '#9b9d88', '#a8a391', '#7f8a6f', '#969b88', '#aaa899'];
const EMPTY_ARRAY = [];

const HERO_UI_BY_LANGUAGE = {
    Español: {
        portfolioLabel: 'Portafolio académico y profesional',
        heading: 'Trayectoria, territorio e investigación aplicada',
        territorialCaption: 'Agroecología · territorio · conocimiento aplicado',
        visualMark: 'Investigación · docencia · territorio',
        projectsPreparing: 'Proyectos en preparación',
        projectsPreparingText: 'Pronto se incorporarán proyectos, resultados e imágenes.',
        contentPreparing: 'Contenido en preparación',
        contentPreparingText: 'Esta sección todavía no tiene elementos destacados.',
        imageUnavailable: 'Imagen no disponible',
        featuredProject: 'Proyecto destacado',
        period: 'Periodo',
        role: 'Rol',
        previousImage: 'Imagen anterior',
        nextImage: 'Imagen siguiente',
        previousProject: 'Proyecto anterior',
        nextProject: 'Proyecto siguiente',
        selectProject: 'Seleccionar proyecto',
        openProject: 'Abrir proyecto',
        portfolioSections: 'Secciones del portafolio',
        section: 'Sección',
        of: 'de',
        agriculturalImageAlt: 'Paisaje agrícola y trabajo territorial',
        representativeImageAlt: 'Paisaje agrícola representativo',
        imageAndHighlights: 'Imagen y antecedentes destacados',
        defaultProject: 'Proyecto',
    },
    English: {
        portfolioLabel: 'Academic and professional portfolio',
        heading: 'Career, territory, and applied research',
        territorialCaption: 'Agroecology · territory · applied knowledge',
        visualMark: 'Research · teaching · territory',
        projectsPreparing: 'Projects in preparation',
        projectsPreparingText: 'Projects, results, and images will be added soon.',
        contentPreparing: 'Content in preparation',
        contentPreparingText: 'This section does not have featured items yet.',
        imageUnavailable: 'Image unavailable',
        featuredProject: 'Featured project',
        period: 'Period',
        role: 'Role',
        previousImage: 'Previous image',
        nextImage: 'Next image',
        previousProject: 'Previous project',
        nextProject: 'Next project',
        selectProject: 'Select project',
        openProject: 'Open project',
        portfolioSections: 'Portfolio sections',
        section: 'Section',
        of: 'of',
        agriculturalImageAlt: 'Agricultural landscape and territorial work',
        representativeImageAlt: 'Representative agricultural landscape',
        imageAndHighlights: 'Image and featured background information',
        defaultProject: 'Project',
    },
    Português: {
        portfolioLabel: 'Portfólio acadêmico e profissional',
        heading: 'Trajetória, território e pesquisa aplicada',
        territorialCaption: 'Agroecologia · território · conhecimento aplicado',
        visualMark: 'Pesquisa · docência · território',
        projectsPreparing: 'Projetos em preparação',
        projectsPreparingText: 'Projetos, resultados e imagens serão adicionados em breve.',
        contentPreparing: 'Conteúdo em preparação',
        contentPreparingText: 'Esta seção ainda não possui elementos em destaque.',
        imageUnavailable: 'Imagem indisponível',
        featuredProject: 'Projeto em destaque',
        period: 'Período',
        role: 'Função',
        previousImage: 'Imagem anterior',
        nextImage: 'Próxima imagem',
        previousProject: 'Projeto anterior',
        nextProject: 'Próximo projeto',
        selectProject: 'Selecionar projeto',
        openProject: 'Abrir projeto',
        portfolioSections: 'Seções do portfólio',
        section: 'Seção',
        of: 'de',
        agriculturalImageAlt: 'Paisagem agrícola e trabalho territorial',
        representativeImageAlt: 'Paisagem agrícola representativa',
        imageAndHighlights: 'Imagem e informações em destaque',
        defaultProject: 'Projeto',
    },
};

function getHeroUi(language) {
    return HERO_UI_BY_LANGUAGE[language] ?? HERO_UI_BY_LANGUAGE.Español;
}


function asArray(value) {
    return Array.isArray(value) ? value : EMPTY_ARRAY;
}

function Icon({ name, size = 20, strokeWidth = 1.8 }) {
    const common = {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
    };

    const paths = {
        leaf: (
            <>
                <path d="M20 4c-8.5.2-14.8 3.8-16.7 10.3C1.8 19.1 6.1 22 10.7 19.8 17 16.8 20 10.8 20 4Z" />
                <path d="M4 20c2.8-5.4 7-9.2 12.8-11.5" />
            </>
        ),
        graduation: (
            <>
                <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                <path d="M6 11.5V16c3.3 2.5 8.7 2.5 12 0v-4.5" />
                <path d="M22 9v6" />
            </>
        ),
        briefcase: (
            <>
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
            </>
        ),
        project: (
            <>
                <path d="M5 3h10l4 4v14H5z" />
                <path d="M15 3v5h5M8 13h8M8 17h6" />
            </>
        ),
        book: (
            <>
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
            </>
        ),
        mail: (
            <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </>
        ),
        arrowLeft: <path d="m15 18-6-6 6-6" />,
        arrowRight: <path d="m9 18 6-6-6-6" />,
        quote: (
            <>
                <path d="M10 11H5a4 4 0 0 0-4 4v4h7v-4H5c0-1.1.9-2 2-2h3v-2Z" />
                <path d="M23 11h-5a4 4 0 0 0-4 4v4h7v-4h-3c0-1.1.9-2 2-2h3v-2Z" />
            </>
        ),
        check: <path d="m5 12 4 4L19 6" />,
        image: (
            <>
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9" r="1.5" />
                <path d="m21 15-5-5L5 20" />
            </>
        ),
    };

    return <svg {...common}>{paths[name] ?? paths.leaf}</svg>;
}

const TAB_ICONS = ['leaf', 'graduation', 'briefcase', 'project', 'book', 'mail'];

function BotanicalLine({ className = '' }) {
    return (
        <svg className={className} width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden="true">
            <path d="M22 158c19-47 56-89 125-134" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M48 118c-16-3-27-12-35-27 17 1 30 9 35 27Z" fill="currentColor" opacity=".12" />
            <path d="M79 83c-17-2-30-11-39-27 18 0 32 9 39 27Z" fill="currentColor" opacity=".15" />
            <path d="M111 52c-14-2-25-9-33-22 15 0 27 7 33 22Z" fill="currentColor" opacity=".18" />
            <path d="M57 110c14-1 26 4 36 15-14 3-27-2-36-15Z" fill="currentColor" opacity=".14" />
            <path d="M91 75c14-2 27 3 37 14-14 4-27-1-37-14Z" fill="currentColor" opacity=".16" />
            <circle cx="49" cy="117" r="3" fill="currentColor" opacity=".3" />
            <circle cx="80" cy="82" r="3" fill="currentColor" opacity=".3" />
            <circle cx="112" cy="51" r="3" fill="currentColor" opacity=".3" />
        </svg>
    );
}

function EmptyState({ title, text }) {
    return (
        <div className="hero-v2-empty" role="status">
            <span className="hero-v2-empty-icon"><Icon name="leaf" size={22} /></span>
            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    );
}

function ProjectShowcase({ projects, activeColor, ui, basePath = 'hero.projects' }) {
    const safeProjects = asArray(projects);
    const [projectIndex, setProjectIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (projectIndex >= safeProjects.length) {
            setProjectIndex(0);
            setImageIndex(0);
        }
    }, [projectIndex, safeProjects.length]);

    if (safeProjects.length === 0) {
        return <EmptyState title={ui.projectsPreparing} text={ui.projectsPreparingText} />;
    }

    const project = safeProjects[projectIndex] ?? safeProjects[0];
    const images = asArray(project?.images);
    const results = asArray(project?.results);

    function changeProject(index) {
        setProjectIndex(index);
        setImageIndex(0);
    }

    function previousProject() {
        changeProject(projectIndex === 0 ? safeProjects.length - 1 : projectIndex - 1);
    }

    function nextProject() {
        changeProject(projectIndex === safeProjects.length - 1 ? 0 : projectIndex + 1);
    }

    function previousImage() {
        if (images.length <= 1) return;
        setImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
    }

    function nextImage() {
        if (images.length <= 1) return;
        setImageIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }

    return (
        <div className="hero-v2-projects">
            <article className="hero-v2-project-card" style={{ '--project-accent': activeColor }}>
                <div className="hero-v2-project-media">
                    {images.length > 0 ? (
                        <img
                            key={`${projectIndex}-${imageIndex}`}
                            src={images[imageIndex]}
                            alt={`${project?.title ?? ui.defaultProject} — ${ui.section.toLowerCase()} ${imageIndex + 1}`}
                        />
                    ) : (
                        <div className="hero-v2-project-placeholder">
                            <Icon name="image" size={28} />
                            <span>{ui.imageUnavailable}</span>
                        </div>
                    )}

                    <div className="hero-v2-project-overlay" />

                    <span className="hero-v2-project-category">
                        <EditableText path={`${basePath}.${projectIndex}.category`} as="span" />
                    </span>

                    {images.length > 1 && (
                        <div className="hero-v2-image-nav">
                            <button type="button" onClick={previousImage} aria-label={ui.previousImage}>
                                <Icon name="arrowLeft" size={17} />
                            </button>
                            <span>{imageIndex + 1} / {images.length}</span>
                            <button type="button" onClick={nextImage} aria-label={ui.nextImage}>
                                <Icon name="arrowRight" size={17} />
                            </button>
                        </div>
                    )}
                </div>

                <div className="hero-v2-project-content">
                    <div className="hero-v2-project-heading">
                        <div>
                            <span className="hero-v2-kicker">{ui.featuredProject}</span>
                            <h3><EditableText path={`${basePath}.${projectIndex}.title`} as="span" /></h3>
                        </div>
                        <span className="hero-v2-project-number">{String(projectIndex + 1).padStart(2, '0')}</span>
                    </div>

                    <p className="hero-v2-project-description">
                        <EditableText path={`${basePath}.${projectIndex}.description`} as="span" multiline />
                    </p>

                    <div className="hero-v2-project-meta">
                        <div>
                            <span>{ui.period}</span>
                            <strong><EditableText path={`${basePath}.${projectIndex}.period`} as="span" /></strong>
                        </div>
                        <div>
                            <span>{ui.role}</span>
                            <strong><EditableText path={`${basePath}.${projectIndex}.role`} as="span" multiline /></strong>
                        </div>
                    </div>

                    {results.length > 0 && (
                        <div className="hero-v2-project-tags">
                            {results.slice(0, 4).map((result, index) => (
                                <span key={`project-result-${projectIndex}-${index}`}>
                                    <Icon name="check" size={13} />
                                    <EditableText path={`${basePath}.${projectIndex}.results.${index}`} as="span" />
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </article>

            <div className="hero-v2-project-controls">
                <button type="button" onClick={previousProject} aria-label={ui.previousProject}>
                    <Icon name="arrowLeft" size={18} />
                </button>

                <div className="hero-v2-project-dots" aria-label={ui.selectProject}>
                    {safeProjects.map((item, index) => (
                        <button
                            key={item?.id ?? `project-dot-${index}`}
                            type="button"
                            className={index === projectIndex ? 'is-active' : ''}
                            onClick={() => changeProject(index)}
                            aria-label={`${ui.openProject} ${index + 1}`}
                            aria-current={index === projectIndex ? 'true' : undefined}
                        />
                    ))}
                </div>

                <button type="button" onClick={nextProject} aria-label={ui.nextProject}>
                    <Icon name="arrowRight" size={18} />
                </button>
            </div>
        </div>
    );
}

function HighlightGrid({ items, pageIndex, activeColor, ui }) {
    const safeItems = asArray(items);

    if (safeItems.length === 0) {
        return <EmptyState title={ui.contentPreparing} text={ui.contentPreparingText} />;
    }

    return (
        <div className="hero-v2-highlights">
            {safeItems.slice(0, 6).map((item, index) => (
                <article key={`highlight-${pageIndex}-${index}`} style={{ '--item-accent': activeColor }}>
                    <span className="hero-v2-highlight-number">0{index + 1}</span>
                    <span className="hero-v2-highlight-icon">
                        <Icon name={pageIndex === 2 ? ['leaf', 'graduation', 'briefcase', 'project'][index % 4] : 'leaf'} size={19} />
                    </span>
                    <p>
                        <EditableText path={`hero.pages.${pageIndex}.highlights.${index}`} as="span" multiline />
                    </p>
                </article>
            ))}
        </div>
    );
}

function HeroTabs({ pages, activePage, onChange, disabled, ui }) {
    return (
        <div className="hero-v2-tabs" role="tablist" aria-label={ui.portfolioSections}>
            {pages.map((page, index) => (
                <button
                    key={`hero-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={index === activePage}
                    aria-controls={`hero-panel-${index}`}
                    tabIndex={index === activePage ? 0 : -1}
                    disabled={disabled}
                    className={index === activePage ? 'is-active' : ''}
                    onClick={() => onChange(index)}
                    style={{ '--tab-color': PAGE_COLORS[index] ?? PAGE_COLORS[0] }}
                >
                    <span className="hero-v2-tab-icon"><Icon name={TAB_ICONS[index] ?? 'leaf'} size={18} /></span>
                    <span className="hero-v2-tab-label">{page?.label ?? `${ui.section} ${index + 1}`}</span>
                </button>
            ))}
        </div>
    );
}

export default function Hero() {
    const { content } = useEditor();
    const { language } = useLanguage();
    const ui = getHeroUi(language);
    const revealRef = useReveal({ threshold: 0.12 });
    const heroContent = content?.hero ?? {};
    const pages = asArray(heroContent.pages);
    const projects = asArray(heroContent.projects);

    const [activePage, setActivePage] = useState(0);
    const [displayedPage, setDisplayedPage] = useState(0);
    const [direction, setDirection] = useState('next');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const current = pages[displayedPage] ?? pages[0];
    const activeColor = PAGE_COLORS[displayedPage] ?? PAGE_COLORS[0];
    const facts = asArray(current?.facts);

    useEffect(() => {
        if (activePage >= pages.length && pages.length > 0) {
            setActivePage(0);
            setDisplayedPage(0);
        }
    }, [activePage, pages.length]);

    const changePage = useCallback(
        (nextIndex) => {
            if (
                isTransitioning ||
                nextIndex === activePage ||
                nextIndex < 0 ||
                nextIndex >= pages.length
            ) {
                return;
            }

            setDirection(
                nextIndex > activePage
                    ? 'next'
                    : 'prev',
            );

            setActivePage(nextIndex);
            setIsTransitioning(true);

            window.setTimeout(() => {
                setDisplayedPage(nextIndex);

                window.setTimeout(() => {
                    setIsTransitioning(false);
                }, 260);
            }, 180);
        },
        [
            activePage,
            isTransitioning,
            pages.length,
        ],
    );
    useEffect(() => {
        function onKeyDown(event) {
            if (isTransitioning || pages.length < 2) return;

            if (event.key === 'ArrowRight') {
                changePage(activePage === pages.length - 1 ? 0 : activePage + 1);
            }

            if (event.key === 'ArrowLeft') {
                changePage(activePage === 0 ? pages.length - 1 : activePage - 1);
            }
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activePage, changePage, isTransitioning, pages.length]);

    const progress = useMemo(() => {
        if (pages.length <= 1) return 100;
        return ((activePage + 1) / pages.length) * 100;
    }, [activePage, pages.length]);

    if (!current) return null;

    return (
        <section id="inicio" className="hero-v2">
            <style>{`
                .hero-v2 {
                    --hero-ink: #252b24;
                    --hero-muted: #62695d;
                    --hero-paper: #f7f5ef;
                    --hero-paper-soft: rgba(255, 255, 255, 0.72);
                    min-height: 100vh;
                    position: relative;
                    display: grid;
                    place-items: center;
                    overflow: hidden;
                    padding: 72px 34px 56px;
                    color: var(--hero-ink);
                    isolation: isolate;
                }

                .hero-v2::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: -3;
                    background:
                        radial-gradient(circle at 12% 12%, rgba(143, 149, 127, 0.16), transparent 28%),
                        radial-gradient(circle at 88% 20%, rgba(204, 205, 191, 0.28), transparent 25%),
                        linear-gradient(135deg, #f8f7f2 0%, #efeee7 52%, #f7f5ef 100%);
                }

                .hero-v2::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: -2;
                    opacity: .25;
                    pointer-events: none;
                    background-image: radial-gradient(rgba(69, 77, 65, .16) .6px, transparent .6px);
                    background-size: 18px 18px;
                    mask-image: linear-gradient(to bottom, black, transparent 75%);
                }

                .hero-v2-orb {
                    position: absolute;
                    border-radius: 999px;
                    filter: blur(10px);
                    pointer-events: none;
                    z-index: -1;
                }

                .hero-v2-orb-one {
                    width: 320px;
                    height: 320px;
                    top: -170px;
                    right: 8%;
                    background: rgba(143, 149, 127, .15);
                }

                .hero-v2-orb-two {
                    width: 240px;
                    height: 240px;
                    left: -120px;
                    bottom: 4%;
                    background: rgba(170, 168, 153, .13);
                }

                .hero-v2-botanical {
                    position: absolute;
                    color: #7f8a6f;
                    opacity: .22;
                    pointer-events: none;
                    z-index: 0;
                }

                .hero-v2-botanical-top {
                    top: 18px;
                    left: 18px;
                    transform: rotate(-12deg);
                }

                .hero-v2-botanical-bottom {
                    right: 20px;
                    bottom: -16px;
                    transform: rotate(168deg) scale(.9);
                }

                .hero-v2-shell {
                    width: min(1180px, 100%);
                    position: relative;
                    z-index: 1;
                }

                .hero-v2-heading {
                    display: flex;
                    align-items: end;
                    justify-content: space-between;
                    gap: 30px;
                    margin-bottom: 22px;
                    padding: 0 4px;
                }

                .hero-v2-heading-copy {
                    max-width: 670px;
                }

                .hero-v2-overline,
                .hero-v2-kicker {
                    display: block;
                    font: 700 10px/1.2 Inter, sans-serif;
                    letter-spacing: .18em;
                    text-transform: uppercase;
                    color: ${activeColor};
                }

                .hero-v2-heading h2 {
                    margin: 8px 0 0;
                    font: 600 clamp(28px, 4vw, 48px)/1.05 'Playfair Display', serif;
                    letter-spacing: -.025em;
                    color: var(--hero-ink);
                }

                .hero-v2-progress-wrap {
                    width: min(230px, 30vw);
                    flex-shrink: 0;
                }

                .hero-v2-progress-meta {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 8px;
                    font: 600 10px/1 Inter, sans-serif;
                    letter-spacing: .12em;
                    text-transform: uppercase;
                    color: #6c7367;
                }

                .hero-v2-progress {
                    height: 4px;
                    overflow: hidden;
                    border-radius: 999px;
                    background: rgba(75, 84, 72, .12);
                }

                .hero-v2-progress span {
                    display: block;
                    height: 100%;
                    border-radius: inherit;
                    background: ${activeColor};
                    transition: width .35s ease, background .35s ease;
                }

                .hero-v2-card {
                    display: grid;
                    grid-template-columns: minmax(0, 1.08fr) minmax(340px, .92fr);
                    min-height: 620px;
                    overflow: hidden;
                    border: 1px solid rgba(71, 80, 68, .14);
                    border-radius: 36px;
                    background: rgba(250, 249, 245, .78);
                    box-shadow:
                        0 38px 90px rgba(37, 46, 34, .15),
                        0 8px 25px rgba(37, 46, 34, .08),
                        inset 0 1px 0 rgba(255,255,255,.82);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                }

                .hero-v2-content {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    padding: 42px 44px 34px;
                    overflow: hidden;
                    background:
                        radial-gradient(circle at 0% 0%, rgba(143,149,127,.13), transparent 27%),
                        linear-gradient(145deg, rgba(255,255,255,.7), rgba(247,245,239,.7));
                }

                .hero-v2-content::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 8%;
                    bottom: 8%;
                    width: 1px;
                    background: linear-gradient(transparent, rgba(79,88,74,.2), transparent);
                }

                .hero-v2-panel {
                    position: relative;
                    flex: 1;
                    opacity: 1;
                    transform: translateX(0);
                    transition: opacity .2s ease, transform .26s ease;
                }

                .hero-v2-panel.is-transitioning {
                    opacity: 0;
                    transform: translateX(${direction === 'next' ? '-18px' : '18px'});
                }

                .hero-v2-page-label {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 17px;
                    font: 700 10px/1 Inter, sans-serif;
                    letter-spacing: .18em;
                    text-transform: uppercase;
                    color: ${activeColor};
                }

                .hero-v2-page-label::before {
                    content: '';
                    width: 28px;
                    height: 1px;
                    background: currentColor;
                }

                .hero-v2-title {
                    max-width: 680px;
                    margin: 0;
                    font: 600 clamp(42px, 5vw, 68px)/.98 'Playfair Display', serif;
                    letter-spacing: -.045em;
                    color: var(--hero-ink);
                }

                .hero-v2-title-secondary {
                    font-size: clamp(34px, 4vw, 54px);
                    line-height: 1.02;
                }

                .hero-v2-subtitle {
                    margin: 16px 0 0;
                    font: 600 12px/1.4 Inter, sans-serif;
                    letter-spacing: .13em;
                    text-transform: uppercase;
                    color: #777d72;
                }

                .hero-v2-intro {
                    max-width: 610px;
                    margin: 24px 0 0;
                    font: 400 15px/1.78 Inter, sans-serif;
                    color: #515a4d;
                }

                .hero-v2-home-grid {
                    display: grid;
                    grid-template-columns: 1.1fr .9fr;
                    gap: 18px;
                    margin-top: 28px;
                }

                .hero-v2-home-photo {
                    position: relative;
                    min-height: 210px;
                    overflow: hidden;
                    border-radius: 24px;
                    background: #d5d0c2;
                    box-shadow: 0 18px 38px rgba(43, 52, 40, .13);
                }

                .hero-v2-home-photo img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    inset: 0;
                    object-fit: cover;
                    transition: transform .7s ease;
                }

                .hero-v2-home-photo:hover img {
                    transform: scale(1.035);
                }

                .hero-v2-home-photo::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 45%, rgba(27,35,25,.48));
                }

                .hero-v2-home-caption {
                    position: absolute;
                    left: 18px;
                    right: 18px;
                    bottom: 16px;
                    z-index: 1;
                    color: #fff;
                    font: 600 11px/1.4 Inter, sans-serif;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .hero-v2-home-facts {
                    display: grid;
                    gap: 10px;
                }

                .hero-v2-home-facts article {
                    padding: 16px;
                    border: 1px solid rgba(77, 87, 74, .12);
                    border-radius: 18px;
                    background: rgba(255,255,255,.58);
                }

                .hero-v2-home-facts span {
                    display: block;
                    margin-bottom: 6px;
                    font: 700 9px/1 Inter, sans-serif;
                    letter-spacing: .14em;
                    text-transform: uppercase;
                    color: ${activeColor};
                }

                .hero-v2-home-facts p {
                    margin: 0;
                    font: 500 12px/1.52 Inter, sans-serif;
                    color: #465043;
                }

                .hero-v2-highlights {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0,1fr));
                    gap: 12px;
                    margin-top: 28px;
                }

                .hero-v2-highlights article {
                    position: relative;
                    min-height: 122px;
                    padding: 17px 17px 16px;
                    border: 1px solid color-mix(in srgb, var(--item-accent) 20%, transparent);
                    border-radius: 20px;
                    background: rgba(255,255,255,.56);
                    transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
                }

                .hero-v2-highlights article:hover {
                    transform: translateY(-3px);
                    border-color: color-mix(in srgb, var(--item-accent) 38%, transparent);
                    box-shadow: 0 17px 30px rgba(43,51,40,.1);
                }

                .hero-v2-highlight-number {
                    position: absolute;
                    top: 14px;
                    right: 15px;
                    font: 700 9px/1 Inter, sans-serif;
                    letter-spacing: .12em;
                    color: rgba(59,68,55,.35);
                }

                .hero-v2-highlight-icon {
                    width: 38px;
                    height: 38px;
                    display: grid;
                    place-items: center;
                    margin-bottom: 11px;
                    border-radius: 13px;
                    background: color-mix(in srgb, var(--item-accent) 14%, white);
                    color: var(--item-accent);
                }

                .hero-v2-highlights p {
                    margin: 0;
                    font: 500 12px/1.55 Inter, sans-serif;
                    color: #465043;
                }

                .hero-v2-tagline {
                    margin: 24px 0 0;
                    padding-top: 18px;
                    border-top: 1px solid rgba(75,84,71,.12);
                    font: 400 19px/1.45 'Dancing Script', cursive;
                    color: #687062;
                }

                .hero-v2-visual {
                    position: relative;
                    min-height: 100%;
                    overflow: hidden;
                    background: #7f8a6f;
                }

                .hero-v2-visual > img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-v2-visual-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        linear-gradient(180deg, rgba(27,34,25,.06), rgba(27,34,25,.58)),
                        linear-gradient(135deg, rgba(143,149,127,.18), transparent 58%);
                }

                .hero-v2-visual-content {
                    position: relative;
                    z-index: 1;
                    height: 100%;
                    min-height: 620px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 36px 34px 30px;
                }

                .hero-v2-visual-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .hero-v2-index {
                    display: grid;
                    place-items: center;
                    width: 58px;
                    height: 58px;
                    border: 1px solid rgba(255,255,255,.32);
                    border-radius: 18px;
                    color: #fff;
                    background: rgba(30,38,28,.18);
                    backdrop-filter: blur(12px);
                    font: 600 16px/1 Inter, sans-serif;
                }

                .hero-v2-visual-mark {
                    max-width: 150px;
                    text-align: right;
                    font: 700 9px/1.45 Inter, sans-serif;
                    letter-spacing: .16em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,.84);
                }

                .hero-v2-quote-card {
                    padding: 21px 21px 19px;
                    border: 1px solid rgba(255,255,255,.25);
                    border-radius: 24px;
                    background: rgba(31,39,29,.28);
                    color: #fff;
                    backdrop-filter: blur(16px);
                }

                .hero-v2-quote-icon {
                    display: inline-flex;
                    margin-bottom: 12px;
                    opacity: .8;
                }

                .hero-v2-quote-card blockquote {
                    margin: 0;
                    font: italic 500 18px/1.55 'Playfair Display', serif;
                    color: rgba(255,255,255,.98);
                }

                .hero-v2-facts {
                    display: grid;
                    gap: 8px;
                    margin-top: 15px;
                }

                .hero-v2-facts p {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    margin: 0;
                    font: 500 11px/1.45 Inter, sans-serif;
                    color: rgba(255,255,255,.9);
                }

                .hero-v2-facts p::before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    flex: 0 0 5px;
                    margin-top: 5px;
                    border-radius: 999px;
                    background: rgba(255,255,255,.8);
                }

                .hero-v2-tabs {
                    display: grid;
                    grid-template-columns: repeat(6, minmax(0,1fr));
                    gap: 8px;
                    margin-top: 14px;
                    padding: 8px;
                    border: 1px solid rgba(72,82,68,.12);
                    border-radius: 22px;
                    background: rgba(249,248,243,.72);
                    box-shadow: 0 12px 30px rgba(42,50,39,.08);
                    backdrop-filter: blur(14px);
                }

                .hero-v2-tabs button {
                    min-width: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 12px;
                    border: 1px solid transparent;
                    border-radius: 15px;
                    color: #687064;
                    background: transparent;
                    cursor: pointer;
                    transition: background .2s ease, color .2s ease, transform .2s ease, box-shadow .2s ease;
                }

                .hero-v2-tabs button:hover:not(:disabled) {
                    background: rgba(255,255,255,.72);
                    color: #343d31;
                }

                .hero-v2-tabs button.is-active {
                    color: #fff;
                    background: var(--tab-color);
                    box-shadow: 0 10px 20px color-mix(in srgb, var(--tab-color) 35%, transparent);
                    transform: translateY(-1px);
                }

                .hero-v2-tabs button:disabled {
                    cursor: wait;
                }

                .hero-v2-tabs button:focus-visible,
                .hero-v2-project-controls button:focus-visible,
                .hero-v2-image-nav button:focus-visible {
                    outline: 3px solid rgba(255,255,255,.94);
                    box-shadow: 0 0 0 6px rgba(84,96,77,.45);
                }

                .hero-v2-tab-icon {
                    display: inline-flex;
                    flex: 0 0 auto;
                }

                .hero-v2-tab-label {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font: 700 9px/1 Inter, sans-serif;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                }

                .hero-v2-projects {
                    margin-top: 25px;
                }

                .hero-v2-project-card {
                    overflow: hidden;
                    border: 1px solid color-mix(in srgb, var(--project-accent) 20%, transparent);
                    border-radius: 24px;
                    background: rgba(255,255,255,.58);
                    box-shadow: 0 18px 38px rgba(42,51,38,.1);
                }

                .hero-v2-project-media {
                    position: relative;
                    height: 210px;
                    overflow: hidden;
                    background: #d6d3c8;
                }

                .hero-v2-project-media > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    animation: heroV2ImageIn .45s ease both;
                }

                .hero-v2-project-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, transparent 40%, rgba(27,34,25,.62));
                }

                .hero-v2-project-category {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    padding: 8px 11px;
                    border-radius: 999px;
                    background: rgba(249,248,242,.9);
                    color: #4b5547;
                    font: 700 9px/1 Inter, sans-serif;
                    letter-spacing: .12em;
                    text-transform: uppercase;
                    backdrop-filter: blur(10px);
                }

                .hero-v2-image-nav {
                    position: absolute;
                    right: 14px;
                    bottom: 14px;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    padding: 5px;
                    border: 1px solid rgba(255,255,255,.24);
                    border-radius: 999px;
                    background: rgba(28,36,26,.42);
                    color: #fff;
                    backdrop-filter: blur(12px);
                }

                .hero-v2-image-nav button,
                .hero-v2-project-controls > button {
                    display: grid;
                    place-items: center;
                    border: 0;
                    color: inherit;
                    cursor: pointer;
                }

                .hero-v2-image-nav button {
                    width: 28px;
                    height: 28px;
                    border-radius: 999px;
                    background: rgba(255,255,255,.12);
                }

                .hero-v2-image-nav span {
                    min-width: 35px;
                    text-align: center;
                    font: 700 9px/1 Inter, sans-serif;
                    letter-spacing: .08em;
                }

                .hero-v2-project-placeholder {
                    height: 100%;
                    display: grid;
                    place-content: center;
                    gap: 9px;
                    text-align: center;
                    color: #687063;
                    font: 600 11px/1.3 Inter, sans-serif;
                }

                .hero-v2-project-content {
                    padding: 20px 21px 21px;
                }

                .hero-v2-project-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 20px;
                }

                .hero-v2-project-heading h3 {
                    margin: 5px 0 0;
                    font: 600 25px/1.1 'Playfair Display', serif;
                    color: #2e352b;
                }

                .hero-v2-project-number {
                    font: 600 20px/1 Inter, sans-serif;
                    color: color-mix(in srgb, var(--project-accent) 55%, white);
                }

                .hero-v2-project-description {
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    margin: 13px 0 16px;
                    font: 400 12px/1.62 Inter, sans-serif;
                    color: #525b4e;
                }

                .hero-v2-project-meta {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0,1fr));
                    gap: 9px;
                }

                .hero-v2-project-meta > div {
                    padding: 11px 12px;
                    border-radius: 14px;
                    background: color-mix(in srgb, var(--project-accent) 9%, white);
                }

                .hero-v2-project-meta span {
                    display: block;
                    margin-bottom: 5px;
                    font: 700 8px/1 Inter, sans-serif;
                    letter-spacing: .13em;
                    text-transform: uppercase;
                    color: #7a8175;
                }

                .hero-v2-project-meta strong {
                    font: 600 11px/1.4 Inter, sans-serif;
                    color: #414a3e;
                }

                .hero-v2-project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-top: 13px;
                }

                .hero-v2-project-tags > span {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 7px 9px;
                    border-radius: 999px;
                    background: rgba(127,138,111,.11);
                    color: #4f594b;
                    font: 600 9px/1.2 Inter, sans-serif;
                }

                .hero-v2-project-controls {
                    display: grid;
                    grid-template-columns: 38px 1fr 38px;
                    align-items: center;
                    gap: 12px;
                    margin-top: 12px;
                }

                .hero-v2-project-controls > button {
                    width: 38px;
                    height: 38px;
                    border-radius: 13px;
                    background: rgba(255,255,255,.66);
                    color: #4c5748;
                    box-shadow: 0 8px 18px rgba(42,51,38,.08);
                }

                .hero-v2-project-dots {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }

                .hero-v2-project-dots button {
                    width: 7px;
                    height: 7px;
                    padding: 0;
                    border: 0;
                    border-radius: 999px;
                    background: rgba(127,138,111,.34);
                    cursor: pointer;
                    transition: width .2s ease, background .2s ease;
                }

                .hero-v2-project-dots button.is-active {
                    width: 26px;
                    background: ${activeColor};
                }

                .hero-v2-empty {
                    display: grid;
                    justify-items: center;
                    padding: 42px 24px;
                    margin-top: 25px;
                    border: 1px dashed rgba(82,92,78,.2);
                    border-radius: 22px;
                    text-align: center;
                    background: rgba(255,255,255,.45);
                }

                .hero-v2-empty-icon {
                    width: 46px;
                    height: 46px;
                    display: grid;
                    place-items: center;
                    margin-bottom: 12px;
                    border-radius: 16px;
                    background: rgba(127,138,111,.12);
                    color: #68745f;
                }

                .hero-v2-empty strong {
                    font: 600 18px/1.2 'Playfair Display', serif;
                }

                .hero-v2-empty p {
                    margin: 7px 0 0;
                    font: 400 12px/1.55 Inter, sans-serif;
                    color: #687064;
                }

                @keyframes heroV2ImageIn {
                    from { opacity: 0; transform: scale(1.025); }
                    to { opacity: 1; transform: scale(1); }
                }

                @media (max-width: 980px) {
                    .hero-v2 {
                        padding: 48px 20px;
                    }

                    .hero-v2-card {
                        grid-template-columns: 1fr;
                    }

                    .hero-v2-content::after {
                        display: none;
                    }

                    .hero-v2-visual {
                        min-height: 430px;
                    }

                    .hero-v2-visual-content {
                        min-height: 430px;
                    }

                    .hero-v2-tabs {
                        grid-template-columns: repeat(3, minmax(0,1fr));
                    }
                }

                @media (max-width: 680px) {
                    .hero-v2 {
                        min-height: auto;
                        padding: 30px 13px 38px;
                    }

                    .hero-v2-heading {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 16px;
                    }

                    .hero-v2-progress-wrap {
                        width: 100%;
                    }

                    .hero-v2-card {
                        min-height: auto;
                        border-radius: 25px;
                    }

                    .hero-v2-content {
                        padding: 31px 21px 26px;
                    }

                    .hero-v2-home-grid,
                    .hero-v2-highlights {
                        grid-template-columns: 1fr;
                    }

                    .hero-v2-home-photo {
                        min-height: 230px;
                    }

                    .hero-v2-visual,
                    .hero-v2-visual-content {
                        min-height: 390px;
                    }

                    .hero-v2-visual-content {
                        padding: 27px 22px 23px;
                    }

                    .hero-v2-tabs {
                        grid-template-columns: repeat(2, minmax(0,1fr));
                    }

                    .hero-v2-tab-label {
                        font-size: 8px;
                    }
                }

                @media (max-width: 430px) {
                    .hero-v2-title {
                        font-size: 39px;
                    }

                    .hero-v2-title-secondary {
                        font-size: 34px;
                    }

                    .hero-v2-project-meta {
                        grid-template-columns: 1fr;
                    }

                    .hero-v2-tabs button {
                        padding-inline: 8px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-v2 *,
                    .hero-v2 *::before,
                    .hero-v2 *::after {
                        scroll-behavior: auto !important;
                        animation-duration: .01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: .01ms !important;
                    }
                }
            `}</style>

            <span className="hero-v2-orb hero-v2-orb-one" />
            <span className="hero-v2-orb hero-v2-orb-two" />
            <BotanicalLine className="hero-v2-botanical hero-v2-botanical-top" />
            <BotanicalLine className="hero-v2-botanical hero-v2-botanical-bottom" />

            <div ref={revealRef} className="hero-v2-shell reveal">
                <header className="hero-v2-heading">
                    <div className="hero-v2-heading-copy">
                        <span className="hero-v2-overline">{ui.portfolioLabel}</span>
                        <h2>{ui.heading}</h2>
                    </div>

                    <div className="hero-v2-progress-wrap" aria-label={`${ui.section} ${activePage + 1} ${ui.of} ${pages.length}`}>
                        <div className="hero-v2-progress-meta">
                            <span>{String(activePage + 1).padStart(2, '0')}</span>
                            <span>{String(pages.length).padStart(2, '0')}</span>
                        </div>
                        <div className="hero-v2-progress"><span style={{ width: `${progress}%` }} /></div>
                    </div>
                </header>

                <div className="hero-v2-card">
                    <div className="hero-v2-content">
                        <div
                            id={`hero-panel-${displayedPage}`}
                            role="tabpanel"
                            aria-labelledby={`hero-tab-${displayedPage}`}
                            className={`hero-v2-panel ${isTransitioning ? 'is-transitioning' : ''}`}
                        >
                            <span className="hero-v2-page-label">
                                <EditableText path={`hero.pages.${displayedPage}.label`} as="span" />
                            </span>

                            <h1 className={`hero-v2-title ${displayedPage !== 0 ? 'hero-v2-title-secondary' : ''}`}>
                                {displayedPage === 0 ? (
                                    <EditableText path="hero.title" as="span" />
                                ) : (
                                    <>
                                        <EditableText path={`hero.pages.${displayedPage}.title.0`} as="span" />
                                        <br />
                                        <EditableText path={`hero.pages.${displayedPage}.title.1`} as="span" />
                                    </>
                                )}
                            </h1>

                            <p className="hero-v2-subtitle">
                                <EditableText path={`hero.pages.${displayedPage}.subtitle`} as="span" />
                            </p>

                            {displayedPage === 0 ? (
                                <>
                                    <p className="hero-v2-intro">
                                        <EditableText path="hero.intro" as="span" multiline />
                                    </p>

                                    <div className="hero-v2-home-grid">
                                        <div className="hero-v2-home-photo">
                                            <img src={heroImg} alt={ui.agriculturalImageAlt} />
                                            <span className="hero-v2-home-caption">{ui.territorialCaption}</span>
                                        </div>

                                        <div className="hero-v2-home-facts">
                                            {facts.slice(0, 3).map((fact, index) => (
                                                <article key={`home-fact-${index}`}>
                                                    <span>0{index + 1}</span>
                                                    <p><EditableText path={`hero.pages.${displayedPage}.facts.${index}`} as="span" /></p>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : displayedPage === 3 ? (
                                <ProjectShowcase projects={projects} activeColor={activeColor} ui={ui} />
                            ) : (
                                <HighlightGrid items={current?.highlights} pageIndex={displayedPage} activeColor={activeColor} ui={ui} />
                            )}

                            <p className="hero-v2-tagline">
                                <EditableText path={`hero.pages.${displayedPage}.tagline`} as="span" multiline />
                            </p>
                        </div>
                    </div>

                    <aside className="hero-v2-visual" aria-label={ui.imageAndHighlights}>
                        <img src={heroImg} alt={ui.representativeImageAlt} />
                        <div className="hero-v2-visual-overlay" />

                        <div className="hero-v2-visual-content">
                            <div className="hero-v2-visual-top">
                                <span className="hero-v2-index">{String(displayedPage + 1).padStart(2, '0')}</span>
                                <span className="hero-v2-visual-mark">{ui.visualMark}</span>
                            </div>

                            <div className="hero-v2-quote-card">
                                <span className="hero-v2-quote-icon"><Icon name="quote" size={22} /></span>
                                <blockquote>
                                    <EditableText path={`hero.pages.${displayedPage}.quote`} as="span" multiline />
                                </blockquote>

                                {facts.length > 0 && (
                                    <div className="hero-v2-facts">
                                        {facts.slice(0, 4).map((fact, index) => (
                                            <p key={`visual-fact-${displayedPage}-${index}`}>
                                                <EditableText path={`hero.pages.${displayedPage}.facts.${index}`} as="span" />
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>

                <HeroTabs
                    pages={pages}
                    activePage={activePage}
                    onChange={changePage}
                    disabled={isTransitioning}
                    ui={ui}
                />
            </div>
        </section>
    );
}