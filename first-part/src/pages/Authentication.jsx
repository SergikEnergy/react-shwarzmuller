import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get('mode') || 'login';
  console.log(mode);

  if (mode !== 'signup' && mode !== 'login') {
    throw json({ message: 'Unsupported mode!' }, { status: 422 });
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  // send request to the backend
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'User was not authenticated' }, { status: '500' });
  }

  //tbd - manage the token, that we use
  return redirect('/');
}
