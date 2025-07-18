import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, setToken, removeToken } from '../utils/tokenHelper';

const AuthContext = createContext(null);   // This is the context that will hold our auth state


export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {              // This effect runs once when the component mounts
    // Check if there's a token in localStorage
    // If there is, we assume the user is authenticated
    // and we can set the auth state accordingly
    const token = getToken();
    if (token) {
      try {
        // In a real app, you'd also verify the token with the backend here
        // and fetch user data. For now, we'll decode it.
        const userPayload = JSON.parse(atob(token.split('.')[1]));    //atob decodes the base64 encoded string
        // This is a simplified user object from the payload.
        // The backend login/signup returns the full user object to store.
        const storedUser = localStorage.getItem('user');   // Retrieve user data from localStorage
        if (storedUser) {
           setAuthState({
            token,
            user: JSON.parse(storedUser),
            isAuthenticated: true,
          });
        }
      } catch (error) {
        console.error("Failed to parse token", error);
        removeToken();
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (userData) => {
    setToken(userData.token);
    localStorage.setItem('user', JSON.stringify({_id: userData._id, name: userData.name, email: userData.email}));
    setAuthState({
      token: userData.token,
      user: userData,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    removeToken();
    localStorage.removeItem('user');
    setAuthState({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {         // Custom hook to use the AuthContext
  const context = useContext(AuthContext);   // Access the context value
  // If context is undefined, it means useAuth is being used outside of AuthContextProvider
  // This is a safeguard to ensure that the context is used correctly
  if (context === undefined || context === null) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};
