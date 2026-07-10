import Sidebar from "./Sidebar";
import BotanicalBg from "../common/BotanicalBg";

export default function Layout({ children }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
            <BotanicalBg />
            <Sidebar />
            <main style={{ flex: 1, overflowX: 'hidden', position: 'relative', zIndex: 1, minWidth: 0 }}>
                {children}
            </main>
        </div>
    );
}