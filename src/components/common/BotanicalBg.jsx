/**
 * BotanicalBg — fondo decorativo fijo con plantas, hojas, semillas y raíces
 * dibujadas en SVG. Se monta sobre el layout general.
 */
export default function BotanicalBg() {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* ── ESQUINA SUPERIOR IZQUIERDA ─ rama con hojas grandes ── */}
                <g opacity="0.13" transform="translate(-20, -30) rotate(-10, 120, 120)">
                    {/* Tallo principal */}
                    <path d="M60 200 Q90 140 130 80 Q150 50 170 20" stroke="#3d5e3f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    {/* Hoja 1 */}
                    <path d="M130 80 Q160 55 145 30 Q120 55 130 80Z" fill="#4a7050" />
                    <path d="M130 80 Q160 55 145 30" stroke="#3a5a3a" strokeWidth="1" fill="none" />
                    {/* Hoja 2 */}
                    <path d="M105 120 Q75 100 80 70 Q105 90 105 120Z" fill="#4a7050" />
                    <path d="M105 120 Q75 100 80 70" stroke="#3a5a3a" strokeWidth="1" fill="none" />
                    {/* Hoja 3 */}
                    <path d="M90 155 Q115 135 115 105 Q90 125 90 155Z" fill="#5a8060" />
                    {/* Hoja 4 pequeña */}
                    <path d="M75 180 Q55 160 60 135 Q78 158 75 180Z" fill="#4a7050" />
                    {/* Nervaduras */}
                    <line x1="130" y1="80" x2="143" y2="52" stroke="#2d4a35" strokeWidth="0.6" opacity="0.7" />
                    <line x1="105" y1="120" x2="80" y2="72" stroke="#2d4a35" strokeWidth="0.6" opacity="0.7" />
                </g>

                {/* ── ESQUINA SUPERIOR DERECHA ─ planta trepadora ── */}
                <g opacity="0.11" transform="translate(1310, -10) rotate(15, 60, 100)">
                    <path d="M60 220 Q50 160 70 100 Q80 60 100 10" stroke="#3d5e3f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    {/* Hojas alternas */}
                    <path d="M70 100 Q100 80 95 55 Q70 75 70 100Z" fill="#4a7050" />
                    <path d="M65 140 Q35 125 38 95 Q62 115 65 140Z" fill="#5a8060" />
                    <path d="M62 170 Q85 148 82 122 Q60 143 62 170Z" fill="#4a7050" />
                    {/* Zarcillos */}
                    <path d="M95 55 Q110 40 108 25" stroke="#3d5e3f" strokeWidth="1" fill="none" strokeLinecap="round" />
                    <path d="M38 95 Q18 82 15 65" stroke="#3d5e3f" strokeWidth="1" fill="none" strokeLinecap="round" />
                </g>

                {/* ── LATERAL IZQUIERDO MEDIO ─ flor silvestre ── */}
                <g opacity="0.10" transform="translate(30, 350)">
                    {/* Tallo */}
                    <path d="M40 180 Q35 130 45 80 Q50 50 55 10" stroke="#3d5e3f" strokeWidth="2" fill="none" strokeLinecap="round" />
                    {/* Pétalos flor */}
                    <ellipse cx="55" cy="10" rx="8" ry="14" fill="#7a9c60" transform="rotate(-15, 55, 10)" opacity="0.8" />
                    <ellipse cx="55" cy="10" rx="8" ry="14" fill="#7a9c60" transform="rotate(30, 55, 10)" opacity="0.8" />
                    <ellipse cx="55" cy="10" rx="8" ry="14" fill="#7a9c60" transform="rotate(75, 55, 10)" opacity="0.8" />
                    <ellipse cx="55" cy="10" rx="8" ry="14" fill="#7a9c60" transform="rotate(120, 55, 10)" opacity="0.8" />
                    <circle cx="55" cy="10" r="7" fill="#c8a840" opacity="0.7" />
                    {/* Hojas laterales */}
                    <path d="M45 80 Q20 65 22 40 Q46 60 45 80Z" fill="#4a7050" />
                    <path d="M42 115 Q65 98 63 72 Q41 92 42 115Z" fill="#5a8060" />
                    <path d="M40 145 Q18 132 20 108 Q40 124 40 145Z" fill="#4a7050" />
                </g>

                {/* ── SEMILLAS dispersas ── */}
                {/* Semilla 1 */}
                <g opacity="0.12" transform="translate(280, 80) rotate(25)">
                    <ellipse cx="0" cy="0" rx="6" ry="10" fill="#6b4f32" />
                    <line x1="0" y1="-10" x2="0" y2="-22" stroke="#3d5e3f" strokeWidth="1" strokeLinecap="round" />
                    <path d="M0 -18 Q6 -14 0 -10" stroke="#3d5e3f" strokeWidth="0.8" fill="none" />
                </g>
                {/* Semilla 2 */}
                <g opacity="0.10" transform="translate(1150, 150) rotate(-15)">
                    <ellipse cx="0" cy="0" rx="5" ry="9" fill="#6b4f32" />
                    <line x1="0" y1="-9" x2="0" y2="-20" stroke="#3d5e3f" strokeWidth="1" strokeLinecap="round" />
                    <path d="M0 -17 Q-5 -12 0 -9" stroke="#3d5e3f" strokeWidth="0.8" fill="none" />
                </g>
                {/* Semilla 3 */}
                <g opacity="0.10" transform="translate(800, 50) rotate(40)">
                    <ellipse cx="0" cy="0" rx="4" ry="8" fill="#8B6D4D" />
                    <line x1="0" y1="-8" x2="0" y2="-18" stroke="#4a7050" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M0 -15 Q4 -11 0 -8" stroke="#4a7050" strokeWidth="0.7" fill="none" />
                </g>
                {/* Semilla 4 en vuelo */}
                <g opacity="0.09" transform="translate(600, 820) rotate(-30)">
                    <ellipse cx="0" cy="0" rx="5" ry="9" fill="#6b4f32" />
                    <line x1="0" y1="-9" x2="0" y2="-30" stroke="#3d5e3f" strokeWidth="0.8" strokeLinecap="round" />
                    {/* Pelillos diente de león style */}
                    <line x1="0" y1="-30" x2="-8" y2="-42" stroke="#4a7050" strokeWidth="0.7" strokeLinecap="round" />
                    <line x1="0" y1="-30" x2="0" y2="-44" stroke="#4a7050" strokeWidth="0.7" strokeLinecap="round" />
                    <line x1="0" y1="-30" x2="8" y2="-42" stroke="#4a7050" strokeWidth="0.7" strokeLinecap="round" />
                    <circle cx="-8" cy="-42" r="2" fill="#7a9c60" opacity="0.6" />
                    <circle cx="0" cy="-44" r="2" fill="#7a9c60" opacity="0.6" />
                    <circle cx="8" cy="-42" r="2" fill="#7a9c60" opacity="0.6" />
                </g>

                {/* ── RAÍCES parte inferior ── */}
                <g opacity="0.09" transform="translate(200, 820)">
                    <path d="M0 0 Q-10 30 -20 60 Q-30 90 -15 120" stroke="#4a3020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    <path d="M0 0 Q10 25 5 55 Q0 80 10 105" stroke="#4a3020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M-20 60 Q-40 70 -50 95" stroke="#4a3020" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <path d="M5 55 Q25 60 35 85" stroke="#4a3020" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <path d="M-10 88 Q-30 92 -38 110" stroke="#4a3020" strokeWidth="0.9" fill="none" strokeLinecap="round" />
                </g>
                <g opacity="0.08" transform="translate(1100, 830)">
                    <path d="M0 0 Q-8 28 -18 55 Q-25 80 -12 108" stroke="#4a3020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    <path d="M0 0 Q12 22 8 50 Q3 75 14 100" stroke="#4a3020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M-18 55 Q-38 65 -48 88" stroke="#4a3020" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <path d="M8 50 Q28 55 38 78" stroke="#4a3020" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </g>

                {/* ── DIENTE DE LEÓN centro-derecha ── */}
                <g opacity="0.10" transform="translate(1300, 480)">
                    <line x1="0" y1="80" x2="0" y2="10" stroke="#3d5e3f" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Hojas base */}
                    <path d="M0 60 Q-20 45 -18 25 Q0 42 0 60Z" fill="#4a7050" />
                    <path d="M0 60 Q20 45 18 25 Q0 42 0 60Z" fill="#4a7050" />
                    {/* Esfera */}
                    {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
                        <line
                            key={i}
                            x1="0"
                            y1="10"
                            x2={Math.cos((angle * Math.PI) / 180) * 22}
                            y2={10 + Math.sin((angle * Math.PI) / 180) * 22}
                            stroke="#4a7050"
                            strokeWidth="0.9"
                            strokeLinecap="round"
                        />
                    ))}
                    {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((angle, i) => (
                        <circle
                            key={i}
                            cx={Math.cos((angle * Math.PI) / 180) * 22}
                            cy={10 + Math.sin((angle * Math.PI) / 180) * 22}
                            r="2.5"
                            fill="#7a9c60"
                            opacity="0.7"
                        />
                    ))}
                    <circle cx="0" cy="10" r="4" fill="#c8a840" opacity="0.5" />
                </g>

                {/* ── ESPIGA DE TRIGO lateral derecho bajo ── */}
                <g opacity="0.11" transform="translate(1380, 580) rotate(5)">
                    <line x1="0" y1="160" x2="0" y2="0" stroke="#8B6D4D" strokeWidth="1.8" strokeLinecap="round" />
                    {[-1, 1, -1, 1, -1, 1].map((side, i) => (
                        <ellipse
                            key={i}
                            cx={side * 9}
                            cy={20 + i * 22}
                            rx="7"
                            ry="11"
                            fill="#c8a840"
                            opacity="0.55"
                            transform={`rotate(${side * -25}, ${side * 9}, ${20 + i * 22})`}
                        />
                    ))}
                    {/* Aristas */}
                    {[-1, 1, -1, 1, -1, 1].map((side, i) => (
                        <line
                            key={i}
                            x1={side * 9}
                            y1={12 + i * 22}
                            x2={side * 20}
                            y2={2 + i * 22}
                            stroke="#8B6D4D"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                    ))}
                </g>

                {/* ── HOJA GRANDE CENTRAL-DERECHA (decorativa) ── */}
                <g opacity="0.07" transform="translate(950, 750) rotate(-20)">
                    <path d="M0 120 Q-50 60 -20 0 Q30 60 0 120Z" fill="#4a7050" />
                    <path d="M0 120 Q50 60 20 0 Q-30 60 0 120Z" fill="#5a8060" opacity="0.7" />
                    {/* Nervadura central */}
                    <line x1="0" y1="120" x2="0" y2="0" stroke="#2d4a35" strokeWidth="1.2" opacity="0.5" />
                    {/* Nervaduras laterales */}
                    {[20, 40, 60, 80, 100].map((y, i) => (
                        <g key={i}>
                            <line x1="0" y1={y} x2={-25 + i * 3} y2={y - 15} stroke="#2d4a35" strokeWidth="0.6" opacity="0.4" />
                            <line x1="0" y1={y} x2={25 - i * 3} y2={y - 15} stroke="#2d4a35" strokeWidth="0.6" opacity="0.4" />
                        </g>
                    ))}
                </g>

                {/* ── HOJA PEQUEÑA FLOTANTE superior centro ── */}
                <g opacity="0.09" transform="translate(700, 30) rotate(35)">
                    <path d="M0 50 Q-18 25 -5 0 Q12 25 0 50Z" fill="#4a7050" />
                    <path d="M0 50 Q18 25 5 0 Q-12 25 0 50Z" fill="#5a8060" opacity="0.8" />
                    <line x1="0" y1="50" x2="0" y2="0" stroke="#2d4a35" strokeWidth="0.8" opacity="0.5" />
                </g>

                {/* ── RAMA HORIZONTAL INFERIOR IZQUIERDA ── */}
                <g opacity="0.10" transform="translate(0, 780)">
                    <path d="M-10 60 Q80 30 180 50 Q240 60 300 40" stroke="#3d5e3f" strokeWidth="2" fill="none" strokeLinecap="round" />
                    {/* Hojas sobre la rama */}
                    {[60, 110, 160, 220, 270].map((x, i) => (
                        <g key={i} transform={`translate(${x}, ${i % 2 === 0 ? 38 : 50}) rotate(${i % 2 === 0 ? -40 : 40})`}>
                            <path d="M0 28 Q-12 14 -4 0 Q8 14 0 28Z" fill="#4a7050" />
                            <line x1="0" y1="28" x2="0" y2="0" stroke="#2d4a35" strokeWidth="0.6" opacity="0.5" />
                        </g>
                    ))}
                </g>

                {/* ── BROTE GERMINAR centro izquierda ── */}
                <g opacity="0.10" transform="translate(350, 820)">
                    {/* Semilla en tierra */}
                    <ellipse cx="0" cy="0" rx="10" ry="7" fill="#6b4f32" />
                    {/* Tallo emergente */}
                    <path d="M0 0 Q-5 -20 0 -40 Q5 -55 2 -70" stroke="#3d5e3f" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    {/* Primeras hojitas */}
                    <path d="M0 -40 Q-20 -50 -15 -65 Q0 -48 0 -40Z" fill="#6a9c50" />
                    <path d="M0 -40 Q20 -50 15 -65 Q0 -48 0 -40Z" fill="#6a9c50" />
                </g>

                {/* ── PEQUEÑAS SEMILLAS DISPERSAS ── */}
                {[
                    { x: 450, y: 750, r: 35 },
                    { x: 870, y: 810, r: -20 },
                    { x: 1240, y: 700, r: 50 },
                    { x: 150, y: 680, r: -10 },
                ].map((s, i) => (
                    <g key={i} opacity="0.09" transform={`translate(${s.x}, ${s.y}) rotate(${s.r})`}>
                        <ellipse cx="0" cy="0" rx="4" ry="7" fill="#8B6D4D" />
                        <line x1="0" y1="-7" x2="0" y2="-16" stroke="#3d5e3f" strokeWidth="0.8" strokeLinecap="round" />
                        <path d="M0 -14 Q4 -10 0 -7" stroke="#3d5e3f" strokeWidth="0.6" fill="none" />
                    </g>
                ))}

                {/* ── FRANJA DE SURCOS AGRICOLAS (inferior centro) ── */}
                <g opacity="0.05" transform="translate(520, 790)">
                    {[0, 16, 32, 48, 64, 80, 96, 112].map((y, i) => (
                        <path
                            key={i}
                            d={`M0 ${y} Q120 ${y - 18} 240 ${y} Q360 ${y + 16} 480 ${y}`}
                            stroke="#6f5a3e"
                            strokeWidth="1.4"
                            fill="none"
                            strokeLinecap="round"
                        />
                    ))}
                    {[40, 120, 220, 320, 420].map((x, i) => (
                        <path key={i} d={`M${x} -10 Q${x + 8} 45 ${x} 125`} stroke="#4a7050" strokeWidth="1" fill="none" opacity="0.5" />
                    ))}
                </g>

                {/* ── SISTEMA DE RIEGO por goteo (superior centro) ── */}
                <g opacity="0.09" transform="translate(560, 120)">
                    <path d="M0 10H320" stroke="#4E8080" strokeWidth="1.8" strokeLinecap="round" />
                    {[28, 92, 156, 220, 284].map((x, i) => (
                        <g key={i} transform={`translate(${x}, 10)`}>
                            <line x1="0" y1="0" x2="0" y2="32" stroke="#4E8080" strokeWidth="1.1" strokeLinecap="round" />
                            <path d="M0 40 C-4 34 -4 28 0 24 C4 28 4 34 0 40Z" fill="#4E8080" opacity="0.7" />
                        </g>
                    ))}
                </g>

                {/* ── HERRAMIENTAS AGRONOMICAS (pala + rastrillo) ── */}
                <g opacity="0.08" transform="translate(1180, 300) rotate(18)">
                    {/* Pala */}
                    <line x1="0" y1="0" x2="0" y2="120" stroke="#8B6D4D" strokeWidth="3" strokeLinecap="round" />
                    <path d="M0 122 C-14 114 -14 98 0 90 C14 98 14 114 0 122Z" fill="#6f7f8c" />
                    {/* Mango */}
                    <rect x="-9" y="-10" width="18" height="8" rx="3" fill="#8B6D4D" />
                </g>
                <g opacity="0.08" transform="translate(1240, 320) rotate(24)">
                    {/* Rastrillo */}
                    <line x1="0" y1="0" x2="0" y2="110" stroke="#8B6D4D" strokeWidth="3" strokeLinecap="round" />
                    <rect x="-24" y="110" width="48" height="7" rx="2" fill="#6f7f8c" />
                    {[-18, -10, -2, 6, 14, 22].map((x, i) => (
                        <line key={i} x1={x} y1="117" x2={x} y2="130" stroke="#6f7f8c" strokeWidth="1.2" strokeLinecap="round" />
                    ))}
                </g>

                {/* ── POLINIZADOR (abeja) lateral derecho ── */}
                <g opacity="0.10" transform="translate(1320, 210) rotate(-12)">
                    <ellipse cx="0" cy="0" rx="12" ry="7" fill="#c8a840" />
                    <rect x="-7" y="-7" width="3" height="14" fill="#4a3020" opacity="0.55" />
                    <rect x="-1" y="-7" width="3" height="14" fill="#4a3020" opacity="0.55" />
                    <rect x="5" y="-7" width="3" height="14" fill="#4a3020" opacity="0.55" />
                    <ellipse cx="-5" cy="-9" rx="6" ry="4" fill="#d8f0f2" opacity="0.7" transform="rotate(-25 -5 -9)" />
                    <ellipse cx="5" cy="-9" rx="6" ry="4" fill="#d8f0f2" opacity="0.7" transform="rotate(25 5 -9)" />
                    <circle cx="-12" cy="0" r="3" fill="#4a3020" />
                    <line x1="-13" y1="-3" x2="-17" y2="-8" stroke="#4a3020" strokeWidth="0.9" strokeLinecap="round" />
                    <line x1="-11" y1="-3" x2="-8" y2="-8" stroke="#4a3020" strokeWidth="0.9" strokeLinecap="round" />
                </g>

                {/* ── PERFIL DE SUELO VIVO (inferior derecha) ── */}
                <g opacity="0.09" transform="translate(1010, 835)">
                    <rect x="0" y="0" width="260" height="52" rx="6" fill="#6b4f32" />
                    <rect x="0" y="0" width="260" height="17" rx="6" fill="#7f6241" opacity="0.7" />
                    <path d="M28 20 Q44 28 32 40" stroke="#4a3020" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    <path d="M82 22 Q96 30 86 44" stroke="#4a3020" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                    <path d="M150 18 Q166 28 152 42" stroke="#4a3020" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                    <path d="M210 24 Q224 31 215 46" stroke="#4a3020" strokeWidth="1.1" fill="none" strokeLinecap="round" />
                    {[22, 54, 112, 178, 230].map((x, i) => (
                        <g key={i} transform={`translate(${x}, -2)`}>
                            <line x1="0" y1="0" x2="0" y2="-18" stroke="#3d5e3f" strokeWidth="1" strokeLinecap="round" />
                            <path d="M0 -10 Q-9 -13 -7 -22 Q0 -15 0 -10Z" fill="#5a8060" />
                            <path d="M0 -10 Q9 -13 7 -22 Q0 -15 0 -10Z" fill="#5a8060" />
                        </g>
                    ))}
                </g>

                {/* ── COMPOST / BIOMASA (lateral izquierda baja, mas sutil) ── */}
                <g opacity="0.05" transform="translate(120, 710)">
                    <ellipse cx="0" cy="0" rx="40" ry="16" fill="#7a5f44" />
                    <ellipse cx="0" cy="-1" rx="30" ry="10" fill="#6b4f32" />
                    {[-14, 0, 14].map((x, i) => (
                        <path key={i} d={`M${x} -5 Q${x + 5} -11 ${x + 2} -16`} stroke="#5a8060" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                    ))}
                </g>

                {/* ── ZONA LIMPIA CENTRAL para priorizar contenido ── */}
                <ellipse cx="720" cy="440" rx="360" ry="235" fill="#f6f2ea" opacity="0.34" />
                <ellipse cx="720" cy="440" rx="290" ry="185" fill="#f6f2ea" opacity="0.26" />

                {/* ── VIGNETTE suave hacia bordes (profundidad) ── */}
                <rect x="0" y="0" width="1440" height="900" fill="url(#agroVignette)" opacity="0.23" />

                {/* ── CÍRCULOS ORGÁNICOS de fondo (textura) ── */}
                <circle cx="400" cy="200" r="120" fill="none" stroke="#4a7050" strokeWidth="0.4" opacity="0.05" strokeDasharray="4 8" />
                <circle cx="1100" cy="600" r="90" fill="none" stroke="#4a7050" strokeWidth="0.4" opacity="0.05" strokeDasharray="4 8" />
                <circle cx="720" cy="450" r="200" fill="none" stroke="#4a7050" strokeWidth="0.3" opacity="0.04" strokeDasharray="6 12" />

                <defs>
                    <radialGradient id="agroVignette" cx="50%" cy="48%" r="70%">
                        <stop offset="0%" stopColor="#f6f2ea" stopOpacity="0" />
                        <stop offset="62%" stopColor="#f6f2ea" stopOpacity="0" />
                        <stop offset="100%" stopColor="#d8cfbf" stopOpacity="1" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
