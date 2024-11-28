import React, { useEffect, useState } from 'react';
import { fetchAgreement } from '../services/api';
import { useParams, Link } from 'react-router-dom';

const AgreementDetails = () => {
  const [agreement, setAgreement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadAgreement = async () => {
      const { data } = await fetchAgreement(id);
      setAgreement(data);
    };
    loadAgreement();
  }, [id]);

  if (!agreement) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className='text-center mb-5 w-75 shadow mx-auto p-3 rounded'>Agreement Details</h1>
      <p><strong>Employee Name:</strong> {agreement.employeeName}</p>
      <p><strong>Department:</strong> {agreement.department}</p>
      <p><strong>Position:</strong> {agreement.position}</p>
      <p><strong>Agreement Date:</strong> {agreement.agreementDate}</p>
      <Link to="/" className="btn btn-secondary mt-3">Back to Dashboard</Link>
    </div>
  );
};

export default AgreementDetails;
