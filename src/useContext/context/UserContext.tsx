import { createContext, useEffect, useState, type PropsWithChildren } from 'react'
import { users, type User } from '../data/user-mock.data';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

interface UserContextProps {
  // state
  authStatus: AuthStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find(user => user.id === userId);
    if (!user) {
      console.log(`user not found ${userId}`);
      setUser(null);
      setAuthStatus('unauthenticated');
      return false;
    }
    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  }

  const handleLogout = () => {
    console.log('logout');
    setAuthStatus('unauthenticated');
    setUser(null);
    localStorage.removeItem('userId');
  }

  useEffect(() => {
    const storageUserId = localStorage.getItem('userId');
    if (storageUserId) {
      handleLogin(+storageUserId);
      return;
    }

    handleLogout();
  }, [])

  return (
    <UserContext value={{ 
        authStatus: authStatus, 
        user: user,
        login: handleLogin,
        logout: handleLogout
      }}> {children}
    </UserContext>
  )
}

export default UserContextProvider
