export default function BotanicalBg() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            {/* Color base */}
            <div className="absolute inset-0 bg-[#fbfaf5]" />

            {/* Patrón botánico */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url('/images/botanical-pattern.png')",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "top left",
                    backgroundSize: "750px 750px",
                    opacity: 0.72,
                }}
            />

            {/* Capa clara para que el contenido siga siendo legible */}
            <div className="absolute inset-0 bg-[#fbfaf5]/15" />
        </div>
    );
}