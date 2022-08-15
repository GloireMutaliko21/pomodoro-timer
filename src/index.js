import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { ContextProvider } from "./context/contextProvider";
import Fallback from './components/Fallback';
const App = lazy(() => import('./App'));


ReactDOM.render(
  <Suspense fallback={<Fallback />}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Suspense>,
  document.getElementById('root')
);
