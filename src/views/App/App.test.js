import { render } from '@testing-library/react';
import App from './App';

test('renders logo element', () => {
  render(<App />);
  const logoElement = document.querySelector('.App-logo');
  expect(logoElement).toBeInTheDocument();
});
