import React, { useState, useEffect, useContext } from 'react';
import { createAgreement, updateAgreement, fetchAgreement } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { AgreementContext } from '../context/AgreementContext'; // Assuming you're using context
import '../App.css'

const AgreementForm = ({ isEdit = false }) => {
  const [formData, setFormData] = useState({
    employeeName: '',
    department: '',
    position: '',
    agreementDate: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const { agreements, setAgreements } = useContext(AgreementContext); // Using context to update state

  useEffect(() => {
    if (isEdit && id) {
      const loadAgreement = async () => {
        const { data } = await fetchAgreement(id);
        setFormData(data);
      };
      loadAgreement();
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        // Update existing agreement
        await updateAgreement(id, formData);
      } else {
        // Create new agreement
        const { data } = await createAgreement(formData);
        
        // Update the agreements state immediately after creating
        setAgreements([...agreements, data]); // Assuming you're storing agreements in context

        // Navigate to dashboard after successful creation
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to save agreement', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className='mb-4 w-75 shadow mx-auto p-3 text-center rounded'>{isEdit ? 'Edit Agreement' : 'Create Agreement'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Employee Name</label>
          <input
            type="text"
            name="employeeName"
            className="form-control"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Agreement Date</label>
          <input
            type="date"
            name="agreementDate"
            className="form-control"
            value={formData.agreementDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          {isEdit ? 'Update Agreement' : 'Create Agreement'}
        </button>
        <button type="button" className="btn btn-secondary ms-3 mt-3" onClick={() => navigate('/')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AgreementForm;
