import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";

const rootElement = createRoot(document.getElementById('root')!);
rootElement.render(<App />);
