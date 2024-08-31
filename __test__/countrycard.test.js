import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '../src/app/components/CountryCard/CountryCard';


const mockProps = {
  name: { common: 'India' },
  flags: { svg: 'https://flagcdn.com/in.svg' }, 
  capital: 'New Delhi',
  population: 1393409038,
  region: 'Asia',
};

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('CountryCard component test', () => {
  it('renders CountryCard component', () => {
    render(<CountryCard {...mockProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Name :India')).toBeInTheDocument();
    expect(screen.getByText('Capital :New Delhi')).toBeInTheDocument();
    expect(screen.getByText('Population:1393409038')).toBeInTheDocument();   
    expect(screen.getByText('Region:Asia')).toBeInTheDocument();
  });
});
