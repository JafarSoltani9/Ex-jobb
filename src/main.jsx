import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'react-tooltip/dist/react-tooltip.css';
import { TextSizeProvider } from "./contexts/TextSizeContext";
import { TextSpaceProvider } from './contexts/TextSpaceContext.jsx';
import { BlackWhiteProvider } from './contexts/BlackWhiteContext.jsx';
import { ShowLinkProvider } from './contexts/ShowLinkContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextSizeProvider>
      <TextSpaceProvider>
        <BlackWhiteProvider>
          <ShowLinkProvider>
            <App />
          </ShowLinkProvider>
        </BlackWhiteProvider>
      </TextSpaceProvider>
    </TextSizeProvider>
  </React.StrictMode>,
);

