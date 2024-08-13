import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './i18n';

import { App } from './App';


createRoot(document.getElementById('root') as HTMLElement).render(<App />);


