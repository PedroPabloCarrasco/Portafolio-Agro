import Sidebar from "./Sidebar";
import BotanicalBg from "../common/BotanicalBg";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'transparent', position: 'relative' }}>
            <BotanicalBg />
            <Sidebar />
            <main style={{ flex: 1, overflowX: 'hidden', position: 'relative', zIndex: 1, minWidth: 0, paddingTop: '18px' }}>
                <Navbar />
                {children}
            </main>
        </div>
    );
}