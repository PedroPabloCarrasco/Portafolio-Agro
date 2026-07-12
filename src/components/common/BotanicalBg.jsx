const leafClusters = [
    {
        x: 1415,
        y: 78,
        rotation: 8,
        opacity: 0.96,
        leaves: [
            { x: 0, y: 0, width: 82, height: 184, rotation: -22, fill: 'leafOlive' },
            { x: -38, y: 46, width: 72, height: 162, rotation: -46, fill: 'leafDeep' },
            { x: -8, y: 112, width: 68, height: 150, rotation: 22, fill: 'leafMid' },
            { x: -92, y: 118, width: 58, height: 126, rotation: -68, fill: 'leafLight' },
            { x: -20, y: 192, width: 54, height: 118, rotation: 58, fill: 'leafOlive' },
        ],
    },
    {
        x: 1432,
        y: 392,
        rotation: -6,
        opacity: 0.92,
        leaves: [
            { x: 0, y: 0, width: 88, height: 196, rotation: 8, fill: 'leafDeep' },
            { x: -56, y: 42, width: 74, height: 170, rotation: -42, fill: 'leafMid' },
            { x: -18, y: 114, width: 66, height: 146, rotation: 38, fill: 'leafLight' },
            { x: -104, y: 154, width: 60, height: 132, rotation: -72, fill: 'leafOlive' },
            { x: -6, y: 212, width: 52, height: 114, rotation: 66, fill: 'leafDeep' },
        ],
    },
    {
        x: 1386,
        y: 728,
        rotation: 18,
        opacity: 0.96,
        leaves: [
            { x: 0, y: 0, width: 92, height: 210, rotation: -18, fill: 'leafOlive' },
            { x: -62, y: 52, width: 78, height: 180, rotation: -54, fill: 'leafDeep' },
            { x: -16, y: 128, width: 72, height: 162, rotation: 28, fill: 'leafMid' },
            { x: -118, y: 142, width: 60, height: 136, rotation: -82, fill: 'leafLight' },
            { x: -14, y: 226, width: 56, height: 122, rotation: 58, fill: 'leafDeep' },
        ],
    },
    {
        x: 22,
        y: 70,
        rotation: -12,
        opacity: 0.9,
        leaves: [
            { x: 0, y: 0, width: 72, height: 162, rotation: 36, fill: 'leafMid' },
            { x: 44, y: 34, width: 62, height: 142, rotation: 68, fill: 'leafLight' },
            { x: 10, y: 106, width: 56, height: 126, rotation: 8, fill: 'leafOlive' },
            { x: 88, y: 122, width: 54, height: 118, rotation: 88, fill: 'leafDeep' },
        ],
    },
    {
        x: 12,
        y: 708,
        rotation: 14,
        opacity: 0.9,
        leaves: [
            { x: 0, y: 0, width: 82, height: 186, rotation: 18, fill: 'leafDeep' },
            { x: 56, y: 48, width: 68, height: 154, rotation: 52, fill: 'leafMid' },
            { x: 24, y: 128, width: 58, height: 132, rotation: -12, fill: 'leafLight' },
            { x: 102, y: 152, width: 56, height: 122, rotation: 82, fill: 'leafOlive' },
        ],
    },
];

function RealisticLeaf({ x, y, width, height, rotation, fill, stemSide = 'center' }) {
    const veinX = stemSide === 'left' ? width * 0.36 : stemSide === 'right' ? width * 0.64 : width * 0.5;

    return (
        <g transform={`translate(${x}, ${y}) rotate(${rotation}, ${width / 2}, ${height / 2})`}>
            <ellipse
                cx={width / 2 + 8}
                cy={height / 2 + 14}
                rx={width * 0.36}
                ry={height * 0.42}
                fill="rgba(30,46,34,0.14)"
                filter="url(#leafBlur)"
            />
            <path
                d={`M${width / 2} ${height} C ${width * 0.08} ${height * 0.8}, ${width * 0.02} ${height * 0.34}, ${width / 2} 0 C ${width * 0.98} ${height * 0.34}, ${width * 0.92} ${height * 0.8}, ${width / 2} ${height} Z`}
                fill={`url(#${fill})`}
                stroke="rgba(49,76,46,0.28)"
                strokeWidth="1"
            />
            <path
                d={`M${veinX} ${height * 0.96} C ${width * 0.48} ${height * 0.72}, ${width * 0.51} ${height * 0.34}, ${width / 2} ${height * 0.06}`}
                stroke="rgba(233,243,220,0.52)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d={`M${width * 0.5} ${height * 0.78} C ${width * 0.36} ${height * 0.68}, ${width * 0.28} ${height * 0.56}, ${width * 0.2} ${height * 0.4}`}
                stroke="rgba(233,243,220,0.22)"
                strokeWidth="0.9"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d={`M${width * 0.5} ${height * 0.7} C ${width * 0.62} ${height * 0.6}, ${width * 0.72} ${height * 0.48}, ${width * 0.8} ${height * 0.32}`}
                stroke="rgba(233,243,220,0.2)"
                strokeWidth="0.9"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d={`M${width * 0.2} ${height * 0.2} C ${width * 0.32} ${height * 0.14}, ${width * 0.46} ${height * 0.08}, ${width * 0.58} ${height * 0.06}`}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
            />
        </g>
    );
}

