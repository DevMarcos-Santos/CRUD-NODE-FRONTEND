import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Update } from './pages/update.tsx';
import { Toaster } from 'react-hot-toast';
import { Create } from './pages/create.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
