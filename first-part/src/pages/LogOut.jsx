import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('tokenAuth');
  localStorage.removeItem('expiration');
  redirect('/');
}