function Stem({ x1, y1, x2, y2, bendX, bendY, width = 3.2, opacity = 0.5 }) {
    return (
        <path
            d={`M${x1} ${y1} C ${bendX} ${bendY}, ${bendX} ${bendY}, ${x2} ${y2}`}
            stroke={`rgba(63,92,55,${opacity})`}
            strokeWidth={width}
            fill="none"
            strokeLinecap="round"
        />
    );
}

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
                <defs>
                    <linearGradient id="leafDeep" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7ea76c" />
                        <stop offset="36%" stopColor="#5f8751" />
                        <stop offset="76%" stopColor="#365a35" />
                        <stop offset="100%" stopColor="#27462d" />
                    </linearGradient>
                    <linearGradient id="leafOlive" x1="12%" y1="0%" x2="88%" y2="100%">
                        <stop offset="0%" stopColor="#b8cc7f" />
                        <stop offset="34%" stopColor="#8ca95f" />
                        <stop offset="72%" stopColor="#5c7c47" />
                        <stop offset="100%" stopColor="#456341" />
                    </linearGradient>
                    <linearGradient id="leafMid" x1="8%" y1="4%" x2="92%" y2="96%">
                        <stop offset="0%" stopColor="#9fbe73" />
                        <stop offset="40%" stopColor="#6f9657" />
                        <stop offset="100%" stopColor="#476744" />
                    </linearGradient>
                    <linearGradient id="leafLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4dfab" />
                        <stop offset="36%" stopColor="#aac57d" />
                        <stop offset="78%" stopColor="#6f925a" />
                        <stop offset="100%" stopColor="#55754a" />
                    </linearGradient>
                    <filter id="leafBlur" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="8" />
                    </filter>
                    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="18" />
                    </filter>
                    <radialGradient id="centerFade" cx="50%" cy="48%" r="66%">
                        <stop offset="0%" stopColor="#f6f2ea" stopOpacity="0" />
                        <stop offset="74%" stopColor="#f6f2ea" stopOpacity="0" />
                        <stop offset="100%" stopColor="#d5ccb9" stopOpacity="0.68" />
                    </radialGradient>
                </defs>

                <ellipse cx="1276" cy="156" rx="134" ry="214" fill="rgba(117,145,89,0.16)" filter="url(#softGlow)" />
                <ellipse cx="1306" cy="492" rx="122" ry="204" fill="rgba(103,129,83,0.14)" filter="url(#softGlow)" />
                <ellipse cx="120" cy="760" rx="108" ry="186" fill="rgba(103,129,83,0.12)" filter="url(#softGlow)" />

                <Stem x1="1398" y1="18" x2="1362" y2="250" bendX="1378" bendY="122" width={4.2} opacity={0.36} />
                <Stem x1="1416" y1="288" x2="1378" y2="558" bendX="1392" bendY="420" width={4.4} opacity={0.34} />
                <Stem x1="1366" y1="602" x2="1328" y2="894" bendX="1348" bendY="760" width={4.6} opacity={0.34} />
                <Stem x1="34" y1="44" x2="92" y2="286" bendX="48" bendY="156" width={3.6} opacity={0.24} />
                <Stem x1="28" y1="662" x2="94" y2="898" bendX="52" bendY="784" width={3.8} opacity={0.24} />

                {leafClusters.map((cluster, clusterIndex) => (
                    <g
                        key={clusterIndex}
                        opacity={cluster.opacity}
                        transform={`translate(${cluster.x}, ${cluster.y}) rotate(${cluster.rotation})`}
                    >
                        {cluster.leaves.map((leaf, leafIndex) => (
                            <RealisticLeaf
                                key={`${clusterIndex}-${leafIndex}`}
                                x={leaf.x}
                                y={leaf.y}
                                width={leaf.width}
                                height={leaf.height}
                                rotation={leaf.rotation}
                                fill={leaf.fill}
                                stemSide={leafIndex % 3 === 0 ? 'left' : leafIndex % 3 === 1 ? 'right' : 'center'}
                            />
                        ))}
                    </g>
                ))}

                <g opacity="0.42" transform="translate(1336, 90) rotate(-6)">
                    <path d="M0 238 C 16 168, 18 78, 6 0" stroke="rgba(67,98,58,0.42)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
                    {[
                        { x: -8, y: 16, width: 42, height: 92, rotation: 34, fill: 'leafLight' },
                        { x: -36, y: 64, width: 36, height: 82, rotation: -42, fill: 'leafMid' },
                        { x: -2, y: 116, width: 34, height: 76, rotation: 28, fill: 'leafOlive' },
                        { x: -32, y: 164, width: 30, height: 66, rotation: -54, fill: 'leafDeep' },
                    ].map((leaf, index) => (
                        <RealisticLeaf key={index} {...leaf} stemSide={index % 2 === 0 ? 'left' : 'right'} />
                    ))}
                </g>

                <g opacity="0.34" transform="translate(1302, 640) rotate(10)">
                    <path d="M0 212 C 10 152, 14 74, 2 0" stroke="rgba(67,98,58,0.4)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                    {[
                        { x: 0, y: 12, width: 40, height: 88, rotation: 28, fill: 'leafLight' },
                        { x: -30, y: 60, width: 34, height: 78, rotation: -40, fill: 'leafMid' },
                        { x: 4, y: 110, width: 30, height: 70, rotation: 24, fill: 'leafOlive' },
                        { x: -26, y: 154, width: 28, height: 62, rotation: -52, fill: 'leafDeep' },
                    ].map((leaf, index) => (
                        <RealisticLeaf key={index} {...leaf} stemSide={index % 2 === 0 ? 'right' : 'left'} />
                    ))}
                </g>

                <rect x="0" y="0" width="1440" height="900" fill="url(#centerFade)" opacity="0.36" />
            </svg>
        </div>
    );
}
