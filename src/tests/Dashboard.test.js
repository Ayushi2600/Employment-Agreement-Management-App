import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { AgreementProvider } from '../context/AgreementContext';

test('renders employment agreements', () => {
  render(
    <AgreementProvider>
      <Dashboard />
    </AgreementProvider>
  );
  expect(screen.getByText(/Employment Agreements/i)).toBeInTheDocument();
});
