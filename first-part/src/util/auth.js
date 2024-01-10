import { redirect } from 'react-router-dom';

export default function getAuthToken() {
  const token = localStorage.getItem('tokenAuth');
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth');
  }
  return null;
}
