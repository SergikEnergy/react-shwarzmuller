export default function getAuthToken() {
  const token = localStorage.getItem('tokenAuth');
  return token;
}
