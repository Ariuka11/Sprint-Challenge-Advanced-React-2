import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import User from './components/User'

afterEach(rtl.cleanup);

test('Render the heading', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/World Female Soccer Players/i)
  expect(element).toBeVisible()
})
test('Render the players', () => {
  const wrapper = rtl.render(<User />);
  const players = wrapper.getByTestId('user');
  expect(players).toBeVisible()
})