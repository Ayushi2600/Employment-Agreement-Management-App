import React, { useContext } from 'react';
import { AgreementContext } from '../context/AgreementContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { agreements, loading } = useContext(AgreementContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className='text-center shadow p-3 w-75 mx-auto mb-5 rounded'>Employment Agreements</h1>
      <Link to="/create" className="btn btn-success mb-3">Create New Agreement</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Agreement Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agreements.map((agreement) => (
            <tr key={agreement.id}>
              <td>{agreement.employeeName}</td>
              <td>{agreement.department}</td>
              <td>{agreement.position}</td>
              <td>{agreement.agreementDate}</td>
              <td>
                <Link to={`/view/${agreement.id}`} className="btn btn-primary btn-sm">View</Link>
                <Link to={`/edit/${agreement.id}`} className="btn btn-warning btn-sm mx-4">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
