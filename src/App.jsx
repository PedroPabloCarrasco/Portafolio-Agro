import Home from './pages/Home';

import { LanguageProvider } from './context/LanguageContext';
import { EditorProvider } from './context/EditorContext';

import EditorToolbar from './components/admin/EditorToolbar';

export default function App() {
  return (
    <LanguageProvider>
      <EditorProvider>
        <Home />
        <EditorToolbar />
      </EditorProvider>
    </LanguageProvider>
  );
}