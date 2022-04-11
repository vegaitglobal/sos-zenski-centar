import jwt_decode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (token !== null && token !== undefined) return true;

  return false;
};

export const getToken = () => localStorage.getItem('token');

export const isAdmin = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwt_decode(token);
    return decoded.role === 'admin';
  }
};
