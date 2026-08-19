import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import App from './App';
import store from "./app/store";

test('renders landing header CTA', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const cta = screen.getByText(/apply now/i);
  expect(cta).toBeInTheDocument();
});
