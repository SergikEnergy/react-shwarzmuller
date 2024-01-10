import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('tokenAuth');
  console.log('sdfg');
  redirect('/');
  console.log('!!!');
}
