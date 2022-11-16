import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux'
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user';

const store = configureStore({
  reducer :  {
    user:userReducer
  },
});
test('renders learn react link', () => {
  render(<Provider store={store}><App /></Provider>);
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
