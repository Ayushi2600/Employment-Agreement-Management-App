import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AgreementForm from './components/AgreementForm';
import AgreementDetails from './components/AgreementDetails';
import { AgreementProvider } from './context/AgreementContext';

const App = () => (
  <AgreementProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view/:id" element={<AgreementDetails />} />
        <Route path="/create" element={<AgreementForm />} />
        <Route path="/edit/:id" element={<AgreementForm isEdit />} />
      </Routes>
    </Router>
  </AgreementProvider>
);

export default App;
