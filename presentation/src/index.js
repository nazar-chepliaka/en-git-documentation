import { createRoot } from 'react-dom/client';
import { Stats } from '@react-three/drei'
import 'antd/dist/antd.css'
import './styles.css'
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<><App /><Stats /></>);