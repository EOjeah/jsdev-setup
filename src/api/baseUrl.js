export default function getBaseUrl() {
  const inDevMode = window.location.hostname === 'localhost';
  return inDevMode ? 'http://localhost:3001/' : '/'
}