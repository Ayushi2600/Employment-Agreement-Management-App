import React, { createContext, useState, useEffect } from 'react';
import { fetchAgreements } from '../services/api';

export const AgreementContext = createContext();

export const AgreementProvider = ({ children }) => {
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAgreements = async () => {
      try {
        const { data } = await fetchAgreements();
        setAgreements(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch agreements', error);
      }
    };
    loadAgreements();
  }, []);

  return (
    <AgreementContext.Provider value={{ agreements, setAgreements, loading }}>
      {children}
    </AgreementContext.Provider>
  );
};
