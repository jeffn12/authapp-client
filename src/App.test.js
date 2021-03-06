import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/auth app/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * devchallenges User stories:
 * 
 * User story: I can register a new account
 * User story: I can log in
 * User story: I can log in or register with at least one of the following services: Google, Facebook, Twitter or Github
 * User story: I can sign out
 * User story: I can see my profile details
 * User story: I can edit my details including: photo, name, bio, phone, email and password
 * User story: I can upload a new photo or provide an image url
 */
